function verificar() {
    var foto = document.getElementById('imagem')
    var msg = document.querySelector('div#res')
    var canD = document.getElementById('radd')
    var canQ = document.getElementById('radq')
    var canS = document.getElementById('rads')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (canD.checked) {
        msg.innerHTML = ' Total de votos: 8.225 Mil<br> 21.5% dos votos<br> <strong> "Terceiro mais votado</strong>"'
        img.setAttribute('id','foto')
        img.setAttribute('src', 'dilma.jpg')
    } else if (canQ.checked) {
        msg.innerHTML = 'Total de votos: 10.950 Mil<br> 28,5% dos votos<br> <strong> "Segundo mais votado</strong>'
    } else if (canS.checked) {
        msg.innerHTML = 'Total de votos: 19.175 Mil<br> 50% dos votos<br> <strong> " Vencedor"</strong>'
    } 
       
}

        

    