var textgirilen,secilen,texteklenen,btnBasla,btnTamamla,btnSil,sonuc,gorev,gorevad;function listeyeEkle(){""!=(textgirilen=document.getElementById("txtyapilacak").value)?(texteklenen=document.createElement("li"),document.getElementById("listeyapilacak").appendChild(texteklenen),texteklenen.innerHTML=textgirilen,(btnBasla=document.createElement("button")).innerHTML="Başla",btnBasla.style.borderRadius="5px",btnBasla.style.background="lightblue",btnBasla.style.margin="5px 5px",texteklenen.appendChild(btnBasla),btnBasla.addEventListener("click",basladi),(btnTamamla=document.createElement("button")).innerHTML="Bitti",btnTamamla.style.borderRadius="5px",btnTamamla.style.background="#59e659",btnTamamla.style.margin="5px 5px",texteklenen.appendChild(btnTamamla),btnTamamla.addEventListener("click",tamamlandı),(btnSil=document.createElement("button")).innerHTML="Sil",btnSil.style.borderRadius="5px",btnSil.style.background="#f16363",btnSil.style.margin="5px 5px",texteklenen.appendChild(btnSil),btnSil.addEventListener("click",sil)):alert("Boş Bırakılamaz!!!")}function basladi(){texteklenen=document.createElement("li"),document.getElementById("listeyapiliyor").appendChild(texteklenen),(secilen=event.currentTarget.parentNode).childNodes[1].style.display="none",secilen.childNodes[2].setAttribute("onclick","tamamlandı();"),secilen.childNodes[3].setAttribute("onclick","sil();"),texteklenen.innerHTML=secilen.innerHTML,sil()}function tamamlandı(){texteklenen=document.createElement("li"),document.getElementById("listeyapildi").appendChild(texteklenen),(secilen=event.currentTarget.parentNode).childNodes[1].style.display="none",secilen.childNodes[2].style.display="none",secilen.childNodes[3].setAttribute("onclick","sil();"),texteklenen.innerHTML=secilen.innerHTML,sil()}function sil(){(secilen=event.currentTarget.parentNode).remove()}function tehlike(){document.getElementById("renktablosu").style.display="inline-block"}