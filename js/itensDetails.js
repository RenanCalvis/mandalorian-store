import searchItens from "./modules/searchItens.js";

// const detailsImg = document.getElementById('details-image');
// const detailsName = document.querySelector('.details-name-item');
// const detailsRating = document.querySelector('.details-rating-value');
// const detailsPrice = document.querySelector('.details-price');
// const description = document.querySelector('.description');
// const avaiable = document.querySelector('.isAvaiable');
const title = document.querySelector('.title');

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
        // if(showItem.length != 0){
        //     detailsImg.src = showItem[0].image;
        //     detailsName.innerText = showItem[0].name;
        //     detailsRating.innerText = showItem[0].rating;
        //     detailsPrice.innerText = showItem[0].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$','').trim();
        //     description.innerText = showItem[0].description;
        // }else{
        //     detailsItemContainer.innerHTML = `<h1 class="title container">Item não encontrado...</h1>`;
        // }
        const itemDetails = document.createElement('div');

        itemDetails.classList.add('container','details-item-grid')

        if(showItem.length != 0){
            const avaiableText = showItem[0].isAvailable ? 'Em estoque' : 'Indispónivel'
            const avaiableColor = showItem[0].isAvailable ? 'var(--c6)' : 'var(--c7)'
            
            itemDetails.innerHTML = `
            <div class="details-img-container"><img src="${showItem[0].image}" alt="" id="details-image"/></div>
            <div class="details-content">
                <div class="details-value-item">
                    <span class="details-name-item" id="name">${showItem[0].name}</span>
                    <span class="details-rating-value">${showItem[0].rating}</span>
                    <div class="cost-details">
                        <span class="value-detail">R$:</span>
                        <span class="details-price">${showItem[0].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$','').trim()}</span>
                    </div>
                    <span class="description">${showItem[0].description}</span>                    
                </div>
                <div class="buy-container">
                    <span class="isAvaiable" style='color: ${avaiableColor}'>${avaiableText}</span>
                    <p>Entrega grátis para toda galaxia!</p>
                    <ul>
                        <li>Cobertura Intergaláctica.</li>
                        <li>Garantia de fábrica.</li>
                        <li>Devolução grátis.</li>
                    </ul>
                    <button class="button secundario">Adicionar ao Carrinho</button>
                    <button class="button primario">Comprar Agora</button>
                </div>
            </div>
                    `;
                }else{
                    itemDetails.innerHTML = '<h1 class="title container">Item não encontrado...</h1>';
                }
  
        title.insertAdjacentElement('afterend', itemDetails);
}