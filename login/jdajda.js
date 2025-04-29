function fazerLogin(){ 
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.querySelector("#email") // 
        const pass = document.querySelector("#pass")
        
        const storedEmail = localStorage.getItem('userEmail')
        const storedPass = localStorage.getItem('userPass')
        
        if (!email || !pass) {
            showToast('Erro ao encontrar campos do formulário', true)
            return
        }

        if(email.value === storedEmail && pass.value === storedPass) {
            localStorage.setItem('isAuthenticated', 'true')
           
            
            setTimeout(() => {
                window.location.href = "../index.html" 
            }, 1000)
        } else {
            
        }
    })
}   

fazerLogin()