function scrollToForm(){

document.getElementById("enroll").scrollIntoView()

}

const scriptURL="https://script.google.com/macros/s/AKfycbxYSFiUw-ncwGHp86-AdsivhNzWaf04ZjwxeDsm2Mq1D2ghfIOALhJt0oralKH4FAbf/exec"

const form=document.getElementById("form")

form.addEventListener("submit",function(e){

e.preventDefault()

fetch(scriptURL,{
method:"POST",
body:new FormData(form)
})
.then(response=>{
alert("Form Submitted Successfully")
form.reset()
})
.catch(error=>{
alert("Error submitting form")
})

})