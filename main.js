import { reload, createHeader } from "./modules/helpers";
import { getData } from "./modules/http";

let cont = document.querySelector('.wrap .container')
let body = document.body

getData("/goods?id").then((res) => {
	if (res.status === 200 || res.status === 201) {
		reload(res.data, cont);
	}
});
fetch("db.json")
    .then(res => res.json())
    .then(res => {
        reload(res, cont)
	})
	
createHeader(body)
