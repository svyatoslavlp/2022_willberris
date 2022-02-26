const getGoods = () => {
   const links = document.querySelectorAll('.navigation-link')

   const getData = (value, category) => {
      fetch('/db/db.json')
         .then((res) => res.json())
         .then((data) => {
            const array = category ? data.filter((item) => item[category] === value) : data

            localStorage.setItem('goods', JSON.stringify(array)) // записываем в влокальное хранилище браузера пользователя в формате string
         })
   }

   links.forEach((link) => {
      link.addEventListener('click', (event) => {
         event.preventDefault() // удаляем действие браузера на клик ссылки
         const linkValue = link.textContent
         const category = link.dataset.field

         getData(linkValue, category)
      })
   })
   /*
      localStorage.setItem('goods', JSON.stringify([1, 2, 3]))

      const goods = JSON.parse(localStorage.getItem('goods'))
      console.log(goods);
   */
}

getGoods()