import { reload, createHeader, createFooter} from "./modules/helpers";
import { getData } from "./modules/http";

let cont = document.querySelector('.wrap .container')

let body = document.body
let goods = []

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		reload(res.data, cont);
		goods = res.data
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

