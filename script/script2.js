let img = document.querySelector('section .container_two .img_box img');
let btns = document.querySelectorAll('button[data-color]');
let btn = document.querySelector('[data-close]')
let text = document.querySelector('.text')

let iphones = {
  blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026582322",
  purple: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027205808",
  yellow: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505836714",
  midnight: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026579503",
  starlight: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027204398",
  product_red: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027205642",
}

let arrText = {
  blue: "Color - Blue",
  purple: "Color - purple",
  yellow: "Color - yellow",
  midnight: "Color - midnight",
  starlight: "Color - starlight",
  product_red: "Color - product red",
}

btns.forEach(btn => {
  btn.onclick = () => {
    let color = btn.getAttribute('data-color')
    text.textContent(arrText[color])
    img.setAttribute('src', iphones[color])
  }
})



document.querySelectorAll('.bten').forEach((el) => {
  el.addEventListener('click', () => {

    let content = el.nextElementSibling;
    if( content.style.maxHeight) {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
})

