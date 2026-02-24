(() => {
	const btn = document.getElementById("mobileMenuBtn");
	const menu = document.getElementById("mobileMenu");
	if (!btn || !menu) return;

	btn.addEventListener("click", () => {
		menu.classList.toggle("hidden");
	});

	// Cierra al tocar fuera
	document.addEventListener("click", (e) => {
		const t = e.target;
		if (!menu.contains(t) && !btn.contains(t)) {
			menu.classList.add("hidden");
		}
	});
})();

(() => {
	const card = document.getElementById("pokiCarousel");
	const image = document.getElementById("pokiImage");
	const title = document.getElementById("pokiTitle");
	const description = document.getElementById("pokiDescription");
	const dotsContainer = document.getElementById("pokiDots");

	if (!card || !image || !title || !description || !dotsContainer) return;

	// const prevBtn = card.querySelector(".carousel-btn--prev");
	// const nextBtn = card.querySelector(".carousel-btn--next");
	// if (!prevBtn || !nextBtn) return;

	const pokiFlavors = [
		{
			name: "Poki Fresa",
			image: "./assets/poky fresa manga 250.png",
			alt: "Poki sabor fresa",
			description:
				"Sabor dulce y frutal, ideal para quienes prefieren una experiencia clásica y refrescante.",
		},
		{
			name: "Poki Manzana",
			image: "./assets/poky manzana manga 250.png",
			alt: "Poki sabor manzana",
			description:
				"Perfil ácido-dulce con notas frescas que equilibran intensidad y suavidad en cada sorbo.",
		},
		{
			name: "Poki Naranja",
			image: "./assets/poky naranja manga 250.png",
			alt: "Poki sabor naranja",
			description:
				"Toque cítrico vibrante y aroma intenso para una sensación más energética y veraniega.",
		},
		{
			name: "Poki Mora Azul",
			image: "./assets/poky mora azul manga 250 .png",
			alt: "Poki sabor mora azul",
			description:
				"Sabor moderno con personalidad marcada, pensado para destacar dentro de la línea Poki.",
		},
	];

	let currentIndex = 0;

	pokiFlavors.forEach((_, index) => {
		const dot = document.createElement("span");
		dot.className = "carousel-dot";
		if (index === 0) dot.classList.add("is-active");
		dotsContainer.appendChild(dot);
	});

	const dots = Array.from(dotsContainer.querySelectorAll(".carousel-dot"));

	const renderSlide = () => {
		const item = pokiFlavors[currentIndex];
		image.src = item.image;
		image.alt = item.alt;
		title.textContent = item.name;
		description.textContent = item.description;

		dots.forEach((dot, index) => {
			dot.classList.toggle("is-active", index === currentIndex);
		});
	};

	// prevBtn.addEventListener("click", () => {
	// 	currentIndex = (currentIndex - 1 + pokiFlavors.length) % pokiFlavors.length;
	// 	renderSlide();
	// });

	// nextBtn.addEventListener("click", () => {
	// 	currentIndex = (currentIndex + 1) % pokiFlavors.length;
	// 	renderSlide();
	// });

	setInterval(() => {
		currentIndex = (currentIndex + 1) % pokiFlavors.length;
		renderSlide();
	}, 4500);
})();
