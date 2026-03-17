import { CSS3DObject } from "../libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";

const THREE = window.MINDAR.IMAGE.THREE;

async function startAR() {
  const mindARThreeJs = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/targets/business_card_front.mind",
  });

  const { cssRenderer, renderer, cssScene, scene, camera } = mindARThreeJs;

  const div = new CSS3DObject(document.querySelector("#ar-container"));
  const anchor = mindARThreeJs.addCSSAnchor(0);

  div.position.set(1300, 0, 0);
  div.scale.set(1, 1, 1);
  anchor.group.add(div);

  const video = document.querySelector("#vid");
  const play = document.querySelector("#play");
  const pause = document.querySelector("#pause");
  const stop = document.querySelector("#stop");

  await mindARThreeJs.start();

  renderer.setAnimationLoop(render);
  function render() {
    cssRenderer.render(cssScene, camera);
  }
}
startAR();
