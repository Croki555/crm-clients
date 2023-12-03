const input = document.querySelectorAll('.input');
const body = document.querySelector('body');

// body.addEventListener('click', function(ev) {
//   // console.log(ev.target)
//   // if(ev.closest('.input')) {
//   //   ev.target.addEventListener('input', function() {
//   //     ev.target.classList.add('active')
//   //   })
//   // }
// })// Close when click to option

// for (let i = 0; i < selectSingle_labels.length; i++) {
//   selectSingle_labels[i].addEventListener('click', (evt) => {
//     selectSingle_title.textContent = evt.target.textContent;
//     selectSingle.setAttribute('data-state', '');
//   });
// }

input.forEach(el => {
  el.addEventListener('input', function(ev) {
    if(this.value.length > 0) {
      this.classList.add('active')
    } else {
      this.classList.remove('active')
    }
  })
})

