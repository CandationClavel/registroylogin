document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    //cookie ya expirada
    document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = "/"
})