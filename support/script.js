const btns = document.querySelectorAll(".question-btn");
const article = document.querySelectorAll(".question");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
        article.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text");
                console.log(item.classList);
            }
        })
    });
})