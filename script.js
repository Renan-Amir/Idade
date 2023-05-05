function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById("txtano")
    const res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verificar os dados e tente novamente!")
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {

            if (idade >= 0 && idade < 15) {
                img.setAttribute("src", "/img/masculino/Criança.png")
                res.innerHTML = `Detectamos Criança com ${idade} anos.`
            } else if (idade < 22 ) {
                img.setAttribute("src", "/img/masculino/Jovem.png")
                res.innerHTML = `Detectamos Jovem com ${idade} anos.`
            } else if (idade < 55) {
                img.setAttribute("src", "/img/masculino/Adulto.png")
                res.innerHTML = `Detectamos Adulto com ${idade} anos.`
            } else {
                img.setAttribute("src", "/img/masculino/Idoso.png")
                res.innerHTML = `Detectamos Idoso com ${idade} anos.`
            }    
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 15) {
                img.setAttribute("src", "/img/feminino/criança.png")
                res.innerHTML = `Detectamos Criança com ${idade} anos.`
            } else if (idade < 22) {
                img.setAttribute("src", "/img/feminino/jovem.png")
                res.innerHTML = `Detectamos Jovem com ${idade} anos.`
            } else if (idade < 55) {
                img.setAttribute("src", "/img/feminino/Adulta.png")
                res.innerHTML = `Detectamos Adulta com ${idade} anos.`
            } else {
                img;setAttribute("src", "/img/feminino/Idosa.png")
            }
        }
        res.style.textAlign = "center"
        img.style.padding = "10px"
        res.appendChild(img)
        
    }
}
