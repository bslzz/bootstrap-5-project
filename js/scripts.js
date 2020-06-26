var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

let footer = document.querySelector('.footer');
let date = new Date().getFullYear();
footer.innerHTML = 'Copyright ©' + ' ' + date;
