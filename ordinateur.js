$.ajax("./ordinateur.json").then(function(ordinateur){
    ordinateur = JSON.parse(ordinateur);
    console.log(ordinateur);
    var nom = ordinateur[0].nom;
    var nom1 = ordinateur[1].nom;
    var nom2 = ordinateur[2].nom;
    for(var i=0;i<ordinateurs.length;i++){
        var surnom = ordinateurs[i].ordinateur.surnom;
    console.log(surnom);
    }
    document.body.innerHTML+="<div>" + nom +"</div>";
    document.body.innerHTML+="<div>" + nom1 +"</div>";
    document.body.innerHTML+="<div>" + nom2 +"</div>";
    document.body.innerHTML+="<div>" + surnom +"</div>";

    var str =JSON.stringify(ordinateurs[0]);// on a enregistré une string en le stringifiant

    });