const modal = document.querySelector('.modal');
const buttonAddClient = document.querySelector('.add-client');
const modalList = document.querySelector('.modal__list');

const modalContact =  `<div class="modal__contacts">
                          <div class="select" value="Телефон">

                            <div class="select__title">Телефон</div>
                            <div class="select__content">
                              <input id="singleSelect1" class="select__input" checked type="radio" name="singleSelect" value="Дополнительный телефон"/>
                              <label for="singleSelect1" class="select__label">Доп. телефон</label>

                              <input id="singleSelect3" class="select__input" type="radio" name="singleSelect" value="Email"/>
                              <label for="singleSelect3" class="select__label">Email</label>

                              <input id="singleSelect4" class="select__input" type="radio" name="singleSelect" value="Vk"/>
                              <label for="singleSelect4" class="select__label">Vk</label>

                              <input id="singleSelect5" class="select__input" type="radio" name="singleSelect" value="Facebook"/>
                              <label for="singleSelect5" class="select__label">Facebook</label>
                            </div>
                          </div>
                          <input class="modal__contacts-input" type="number">
                          <button class="modal__contacts-btn"></button>
                        </div>
`;




modalList.addEventListener('click', function(ev) {
  
  if(ev.target.classList.contains('select__title')) {
    const selectTitles = document.querySelectorAll('.select__title');

    if(ev.target.classList.contains('active')) {
      ev.target.classList.remove('active')
    } else {
      selectTitles.forEach(el => el.classList.remove('active'))
      ev.target.classList.add('active')
    }
  }

  if(ev.target.classList.contains('select__input')) {
    const input = ev.target.value;
    // ev.target.closest('.select').value = input;
    console.log(ev.target.parentElement.parentElement)
    // console.log(input);
  }


})

// Добавить контакт(элемент) или удалить(элемент)
buttonAddClient.addEventListener('click', function(ev) {
  // Добавить атрибут
  let li = document.createElement('li');
  li.className = 'modal__item';
  li.innerHTML = modalContact;
  
  if(modalList.childElementCount < 5) {
    modalList.append(li);
  }else if(modalList.childElementCount == 5) {
    buttonAddClient.setAttribute('disabled', '');
  } 

  modalList.style.marginBottom =  '25px';
  

  // Удалить атрибут
  const delContact = document.querySelectorAll('.modal__contacts-btn');
  delContact.forEach(function(el) {
    el.addEventListener('click', function(ev) {
      
      buttonAddClient.removeAttribute('disabled')

      const list = this.closest('.modal__list').childElementCount;
      if(list === 1) {
        modalList.style.marginBottom = '';
      }
      this.closest('li').remove()
    })
  })
})

// Закрыть модальное окно
const hiddenModal = document.querySelectorAll('.btn-close-modal');
hiddenModal.forEach(el => {
  el.addEventListener('click', function(ev) {
    const modal = this.closest('.modal-show');
    const form = modal.querySelector('.modal__form');
    const input = form.querySelectorAll('.input');
    const list = modal.querySelector('.modal__list');

    buttonAddClient.removeAttribute('disabled')
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hidden');

    list.innerHTML = '';
    list.style.marginBottom = '';

    input.forEach(el => el.classList.remove('active'))

    form.reset();
  })
  
})

