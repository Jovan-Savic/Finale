window.onload=function(){
    const addButton = document.querySelector(".plzhelp");
    //console.log(addButton);
    addButton.addEventListener("click", GetInputa);
    async function GetInputa()
    {let k=0;
        let mei=document.querySelector(".meil");
        console.log(mei);
        //mei=mei.value;
        let sif=document.querySelector(".bol");
        sif=sif.value;
        let lmei=document.querySelector(".lmeil");
        let lpas=document.querySelector(".lpass");
        let db = await axios.get("/use/stari");
        //console.log(db);
        let korisnici = db.data.poruka;
        korisnici.forEach(korisnik => {
            if(korisnik.mail==mei)
            {
                if(korisnik.password==sif)
                {
                    k=1;
                }
            }
        });
        if(k==1)
        {
            //registrovao sam se
            console.log("uspeo sam");
        }
    }
}