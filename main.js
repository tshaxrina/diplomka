import { reload, createHeader, createFooter} from "./modules/helpers";
import { getData } from "./modules/http";
import { reload_slides} from "./modules/ui";
import { favreload } from "./modules/favorite";
import Swiper from "swiper/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


let cont = document.querySelector('.wrap .container')

export let toCartId = JSON.parse(localStorage.getItem("liked")) || [];
let body = document.body
let goods = []

getData('/goods')
  .then((res) => {
    if (res.status === 200 || res.status === 201) {
        goods = res.data
    reload_slides(res.data.slice(10, 20), swiper_wrapper);
    reload(res.data, cont);
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


const swiper_wrapper = document.querySelector('.swiper-wrapper');
