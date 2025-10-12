import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.z = 5.5;

const geometry = new THREE.SphereGeometry(2, 48, 48);
const material = new THREE.MeshStandardMaterial(
    {
        color:0x00ff00
    }
);
const sphereMesh = new THREE.Mesh(geometry, material);
scene.add(sphereMesh);

const lambertMaterial = new THREE.MeshLambertMaterial(
    {
        color: 0xff0000
    }
)
const lambertSphere = new THREE.Mesh(geometry, lambertMaterial);
lambertSphere.position.set(4, 0, 0);
scene.add(lambertSphere);


const phongMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0x0000ff,
        shininess:100,
        specular: 0x00ff00
    }
)
const phongSphere = new THREE.Mesh(geometry, phongMaterial);
phongSphere.position.set(-4, 0, 0);
scene.add(phongSphere);



const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

document.body.appendChild( renderer.domElement );