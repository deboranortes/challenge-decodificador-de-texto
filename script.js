document.addEventListener('DOMContentLoaded', function () {
    var campoTexto = document.getElementById('areaTexto');
    var btnCriptografar = document.getElementById('btnCriptografar');
    var btnDescriptografar = document.getElementById('btnDescriptografar');
    var textoDestino = document.getElementById('areaCopia');
    var btnCopiar = document.getElementById('botaoCopiar');
    var campoCopia = document.getElementById('areaCopia');
    var conteudoAreaCopia = document.querySelector('.conteudo__area-de-copia');
    var conteudoMensagens = document.querySelector('.conteudo__principal__mensagens');
    var logoAlura = document.querySelector('.logo-alura');

    logoAlura.addEventListener('click', function () {
        location.reload();
    });

    function verificarTexto() {
        var textoNoCampo = campoTexto.value.trim();
        btnCriptografar.disabled = textoNoCampo === '';
        btnDescriptografar.disabled = textoNoCampo === '';
    }

    campoTexto.addEventListener('input', function () {
        this.value = this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        this.value = this.value.replace(/[^\w\s]/gi, "");


        verificarTexto();
    });

    btnCriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            var textoCriptografado = campoTexto.value;

            var textoModificado = textoCriptografado.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo');

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        }
    });

    btnDescriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            var textoDescriptografado = campoTexto.value;

            var textoModificado = textoDescriptografado.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo');

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        }
    });

    btnCopiar.addEventListener('click', function () {
        if (campoCopia.value.length > 0) {
            campoCopia.select();
            campoCopia.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }
    });

    verificarTexto();
});