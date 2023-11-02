function fetchData(){
 fetch('https://reqres.in/api/users').then(response=>{
  console.log(response)
  if( ! response.ok){
    throw Error('ERROR')
  }
  return response.json()
 }).then(data=>{
  console.log(data.data);
const html=data.data.map(user=>{
  return `
  <div class ="user">
  <p>Name:${user.first_name} ${user.last_name}</p>
  <p>Email:${user.email}</p>
  </div>`
}).join("")
console.log(html)
  document.querySelector('#app').insertAdjacentHTML("afterbegin",html)

 }).catch(error=>{
  console.log(error)
 });
}
fetchData();