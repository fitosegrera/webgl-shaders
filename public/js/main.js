if (!Detector.webgl) Detector.addGetWebGLMessage();
var container, stats;
var camera, scene, renderer, clock, delta;
var geometry, material, mesh;

init();
animate();

function init() {
    container = document.getElementById('container');
    clock = clock = new THREE.Clock();
    camera = new THREE.Camera();
    //camera.position.z = 1;
    scene = new THREE.Scene();
    geometry = new THREE.CubeGeometry(1, 1, 1, 10, 10, 10);
    material = new THREE.ShaderMaterial(customShader);
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize(event) {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    delta = clock.getDelta();
    material.uniforms.u_time.value += delta;
    render();
}

function render() {
    renderer.render(scene, camera);
}