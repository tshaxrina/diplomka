import { getData, deleteData } from "./http";
import { createHeader, createFooter, reload } from "./helpers";
import { toCartId } from "../main";

let body = document.body
let cont = document.querySelector('.wrap .container')
let nothing = document.querySelector('.nothing')
let goods = []

getData('/wishes')
        .then((res) => {
            if (res.data.length > 0) {
                favreload(res.data, cont)
                goods = res.data
            } else {
                nothing.innerHTML += `
            <img class="nothing_img" src="/public/images/hearts 1.png" alt="">
            <h2 class="nothing_h2">Добавьте то, что понравилось</h2>
            <a class="nothing_a" href="/">Перейдите на главную страницу и нажмите на ♡ в товаре</a>` 
            }
        })

let nosubmit_inp = document.querySelector('#search')


// nosubmit_inp.onkeyup = (event) => {
//     const keyword = event.target.value.toUpperCase().trim()

//     const filtered = goods.filter(prod => {
//         let title = prod.title.toUpperCase().trim()
//         if(title.includes(keyword)) {
//             return prod
//         }
//     })
//     favreload(filtered, cont)
// }


export function favreload(arr, place) {
    place.innerHTML = ""
      for (let i of arr) {
        //creating
        let item = document.createElement('div')
        let item_top = document.createElement('div')
        let itop_img = document.createElement('img')
        let b_heart = document.createElement('button')
        let b_img = document.createElement('img')
        let black_fr = document.createElement('div')
        let item_bottom = document.createElement('div')
        let i_name = document.createElement('a')
        let rating = document.createElement('div')
        let star = document.createElement('img')
        let i_rating = document.createElement('p')
        let month = document.createElement('div')
        let price = document.createElement('div')
        let old_price = document.createElement('p')
        let new_price = document.createElement('p')
        let b_basket = document.createElement('button')
        let basket_img = document.createElement('img')
        
        
        //styling
        item.classList.add('item')
        item_top.classList.add('item_top')
        black_fr.classList.add('black_fr')
        item_bottom.classList.add('item_bottom')
        rating.classList.add('rating')
        month.classList.add('month')
        price.classList.add('price')
        old_price.classList.add('old_price')
        new_price.classList.add('new_price')
    
        //
        i_name.href = `/pages/dinam/?id=${i.product.id}`
        itop_img.src = i.product.media[0]
        b_img.src = "/icons/Vector.png"
        black_fr.innerHTML = "Акция"
        i_name.innerHTML = i.product.title
        star.src = "/icons/free-icon-star-8358826.png"
        i_rating.innerHTML = i.product.rating
        basket_img.src = "/icons/free-icon-shopping-bag-4903482.png"
        month.innerHTML = Number(Math.round(i.product.price/12).toFixed()).toLocaleString() + ' сум/мес'
      old_price.innerHTML = Number(i.product.price.toFixed()).toLocaleString() + ' сум'
      let aksia = Math.round((i.product.price * i.product.salePercentage)/100)
      new_price.innerHTML = Number(i.product.price - aksia.toFixed()).toLocaleString() + ' сум'
      
  
        //appending
        item.append(item_top, item_bottom)
        item_top.append(itop_img, b_heart, black_fr)
        b_heart.append(b_img)
        item_bottom.append(i_name, rating, month, price, b_basket)
        rating.append(star, i_rating)
        price.append(old_price, new_price)
        b_basket.append(basket_img)
        place.append(item)
  
        itop_img.onclick = (event) => {
            event.preventDefault();
           
          location.href = `/pages/dinam/?id=${i.product.id}`
        } 
        b_basket.onclick = () => {
            alert("Товар добавлен в корзину!")
          }
        b_heart.onclick = () => {
            deleteData(`/wishes/` + i.id)
                .then(() => {
                    b_img.classList.remove('bbb')
                    b_img.src = "/icons/free-icon-heart-3502230.png"
                    item.remove()
                })
        }
        
      }
    }

