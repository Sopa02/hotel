function szamol(){
    var szoba = document.getElementById("kategoria").value;
    var fo = document.getElementById("fo").value;
    var ej = document.getElementById("ejszaka").value;
    var ar = szoba*fo*ej;
    if(ar!=0)
    document.getElementById("ar").innerHTML ="Ár: " + ar + "Ft";
    if(ar==0)
    document.getElementById("ar").innerHTML = "Ár:";
}