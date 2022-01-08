function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 15) {
                //criança
                img.src = 'menino.jpg'
            } else if (idade < 21) {
                //jovem
                img.src = 'adolescento.jpg'
            } else if (idade < 50) {
                //adulto
                img.src = 'homemjovem.jpg'
            } else {
                //idoso
                img.src = 'homemvelho.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <=15) {
            //criança
            img.src = 'menina.jpg'
            } else if (idade < 21) {
                //jovem 
                img.src = 'adolescenta.jpg'
            } else if (idade <50) {
                //adulto
                img.src = 'mulherjovem.jpg'
            } else {
                //idoso
                img.src = 'mulhervelha.jpg'
             
            }
        }  
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} de ${idade} anos`
    } 
    
}