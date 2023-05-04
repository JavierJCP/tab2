const li = document.querySelectorAll('.li');
const block = document.querySelectorAll('.block');

li.forEach((itemLi, i) => {
  li[i].addEventListener('click', () => {
    li.forEach((itemLi, i) => {
      li[i].classList.remove('li--active');
      block[i].classList.remove('block--active');
    });

    li[i].classList.add('li--active');
    block[i].classList.add('block--active');
  });
});
