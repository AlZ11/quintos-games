let frog, lilypads;

function preload() {
	frog = new Sprite();
	frog.animation = loadAnimation('frog_jump.png', { frameSize: [32, 16], frames: 7 });
	lilypads = new Group();
	lilypads.animation = loadAnimation('lilypads.png', { frameSize: [16, 16], frames: 12 });
	smalljump = loadSound('sounds/retro_jump_bounce_12.wav');
	bigjump = loadSound('sounds/retro_jump_bounce_09.wav');
	death = loadSound('sounds/retro_jump_bounce_13.wav');
	smalljump.setVolume(0.3);
	bigjump.setVolume(0.3);
	death.setVolume(0.3);
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 0;
	frog.y = 80;
	frog.w = 10;
	frog.h = 8;
	frog.layer = 1;
	frog.rotationLock = true;

	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';
	lilypads.layer = 0;

	makeLilyPads();

	frog.ani.stop();
}

function makeLilyPads() {
	// while (lilypads.length < 24) {
	// 	let lily = new lilypads.Sprite();
	// 	lily.x = (lilypads.length - 1) * 16;
	// }
	let n = 0;
	for (let i = 0; i < 50; i++) {
		let lily = new lilypads.Sprite();
		lily.x = 16 * i;
		lily.ani.frame = Math.round(Math.random() * 11);
		lily.ani.frameDelay = 60 + Math.round(Math.random() * 80);
		// random number between 0 and 11
		n++;
		if (n >= 4 || Math.random() >= 0.5) {
			i++;
			n = 0;
		}
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, width, 90);

	// if the frog is on the ground
	if (frog.y > 83 && frog.velocity.y <= 0) {
		frog.x = round(frog.x / 16) * 16;
		if (kb.presses('up')) {
			// little jump
			frog.velocity.y = -1.4;
			frog.velocity.x = 1;
			frog.ani.play();
			smalljump.play();
		} else if (kb.presses('right')) {
			// BIG jump!
			frog.velocity.y = -2;
			frog.velocity.x = 1.35;
			frog.ani.play();
			bigjump.play();
		} else {
			frog.ani.frame = 0;
			frog.ani.stop();
		}
	}
	if (frog.y > 300) {
		death.play();
		frog.x = 0;
		frog.y = 80;
	}
	camera.x = frog.x + 64;
}
