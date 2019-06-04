

AOS.init({
  duration: 1200,
})

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 1000
});

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});

$('body').scrollspy({ target: '#navbar' })
