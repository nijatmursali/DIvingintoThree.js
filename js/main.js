//import { OrbitControls } from 'https://three.ipozal.com/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

//var controls = new OrbitControls( camera, renderer.domElement );

var geometry = new THREE.BoxGeometry();

function makeInstance(geometry, color, x) {
    var material = new THREE.MeshBasicMaterial( { color} );

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
}

//make several cubes 
const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
];
//game logic 
camera.position.z = 5;
var animate = function() {
    requestAnimationFrame(animate);
    cubes.forEach((cube) => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
    });
    //controls.update();
    renderer.render(scene, camera);
}
animate();