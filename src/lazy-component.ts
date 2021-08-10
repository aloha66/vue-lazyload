import Lazy from "./lazy";
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  Ref,
  reactive,
  computed,
  h,
  isVue2,
} from "vue-demi";
import { useCheckInView } from "./useCheckInView";

export default (lazy: Lazy) => {
  return defineComponent({
    props: {
      tag: {
        type: String,
        default: "div",
      },
    },
    emits: ["show"],
    setup(props, { emit, slots, ...setupContext }) {
      const el: Ref = ref(null);
      const state = reactive({
        loaded: false,
        error: false,
        attempt: 0,
      });
      const show = ref(false);

      const { rect, checkInView } = useCheckInView(el, lazy.options.preLoad!);
      const load = () => {
        show.value = true;
        state.loaded = true;
        emit("show", show.value);
      };
      const vm = computed(() => {
        return {
          el: el.value,
          rect,
          checkInView,
          load,
          state,
        };
      });

      onMounted(() => {
        lazy.addLazyBox(vm.value);
        lazy.lazyLoadHandler();
      });

      onUnmounted(() => {
        lazy.removeComponent(vm.value);
      });

      // 解决vue2兼容性问题
      // https://github.com/vuejs/composition-api#template-refs
      return {
        show,
        el,
      };

      // return () =>
      // h(
      //   props.tag,
      //   {
      //     ref: el,
      //   },
      //   // [show.value && slots.default?.()]
      //   show.value ? slots.default?.() : slots.skeleton?.()
      // );
    },

    render() {
      let r;
      if (isVue2) {
        r = this.show ? this.$slots.default : this.$slots.skeleton;
      } else {
        r = this.show ? this.$slots.default?.() : this.$slots.skeleton?.();
      }

      return h(
        this.tag,
        {
          // ref: this.el,
          ref: "el",
        },
        r
      );
    },
  });
};
