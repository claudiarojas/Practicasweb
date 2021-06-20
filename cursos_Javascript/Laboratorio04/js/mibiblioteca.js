// declarandpo variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
// creamos procedimiento para validar
// nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su nombre</li>";
    }else{
        error.style.display="none";
    }
} 
// apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su apellido</li>";
    }else{
        error.style.display="none";
    }
}
// correo
function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su correo</li>";
    }else{
        error.style.display="none";
    }
}
// sexo
function ValidarSexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione su sexo </li>";
    }else{
        error.style.display="none";
    }
}
// sexo
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione su estado </li>";
    }else{
        error.style.display="none";
    }
}
// creamos procedimiento para validar
function validar(){
    error.innerHTML="";
    //   llamamos a los procedimientos a validar
        ValidarNombre();
        ValidarApellido();
        ValidarCorreo();
        ValidarSexo();
        ValidarEstado();
}
// creamos un procedmiento para asignar la clase error
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+='<li>'+m+'</li>'
}
// creamos funcion rtegistrar
function Registrar(){
    // Reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        txtNom.focus();
    }else if (txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese tus apellidos");
        txtApe.focus();
    }else if (txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese tu correo");
        txtCor.focus();
    }else if (rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Seleccione un sexo");
        txt
    }
}