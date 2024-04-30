export function reload_slides(arr, place) {
    // place.innerHTML = '';
    for (let item of arr) {
        place.innerHTML += `
        <div class="swiper-slide">
        <div class="text">
        <h1 class="title_of_product">${item.title}</h1>
        <h2 class="price">${item.price} сум</h2>
       <p class="description">${item.description.slice(0, 500)}</p>
        </div>
        <div class="white">
        <img src="${item.media[0]}" >
        </div>
       </div>
    `;
    }
  }