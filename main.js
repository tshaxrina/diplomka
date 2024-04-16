import { reload, createHeader, createFooter} from "./modules/helpers";
import { getData } from "./modules/http";

let cont = document.querySelector('.wrap .container')

let body = document.body
let goods = []


let furniture = []
let TV = []
let PC = []
let audio = []
let kitchen = []

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		reload(res.data, cont);
		goods = res.data
        massiv(goods)
	}
});
createHeader(body)
createFooter(body)

let nosubmit_inp = document.querySelector('#search')


nosubmit_inp.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = goods.filter (res => {
        let title = res.title.toUpperCase().trim()
        if(title.includes(keyword)) {
            return res
        }
    })
    reload(filtered, cont)
}

function massiv(arr) {
    for (let item of arr) {
        if (item.type == "furniture") {
            furniture.push(item)
        }
        if (item.type == "TV") {
            TV.push(item)
        }
        if (item.type == "PC") {
            PC.push(item)
        }
        if (item.type == "audio") {
            audio.push(item)
        }
        if (item.type == "kitchen") {
            kitchen.push(item)
        }
    }
}



