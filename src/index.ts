import { Application, Sprite } from 'pixi.js'
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



app.stage.addChild(clampy);

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




