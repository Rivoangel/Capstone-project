document.addEventListener("DOMContentLoaded", ()=>{

console.log("ReyaAga Website Loaded");

});
function openPopup(id){
    document.getElementById(id).classList.add("active");
}

function closePopup(id){
    document.getElementById(id).classList.remove("active");
}

// Close when clicking outside popup
document.addEventListener("click", function(e){
    const overlays = document.querySelectorAll(".overlay");

    overlays.forEach(overlay=>{
        if(e.target === overlay){
            overlay.classList.remove("active");
        }
    });
});
