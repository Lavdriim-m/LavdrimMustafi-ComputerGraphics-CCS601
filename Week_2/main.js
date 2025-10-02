import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.z = 10;

//Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial(
    {
        color:0xff0000
    }
);
const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

//Sphere
const sphereGeo = new THREE.SphereGeometry(1, 32, 5);
const sphereMat = new THREE.MeshStandardMaterial(
    {
        color:0xff0000,
        wireframe: true
    }
);
const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
sphereMesh.position.set(0, 0, 5);
scene.add(sphereMesh);

//Donut
const donutGeo = new THREE.TorusGeometry(10, 3, 16, 100);
const donutMat = new THREE.MeshStandardMaterial(
    {
        color:0xfff000,
        // wireframe: true
    }
);
const donutMesh = new THREE.Mesh(donutGeo, donutMat);
donutMesh.scale.set(0.3, 0.3, 0.3);
scene.add(donutMesh);


//Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cubeMesh.rotation.y += 0.01;
    sphereMesh.rotation.y += 0.01;
    sphereMesh.rotation.x += 0.01;
    cubeMesh.translateX(0.1);
    donutMesh.rotation.x += 0.01;
    sphereMesh.translateX();
    controls.update();

}

animate();

document.body.appendChild( renderer.domElement );