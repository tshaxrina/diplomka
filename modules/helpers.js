export function reload(arr, place) {
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
      itop_img.src = i.media[0]
      b_img.src = "/icons/free-icon-heart-3502230.png"
      black_fr.innerHTML = "Акция"
      i_name.innerHTML = i.title[0]
      star.src = "/icons/free-icon-star-8358826.png"
      i_rating.innerHTML = i.rating[0]
      month.innerHTML = "1462 сум/мес"
      old_price.innerHTML = i.price[0]
      new_price.innerHTML = i.price[0]
      basket_img.src = "/icons/free-icon-shopping-bag-4903482.png"

      //appending
      item.append(item_top, item_bottom)
      item_top.append(itop_img, b_heart, black_fr)
      b_heart.append(b_img)
      item_bottom.append(i_name, rating, month, price, b_basket)
      rating.append(star, i_rating)
      price.append(old_price, new_price)
      b_basket.append(basket_img)
      place.append(item)
    }
  }