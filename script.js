const inputTexto = document.getElementById("input-texto")
const mensaje = document.getElementById("mensaje")

/* 
Se deben reemplazar las vocales por strings o viceversa
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */

/* FUNCIONES DE ENCRIPTADO */

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for ( let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

/* FUNCIONES DESENCRIPTADO */
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for ( let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}

function copiar(){
    mensaje.select
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
    alert("Texto copiado!");

}