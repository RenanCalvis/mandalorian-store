const imgItem = document.querySelectorAll('.img-item');
const nameItem = document.querySelectorAll('.name-item');
const priceItem = document.querySelectorAll('.price');
const ratingItem = document.querySelectorAll('.rating-value');

const listItensContainer = document.querySelector('.list-itens');

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', async ()=> {
  const searchItem = searchInput.value;
  console.log(searchItem);
  if(searchItem){
    try {
      const searchResults = await searchItens(searchItem);
      listItensContainer.innerHTML = '';
      
      console.log(searchResults.length)
      if(searchResults.length != 0){
        searchResults.forEach(item =>{
          createSellItem(item);
        })
      }else{
        listItensContainer.innerHTML = `<h1 class="title container">Item não encontrado...</h1>`
      }
    } catch (error) {
      console.error("Erro ao buscar itens pesquisados:", error);
    }
  }else{
    fetchAndDisplayItens();
  }
})

function createSellItem(item) {
  const sellItem = document.createElement('div');
  sellItem.classList.add('sell-item');

  sellItem.innerHTML = `
    <div class="img-container">
      <img src="${item.image}" alt="Item" class="img-item" />
    </div>
    <div class="content-infos-container">
      <span class="name-item">${item.name}</span>
      <div class="infos-item">
        <span class="rating-value">${item.rating}</span>
        <div class="value-item">
        <span class="value-detail">R$:</span>
          <span class="price">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$','')}</span>
        </div>
      </div>
    </div>
  `;

  listItensContainer.appendChild(sellItem);

  
}

async function fetchAndDisplayItens() {
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

const fetchItens = async () => {
  const APIResponse = await fetch('http://localhost:3000/api/equipments')
  const data = await APIResponse.json();
  return data;
}

const searchItens = async (item) => {
  const APIResponse = await fetch(`http://localhost:3000/api/equipments?search=${item}`);
  const dataSearch = await APIResponse.json();
  return dataSearch;
}
fetchItens();
fetchAndDisplayItens();


