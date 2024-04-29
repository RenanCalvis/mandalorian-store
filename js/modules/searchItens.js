export default async function searchItens(item) {
    const APIResponse = await fetch(`http://localhost:3000/api/equipments?search=${item}`);
    const dataSearch = await APIResponse.json();
    return dataSearch;
}