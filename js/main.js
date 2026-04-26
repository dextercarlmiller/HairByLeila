// Hamburger menu — close on outside click or nav link click
(function () {
  const toggle = document.getElementById('nav-toggle');
  if (!toggle) return;

  // Close menu when a nav link is clicked (mobile)
  document.querySelectorAll('.nav__links a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.checked = false;
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__inner') && !e.target.closest('.hamburger')) {
      toggle.checked = false;
    }
  });
})();

// Highlight active nav link based on current page
(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
