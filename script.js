class App {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.header = document.querySelector('header');
    this.main = document.querySelector('main');

    this.init();
  }

  init() {
    this.addNavScroll();
  }

  addNavScroll() {
    this.nav.addEventListener('click', event => {
      event.preventDefault();
      const navLink = event.target.closest('.nav-link');
      if (!navLink) return;

      const sectionId = navLink.getAttribute('href');
      const section = document.querySelector(sectionId);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}

new App();
