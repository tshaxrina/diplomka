import { getData } from "./http";
import { createHeader, createFooter } from "./helpers";

let body = document.body

let cont = document.querySelector('main')

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		createDinam(res.data, cont)
	}
});

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
    left_img.src = product.media[0]
    name_pr.innerHTML = product.title
    price_pr.innerHTML = product.price
    pls.innerHTML = "+"
    mns.innerHTML = "-"
    num.innerHTML = "1"
    color_p.innerHTML = "Color:"
    type.innerHTML = "Type: "
    type_span.innerHTML = product.type
    add_bask.innerHTML = "Добавить в корзину"
    add_fav.innerHTML = "Добавить в избранное"
    about.innerHTML = "Описание товара"
    about_p.innerHTML = product.description
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
 }
}