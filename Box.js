
import * as THREE from 'three';

let cube;
let color;

class Box{
	constructor(game, length){
		this.game = game;
        this.arrayLength = length;

        this.cube;

		this.loadBox();
	}

	loadBox(){

        let pos = [-0.5, -1.25, -2, -2.75, -3.5, -4.25, -5];
        let z = Math.floor(Math.random()*pos.length);
        let valz = pos[z];

        let colors = ["green","blue","red", 0xaa0022, 0xaa1010, 0x111111, 0xabcdef];
        color = colors[z];

        this.geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        this.material = new THREE.MeshBasicMaterial( {color: color} ); 
        this.cube = new THREE.Mesh( this.geometry, this.material ); 
        
        this.cube.position.x = 0;
        this.cube.position.y = 0.5;
        this.cube.position.z = valz;
        console.log(this.arrayLength+ " : " +this.cube.position.z+ " color: "+ color);
        this.cube.rotation.x = 0;
        this.cube.rotation.y = 0;

        this.game.scene.add( this.cube );
       
    }

    update(){
        this.cube.position.z = this.cube.position.z -0.02;
        this.cube.position.x = this.cube.position.x + 0.02;
        console.log(this.arrayLength+ " : " +this.cube.position.z+ " color: "+ color);
    }
}

export {Box};