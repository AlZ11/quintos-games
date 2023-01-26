// screen width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;
let paddle1;
let paddle2;
let point2 = 0;
let point1 = 0;
// code in the setup function gets run once at the start of the game
function setup() {
	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	// creates a ball sprite and places it in center of the screen
	ball = new Sprite();
	ball.image = imgBall;
	ball.x = width / 2;
	ball.y = height / 2;
	ball.diameter = 8;
	ball.bounciness = 1;
	ball.friction = 0;

	// TODO: create paddle sprites
	paddle1 = new Sprite();
	paddle2 = new Sprite();
	paddle1.image = imgPaddle;
	paddle2.image = imgPaddle;
	paddle1.x = 250;
	paddle2.x = 7;

	ball.direction = 10;
	ball.speed = 5;

	paddle1.collider = 'k';
	paddle2.collider = 'k';

	let wall = spriteArt(`w`.repeat(256));
	wall1 = new Sprite();
	wall2 = new Sprite();
	wall1.image = wall;
	wall2.image = wall;
	wall1.y = 192;
	wall2.y = 10;
	wall1.collider = 's';
	wall2.collider = 's';
}

// code in the draw function gets run 60 times per second
function draw() {
	background('b');

	text('Score:' + point2, 2, 24);
	text('Score:' + point1, 2, 1);

	// if the ball goes off the left side
	if (ball.x < -95) {
		ball.direction = random(-60, 80);
		point2 += 1;
	}
	// if the ball goes off the right side
	if (ball.x > 351) {
		ball.direction = random(100, 260);
		point1 += 1;
	}

	// if the ball went off the screen
	if (ball.x < -95 || ball.x > 351) {
		ball.x = 128;
		ball.y = 96;
	}

	if (ball.collided(paddle1)) {
		ball.speed = 5;
	}
	if (ball.collided(paddle2)) {
		ball.speed = 5;
	}
	if (kb.pressing('w')) {
		paddle2.vel.y = -5;
	} else if (kb.pressing('s')) {
		paddle2.vel.y = 5;
	} else {
		paddle2.vel.y = 0;
	}
	if (kb.pressing('ArrowUp')) {
		paddle1.vel.y = -5;
	} else if (kb.pressing('ArrowDown')) {
		paddle1.vel.y = 5;
	} else {
		paddle1.vel.y = 0;
	}
}
