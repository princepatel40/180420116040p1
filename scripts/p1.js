let remove = document.getElementById('decrment');
let plus = document.getElementById('add');
let reset = document.getElementById('reset');
let int =document.getElementById('counter');
let integer = 0;
plus.addEventListener('click',function(){
    integer++;
    int.innerHTML = integer;
})
remove.addEventListener('click',function () {
    integer--;
    int.innerHTML = integer;    
})
reset.addEventListener('click',function(){
    integer=0;
    int.innerHTML = integer;
})
