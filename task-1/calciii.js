
let string="";
let flag=0;
let display=document.querySelector('.display');
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='ENTER'){
            if(flag==1){string=eval(Math.sqrt(string.slice(1)));
            flag=0;}
            else{
                string=eval(string);
            }
            document.querySelector('input.display').value=string;
        }
        else if(e.target.innerHTML=='del'){
            string=string.slice(0,-1);
            document.querySelector('input.display').value=string;
        }
        else if(e.target.innerHTML=='clear'){
            string=""
            document.querySelector('input.display').value=string;
        }
        else if(e.target.innerHTML=='√'){
            string=string+'√';
            flag=1;
            document.querySelector('input.display').value=string;}
        else{
             if(e.target.innerHTML=='X'){string=string+'*';}
            else if(e.target.innerHTML=='÷'){string=string+'/';}
            else{
            string = string +e.target.innerHTML;
            }
            document.querySelector('input.display').value=string;
        }
        
    })
})