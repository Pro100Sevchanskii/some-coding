

document.addEventListener('DOMContentLoaded', function() {
  const gallery_columns = document.querySelectorAll('.gallery-column');
  var gallery_items = [
    './assets/img/galery1.jpg',
    './assets/img/galery2.jpg',
    './assets/img/galery3.jpg',
    './assets/img/galery4.jpg',
    './assets/img/galery5.jpg',
    './assets/img/galery6.jpg',
    './assets/img/galery7.jpg',
    './assets/img/galery8.jpg',
    './assets/img/galery9.jpg',
    './assets/img/galery10.jpg',
    './assets/img/galery11.jpg',
    './assets/img/galery12.jpg',
    './assets/img/galery13.jpg',
    './assets/img/galery14.jpg',
    './assets/img/galery15.jpg'  
  ];


  
  gallery_items.sort(() => Math.random() - 0.5);
  window.onload = function(){
    for (let i = 0; i < gallery_columns.length; i++){
      for (let j = i*5; j < (i+1)*5; j++){
        const img = document.createElement('img');
        img.classList.add('gallery-item');
        img.src = gallery_items[j];
        img.alt = `gallery img ${j}`;
        gallery_columns[i].append(img);
      }
    }
    
    const items = document.querySelectorAll('.gallery-container img');
    

    // Создаём наблюдатель с порогом срабатывания 0.2 (20% видимости)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Элемент появился в области видимости – добавляем класс анимации
          entry.target.classList.add('show');
        } else {
          // Элемент скрылся – убираем класс, чтобы при следующем появлении анимация повторилась
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.2, // можно настроить под дизайн
      // rootMargin: '0px' // при необходимости можно увеличить область срабатывания
    });

    // Начинаем наблюдение за каждым элементом
    items.forEach((item) => observer.observe(item));
    }
});
