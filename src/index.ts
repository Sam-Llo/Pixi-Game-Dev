import { Application, Sprite, Loader, Texture, AnimatedSprite } from 'pixi.js'
import { TweenMax } from "gsap";
const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

clampy.width= 60;
clampy.height= 60;

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;



//app.stage.addChild(clampy);


Loader.shared.add("spritesheet.json").load(setup);

// console.log("zzzzzzzzz")
// console.log(Loader.shared.resources["spritesheet.json"].data); 

function setup(){
	let spriteSheet = Loader.shared.resources["spritesheet.json"].spritesheet;
	createPlayer();
    // const knites = new Sprite(sheet["knites_1.png"]); 
	// app.stage.addChild(knites);

	let spriteSheet = Loader.shared.resources["spritesheet.json"].spritesheet;
	let wDownAnim = new AnimatedSprite(spriteSheet.animations["walkDown"]);
	wDownAnim.x = app.screen.width / 2;
	wDownAnim.y = app.screen.width / 2;
	wDownAnim.animationSpeed = 0.1; 
	wDownAnim.play();
	app.stage.addChild(wDownAnim);

	
	// const knightUpTexture = Texture.from("knites_1.png");
	// const knightUpSprite = new Sprite(knightUpTexture );

	// knightUpSprite.width= 60;
	// knightUpSprite.height= 60;
	// knightUpSprite.x = app.screen.width / 2;
	// knightUpSprite.y = app.screen.height / 2;

	// app.stage.addChild(knightUpSprite)
};

function createPlayer(){
	
}

// app.ticker.add(gameLoop);
// app.ticker.add(animate)
// function animate() {
// 	clampy.rotation += 0.1;
// }


document.addEventListener('keydown', onKeyDown);


function onKeyDown(key) {
	// W Key is 87
	// Up arrow is 87
	if (key.keyCode === 38) {
		// If the W key or the Up arrow is pressed, move the player up.
		clampy.y -= 2;
	}
	if (key.keyCode === 40) {
		// If the W key or the Up arrow is pressed, move the player up.
		clampy.y += 2;
	}
	if (key.keyCode === 39) {
		// If the W key or the Up arrow is pressed, move the player up.
		clampy.x +=2;
	}
	if ( key.keyCode === 37) {
		// If the W key or the Up arrow is pressed, move the player up.
		clampy.x -= 2;
	}
};




