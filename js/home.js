import searchItens from "./modules/searchItens.js";
import fetchItens from "./modules/fetchItens.js";

const listItensContainer = document.querySelector('.list-itens');

const searchInput = document.getElementById('search-input');


searchInput.addEventListener('input', async ()=> {
  const searchItem = searchInput.value;
  if(searchItem){
      const searchResults = await searchItens(searchItem);
      listItensContainer.innerHTML = '';
      
      if(searchResults.length != 0){
        searchResults.forEach(item =>{
          createSellItem(item);
        })
      }else{
        listItensContainer.innerHTML = `<h1 class="title container">Item não encontrado...</h1>`
      }
  }else{
    displayItens();
  }
})

function createSellItem(item) {
  const sellItem = document.createElement('div');
  sellItem.classList.add('sell-item');

  sellItem.innerHTML = `
  <a href="item.html?name=${item.name}">
      <div class="img-container">
        <img src="${item.image}" alt="Item" class="img-item" />
      </div>
  
      <div class="content-infos-container">
        <span class="name-item">${item.name}</span>
        <div class="infos-item">
          <span class="rating-value">${item.rating}</span>
          <div class="value-item">
          <span class="value-detail">R$:</span>
            <span class="price">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$','').trim()}</span>
          </div>
        </div>
      </div>
    </a>
  `;
  listItensContainer.appendChild(sellItem);
}

const displayItens = async () => {
  try{
    listItensContainer.innerHTML = '';
    const itens = await fetchItens();
    itens.forEach(item =>{
      createSellItem(item);
    });
  }catch(error){
    console.error("Erro ao buscar itens:",error);
  }
}
displayItens();
