function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('about', 'partials/about.html');
loadHTML('our', 'partials/our.html');
loadHTML('why', 'partials/why.html');
loadHTML('testimonials', 'partials/testimonials.html');
loadHTML('join', 'partials/join.html');
loadHTML('footer', 'partials/footer.html');
