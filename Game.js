import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { Box } from './Box.js';

let boxArray = [];

class Game{
	constructor(){	 

		const container = document.createElement( 'div' );
		document.body.appendChild( container ); 

		this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 500 ); 
		this.camera.position.set( 0, 40, 0 ); 

		this.scene = new THREE.Scene();

		//Background color
		let col = 0x201510;
		this.scene.background = new THREE.Color( col );
		this.scene.fog = new THREE.Fog( col, 100, 200 );

		const ambient = new THREE.HemisphereLight(0xffffff, 0x080820, 1 );
		this.scene.add(ambient);

		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight ); 
		container.appendChild( this.renderer.domElement ); 

		const controls = new OrbitControls( this.camera, this.renderer.domElement );
		controls.update();

		window.addEventListener( 'resize', this.resize.bind(this) );

		this.clock = new THREE.Clock();

		const self = this;

		this.loadEnvironment();
		this.loadBox();
	}

    loadBox(){
        const game = this;

        if(boxArray<=0){
            for(let i=0; i<5; i++){
                boxArray.splice(boxArray.length, 1, new Box(game, boxArray.length));
            }
        }
    }
    
    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight; //nao usar se tiver canvas
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );  //nao usar se tiver canvas
    }

    loadEnvironment(){
        const loader = new GLTFLoader( );
		const self = this;

		// Load a glTF resource
		loader.load(
			// resource URL
            './assets/plane.glb',
			gltf => {
				this.scene.add( gltf.scene );
                this.renderer.setAnimationLoop( this.render.bind(this) );
			},
		);
	}	

    startRendering(){
		this.renderer.setAnimationLoop( this.render.bind(this) );
	}

    render(){
        boxArray.forEach(function(box){
            //console.log(index+ ": "+ cubo.ar);
            box.update();
        });

		this.renderer.render(this.scene, this.camera); //apagar 
		
	} 
}
    
export {Game};