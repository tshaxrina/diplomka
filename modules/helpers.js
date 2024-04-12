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
      i_name.innerHTML = i.title
      star.src = "/icons/free-icon-star-8358826.png"
      i_rating.innerHTML = i.rating
      month.innerHTML = "1462 сум/мес"
      old_price.innerHTML = i.price
      new_price.innerHTML = i.price
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

      // black_fr = res.data.filter((item) => item.isBlackFriday == true);
    }
  }


export function createHeader(place) {
  //creating
  let header = document.querySelector("header")
  //header_top
  let header_top = document.createElement('div')
  let container = document.createElement('div')
  let right = document.createElement('div')
  let right_a = document.createElement('a')
  let right_a_img = document.createElement('a')
  let loc = document.createElement('h3')
  let loc_span = document.createElement('span')
  let punkt = document.createElement('h3')

  let center = document.createElement('div')
  let grey = document.createElement('p')
  let blue = document.createElement('p')

  let left = document.createElement('div')
  let q_a = document.createElement('a')
  let my_order = document.createElement('a')
  let lang = document.createElement('a')
  let lang_img = document.createElement('img')

  //styling header_top
  header_top.classList.add('header_top')
  container.classList.add('container')
  right.classList.add('right')
  center.classList.add('center')
  grey.classList.add('grey')
  blue.classList.add('blue')
  left.classList.add('left')

  //
  right_a_img.src = "/icons/free-icon-position-3249692.png"
  loc.innerHTML = "Город:"
  loc_span.innerHTML = "Ташкент"
  punkt.innerHTML = "Пункт выдачи"
  grey.innerHTML = "Доставим ваш заказ бесплатно - всего за 1 день!"
  blue.innerHTML = "Продавайте на Uzum"
  q_a.innerHTML = "Вопрос-ответ"
  my_order.innerHTML = "Мои заказы"
  lang.innerHTML = "Русский"
  lang_img.src = "/icons/free-icon-russia-323300.png"

  //apending
  header_top.append(container)
  container.append(right, center, blue, left)
  right.append(right_a, loc, punkt)
  right_a.append(right_a_img)
  loc.append(loc_span)
  center.append(grey)
  left.append(q_a, my_order,lang)
  lang.append(lang_img)

  //header
  let header_main = document.createElement('div')
  let cont_disp = document.createElement('div')
  let logo = document.createElement('div')
  let logo_a = document.createElement('a')
  let logo_img = document.createElement('img')
  let catalog = document.createElement('div')
  let catalog_btn = document.createElement('button')
  let search = document.createElement('div')
  let nosubmit = document.createElement('form')
  let nosubmit_inp = document.createElement('input')

  let links = document.createElement('div')
  let name_a = document.createElement('a')
  let name_p = document.createElement('p')
  let name_img = document.createElement('img')
  let fav_a = document.createElement('a')
  let fav_p = document.createElement('p')
  let fav_img = document.createElement('img')
  let bask_a = document.createElement('a')
  let bask_p = document.createElement('p')
  let bask_img = document.createElement('img')

  //styling
  header_main.classList.add('header')
  cont_disp.classList.add('container display')
  logo.classList.add('logo')
  catalog.classList.add('catalog')
  search.classList.add('search')
  nosubmit.classList.add('nosubmit')
  nosubmit_inp.classList.add('nosubmit')
  links.classList.add('links')

  //
  logo_img.src = "/icons/uzum.png"
  catalog_btn.innerHTML = "Каталог"
  name_p.innerHTML = "Шахрина"
  name_img.src = "/icons/free-icon-avatar-6386976.png"
  fav_p.innerHTML = "Избранное"
  fav_img.src = "/icons/free-icon-heart-3502230.png"
  bask_p.innerHTML = "Корзина"
  bask_img.src = "/icons/free-icon-shopping-bag-4903482.png"

  //appending
  header_main.append(cont_disp)
  cont_disp.append(logo, catalog, search, links)
  logo.append(logo_a)
  logo_a.append(logo_img)
  catalog.append(catalog_btn)
  search.append(nosubmit)
  nosubmit.append(nosubmit_inp)
  links.append(name_a, fav_a, bask_a)
  name_a.append(name_img, name_p)
  fav_a.append(fav_img, fav_p)
  bask_a.append(bask_img, bask_p)

  //header_bottom
  let header_bottom = document.createElement('div')
  let cont_disp_2 = document.createElement('div')
  let hb_img = document.createElement('img')
  let a = document.createElement('a')
  let elec = document.createElement('a')
  let techno = document.createElement('a')
  let clothes = document.createElement('a')
  let shoes = document.createElement('a')
  let accessory = document.createElement('a')
  let beauty = document.createElement('a')
  let healthy = document.createElement('a')
  let homes = document.createElement('a')
  let repair = document.createElement('a')
  let more = document.createElement('a')

  //styling
  header_bottom.classList.add('header_bottom')
  cont_disp_2.classList.add('container display')
  a.classList.add('a')

  //
  hb_img.src = "https://static.uzum.uz/nasiya/union.png"
  a.innerHTML = "Рассрочка"
  elec.innerHTML = "Электроника"
  techno.innerHTML = "Бытовая техника"
  clothes.innerHTML = "Одежда"
  shoes.innerHTML = "Обувь"
  accessory.innerHTML = "Аксессуары"
  beauty.innerHTML = "Красота и уход"
  healthy.innerHTML = "Здоровье"
  homes.innerHTML = "Товары для дома"
  repair.innerHTML = "Строительство и ремонт"
  more.innerHTML = "Ещё"

  //appending
  header_bottom.append(cont_disp_2)
  cont_disp_2.append(hb_img, a, elec, techno, clothes, shoes, accessory,
    beauty, healthy, homes, repair, more)

  header.append(header_top, header_main, header_bottom)
  place.append(header)
}