import * as THREE from 'three'
import Experience from '../Experience'
import vertexShader from '../shaders/2/vertex_2.glsl'
import fragmentShader from '../shaders/2/fragment_2.glsl'

export default class SphereTwo {
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
    // this.geometry = new THREE.SphereGeometry(37.5, 32, 32);
    this.geometry = new THREE.BoxGeometry(55, 55, 55, 32, 32, 32);
    // this.geometry = new THREE.TorusGeometry(26, 10, 16, 100);
    // this.geometry = new THREE.IcosahedronGeometry(50, 0);
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotateX(Math.PI * 2.5);
    this.mesh.rotateY(Math.PI * 0.5);
    this.mesh.position.set(0, 0, 0);


    this.meshPosition = this.mesh.position;
    this.meshQuaternion = this.mesh.quaternion;
    this.scene.add(this.mesh);
  } 

  update() {    
    this.material.uniforms.u_Time.value = this.experience.time.getElapsedTime().toFixed(2);

    this.mesh.rotation.x -= 0.001;
    this.mesh.rotation.y -= 0.001;
  }
}