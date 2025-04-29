function fazerCadastro() {
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.querySelector("#email").value
      const pass = document.querySelector("#pass").value

      if (email && pass) {
         
          localStorage.setItem('userEmail', email)
          localStorage.setItem('userPass', pass)
          
          
          
          
          
          window.location.href = "../login/index.html"
      } else {
        
      }
  })
}

fazerCadastro()