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
fetch("db.json")
    .then(res => res.json())
    .then(res => {
		console.log(res.goods);
        // reload(res, cont)
	})


