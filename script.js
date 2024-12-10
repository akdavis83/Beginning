const loremText = ` In the beginning was the Word, and the Word was with God, and the Word was God. 2 The same was in the beginning with God. 3 All things were made by him; and without him was not any thing made that was made. 4 In him was life; and the life was the light of men. 5 And the light shineth in darkness; and the darkness comprehended it not.`;

const quantity = 150;

const colors = [
	"#4a437f",
	"#6f75aa",
	"#fff5bd",
	"#ffd966",
	"#c7b683",
	"#466b91",
	"#2d4263"
];

/* START OF PROGRAM */

const textwall = document.querySelector(".textwall-night");
let width = window.innerWidth;
let height = window.innerHeight;

// Create swirl patterns with reduced text pieces
for (let i = 0; i < quantity; i++) {
	const piece = document.createElement("div");
	piece.className = "text-piece";

	const t = i * 0.1;
	let x = width / 2 + ((Math.cos(t) * (t * 2)) % width);
	let y = height / 2 + ((Math.sin(t) * (t * 2)) % height);

	const angle = Math.random() * Math.PI * 2;
	const distance = Math.random() * 500 + 500;
	const tx = Math.cos(angle) * distance;
	const ty = Math.sin(angle) * distance;

	piece.style.setProperty("--tx", `${tx}px`);
	piece.style.setProperty("--ty", `${ty}px`);
	piece.style.left = `${x}px`;
	piece.style.top = `${y}px`;
	piece.style.animationDelay = `${Math.random() * 2.5}s`;
	piece.style.fontSize = `${Math.random() * 8 + 12}px`;

	const startPos = Math.floor(Math.random() * (loremText.length - 20));
	piece.textContent = loremText.substr(startPos, 20);

	textwall.appendChild(piece);
}

// Add mouseover effects
document.querySelectorAll(".text-piece").forEach((piece) => {
	piece.addEventListener("mouseover", () => {
		piece.style.transform = `scale(1.5)`;
		piece.style.zIndex = "1000";
		piece.style.transition = "transform 0.3s ease";
	});

	piece.addEventListener("mouseout", () => {
		piece.style.transform = "";
		piece.style.zIndex = "";
	});
});

// Fullscreen toggle functionality
const fullscreenBtn = document.getElementById("fullscreenBtn");
fullscreenBtn.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}