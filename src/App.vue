<template>
  <div v-for="(item, n) in imgs" :key="n">
    <img class="mini-cover" v-lazy="item" width="100" height="400" />
  </div>
  <!-- <lazy-component
    @show="handler"
    v-for="(item, n) in imgs"
    :key="n"
    class="test"
  >
    <template #skeleton>
      <div>skeleton</div>
    </template>
    <div style="margin: 20px; height: 400px">
      <img class="mini-cover" :src="item" width="100" height="400" />
    </div>
  </lazy-component> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";

const imgList = [
  "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/194784/27/16938/136479/610bd5eaE35b03e68/2cf9db55bbbc34b2.jpg!q70.dpg.webp",
  "https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/183453/12/5849/142407/60adc164E5e41ab86/6eea79b26391e245.jpg!q70.dpg.webp",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/157183/37/2070/327257/5ff679f4E2a7f003d/656527e71ca03696.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t4870/117/2192258352/221441/7ebb0e36/58fabfd6N00978425.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t5860/249/3158222546/144566/cd71029a/5937ac64Nd54855c8.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/190419/12/4960/206111/60ac970dE2cc48009/ad1d1903ad2f5fce.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/131927/16/17710/64783/5fc49bb1E1cc884f5/3314c8faafd794fa.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/170406/28/2284/399783/5ffd1257E5b64d742/49a968994a362e2c.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/182787/11/1480/248395/608a2999Ec163e168/a90b302698ea7f67.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/42604/21/5423/170094/5cefa0d9E41737e47/54f3542ddea7887d.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/68547/34/8473/4892983/5d64da2cE4a03d8a5/9bddc606c7963987.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t14554/242/2688689041/321336/7c9b863e/5ab0b3faN3f5a6519.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/166097/39/3647/599476/60090cbaEe629ca4e/47b49c014ded091e.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/153180/24/13673/837343/5ff6a39eE710a3734/c5adbf5ef0b0497a.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t27151/157/1997554369/158480/f94b296f/5bf4b8fcNe8fb017d.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/69272/25/5467/95789/5d3a50eeEf9b4954e/0d7cd0cea92f92c2.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/150414/11/16530/228787/60090a55Ec79f6405/a09f8db969bd5e55.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/170817/13/2383/242720/5ffd1289E59122716/9cbbc646ab780857.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t28573/284/475935055/130456/11a136fd/5bf4b62eN13eb83cd.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/17932/28/15771/215510/5cb2e5a5E2750ebcf/df5010c5145eb929.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/34296/8/1535/235890/5cb3292dEda01ee0e/a283f5b311f69cd9.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/174485/13/6970/58539/608a40e0E80eeeed9/359b6fb04d554bd5.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/159269/23/6337/73644/60226be5E2788c4cd/b1d610140659c8e5.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/166868/39/5836/52782/60226c88E4ad6af2d/dc81a4c6eb6c9f1f.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/85823/31/16161/420038/5e788d6cE834bca39/d462689278a9c52b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/18794/3/15851/235890/5cb2f0aeE3c8e5be7/eb89b9661785d3dd.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/46442/14/4534/123462/5d23094fEb760bdd6/b6f4ba271598fa07.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/137811/23/15579/139674/5fbb87c1E0319d1dd/71058367f3e89303.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/187798/8/277/45807/6087d184Eefa594e5/257a38cb63c128fd.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/102317/27/15612/216542/5e72c5d0E8c7272d8/d644a0b723d26625.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t4465/167/1089080255/64457/547b3a3c/590d272aN61f5941c.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/124904/40/16237/280401/5f97c915E7445c114/f05c17eaa15e59ee.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/100744/2/18488/239656/5e9403a3E667f77df/a656a9ce00379467.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/99065/34/13799/459330/5e5dc5c5E0f58866b/6d99982e24a4a868.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/110925/2/6717/134262/5ebdf2ccE3bd37d07/1c4c80b67aec464e.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/96806/15/12578/134411/5e4b9d8fE70de33ac/6a185b897e5532b9.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/123044/4/12028/98013/5f57522cEe4595782/a34982cd78d4a7ba.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/128475/12/15182/82145/5f87ee6bE05b302d3/759aa8d04666d657.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/103322/14/13018/110905/5e5338dfE7f92add6/5608c38742cdc5e6.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/85684/34/12995/113179/5e533907E907d0d08/7ad4518ff3486349.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/138712/40/14215/74670/5fadf55cE7e84e3e7/2d0c370d6367bac2.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/19347/35/15771/119053/5cb32537Ea7b3764c/de3062975ecc25ca.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/179133/7/1487/71331/608a418aEb28712c6/fc1fd386cfaf8129.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/35689/11/14312/128697/5d2307a5E2580dd43/566cd1dd5800a02c.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/35710/40/567/128868/5cb95d8dEac87ecb8/ce239bce576571e7.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/143368/2/16308/87211/5fc61a5dEc7c9efc9/838c081f50993b93.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/89548/8/7903/76313/5e017ed2Eae8dabc8/11366c8e342fafec.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/110421/40/1824/88105/5e017eccE4e16fc39/6dd7095a11f62080.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/130708/30/316/258099/5ecbae6eEa658fa3e/3a8424e9a3f7208b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/30795/22/15501/227513/5cc262aaE939bc1b3/5fbed234a1e44846.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t25729/303/1231042615/380287/945431a3/5b8f4a33N2ead0294.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/88947/36/14146/180314/5e61b61eE3c3cd200/6b7465891cb5a87b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/106186/30/14298/164073/5e61b497Ea0266515/44d78d062c44192b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/157374/30/636/68826/5febe5b5E996cbfeb/a550164293cbacce.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/151177/22/16173/97967/601103c0Ef79097be/242ca5713c5ea1c9.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/40660/25/13062/102826/5d666482E7dd1f2b0/1d5a288c4db359f0.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/163144/33/4568/98266/60110778E0cc04a07/62dc9e579f6a2231.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/104525/5/13666/429437/5e5dc60dE3beea257/d76b41e384987def.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/94134/27/13528/419633/5e5e0890Ed25f20a0/f601bcc6aae8168d.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/194661/20/424/118885/608a336fEe778c309/ffb4dcc6ab52cc0e.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/68195/28/8717/426086/5d6796d0Ede96f062/e954f435e2fe118c.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/170671/9/17336/106676/60702693E9dc00ca0/78ea17b8c181c5d7.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/40197/8/10472/360907/5d1c1cbeE8470dcad/9927d4826ca1740b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/33221/36/13263/450364/5d005365Ea947be2b/3f23f6f2af70da58.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/36929/11/1519/236545/5cb2f53aE6d7468e0/b0dd9a244ce42404.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/141778/25/8272/103041/5f5b9448E845c6284/0cf6fd02a487e928.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/90391/11/13166/299387/5e55e83cEb9a603c5/08d40321bf3819be.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/89351/32/13243/314575/5e55eac3E799e385e/9b1b7cafecc4f7dd.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/68239/17/8532/106367/5d666528E04de1339/ece11fc50a07ab28.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/163550/36/2803/82817/60014201Eadafacc7/db2fa47a1f09135b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/155215/4/8113/128542/5fc71fa8Eb2571c82/759597192b730fe6.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/135835/27/1024/349065/5ed4e37aE75f04fcf/6020e06a80da927d.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/142407/22/16662/130869/5fc71f7bE375dbc0e/71e74c55b6136397.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/139728/27/14765/95286/604b33e6E0be5d615/2f382dc90621a948.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/165138/2/11140/73244/604848c9E3542edc8/ffebf749c20a60a8.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/81473/21/7897/132278/5d5bd1d7E47610986/d8e70e147a6eabb3.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/62409/11/11509/145299/5d9074dbEdbed7fd3/0b56b92eb7a9aad0.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t28927/30/673377034/445154/721b5f52/5bfa0093N9a573050.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/102247/27/4690/133212/5de8ac66E9c1ba3d9/8c35285831944cb5.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/117972/15/16872/106676/5f50f6d9Ed809cac9/6045ec6bd1159828.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/143575/21/16605/148691/60584246E6e744f49/5d8cd4e232101e25.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/194717/26/2325/116823/6098fadaE28cca377/58c33dc55aa67df9.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/187200/26/2428/154161/6098fb57Eed768db4/08ebb1d69e86845b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/191685/6/2358/140219/6098fa10E63a56bf1/e192e6a26cf5a5a0.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/37810/25/925/314669/5cb32aa1E1b270521/d937f42c32348791.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/179973/15/1432/75099/608a4495E91da243b/1b86cc6f32a53729.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/53736/27/4498/152947/5d2309f0Efb43e6c5/9abb58246c046bb2.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/142644/14/14565/102194/5fb09936E0c66f24b/90e93748c748f246.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/85863/17/4823/94640/5de8b0efEb0aff88e/71a7b41b5338766b.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/93037/5/18622/161899/5e952e84E53a900f6/3896806d411edeb8.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/110231/9/12376/195987/5e95541dE70325e5d/56a9b86c53ddef25.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/147025/31/16491/126039/5fc71f8bEd845a595/318eb235b8bcb65f.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/146931/31/16605/127020/5fc71f9aE12173fa3/312285ec9237570a.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/85856/15/15565/560592/5e72cb89E488fe4a8/29d233a84a56b100.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/110445/18/7909/97249/5e607a9bE364505c7/bc3af090f85121bc.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/18737/24/15831/323533/5cb2f74aE233930ca/94818fa8ad341e63.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/85887/10/15630/560592/5e72cb4fE43c8b232/b948cd0ed9d0d469.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/88285/10/15527/560592/5e72f552E2a7a51ca/0918a0fa15dba134.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/97417/16/13903/114773/5e607aaeE561ae0c1/f218697314b72353.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/90041/17/14000/119650/5e607ab8E6ed260e9/30dadbe9a707a51d.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/93024/10/13902/112952/5e607a9bEdf169486/f472896c163d4fd3.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/166761/19/4363/68322/600fe4b2E9d418a50/c4dcabbe4d4aa8b3.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/163191/22/4325/69528/600fe564Ee292934f/4ec383902e7297f5.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/173889/20/5311/115924/607d6165E21f815a6/06f7657b778caf48.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/176315/4/5419/85852/607d5f73E499df97c/ea276be7f4e88e11.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/160925/4/19949/128285/607d5e0bE098b8ade/4fe9612c8877b242.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t24535/68/716981958/400254/e1e6e81f/5b3f4967N153bbcbb.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/190670/33/504/91456/608a4427E485c0a69/4bb0ec6181289773.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/122801/6/20066/120869/5fbf2babE939380c5/117cc88495c999a2.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/120964/5/17188/283260/5f9fa0e9Ea53c37c9/63a0fd2c86c1cefb.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/141889/37/4070/140288/5f211b99E1bda44c8/3110c1db22f3d982.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/174736/40/3997/68322/607679e6Ec8a14a55/091a5a1a083fb417.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/158771/24/19137/70494/60767706Ebec2c03f/1357aa2279a1c0b4.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/158753/40/19479/70106/607679d7E1c1b9619/a5203ec900c625a1.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/17226/3/6083/105445/5c49570fE8a07df6d/91409011f619b2d3.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/141297/33/5889/100583/5f3c849cE03714fe2/ed5bd26281823b61.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/133490/20/7351/97208/5f3c849cE200ca70d/dfa2d6f9d09ade4e.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/136684/39/14219/487885/5f9e5060E6931cb6c/36aa5d2f96aee01e.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/128933/27/8298/434730/5f205b72Eb0e7ed8d/a5bc8a7b47aa39c5.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/120571/13/16955/626774/5f9fa257Ef6f6b371/4cffb0274ebe00ab.png",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/53737/30/14654/442107/5db92f46Ebbba8cb2/b190bf9c3c690872.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/146716/13/18699/209324/5fdc6950E3b606b64/eb5660b1c851eb19.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t29428/286/575825801/385280/23337256/5bf79ad3Nea996bd4.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/69831/30/13250/222570/5da90cc8E914cbce3/f3c751c026a23a67.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t1/117424/4/8262/225447/5ecba4e2Eab4beefd/3c865162320d3bbb.jpg",
  "https://img13.360buyimg.com/n0/s450x550_jfs/t30097/55/1534644213/229171/94df0267/5ce39a44N6b8dd4b5.jpg",
];

const imgs = ref(imgList);

const handler = () => {
  console.log("eee");
};
</script>
<style>
.test {
  min-height: 400px;
}
</style>
