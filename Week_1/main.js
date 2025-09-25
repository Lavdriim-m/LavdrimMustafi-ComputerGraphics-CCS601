import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 10;

//Cone
const coneGeometry = new THREE.ConeGeometry(2, 5, 6);
const coneMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0xc84fc0
    }
);
const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
coneMesh.position.x = -0.5;
scene.add(coneMesh);

//Cylinder
const circle = new THREE.CylinderGeometry(1, 1, 2);
const circleMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0xffcd70
    }
);
const circleMesh = new THREE.Mesh(circle, circleMaterial);
circleMesh.rotateZ(35);
circleMesh.position.set(-5, 0, 0);
scene.add(circleMesh);

//Icosahedron
const Icosahedron_Geo = new THREE.IcosahedronGeometry(1.5);
const Icosahedron_Material = new THREE.MeshStandardMaterial(
    {
        color: 0x049ef4
    }
);
const Icosahedron = new THREE.Mesh(Icosahedron_Geo, Icosahedron_Material);
Icosahedron.position.set(4, 0, 0);
scene.add(Icosahedron);

//Ring
const ringGeo = new THREE.TorusGeometry(40, 1, 16, 100);
const ringMaterial = new THREE.MeshToonMaterial(
    {
        color: 0x07aeea
    }
);
const ring = new THREE.Mesh(ringGeo, ringMaterial);
ring.position.set(0, 0, -50);
ring.rotateY(45);
scene.add(ring);


//-----------------------------------------------------------

//Lights
const light = new THREE.SpotLight(0x404040, 1000);
light.position.set(5, 15, -5);
scene.add(light);

const light2 = new THREE.SpotLight(0xffffff, 2000);
light2.position.set(-18, -10, 30);
scene.add(light2);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
function animate (){
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    coneMesh.rotation.x += 0.01;
    coneMesh.rotation.y += 0.05;

    circleMesh.rotation.x += 0.02;

    Icosahedron.rotation.x += 0.01;

    ring.rotation.x += 0.03;
}
animate();

document.body.appendChild(renderer.domElement);
