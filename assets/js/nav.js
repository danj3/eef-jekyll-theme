document.addEventListener('DOMContentLoaded', function () {
  var toggler = document.querySelector('.eef-nav-toggler');
  var collapse = document.querySelector('.eef-nav-collapse');

  if (toggler) {
    toggler.addEventListener('click', function () {
      collapse.classList.toggle('eef-nav-open');
    });
  }

  document.querySelectorAll('.eef-nav-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var menu = this.nextElementSibling;
      if (menu && menu.classList.contains('eef-nav-dropdown-menu')) {
        menu.classList.toggle('eef-nav-open');
      }
    });
  });

  document.addEventListener('click', function (e) {
    document.querySelectorAll('.eef-nav-dropdown-menu.eef-nav-open').forEach(function (menu) {
      if (!menu.closest('.eef-nav-dropdown').contains(e.target)) {
        menu.classList.remove('eef-nav-open');
      }
    });
  });
});
