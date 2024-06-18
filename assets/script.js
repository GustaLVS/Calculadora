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
    const Res = document.getElementById('Res').innerHTML;
    if(Res){
    document.getElementById('Res').innerHTML = `${Res} = ${eval(Res)} <br>` 
    }else{}

    let histElem = document.createElement("p");
    histElem.classList.add("hist-calc");

    histElem.innerHTML = `${Res} = ${eval(Res)}` 
    
    const histVis = document.getElementsByClassName('itens')[0];
    histVis.append(histElem);
}
function historico(){
    const dip = document.getElementById('disp');
    const hist = document.getElementById('historico')
    hist.style.display = 'block'
    dip.style.display = 'none';
}
function volta(){
    const dip = document.getElementById('disp');
    const hist = document.getElementById('historico')
    hist.style.display = 'none'
    dip.style.display = 'block';
}