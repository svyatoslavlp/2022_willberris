const getGoods = () => {
   const links = document.querySelectorAll('.navigation-link')

   const getData = () => {
      fetch('/db/db.json')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            localStorage.setItem('goods', JSON.stringify(data))
         })
   }

   links.forEach((link) => {
      link.addEventListener('click', (event) => {
         event.preventDefault() // удаляем действие браузера на клик ссылки
         getData()
      })
   })
   /*
      localStorage.setItem('goods', JSON.stringify([1, 2, 3]))

      const goods = JSON.parse(localStorage.getItem('goods'))
      console.log(goods);
   */
}

getGoods()