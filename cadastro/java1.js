function usercadastro(){
const form= document.querySelector("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.querySelector("#emai")
        const pass = document.querySelector("#pass")
        
        
      window.location.href = "/login/"
})
}
usercadastro()