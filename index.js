const prev = document.getElementById('prev');
const next = document.getElementById('next');
const allDots = document.querySelectorAll('.dot');

let slideIndex = 1;

prev.addEventListener('click', () => {
	changeSlide(-1);
});

next.addEventListener('click', () => {
	changeSlide(1);
});

allDots.forEach((dot) => {
	dot.addEventListener('click', (e) => {
		for (let i = 0; i < allDots.length; i++) {
			if (e.target === allDots[i]) {
				showSlides((slideIndex = i + 1));
			}
		}
	});
});

function changeSlide(n) {
	slideIndex += n;
	showSlides(slideIndex);
}

function showSlides(x) {
	let allSlides = document.querySelectorAll('.slide');
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

showSlides(slideIndex);
