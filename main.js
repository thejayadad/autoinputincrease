
function increase(x){
    let num = x.value.length;
    if(num >= 10){
        let length = num + "ch";
        x.style.width = length
    }
}