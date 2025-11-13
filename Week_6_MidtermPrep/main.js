import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0,0,10);
scene.add(camera);

//objects
const sphereGeo = new THREE.SphereGeometry(2, 32, 32);
const sphereMat = new THREE.MeshToonMaterial(
    0xff0000
);
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
scene.add(sphere);


const coneGeo = new THREE.ConeGeometry(3, 8, 32, 1);
const coneMat = new THREE.MeshToonMaterial(0x0000ff);
const cone = new THREE.Mesh(coneGeo, coneMat);
cone.position.set(5, 0, 0);
scene.add(cone);


const cylinderGeo = new THREE.CylinderGeometry(2, 2, 6, 32);
const cylinderMat = new THREE.MeshToonMaterial(0xff00ff);
const cylinder = new THREE.Mesh(cylinderGeo, cylinderMat);
cylinder.rotateX(45);
cylinder.position.set(-5, 0, 0);
scene.add(cylinder);


//lights
const fillLight = new THREE.AmbientLight(0xffffff);
scene.add(fillLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(2, 2, 6);
scene.add(keyLight);



//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.getElementById("index").append(renderer.domElement);