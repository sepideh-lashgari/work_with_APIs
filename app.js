const div = document.getElementById("users")
async function getData(url){
    const response = await fetch(url);
    let users = await response;
    console.log(users);
    const finalview = users.map((user)=>(`<p>${user.name}`))
    updateDom(finalView)

}
const button = document.getElementById("button")
button.addEventListener(click,()=>{
    getData()
})
setInterval(()=>getData(""),5000)

function updateDom(view){
    div.innerHTML = view
}

