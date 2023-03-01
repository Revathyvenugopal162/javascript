function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function showName(autherName){
    document.getElementById('name').textContent = autherName;
}

const header = document.getElementById('message');
header.style.color ='#FFF';
header.style.fontWeight ='800';

const button = document.getElementById("see-review");
button.addEventListener('click',function(){
    const review = document.getElementById("review");
    if (review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent= "Hide REVIEW";
    }
    else{
        review.classList.add('d-none');
        button.textContent= "SEE REVIEW";
    }
});


