<template>
  <div class="demo">
    <h1>這是一個範例</h1>
    <div ref="rendererContainer" class="three-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { gsap } from "gsap";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

const rendererContainer = ref(null);

// 定義需要在多個生命週期中使用的變數
let scene, camera, group, renderer;

function render() {
  if (!renderer || !scene || !camera) return;
  renderer.render(scene, camera);
}

function init() {
  const container = rendererContainer.value;
  const width = container.clientWidth;
  const height = container.clientHeight;

  // 建立相機，根據容器比例設定 aspect
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  // 根據需求調整相機位置，這裡將相機移到 Z 軸正方向
  camera.position.set(0, 0, 600);

  //Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  const createTextLineGroup = (
    font,
    text,
    lineIndex,
    totalHeight,
    lineSpacing
  ) => {
    // 先建立一個新的群組
    const lineGroup = new THREE.Group();

    const color = "#000000";
    // 建立 Mesh
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });

    const shapes = font.generateShapes(text, 100);

    const geometry = new THREE.ShapeGeometry(shapes);

    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    geometry.translate(xMid, 0, 0);

    const textMesh = new THREE.Mesh(geometry, material);
    // 將子物件位置設為 0，所有偏移放在父群組上
    textMesh.position.set(0, totalHeight / 2 - lineIndex * lineSpacing, -150);
    // 設定 renderOrder 讓填充文字後渲染（或依需求調整）
    textMesh.renderOrder = 1;

    lineGroup.add(textMesh);

    const matDark = new THREE.LineBasicMaterial({
      color: color,
      side: THREE.DoubleSide,
    });

    const holeShapes = [];

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];

      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          const hole = shape.holes[j];
          holeShapes.push(hole);
        }
      }
    }

    shapes.push.apply(shapes, holeShapes);

    const lineText = new THREE.Object3D();

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];

      const points = shape.getPoints();
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      geometry.translate(xMid, 0, 0);

      const lineMesh = new THREE.Line(geometry, matDark);
      lineText.add(lineMesh);
    }

    // 使邊線與填充文字對齊
    lineText.position.set(0, textMesh.position.y, 0);
    lineText.renderOrder = 2;
    lineGroup.add(lineText);

    // 設定整個 lineGroup 的初始位置
    // 根據 lineIndex 決定從左邊或右邊進入（例如：第一行從右邊進入，第二行從左邊進入）
    lineGroup.position.x = lineIndex === 0 ? 500 : -500;
    // 其他軸保持 0
    lineGroup.position.y = 0;
    lineGroup.position.z = 0;

    return lineGroup;
  };

  const loader = new FontLoader();
  loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
    const messages = ["  Welcome", "My website."];

    group = new THREE.Group();

    // 根據字串數量和期望間距決定各行位置
    const lineSpacing = 200; // 依需求調整每行間的距離
    const totalHeight = (messages.length - 1) * lineSpacing;

    // 依序建立每一行的群組，並加入到總群組中
    const lineGroup1 = createTextLineGroup(
      font,
      messages[0],
      0,
      totalHeight,
      lineSpacing
    );
    const lineGroup2 = createTextLineGroup(
      font,
      messages[1],
      1,
      totalHeight,
      lineSpacing
    );

    group.add(lineGroup1);
    group.add(lineGroup2);

    scene.add(group);

    render();

    gsap.to(lineGroup1.position, {
      duration: 2,
      x: 0,
      ease: "power2.out",
      onUpdate: render,
    });

    gsap.to(lineGroup2.position, {
      duration: 2,
      x: 0,
      ease: "power2.out",
      onUpdate: render, // 每次屬性更新時都呼叫 render()
    });
  });

  // 建立渲染器並設定尺寸
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  if (rendererContainer.value) {
    rendererContainer.value.appendChild(renderer.domElement);
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  controls.addEventListener("change", render);
}

function setSize() {
  if (!camera || !renderer) return;
  const container = rendererContainer.value;
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);

  render();
}

const resizeObserver = new ResizeObserver(setSize);

onMounted(() => {
  init();
  if (rendererContainer.value) {
    resizeObserver.observe(rendererContainer.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped>
.three-container {
  width: 100%;
  max-width: 1200px;
  height: 30vw;
  overflow: hidden;
  margin: 0 auto;
}
.three-container:deep(canvas) {
  width: 100%;
  height: 100%;
}
</style>
