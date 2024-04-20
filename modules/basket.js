import { getData, patchData, postData } from "./http";
import { createHeader, createFooter } from "./helpers";
import { reload } from "./helpers";
import { cart } from "./helpers";

let body = document.body

let cont = document.querySelector('.flex')
let goods = []

postData(cart).then((res) => {
    baskets(res, cont)
});

getData(cart).then((res) => {
	// if (res.status === 200 || res.status === 201) {
		baskets(res, cont)
        goods = res
	// }
});


createHeader(body)
createFooter(body)

let nosubmit_inp = document.querySelector('#search')
let count_pr = document.querySelector('.count_pr')
let f_price = document.querySelector('.f_price')
let total = document.querySelector('.final_price')
let econom = document.querySelector('.econom')
let go = document.querySelector('.go')

nosubmit_inp.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = goods.filter (res => {
        let title = res.title.toUpperCase().trim()
        if(title.includes(keyword)) {
            return res
        }
    })
    baskets(filtered, cont)
}



export function baskets(basks, place) {
    place.innerHTML = ''
    if (arr.lengh === 0) {
        place.innerHTML = `
        <img src="/public/images/shopocat 1.png" alt="">
        <h2>В корзине пока нет товаров</h2>
        <a href="/">Начните с подборок на главной странице или найдите нужный товар через поиск</a>` 
    }
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
        let pr_ed = document.createElement('p')
        let remove = document.createElement('button')
        let price = document.createElement('div')
        let price_p = document.createElement('p')
        let hr = document.createElement('hr')
        let hr_1 = document.createElement('hr')
        let hr_2 = document.createElement('hr')

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
        type.innerHTML = "type: "
        type_span.innerHTML = item.type
        color.innerHTML = "color: "
        color_span.innerHTML = "black"
        pls.innerHTML = "+"
        mns.innerHTML = "-"
        num.innerHTML = 1
        remove.innerHTML = 'Удалить'
        price_p.innerHTML = item.price + " сум"

        //appending
        product.append(hr_1, product_left, product_right, hr)
        product_left.append(pr_inp, pr_img)
        product_right.append(hr_2, pr_name, type, color, amount, pr_ed, remove, price)
        type.append(type_span)
        color.append(color_span)
        amount.append(pls, num, mns)
        price.append(price_p)
        place.append(product)

        pls.onclick = () => {
                num.innerHTML++
                price.innerHTML = +(item.price * num.innerHTML).toFixed(2) + " сум"
                pr_ed.innerHTML = item.price + "ед/сум"
            total = +(total + item.price).toFixed(2) + " сум"
        }
        mns.onclick = () => {
            if (num.innerHTML > 0) {
                console.log("inoon");
                num.innerHTML--
                price.innerHTML = +(item.price * num.innerHTML).toFixed(2) + " сум"
            }
            if (num.innerHTML === 1) {
                pr_ed.innerHTML = ""
            }
            total = +(total - item.price).toFixed(2) + " сум"
        }
        remove.onclick = () => {
            let idx = basks.indexOf(item.id)
            basks.splice(idx, 1)
            product.remove()
            baskets(basks)
        }
    }
}

