// function deleteParentElement(obj, parentEl) {
//   obj.closest(parentEl).remove()
// }

function deleteParentClass(obj, parentEl, delClass) {
  obj.closest(parentEl).classList.remove(delClass)
}


function showModal(element) {
  const modal = document.querySelector(element);
  modal.classList.remove('modal-hidden')
  modal.classList.add('modal-show')
}

// function addClassOnElement(className, addClass) {
//   const el = document.querySelector(className);
//   el.classList.addClass(addClass)
// }