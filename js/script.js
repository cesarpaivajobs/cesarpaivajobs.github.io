
function abre_banner(){
    var banner_obj = document.getElementById('divmao');
    banner_obj.style.display = 'block';   
}

function fecha_banner()
{
 var banner_obj = document.getElementById('divmao');
 banner_obj.style.display = 'none';
}

setTimeout('abre_banner()', 5000);
setTimeout('fecha_banner()', 10000);