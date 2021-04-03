let quant=document.getElementById('about');
let part1=document.getElementById('test1');
let price=document.getElementById('test0');
let proudit=document.getElementById('test8')


let colo=document.getElementById('heart')
function heart1(){
if(colo.style.color=='red'){
  colo.style.color='black'

}else{
  colo.style.color='red'
}
}





function plus(){
  quant.innerHTML=+quant.innerHTML+7000
  price.innerHTML=+price.innerHTML+7000
  proudit.innerHTML=+proudit.innerHTML+1
}
function min(){
  if(proudit==0){
  quant.innerHTML=quant.innerHTML
  price.innerHTML=+price.innerHTML
  proudit.innerHTML=proudit.innerHTML
  }else{
  quant.innerHTML=+quant.innerHTML-7000
  price.innerHTML=+price.innerHTML-7000
  proudit.innerHTML=+proudit.innerHTML-1
  }
}

function remove(){
  part1.style.display='none'
  quant.innerHTML=+quant.innerHTML-proudit.innerHTML
  }