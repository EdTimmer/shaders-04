import * as THREE from 'three'
import Experience from '../Experience'
import vertexShader from '../shaders/3/vertex_3.glsl'
import fragmentShader from '../shaders/3/fragment_3.glsl'

export default class SphereThreeClone {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();

    this.setMaterial()
    this.setGeometry()
    this.setMesh()
    this.update()
  }

  setMaterial() {
    this.material = new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true, 
      side: THREE.DoubleSide,
      uniforms: {
        u_Time: { value: 0.0 },
        u_Resolution: { value: new THREE.Vector2(50.0, 50.0) },
    },
    })
  }

  setGeometry() {
    // this.geometry = new THREE.PlaneGeometry(50, 50, 32, 32);
    // this.geometry = new THREE.SphereGeometry(200, 32, 32);
    // this.geometry = new THREE.BoxGeometry(30, 30, 30, 32, 32, 32);
    // this.geometry = new THREE.IcosahedronGeometry(30, 0);
    // this.geometry = new THREE.CapsuleGeometry(10, 40, 32, 52); 
    this.geometry = new THREE.CylinderGeometry(20, 20, 2, 32);
    // this.geometry = new THREE.TorusGeometry(26, 10, 16, 100);
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // rotate on Y axis half circle
    this.mesh.rotateX(Math.PI * 2.5);
    this.mesh.rotateY(Math.PI * 0.5);
    this.mesh.position.set(0, 20, -40.0);


    this.meshPosition = this.mesh.position;
    this.meshQuaternion = this.mesh.quaternion;
    this.scene.add(this.mesh);
  } 

  update() {    
    this.material.uniforms.u_Time.value = this.experience.time.getElapsedTime().toFixed(2);

    this.mesh.rotation.x -= 0.001;
    this.mesh.rotation.y -= 0.001;
    this.mesh.rotation.z -= 0.001;
  }
}