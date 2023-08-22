document.addEventListener("DOMContentLoaded", function(){
    let texto = localStorage.getItem('entrada');
    document.getElementById('data').innerHTML = texto;
});