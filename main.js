let button = document.querySelector("button")
let Inputtext = document.querySelector(".Inputtext span")
let span = document.querySelector(".Advice span")
let isLoading = false
let Line = document.querySelector(".Lines2")
let Lines = document.querySelectorAll(".Line")


async function GetData() {
   
      
        Line.classList.add("loading")
        Lines.forEach(el => el.classList.add("Back"))
        Inputtext.innerHTML = 'Loading... please wait'
        button.setAttribute("disabled" , true)

        try {
            let res = await fetch("https://api.adviceslip.com/advice")
            let data = await res.json()
            button.removeAttribute("disabled")
            Inputtext.textContent = data.slip.advice
            span.textContent = data.slip.id
        } catch (error) {
            console.error('Error:', error)
        } finally {
            Lines.forEach(el => el.classList.remove("Back"))
            Line.classList.remove("loading")
           
        }
    
}




button.addEventListener("click", function () {
    GetData()
})