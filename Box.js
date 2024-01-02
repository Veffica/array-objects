
import * as THREE from 'three';

let cube;
let color;

class Box{
	constructor(game, length){
		this.game = game;
        this.arrayLength = length;

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
        cube = new THREE.Mesh( this.geometry, this.material ); 
        
        cube.position.x = 0;
        cube.position.y = 0.5;
        cube.position.z = valz;
        console.log(this.arrayLength+ " : " +cube.position.z+ " color: "+ color);
        cube.rotation.x = 0;
        cube.rotation.y = 0;

        this.game.scene.add( cube );
       
    }

    update(){
        cube.position.z = cube.position.z -0.02;
        cube.position.x = cube.position.x - 0.02;
    }
}

export {Box};