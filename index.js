function GununSozunuGetir(){
    var renkgecisi=(Math.random());

    if(renkgecisi="0")
    {
        document.body.style.backgroundColor="blue";
    }
    else if(renkgecisi="1")
    {
        document.body.style.backgroundcolor="yellow";

    }
     else if(renkgecisi="2")
    {
        document.body.style.backgroundColor="white";
    }
    else (renkgecisi=="3")
    {
        document.body.style.backgroundColor="red";
        
    }
    
    document.getElementById("h1")[0].innerHTML=`Günün Sözü:Kervan Yol alır İnanMak Başarmanın Yarısıdır${GununSozunuGetir}`;
}