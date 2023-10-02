
const List = localStorage.getItem('favorites') || []

localStorage.setItem('favorites',JSON.stringify(List))


 const addDrink = (id) => {

List.push(id)

localStorage.setItem('favorites',JSON.stringify(List))

}


const delDrink =(id)=> {

   const newDrinks =  List.filter((drink) => drink != id )

   localStorage.setItem('favorites',JSON.stringify(newDrinks))



}


