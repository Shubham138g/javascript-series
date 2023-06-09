window.alert=function(message,timeout=null){
    const alert=document.createElement('div');
    alert.classList.add('alert');
    const alertButton=document.createElement('button');
    alertButton.innerText='OK';
    alert.setAttribute('style',`
    
    position:fixed;
    top:100px;
    left:50%;
    padding:20px;
    border-radius:10px;
    box-shadow: 0 10px 5px 0 #00000022;    
    display:flex;
    flex-direction:column;
    border:1px solid #333;
    tranform:translate(-50%);
    `);

    alertButton.setAttribute('style',`
    border:1px solid #333;
    bachground:white;
    border-radius:5px;
    padding:5px;

    
    `);

    alert.innerHTML=`<span style="padding:10px">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click',(e)=>{
        alert.remove();
    })


if(timeout !=null){
    setTimeout(()=>{
        alert.remove();
    },Number(timeout))
}

    document.body.appendChild(alert);
}