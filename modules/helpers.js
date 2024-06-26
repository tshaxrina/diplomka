import { postData, getData, deleteData } from "./http";


export let cart = JSON.parse(localStorage.getItem("liked")) || [];

export function reload(arr, place) {
  place.innerHTML = ''
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
      i_name.href = `/pages/dinam/?id=${i.id}`
      itop_img.src = i.media[0]
      b_img.src = "/icons/free-icon-heart-3502230.png"
      black_fr.innerHTML = "Акция"
      i_name.innerHTML = i.title
      star.src = "/icons/free-icon-star-8358826.png"
      i_rating.innerHTML = i.rating
      month.innerHTML = Number(Math.round(i.price/12).toFixed()).toLocaleString() + ' сум/мес'
      old_price.innerHTML = Number(i.price.toFixed()).toLocaleString() + ' сум'
      let aksia = Math.round((i.price * i.salePercentage)/100)
      new_price.innerHTML = Number(i.price - aksia.toFixed()).toLocaleString() + ' сум'
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

      getData(`/wishes/?product_id=${i.id}`)
                .then((res) => {
                    if (res.data.length === 0) {
                        b_img.src = "/icons/free-icon-heart-3502230.png"
                    } else if (res.data.length === 1) {
                        b_heart.classList.add('liked')
                        b_img.src = "/icons/Vector.png"
                    }
                })

      b_heart.onclick = () => {
        if(!b_heart.classList.contains('liked')) {
          postData('/wishes', {
            product_id: i.id,
            product: i
        })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                  b_heart.classList.add('liked')
                  b_img.src = "/icons/Vector.png"
                }
            })
      } else {
         getData(`/wishes/?product_id=${i.id}`)
          .then((res) => {
              deleteData(`/wishes/${res.data[0].id}`)
                  .then(() => {
                    b_heart.classList.remove('liked')
                    b_img.src = "/icons/free-icon-heart-3502230.png"
                  })
          })
          
      }
  }

      b_basket.onclick = () => {
          if(!b_basket.classList.contains('incart')) {
            postData('/carts', {
              product_id: i.id,
              count: 1,
              product: i
            })
              .then((res) => {
                  if (res.status === 200 || res.status === 201) {
                    b_basket.classList.add('incart')
                    alert("Товар добавлен в корзину!")
                  }
              })
      } else {
        alert('Уже в корзине!')
      }
      

      itop_img.onclick = (event) => {
        event.preventDefault();
       
      location.href = `/pages/dinam/?id=${i.id}`
      }      
    } }
  }

export function createHeader(place) {
  //creating
  let header = document.createElement('header')
  //header_top
  let header_top = document.createElement('div')
  let container = document.createElement('div')
  let right = document.createElement('div')
  let right_a = document.createElement('a')
  let right_a_img = document.createElement('a')
  let loc = document.createElement('h3')
  // let loc_span = document.createElement('span')
  let loc_span = document.createElement('select')
  let samarkand = document.createElement('option')
  let tashkent = document.createElement('option')
  let navoi = document.createElement('option')
  let termez = document.createElement('option')
  let jizzax = document.createElement('option')
  let namangan = document.createElement('option')
  let buxoro = document.createElement('option')
  let fargona = document.createElement('option')
  let andijon = document.createElement('option')
  let karshi = document.createElement('option')
  let xorezm = document.createElement('option')
  let sirdaryo = document.createElement('option')

  samarkand.value = "Самарканд"
  tashkent.value = "Ташкент"
  sirdaryo.value = "Сырдарья"
  namangan.value = "Наманган"
  buxoro.value = "Бухоро"
  xorezm.value = "Хоразм"
  karshi.value = "Карши"
  andijon.value = "Андижон"
  fargona.value = "Фаргона"
  jizzax.value = "Джиззах"
  termez.value = "Термез"
  navoi.value = "Навои"

  samarkand.innerHTML = "Самарканд"
  tashkent.innerHTML = "Ташкент"
  sirdaryo.innerHTML = "Сырдарья"
  namangan.innerHTML = "Наманган"
  buxoro.innerHTML = "Бухоро"
  xorezm.innerHTML = "Хоразм"
  karshi.innerHTML = "Карши"
  andijon.innerHTML = "Андижон"
  fargona.innerHTML = "Фаргона"
  jizzax.innerHTML = "Джиззах"
  termez.innerHTML = "Термез"
  navoi.innerHTML = "Навои"


  let punkt = document.createElement('h3')

  let center = document.createElement('div')
  let grey = document.createElement('p')
  let blue = document.createElement('p')

  let left = document.createElement('div')
  let q_a = document.createElement('a')
  let my_order = document.createElement('a')
  let lang = document.createElement('a')
  let lang_p = document.createElement('p')
  let lang_img = document.createElement('img')

  //styling header_top
  header_top.classList.add('header_top')
  container.classList.add('container')
  right.classList.add('right')
  center.classList.add('center')
  grey.classList.add('grey')
  blue.classList.add('blue')
  left.classList.add('left') 
  loc_span.classList.add('loc_span')

  //
  right_a_img.src = "/icons/free-icon-position-3249692.png"
  loc.innerHTML = "Город:"
  // loc_span.innerHTML = "Ташкент"
  punkt.innerHTML = "Пункт выдачи"
  grey.innerHTML = "Доставим ваш заказ бесплатно - всего за 1 день!"
  blue.innerHTML = "Продавайте на Uzum"
  q_a.innerHTML = "Вопрос-ответ"
  my_order.innerHTML = "Мои заказы"
  lang_p.innerHTML = "Русский"
  lang_img.src = "/icons/free-icon-russia-323300.png"

  //apending
  header_top.append(container)
  container.append(right, center, blue, left)
  right.append(right_a, loc, punkt)
  right_a.append(right_a_img)
  loc.append(loc_span)
  loc_span.append(samarkand, tashkent, namangan, fargona, jizzax, buxoro, xorezm, karshi, sirdaryo, andijon, termez, navoi)
  center.append(grey)
  left.append(q_a, my_order,lang)
  lang.append(lang_img, lang_p)

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


  nosubmit_inp.setAttribute('id', 'search')
  nosubmit_inp.setAttribute('placeholder', "Искать товары и категории")
  nosubmit_inp.setAttribute('type', 'search')
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
  cont_disp.classList.add('container')
  cont_disp.classList.add('display')
  logo.classList.add('logo')
  catalog.classList.add('catalog')
  search.classList.add('search')
  nosubmit.classList.add('nosubmit')
  nosubmit_inp.classList.add('nosubmit')
  links.classList.add('links')

  //
  logo_img.src = "/icons/uzum.png"
  logo_a.href = "/"
  catalog_btn.innerHTML = "Каталог"
  name_p.innerHTML = "Шахрина"
  name_img.src = "/icons/free-icon-avatar-6386976.png"
  fav_p.innerHTML = "Избранное"
  fav_img.src = "/icons/free-icon-heart-3502230.png"
  bask_p.innerHTML = "Корзина"
  bask_img.src = "/icons/free-icon-shopping-bag-4903482.png"
  bask_a.href = "/pages/korzina/"
  fav_a.href = "/pages/favorite/"

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
  cont_disp_2.classList.add('container')
  cont_disp_2.classList.add('display')
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
  place.prepend(header)

} 

export function createFooter(place) {
  //creating
  let footer = document.createElement('footer')
  let grid = document.createElement('div')
  let cont_disp = document.createElement('div')
  let gr = document.createElement('div')
  let about = document.createElement('p')
  let pv = document.createElement('a')
  let vkn = document.createElement('a')
  let gr_1 = document.createElement('div')
  let user = document.createElement('p')
  let contact = document.createElement('a')
  let qa = document.createElement('a')
  let gr_2 = document.createElement('div')
  let for_pr = document.createElement('p')
  let sell = document.createElement('a')
  let for_sell = document.createElement('a')
  let gr_3 = document.createElement('div')
  let social = document.createElement('div')
  let instl = document.createElement('p')
  let app_st = document.createElement('a')
  let app_st_img = document.createElement('img')
  let google = document.createElement('a')
  let google_img = document.createElement('img')
  let social_1 = document.createElement('div')
  let soc_p = document.createElement('p')
  let inst = document.createElement('a')
  let inst_img = document.createElement('img')
  let tg = document.createElement('a')
  let tg_img = document.createElement('img')
  let youtube = document.createElement('a')
  let youtube_img = document.createElement('img')
  let fcbook = document.createElement('a')
  let fcbook_img = document.createElement('img')

  let container = document.createElement('div')
  let hr = document.createElement('hr')
  let foot = document.createElement('div')
  let left = document.createElement('div')
  let sogl = document.createElement('p')
  let sogll = document.createElement('p')
  let right = document.createElement('div')
  let right_a = document.createElement('a')

  //styling
  grid.classList.add('grid')
  grid.classList.add('grid')
  cont_disp.classList.add('container')
  cont_disp.classList.add('display')
  gr.classList.add('gr')
  gr_1.classList.add('gr')
  gr_2.classList.add('gr')
  gr_3.classList.add('gr')
  social.classList.add('social')
  social_1.classList.add('social')

  container.classList.add('container')
  foot.classList.add('foot')
  left.classList.add('left')
  right.classList.add('right')

  //
  about.innerHTML = "О нас"
  pv.innerHTML = "Пункт выдачи"
  vkn.innerHTML = "Вакансии"
  user.innerHTML = "Пользователям"
  contact.innerHTML = "Связаться с нами"
  qa.innerHTML = "вопрос-ответ"
  for_pr.innerHTML = "Для предпринимателей"
  sell.innerHTML = "Продавайте на Uzum"
  for_sell.innerHTML = "Вход для продавца"
  instl.innerHTML = "Скачать приложение"
  app_st_img.src = "/icons/free-icon-apple-logo-747.png"
  google_img.src = "/icons/free-icon-google-play-888857.png"
  soc_p.innerHTML = "Uzum в соцсетях"
  inst_img.src = "/icons/free-icon-instagram-2111463.png"
  tg_img.src = "/icons/free-icon-telegram-3488463.png"
  youtube_img.src = "/icons/free-icon-youtube-1384060.png"
  fcbook_img.src = "/icons/free-icon-facebook-3955013.png"

  sogl.innerHTML = "Соглашение о конфиденциальности"
  sogll.innerHTML = "Пользовательское соглашение"
  right_a.innerHTML = "«2024© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»"

  //appending
  footer.append(grid, container)
  grid.append(cont_disp)
  cont_disp.append(gr, gr_1, gr_2, gr_3)
  gr.append(about, pv, vkn)
  gr_1.append(user, contact, qa)
  gr_2.append(for_pr, sell, for_sell)
  gr_3.append(social, social_1)
  social.append(instl, app_st, "App Store", google, "Google play")
  app_st.append(app_st_img)
  google.append(google_img)
  social_1.append(soc_p, inst, tg, youtube, fcbook)
  inst.append(inst_img)
  tg.append(tg_img)
  youtube.append(youtube_img)
  fcbook.append(fcbook_img)
  container.append(hr, foot)
  foot.append(left, right)
  left.append(sogl, sogll)
  right.append(right_a)

  place.append(footer)
}

