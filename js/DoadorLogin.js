function Cadastro(){
    //disabled="desable"
    let botaoC = document.getElementById("bCadastro");
    let botaoL = document.getElementById("bLogin");
    let formL = document.getElementById("login");
    let formC = document.getElementById("cadastro");
    if(formC.style.display == "flex") 
    {
        formL.style.display = "none";
        formC.style.display = "none";
        botaoC.disabled = false;
        botaoL.disabled = true;
    }
    else{
        formC.style.display = "flex";    
        formL.style.display = "none";
        botaoC.disabled = true;
        botaoL.disabled = false;
    }
}
function Logar(){
    let botaoC = document.getElementById("bCadastro");
    let botaoL = document.getElementById("bLogin");

    let formL = document.getElementById("login");
    let formC = document.getElementById("cadastro");
    if(formL.style.display == "flex") 
    {
        formC.style.display = "none";
        formL.style.display = "none";

        botaoC.disabled = false;
        botaoL.disabled = true;
    }
    else{
        formL.style.display = "flex";     
        formC.style.display = "none";

        botaoC.disabled = false;
        botaoL.disabled = true;
    }
}