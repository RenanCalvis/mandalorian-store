import searchItens from "./modules/searchItens.js";

const detailsImg = document.getElementById('details-image');
const detailsName = document.querySelector('.details-name-item');
const detailsRating = document.querySelector('.details-rating-value');
const detailsPrice = document.querySelector('.details-price');
const description = document.querySelector('.description');
const avaiable = document.querySelector('.isAvaiable');
const detailsItemContainer = document.querySelector('.details-item-grid');

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter')
    if (searchInput.value) 
        window.location.href = `item.html?name=${searchInput.value}`;
})

const urlParams = new URLSearchParams(location.search);
  urlParams.forEach((parametro) =>{
     showItemDetail(parametro);
  })

async function showItemDetail (itemName){

        const showItem = await searchItens(itemName);
        if(showItem.length != 0){
            detailsImg.src = showItem[0].image;
            detailsName.innerText = showItem[0].name;
            detailsRating.innerText = showItem[0].rating;
            detailsPrice.innerText = showItem[0].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$','').trim();
            description.innerText = showItem[0].description;
            if(showItem[0].isAvailable){
                avaiable.innerText = 'Em estoque';
                avaiable.style.color = 'var(--c6)';
            }else{
                avaiable.innerText = 'Indispónivel';
                avaiable.style.color = 'var(--c7)';
            }
        }else{
            detailsItemContainer.innerHTML = `<h1 class="title container">Item não encontrado...</h1>`;
        }
}