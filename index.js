const prev = document.getElementById('prev');
const next = document.getElementById('next');
const allDots = document.querySelectorAll('.dot');
const allSlides = document.querySelectorAll('.slide');

let slideIndex = 1;

prev.addEventListener('click', () => {
	changeSlide(-1);
});

next.addEventListener('click', () => {
	changeSlide(1);
});

function changeSlide(n) {
	showSlides((slideIndex += n));
}

allDots.forEach((dot) => {
	dot.addEventListener('click', (e) => {
		for (let i = 0; i < allDots.length; i++) {
			if (e.target === allDots[i]) {
				showSlides((slideIndex = i + 1));
			}
		}
	});
});

function showSlides(x) {
	let i;
	if (x > allSlides.length) {
		slideIndex = 1;
	}
	if (x < 1) {
		slideIndex = allSlides.length;
	}
	for (i = 0; i < allSlides.length; i++) {
		allSlides[i].style.display = 'none';
	}
	for (i = 0; i < allDots.length; i++) {
		allDots[i].classList.remove('active');
	}
	allSlides[slideIndex - 1].style.display = 'block';
	allDots[slideIndex - 1].classList.add('active');
}

(function autoSlide() {
	let i;
	if (slideIndex > allSlides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < allSlides.length; i++) {
		allSlides[i].style.display = 'none';
	}
	for (i = 0; i < allDots.length; i++) {
		allDots[i].classList.remove('active');
	}
	allSlides[slideIndex - 1].style.display = 'block';
	allDots[slideIndex - 1].classList.add('active');
	slideIndex++;
	setTimeout(autoSlide, 5000);
})()
