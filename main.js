import { reload } from "./modules/helpers";
import { getData } from "./modules/http";
// import {goods} from "./db.json"
// reload(goods)
let goods = JSON.parse(localStorage.getItem('goods')) || null
let cont = document.querySelector('.wrap .container')

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		reload(res.data[0], cont);
	}
});
// axios.get(url + id).then((res) => reloadforProduct(res.data[0]));
// fetch(URL)
//     .then(res => res.json())
//     .then(res => {
//         reload(res)
//         goods = res
//     })

