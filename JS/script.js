const textoUsuario = document.getElementById("textoUsuario");
const textoEncriptado = document.getElementById("txtEncriptado");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const mensaje1 = document.querySelector(".mensaje1");
const mensaje2 = document.querySelector(".mensaje2");

/*"e" = "enter"
"i" = "imes"
"a" = "ai"
"o" = "ober"
"u" = "ufat"*/



function encriptar (encriptacion){
    const txtProcesado = textoUsuario.value;
    encriptacion = txtProcesado;
    textoUsuario.value = '';
    textoEncriptado.style.backgroundImage = "none";
    mensaje1.style.display = "none";
    mensaje2.style.display = "none";
    btnCopiar.style.display = "block";

    const validar = /^[a-z" "]+$/; //usamos una expresión regular para indicarle al sistema el tipo de caracter permitido
    if (!validar.test(txtProcesado)) { // controlamos que el texto sea solo minúsculas y si números, ni caracteres especiales
        alert("Solo se permiten letras minúsculas");
        window.location.reload() // recargamos la página para que el usuario pueda reingresar el texto de manera correcta
        return;
    }
       
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++){
      if(encriptacion.includes(matrizCodigo[i][0])){
          encriptacion = encriptacion.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
          
      }
    }
    textoEncriptado.value = encriptacion;
        
}


btnEncriptar.addEventListener("click", encriptar);

function desencriptar (desencripta){
  const txtProcesado = textoUsuario.value;
  desencripta = txtProcesado;
  textoUsuario.value = '';
  textoEncriptado.style.backgroundImage = "none";
  mensaje1.style.display = "none";
  mensaje2.style.display = "none";
  btnCopiar.style.display = "block";

  const validar = /^[a-z" "]+$/; //usamos una expresión regular para indicarle al sistema el tipo de caracter permitido
  if (!validar.test(txtProcesado)) { // controlamos que el texto sea solo minúsculas y si números, ni caracteres especiales
      alert("Solo se permiten letras minúsculas");
      window.location.reload() // recargamos la página para que el usuario pueda reingresar el texto de manera correcta
      return;
  }
     
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  for(let i = 0; i < matrizCodigo.length; i++){
    if(desencripta.includes(matrizCodigo[i][1])){
        desencripta = desencripta.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        
    }
  }
  textoEncriptado.value = desencripta;
}

btnDesencriptar.addEventListener("click", desencriptar);

function copiar(){
  document.getElementById("txtEncriptado").disabled = false;
  textoEncriptado.select();
  document.execCommand("copy");
  textoEncriptado.value = "";
  document.getElementById("txtEncriptado").disabled = true;
  textoEncriptado.style.backgroundImage = "url(/IMAGENES/Muñeco.png)";
  mensaje1.style.display = "block";
  mensaje2.style.display = "block";
  btnCopiar.style.display = "none";
  alert("Texto copiado con Éxito");
}

btnCopiar.addEventListener("click", copiar);





