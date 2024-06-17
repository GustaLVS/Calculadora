function insert(num){
    let dado = document.getElementById('Res').innerHTML;
    document.getElementById('Res').innerHTML =  dado + num;
}
function Del(){
    let result = document.getElementById('Res').innerHTML;
    document.getElementById('Res').innerHTML = result.substring(0, result.length -1);
}
function Limpar(){
    document.getElementById('Res').innerHTML = "";  
}
function Calc(){
    var Res = document.getElementById('Res').innerHTML;
    if(Res){
    document.getElementById('Res').innerHTML = eval(Res)
    }else{}
}
