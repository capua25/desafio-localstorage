let input = document.getElementById('inputText')
document.getElementById('buttonText').addEventListener("click", function(){
    localStorage.setItem('entrada', input.value);
    input.value='';
});