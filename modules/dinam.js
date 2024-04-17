import { getData } from "./http";
import { createHeader, createFooter } from "./helpers";
// import { reload } from "./helpers";

let body = document.body
let cont = document.querySelector('main')
const good_id = location.search.split('=').at(-1)
if (!good_id) location.assign("/");

// console.log(location.search.split('=').at(-1));

getData(`/goods/` + parseInt(good_id))
.then((res) => {
   if (res.status === 200 || res.status === 201) {
      createDinam([res.data], cont)
}
})
getData(`/goods/`)
.then((res) => {
   if (res.status === 200 || res.status === 201) {
      tovar(res.data, cont)
}
})

createHeader(body)
createFooter(body)

 function createDinam(products, place) {
    place.innerHTML = ''
    
 for (let product of products) {

    let container = document.createElement("div")
    let tovar = document.createElement("section")
    let left = document.createElement("div")
    let left_img = document.createElement("img")
    let right = document.createElement("div")
    let name_pr = document.createElement("h2")
    let price_pr = document.createElement("p")
    let amount = document.createElement("div")
    let pls = document.createElement("button")
    let mns = document.createElement("button")
    let num = document.createElement("p")
    let color = document.createElement("div")
    let color_p = document.createElement("p")

    let colorBtn = document.createElement("div")
    let type = document.createElement("p")
    let type_span = document.createElement("span")
    let btns = document.createElement("div")
    let add_bask = document.createElement("button")
    let add_fav = document.createElement("button")
    let description = document.createElement("section")
    let about = document.createElement("h3")
    let about_p = document.createElement("p")
    let pr = document.createElement("section")
    let pr_h3 = document.createElement("h3")


    //styling
    container.classList.add('container')
    tovar.classList.add('tovar')
    left.classList.add('left_pr')
    right.classList.add('right_pr')
    amount.classList.add('amount')
    color.classList.add('color')
    type.classList.add('type')
    btns.classList.add('btns')
    add_bask.classList.add('add_bask')
    add_fav.classList.add('add_fav')
    description.classList.add('description')
    pr.classList.add('products')

    //
    left_img.src = `${product.media}`
    name_pr.innerHTML = `${product.title}`
    price_pr.innerHTML = `${product.price}` + " сум"
    pls.innerHTML = "+"
    mns.innerHTML = "-"
    num.innerHTML = "1"
    color_p.innerHTML = "Color:"
    type.innerHTML = "Type: "
    type_span.innerHTML = `${product.type}`
    add_bask.innerHTML = "Добавить в корзину"
    add_fav.innerHTML = "Добавить в избранное"
    about.innerHTML = "Описание товара"
    about_p.innerHTML = `${product.description}`
    pr_h3.innerHTML = "Похожие товары"

    //appending
    container.append(tovar, description, pr)
    tovar.append(left, right)
    left.append(left_img)
    right.append(name_pr, price_pr, amount, color, type, btns)
    amount.append(pls, num, mns)
    color.append(color_p, colorBtn )
    type.append(type_span)
    btns.append(add_bask, add_fav)
    description.append(about, about_p)
    pr.append(pr_h3)
    place.append(container)
    

    for (let color of product.colors) {
      let color_btn = document.createElement("button")
      color_btn.innerHTML = color
      colorBtn.append(color_btn)
    }
   //  counter++
   //  if (counter === 5) {
   //    return
   //  }

   // //  for (let index = 0; index <= 5; index++) {
   
   //    let item = document.createElement('div')
   //       let item_top = document.createElement('div')
   //       let itop_img = document.createElement('img')
   //       let b_heart = document.createElement('button')
   //       let b_img = document.createElement('img')
   //       let black_fr = document.createElement('div')
   //       let item_bottom = document.createElement('div')
   //       let i_name = document.createElement('a')
   //       let rating = document.createElement('div')
   //       let star = document.createElement('img')
   //       let i_rating = document.createElement('p')
   //       let month = document.createElement('div')
   //       let price = document.createElement('div')
   //       let old_price = document.createElement('p')
   //       let new_price = document.createElement('p')
   //       let b_basket = document.createElement('button')
   //       let basket_img = document.createElement('img')
         
         
   //       //styling
   //       item.classList.add('item')
   //       item_top.classList.add('item_top')
   //       black_fr.classList.add('black_fr')
   //       item_bottom.classList.add('item_bottom')
   //       rating.classList.add('rating')
   //       month.classList.add('month')
   //       price.classList.add('price')
   //       old_price.classList.add('old_price')
   //       new_price.classList.add('new_price')
     
   //       //
   //       i_name.href = `/pages/dinam/?id=${product.id}`
   //       itop_img.src = product.media[0]
   //       b_img.src = "/icons/free-icon-heart-3502230.png"
   //       black_fr.innerHTML = "Акция"
   //       i_name.innerHTML = product.title
   //       star.src = "/icons/free-icon-star-8358826.png"
   //       i_rating.innerHTML = product.rating
   //       month.innerHTML = "1462 сум/мес"
   //       old_price.innerHTML = product.price
   //       new_price.innerHTML = product.price
   //       basket_img.src = "/icons/free-icon-shopping-bag-4903482.png"
   
   //       //appending
   //       item.append(item_top, item_bottom)
   //       item_top.append(itop_img, b_heart, black_fr)
   //       b_heart.append(b_img)
   //       item_bottom.append(i_name, rating, month, price, b_basket)
   //       rating.append(star, i_rating)
   //       price.append(old_price, new_price)
   //       b_basket.append(basket_img)
   //       place.append(item)
   
   
   //       b_heart.onclick = () => {
   
   //         if(fav.includes(product.id)) {
   //           let idx = fav.indexOf(product.id)
   //           fav.splice(idx, 1)
   
   //           b_img.classList.remove('bbb')
   //           b_img.src = "/icons/free-icon-heart-3502230.png"
   //       } else {
   //           fav.push(i.id)
   //           b_img.classList.add('bbb')
   //           b_img.src = "/icons/Vector.png"
             
   //       }
   //       if (buttonAdd.classList.contains('active')) {
   //           reload(fav)
   //       } 
   //     }
   
   //       b_basket.onclick = () => {
   //         alert("Товар добавлен в корзину!")
   //       }
   
   //       itop_img.onclick = (event) => {
   //         event.preventDefault();
          
   //       location.href = `/pages/dinam/?id=${index.id}`
   //       }      
   //     }
//     pls.onclick = () => {
//       num.innerHTML++
//       price.innerHTML = +(item.price * num.innerHTML).toFixed(2) + " сум"
//       pr_ed.innerHTML = item.price + "ед/сум"
//   total = +(total + item.price).toFixed(2) + " сум"
// }
// mns.onclick = () => {
//   if (num.innerHTML > 0) {
//       console.log("inoon");
//       num.innerHTML--
//       price.innerHTML = +(item.price * num.innerHTML).toFixed(2) + " сум"
//   }
//   if (num.innerHTML === 1) {
//       pr_ed.innerHTML = ""
//   }
//   total = +(total - item.price).toFixed(2) + " сум"
// }
 }}

 function tovar(tovars, place) {
   let counter = 1
   let mesto = document.createElement('div')
 for (let index of tovars) {
   
   counter++
    if (counter === 7) {
      return
    }
    
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
      mesto.classList.add('mesto')
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
      i_name.href = `/pages/dinam/?id=${index.id}`
      itop_img.src = index.media[0]
      b_img.src = "/icons/free-icon-heart-3502230.png"
      black_fr.innerHTML = "Акция"
      i_name.innerHTML = index.title
      star.src = "/icons/free-icon-star-8358826.png"
      i_rating.innerHTML = index.rating
      month.innerHTML = "1462 сум/мес"
      old_price.innerHTML = index.price
      new_price.innerHTML = index.price
      basket_img.src = "/icons/free-icon-shopping-bag-4903482.png"

      //appending
      item.append(item_top, item_bottom)
      item_top.append(itop_img, b_heart, black_fr)
      b_heart.append(b_img)
      item_bottom.append(i_name, rating, month, price, b_basket)
      rating.append(star, i_rating)
      price.append(old_price, new_price)
      b_basket.append(basket_img)
      mesto.append(item)
      place.append(mesto)


      b_heart.onclick = () => {

        if(fav.includes(index.id)) {
          let idx = fav.indexOf(index.id)
          fav.splice(idx, 1)

          b_img.classList.remove('bbb')
          b_img.src = "/icons/free-icon-heart-3502230.png"
      } else {
          fav.push(i.id)
          b_img.classList.add('bbb')
          b_img.src = "/icons/Vector.png"
          
      }
      if (buttonAdd.classList.contains('active')) {
          reload(fav)
      } 
    }

      b_basket.onclick = () => {
        alert("Товар добавлен в корзину!")
      }

      itop_img.onclick = (event) => {
        event.preventDefault();
       
      location.href = `/pages/dinam/?id=${index.id}`
      }      
    }
   }
