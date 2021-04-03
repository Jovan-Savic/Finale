window.onload=function(){
    const addButton = document.querySelector(".zasto");
    //console.log(addButton);
    addButton.addEventListener("click", GetInputa);
    async function GetInputa()
    {
        let ime = document.querySelector(".ime");
        ime=ime.value;
        let a=document.querySelector(".ig");
        let pre = document.querySelector(".pre");
        pre=pre.value;
        let b=document.querySelector(".pg");
        let bro = document.querySelector(".bro");
        t=document.querySelector(".bg");
    bro=bro.value;
    let adre = document.querySelector(".adr");
        ad=document.querySelector(".na");
    adre=adre.value;
    console.log(bro);
    if(ime.length>2)
    {
        a.innerHTML="";
    if(pre.length>2)
    {
        b.innerHTML="";
    if(bro.length>9)
    {t.innerHTML="";
    if(adre.length>5)
    {
        ad.innerHTML="";
    //nisam bas siguran kako hoces da ti dam volonter i korisnik za sad je m da li je volonter i n da li je korisnik oma bool
        axios.post('/api/korisnici', 
        {
            ime: imee,
            prezime: pree,
            mail: emel,
            password: pass,
            organizator: orga
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    //ubacuje se u bazu
    }
    else
    {
        ad.innerHTML="nemate adresu";
    }
    }
    
    else 
    {
        t.innerHTML="los broj";
    }}
     
    else
    {
    b.innerHTML="Prezime je prekratko!";
    }
    }
    else
    {
    a.innerHTML="Ime je prekratko!";
    }
        //ime=ime.Value;
    //let ime=document.getElementById("ime");
    }
    }