var disp = document.getElementById('disp');

function ud(n){
    if(disp.innerHTML==0){
        disp.innerHTML='';
    }
    disp.innerHTML+=n;
}

function clc(){
    disp.innerHTML='0';
}
function ans(){
   
    
    c=eval(disp.innerHTML);
    disp.innerHTML=c;
   
}
function canbachai(){
    disp.innerHTML = Math.sqrt(eval(disp.innerHTML));
}

function giaithua(x){
    
return disp.innerHTML= (x<2)?1:x*giaithua(x-1);

}

function phantram(){
    disp.innerHTML = eval(disp.innerHTML)/100;
}

function binhphuong(){
disp.innerHTML = Math.pow(eval(disp.innerHTML),2);
}


document.getElementById('7').addEventListener('click',function(){ud(7);})
document.getElementById('8').addEventListener('click',function(){ud(8);})
document.getElementById('9').addEventListener('click',function(){ud(9);})
document.getElementById('6').addEventListener('click',function(){ud(6);})
document.getElementById('5').addEventListener('click',function(){ud(5);})
document.getElementById('4').addEventListener('click',function(){ud(4);})
document.getElementById('3').addEventListener('click',function(){ud(3);})
document.getElementById('2').addEventListener('click',function(){ud(2);})
document.getElementById('1').addEventListener('click',function(){ud(1);})
document.getElementById('0').addEventListener('click',function(){ud(0);})

document.getElementById('dec').addEventListener('click',function(){ud('.');})

document.getElementById('add').addEventListener('click',function(){ud('+');})

document.getElementById('subtract').addEventListener('click',function(){ud('-');})

document.getElementById('multiply').addEventListener('click',function(){ud('*');})

document.getElementById('divide').addEventListener('click',function(){ud('/');})

document.getElementById('canbachai').addEventListener('click',function(){canbachai();})

document.getElementById('giaithua').addEventListener('click',function(){giaithua(parseInt(disp.innerHTML));})

document.getElementById('phantram').addEventListener('click',function(){phantram();})

document.getElementById('binhphuong').addEventListener('click',function(){binhphuong();})

document.getElementById('clear').addEventListener('click',function(){clc();})

document.getElementById('ans').addEventListener('click',function(){ans();})
