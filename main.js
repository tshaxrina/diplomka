import { reload } from "./modules/helpers";
import { getData } from "./modules/http";
// import {goods} from "./db.json"
// reload(goods)
let places = document.querySelector('.wrap .container')

getData("/goods").then((res) => {
	if (res.status === 200 || res.status === 201) {
		reload({ arr: res.data, places});
	}
});