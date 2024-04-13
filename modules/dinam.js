export function createDinam(products) {
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
    let color_btn = document.createElement("button")
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
    left.classList.add('left')
    right.classList.add('right')
    amount.classList.add('amount')
    color.classList.add('color')
    type.classList.add('type')
    btns.classList.add('btns')
    add_bask.classList.add('add_bask')
    add_fav.classList.add('add_fav')
    description.classList.add('description')
    pr.classList.add('products')

    //
    left_img.src = "/icons/oil.jpg"
    name_pr.innerHTML = "Масло"
    price_pr.innerHTML = "30 000 сум"
    pls.innerHTML = "+"
    mns.innerHTML = "-"
    num.innerHTML = "1"
    color_p.innerHTML = "Color:"
    color_btn.innerHTML = "White"
    type.innerHTML = "Type: "
    type_span.innerHTML = "furniture"
    add_bask.innerHTML = "Добавить в корзину"
    add_fav.innerHTML = "Добавить в избранное"
    about.innerHTML = "Описание товара"
    about_p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptatem rerum dolores deserunt? Quas delectus dicta, hic dignissimos non, voluptatibus, consectetur omnis molestiae veritatis ipsam impedit? Quod, reiciendis odit facere dolorem optio quidem. Impedit, dolorem? Voluptatibus aliquid sunt, illum a distinctio animi atque est! Sit repellendus nemo voluptas exercitationem laudantium."
    pr_h3.innerHTML = "Похожие товары"

    //appending
    container.append(tovar, description, pr)
    tovar.append(left, right)
    left.append(left_img)
    right.append(name_pr, price_pr, amount, color, type, btns)
    amount.append(pls, num, mns)
    color.append(color_p, color_btn)
    type.append(type_span)
    btns.append(add_bask, add_fav)
    description.append(about, about_p)
    pr.append(pr_h3)
 }
}