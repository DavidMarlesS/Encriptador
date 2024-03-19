const txtEncriptado = document.getElementById('txtEncriptado');
function ajusteTxtEncriptado() {
    const sizeScreen = window.innerWidth;

    if(sizeScreen < 799){
        txtEncriptado.rows = 15;
        txtEncriptado.cols = 55;
    }
}

window.onload = ajusteTxtEncriptado;
window.onresize = ajusteTxtEncriptado;