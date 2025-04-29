function fazerLogin(){
    document.addEventListener('DOMContentLoaded', () => {
        const loginButton = document.querySelector('.inicial')
        
        loginButton.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.href = './login/'
        })
    })
}
fazerLogin()