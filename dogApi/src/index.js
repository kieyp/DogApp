async function start (){
  const response=await fetch("https://dog.ceo/api/breeds/list/all")
  const data=await response.json()
  
  createBreedList(data.message)
  console.log(data.message)
}
start()


function createBreedList(breedlist){
  document.getElementById("breed").innerHTML=`
  <select onchange="loadIMages(this.value)">
  <option>Choose a Dog Breed</option>
  ${Object.keys(breedlist).map(function(breed){
    return `<option>${breed}</option>`
    
  }).join("")}
</select>
  `
}

async function loadIMages(breed){
  if(breed !="Choose a Dog Breed"){
    const response=await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data=await response.json()
  }
}



















fetch ("https://dog.ceo/api/breeds/list/all")