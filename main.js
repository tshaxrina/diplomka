import { reload, createHeader, createFooter} from "./modules/helpers";
import { getData } from "./modules/http";
import { reload_slides} from "./modules/ui";
import { MakeRequest } from "./modules/http";
import Swiper from "swiper/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

        reload_slides(res.data.slice(0, 10), swiper_wrapper);

       
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


const swiper_wrapper = document.querySelector('.swiper-wrapper');
const helpers = new MakeRequest();
helpers.getData('/goods')
  .then(res => {
    reload_slides(res.slice(0, 10), swiper_wrapper);

    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  });