import { reload, createHeader, createFooter } from "./modules/helpers";
import { getData } from "./modules/http";

let cont = document.querySelector('.wrap .container')
let body = document.body
let inp_search = document.querySelector('#search')

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		reload(res.data, cont);
	}
});
// fetch("db.json")
//     .then(res => res.json())
//     .then(res => {
//         reload(res, cont)
// 	})
	
createHeader(body)
createFooter(body)

inp_search.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = goods.filter (res => {
        let title = res.title.toUpperCase().trim()
        if(title.includes(keyword)) {
            return res
        }
    })
    reload(filtered, cont)
}