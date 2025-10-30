import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// const camera = new THREE.OrthographicCamera(
//     window.innerWidth / -200,
//     window.innerWidth / 200,
//     window.innerHeight / 200,
//     window.innerHeight / -200,
//     0.1,
//     1000
//     );
camera.position.set(0, 1, 5);
// camera.lookAt(0, 0, 0);


//box1
const boxGeo = new THREE.SphereGeometry(1, 32, 32);
const boxMat = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});
const boxMesh = new THREE.Mesh(boxGeo, boxMat);
boxMesh.position.set(-2, 0, -2);

scene.add(boxMesh);

//box2
const boxMat1 = new THREE.MeshPhongMaterial({
    color: 0x0000ff
});
const boxMesh1 = new THREE.Mesh(boxGeo, boxMat1);
boxMesh.position.set(2, 0, 0);

scene.add(boxMesh1);

//lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 5, 25);
pointLight.position.set(-3, -3, 0);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLightHelper);
scene.add(pointLight);

// const spotLight = new THREE.SpotLight(0x00ff00, 5);
// spotLight.position.set(0, 5, 0);
// spotLight.angle = Math.PI / 6;
// spotLight.penumbra = 0.2;



const container = document.getElementById('scene1');
const renderer = new THREE.WebGLRenderer();
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();