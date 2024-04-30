import { deleteData, getData, patchData } from "./http";
import { createHeader, createFooter } from "./helpers";
import { reload } from "./helpers";
import { cart } from "./helpers";

let body = document.body

createHeader(body)
createFooter(body)

let cont = document.querySelector('.flex')
let places = document.querySelector('section .container')
let nothing = document.querySelector('.nothing_b')
let calc = document.querySelector(".l")
let goods = []

getData('/carts')
        .then((res) => {
            if (res.data.length > 0) {
                baskets(res.data, cont)
            } else {
                calc.style.display = "none"
                cont.innerHTML = ""
        nothing.innerHTML = `
        <img class="nothing_img" src="/public/images/shopocat 1.png" alt="">
        <h2 class="nothing_h2">В корзине пока нет товаров</h2>
        <a class="nothing_a" href="/">Начните с подборок на главной странице или найдите нужный товар через поиск</a>` 
            }
        })


let nosubmit_inp = document.querySelector('#search')

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
    
    
    let count_pr = document.querySelector('.count_pr')
    let total = document.querySelector('.final_price')
    let econom = document.querySelector('.econom')
    let f_price = document.querySelector('.f_price')

    let count_product = 0
    let totalPrice = 0
    let econom_pr = 0
    let f_price_pr = 0

    for (let item of basks) {
        //creating
        let product = document.createElement('div')
        let product_left = document.createElement('div')
        // let pr_inp = document.createElement('input')
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
        // pr_inp.setAttribute('type', 'checkbox')
        product.classList.add('product')
        product_left.classList.add('product_left')
        product_right.classList.add('product_right')
        amount.classList.add('amount')
        remove.classList.add('remove')
        price.classList.add('price')

        //
        pr_name.href = `/pages/dinam/?id=${item.product.id}`
        let cnt = item.count
        pr_img.src = item.product.media
        pr_name.innerHTML = item.product.title
        type.innerHTML = "type: "
        type_span.innerHTML = item.product.type
        color.innerHTML = "color: "
        color_span.innerHTML = "black"
        pls.innerHTML = "+"
        mns.innerHTML = "-"
        num.innerHTML = cnt
        remove.innerHTML = 'Удалить'
        let aksia = Math.round((item.product.price * item.product.salePercentage)/100)
        price.innerHTML = Number(item.product.price - aksia.toFixed()).toLocaleString() + ' сум'
        

        //appending
        product.append(hr_1, product_left, product_right, hr)
        product_left.append(pr_img)
        product_right.append(hr_2, pr_name, type, color, amount, pr_ed, remove, price)
        type.append(type_span)
        color.append(color_span)
        amount.append(pls, num, mns)
        price.append(price_p)
        place.append(product)
        setPrice()

        pr_img.onclick = (event) => {
            event.preventDefault();
           
          location.href = `/pages/dinam/?id=${item.product.id}`
          } 
        count_product += cnt
        f_price_pr += item.product.price * cnt
        totalPrice += item.product.salePercentage ? (item.product.price - (item.product.price / 100 * item.product.salePercentage)) : item.product.price * cnt
        econom_pr = f_price_pr - totalPrice
            

        remove.onclick = () => {
            deleteData('/carts/' + item.id)
            .then(() => {
                product.remove()
            })
            econom_pr = f_price_pr - totalPrice
            cnt--
            count_pr.innerHTML = count_product
            econom.innerHTML = Number(econom_pr.toFixed()).toLocaleString() + ' сум'
            totalPrice = totalPrice - (item.product.salePercentage ? (item.product.price - (item.product.price / 100 * item.product.salePercentage)) * cnt : item.product.price * cnt)
        }
        pls.onclick = () => {
            if (cnt < 100) {
                cnt++
                num.innerHTML = cnt
                price.innerHTML = Number((item.product.price * cnt).toFixed()).toLocaleString() + " сум"
                pr_ed.innerHTML = Number(item.product.price.toFixed()).toLocaleString() + "ед/сум"


            f_price_pr += item.product.price
            totalPrice += item.product.salePercentage ? (item.product.price - (item.product.price * item.product.salePercentage)/100) : item.product.price
            econom_pr += item.product.salePercentage ? ((item.product.price * item.product.salePercentage)/100) : 0

            setPrice()
            }
        }
        mns.onclick = () => {
            if (cnt > 1) { 
                cnt--
                num.innerHTML = cnt
                price.innerHTML = Number((item.product.price * cnt).toFixed()).toLocaleString() + " сум"
                pr_ed.innerHTML = Number(item.product.price.toFixed()).toLocaleString() + "ед/сум"

            f_price_pr += item.product.price * cnt
            totalPrice += item.product.salePercentage ? (item.product.price - (item.product.price * item.product.salePercentage)/100) : item.product.price
            econom_pr += item.product.salePercentage ? ((item.product.price * item.product.salePercentage)/100) : 0

            setPrice()
            }
        }


            function setPrice() {
                count_pr.innerHTML = count_product
                f_price.innerHTML = Number(f_price_pr.toFixed()).toLocaleString() + ' сум'
                total.innerHTML = Number(totalPrice.toFixed()).toLocaleString() + ' сум'

                econom.innerHTML = Number(econom_pr.toFixed()).toLocaleString() + ' сум'
                patchData('/carts/' + item.id, {cnt})
            }
        
    }
}

