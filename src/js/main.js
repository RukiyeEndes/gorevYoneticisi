var textgirilen, secilen;
var texteklenen, btnBasla, btnTamamla, btnSil, sonuc;
var gorev, gorevad;

function listeyeEkle() 
{
    textgirilen = document.getElementById("txtyapilacak").value;

    if(textgirilen!="")
    {
        texteklenen=document.createElement("li");
        document.getElementById("listeyapilacak").appendChild(texteklenen);
        texteklenen.innerHTML=textgirilen;

        btnBasla=document.createElement("button");
        btnBasla.innerHTML = "Başla";
        btnBasla.style.borderRadius ="5px";
        btnBasla.style.background ="lightblue";
        btnBasla.style.margin = "5px 5px";
        texteklenen.appendChild(btnBasla);
        //btnBasla.setAttribute("onclick","basladi();");
        btnBasla.addEventListener("click",basladi);

        btnTamamla=document.createElement("button");
        btnTamamla.innerHTML = "Bitti";
        btnTamamla.style.borderRadius ="5px";
        btnTamamla.style.background ="#59e659";
        btnTamamla.style.margin = "5px 5px";
        texteklenen.appendChild(btnTamamla);
        //btnTamamla.setAttribute("onclick","tamamlandı();");
        btnTamamla.addEventListener("click",tamamlandı);

        btnSil=document.createElement("button");
        btnSil.innerHTML = "Sil";
        btnSil.style.borderRadius ="5px";
        btnSil.style.background ="#f16363";
        btnSil.style.margin = "5px 5px";
        texteklenen.appendChild(btnSil);
        //btnSil.setAttribute("onclick","sil();");
        btnSil.addEventListener("click",sil);

    }
    else alert("Boş Bırakılamaz!!!");
}

function basladi(){
    texteklenen=document.createElement("li");
    document.getElementById("listeyapiliyor").appendChild(texteklenen);
    secilen =event.currentTarget.parentNode;
    secilen.childNodes[1].style.display = "none";
    secilen.childNodes[2].setAttribute("onclick", "tamamlandı();");
    secilen.childNodes[3].setAttribute("onclick", "sil();");
    texteklenen.innerHTML= secilen.innerHTML;

    sil();
}

function tamamlandı(){
    texteklenen=document.createElement("li");
    document.getElementById("listeyapildi").appendChild(texteklenen);
    secilen =event.currentTarget.parentNode;
    secilen.childNodes[1].style.display = "none";
    secilen.childNodes[2].style.display = "none";
    secilen.childNodes[3].setAttribute("onclick", "sil();");
    texteklenen.innerHTML= secilen.innerHTML;

    sil();
}

function sil(){
    secilen =event.currentTarget.parentNode;
    secilen.remove();
}

function tehlike(){
    var renktablo = document.getElementById('renktablosu');
    renktablo.style.display="inline-block";
}


/*
function gorevolustur(){
    
    gorev = document.getElementById("gorevadi").value;

    if(gorev!="")
    {
        gorevad=document.createElement("li");
        document.getElementById("gorevlerimliste").appendChild(gorevad);
        gorevad.innerHTML=gorev;

        
        //window.location.href = "index.html";
    }
}
*/
