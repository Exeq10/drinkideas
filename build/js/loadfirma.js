document.addEventListener('DOMContentLoaded', ()=> {


    /*  footer */


const footer = document.querySelector('.footer')

const  firma  = document.createElement('div')
firma.classList.add('firma')

firma.innerHTML = `<p> Powered by </p> <a href= "https://codexloop.tech/" target="_blank" ><img  class ='img-firma'  src= '/build/img/firmablanca.svg'     />   </a>  `

footer.appendChild(firma)
})