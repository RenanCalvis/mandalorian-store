export default async function fetchItens(){
  const APIResponse = await fetch('http://localhost:3000/api/equipments')
  const data = await APIResponse.json();
  return data;
}
