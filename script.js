function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let minuto = data.getMinutes();
    let hora = data.getHours();
    let diaSem = data.getDate();
    let mes = data.getMonth()
    let mesAtual = mes + 1
    let ano = data.getFullYear()
    msg.innerHTML = `Agora são ${hora}:${minuto}. 
    <p>Hoje é dia ${diaSem}/${mesAtual}/${ano}</p>`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg' 

    }
    else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src ='tarde.jpg'
    }
    else{
        img.src ='noite.jpg'
    }

    
}