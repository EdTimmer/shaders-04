import * as THREE from 'three'
import Experience from '../../Experience'
import CoverOne from './CoverOne'
import CoverTwo from './CoverTwo'

export default class CenterGroup {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // this.camera = this.experience.camera.instance;
    // this.mouse = new THREE.Vector2();
    // this.raycaster = new THREE.Raycaster();

    this.setInstance()
    this.setCoverOne()
    this.setCoverTwo()
    this.setCoverThree()
    this.addCenterGroup()
  }

  setInstance() {
    this.instance = new THREE.Group();
  }
  
  setCoverOne() {
    this.coverOne = new CoverOne();
    
    // this.coverOne.geometry.rotateX(Math.PI * 2.5);
    // this.coverOne.instance.mesh.position.set(0, 0, 60);
    // this.coverOne.instance.rotateX(Math.PI * 2.5);
    // this.coverOne.instance.position.set(0, 0, 60.0);
    // this.coverOne.mesh.position.set(0, 0, 60.0);
    this.instance.add(this.coverOne.getMesh());
    this.coverOne.setPosition(0, 0, 60);
    this.coverOne.geometry.rotateX(-Math.PI * 2.5);
    this.coverOne.geometry.rotateZ(Math.PI);
  }

  setCoverTwo() {
    this.coverTwo = new CoverOne();
    
    // this.coverTwo.mesh.position.set(0, 0, -60.0);
    // this.coverTwo.geometry.rotateX(Math.PI * 2.5);
    // this.coverTwo.mesh.position.set(0, 0, -60.0);
    this.instance.add(this.coverTwo.getMesh());
    this.coverTwo.setPosition(51.96, 0, -30);
    this.coverTwo.geometry.rotateX(Math.PI * 2.5);
    this.coverTwo.geometry.rotateY(Math.PI * 1.75);
  }

  setCoverThree() {
    this.coverThree = new CoverOne();
    
    // this.coverThree.mesh.position.set(0, 0, -60.0);
    // this.coverThree.geometry.rotateX(Math.PI * 2.5);
    // this.coverThree.mesh.position.set(0, 0, -60.0);
    this.instance.add(this.coverThree.getMesh());
    this.coverThree.setPosition(-51.96, 0, -30);
    this.coverThree.geometry.rotateX(Math.PI * 2.5);
    this.coverThree.geometry.rotateY(- Math.PI * 1.75);
  }

  addCenterGroup() {
    this.scene.add(this.instance);
  }

  update() {
    if (this.coverOne) {
      this.coverOne.update();
    }
    if (this.coverTwo) {
      this.coverTwo.update();
    }
    if (this.coverThree) {
      this.coverThree.update();
    }
    this.instance.rotation.x -= 0.001;
    this.instance.rotation.y -= 0.001;
    this.instance.rotation.z -= 0.001
  }
}