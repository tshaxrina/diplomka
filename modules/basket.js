import { getData } from "./http";
import { createHeader, createFooter } from "./helpers";

let body = document.body

let cont = document.querySelector('.flex')

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		baskets(res.data, cont)
	}
});

createHeader(body)
createFooter(body)

function baskets(basks, place) {
    place.innerHTML = ''
    for (let item of basks) {
        //creating
        let product = document.createElement('div')
        let product_left = document.createElement('div')
        let pr_inp = document.createElement('input')
        let pr_img = document.createElement('img')
        let product_right = document.createElement('div')
        let pr_name = document.createElement('a')
        let type = document.createElement('p')
        let type_span = document.createElement('span')
        let color = document.createElement('p')
        let color_span = document.createElement('span')
        let amount = document.createElement('div')
        let pls = document.createElement('button')
        let mns = document.createElement('button')
        let num = document.createElement('p')
        let remove = document.createElement('button')
        let price = document.createElement('div')
        let price_p = document.createElement('p')

        //styling
        pr_inp.setAttribute('type', 'checkbox')
        product.classList.add('product')
        product_left.classList.add('product_left')
        product_right.classList.add('product_right')
        amount.classList.add('amount')
        remove.classList.add('remove')
        price.classList.add('price')

        //
        pr_img.src = item.media
        pr_name.innerHTML = item.title
        type.innerHTML = "type:"
        type_span.innerHTML = item.type
        color.innerHTML = "color:"
        color_span.innerHTML = "black"
        pls.innerHTML = "+"
        mns.innerHTML = "-"
        num.innerHTML = 1
        remove.innerHTML = 'Удалить'
        price_p.innerHTML = item.price

        //appending
        product.append(product_left, product_right)
        product_left.append(pr_inp, pr_img)
        product_right.append(pr_name, type, color, amount, remove, price)
        type.append(type_span)
        color.append(color_span)
        amount.append(pls, num, mns)
        price.append(price_p)
        place.append(product)
    }
}

let count_pr = document.querySelector('.count_pr')
let f_price = document.querySelector('.f_price')
let final_price = document.querySelector('.final_price')
let econom = document.querySelector('.econom')
let go = document.querySelector('.go')