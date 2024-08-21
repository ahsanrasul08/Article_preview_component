const refToShareBtn=document.querySelector(".card__profile__shareIcon__btn");
const refToShareTray=document.querySelector(".card__profile__shareIcon__tray");
const refToShareIcons=document.querySelectorAll(".shareIcon__tray__icon");

refToShareBtn.addEventListener("click",(e)=>{
    refToShareTray.classList.toggle("hide_share_icon_tray");
})

refToShareIcons.forEach((icon)=>icon.addEventListener("click",()=>{
    if(refToShareTray.classList.contains("hide_share_icon_tray")){
        refToShareTray.classList.remove("hide_share_icon_tray");
    }
}))
