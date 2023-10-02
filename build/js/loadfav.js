document.addEventListener('DOMContentLoaded',()=> {

    const favoritos = JSON.parse(localStorage.getItem('favorites'));
    
    loadfav(favoritos)


   
})






 async function loadfav  (favoritos)  {

  for (let index = 0; index < favoritos.length; index++) {

    const element = favoritos[index]

    const response =  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${element}`)

    const data = await response.json()

    console.log(data);
    
  }
  
}




