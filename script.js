const projectLinks = document.querySelectorAll('a[href^="#"]');
projectLinks.forEach(link => {
	link.addEventListener('click', function(event) {
		event.preventDefault(); 
		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		targetElement.scrollIntoView({ behavior: 'smooth' });
	});
});