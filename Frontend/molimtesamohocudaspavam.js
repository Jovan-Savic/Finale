window.onload=function(){
    const addButton = document.querySelector(".plzhelp");
    //console.log(addButton);
    addButton.addEventListener("click", GetInputa);
    async function GetInputa()
    {
        let db = await axios.get("/use/stari");
        //console.log(db);
        let korisnici = db.data.poruka;
        let mei=document.querySelector(".meil");
        mei=mei.Value;
        let sif=document.querySelector(".bol");
        sif=sif.value;
        let lmei=document.querySelector(".lmeil");
        let lpas=document.querySelector(".lpass");
    }
}