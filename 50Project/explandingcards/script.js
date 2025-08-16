const panels = document.querySelectorAll('.pannel')


panels.array.forEach((panel) => {
    panel.addEventListner('click' , ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses(params) {
    panel.forEach(panel =>{
        panel.classList.remove('active')
    })
}
