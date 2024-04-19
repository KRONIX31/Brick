// let deferredPrompt 
// window.addEventListener('beforeinstallprompt', (e) => {
//     console.log(1)
//     e.preventDefault()
//     deferredPrompt = e
//     showInAppInstallPromotion()
// })
// console.log(deferredPrompt)

// Var HEADER
const header = document.querySelector(".header")
const burger_menu = document.querySelector(".icon_menu")
const mobile_menu_body = document.querySelector(".mobile_menu_body")
const navbar_list_mobile = document.querySelector(".navbar_list_mobile")
const navbar_list_mobile_li = navbar_list_mobile.querySelectorAll("li")
let mobile_menu_status
// Var MAIN
const sections = document.querySelectorAll("section")

window.addEventListener('scroll',()=>{
    let max_height = window.document.documentElement.scrollHeight - window.innerHeight
    document.documentElement.style.setProperty('--header_poloska', `${window.scrollY / max_height * 100}%`)
})
sections[0].style.paddingTop = `${header.offsetHeight}px`


function toggle_mobile_menu(){
    if(mobile_menu_body.style.visibility == "hidden"){
        mobile_menu_body.style.visibility = "visible"
        mobile_menu_status = "open"
    } else{
        mobile_menu_body.style.visibility = "hidden"
        mobile_menu_status = "close"
    }
    burger_menu.classList.toggle("icon_menu_active")
    navbar_list_mobile_li.forEach(li => {
        if(li.classList.contains("active")){
            li.style.cssText = 'transition: no-transition'
        } else{
            li.style.cssText = ''
        }
        li.classList.toggle("active")
    })
    setTimeout(()=>{
        mobile_menu_body.classList.toggle("mobile_menu_body_active")
    }, 40)
}


burger_menu.addEventListener("click", (e)=>{
    toggle_mobile_menu()
})
document.addEventListener('click', (e) => {
    if(mobile_menu_status == "open"){
        if(!(e.target == header || header.contains(e.target))){
            toggle_mobile_menu()
        }
    }
    console.log(mobile_menu_status)
})

let anchorlinks = document.querySelectorAll('a[href^="#"]')
for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        window.scrollTo({
            behavior: 'smooth',
            top: target.offsetTop - header.offsetHeight,
            left: 0
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}