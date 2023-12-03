const table = document.querySelector('.table');
const tableTitle = document.querySelectorAll('.cell__title');

tableTitle.forEach(function(el) {
  el.addEventListener('click', function(ev) {
    if(this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      tableTitle.forEach(el => el.classList.remove('active'))
      this.classList.add('active')
    }
  })
})