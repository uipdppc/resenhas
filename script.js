$(document).ready(function() {
    $("#datepicker").datetimepicker({
        dateFormat: 'dd/mm/yy',
        timeFormat: 'HH:mm',
        showSecond: false,
        controlType: 'slider',
        addSliderAccess: true,
        sliderAccessArgs: { touchonly: false },
        timeOnlyTitle: 'Escolha o horário',
        timeText: 'Horário',
        hourText: 'Horas',
        minuteText: 'Minutos',
        currentText: 'Agora',
        closeText: 'Fechar',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesMin: ['D','S','T','Q','Q','S','S'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });
});

$(document).ready(function () {
    $("#type").change(function () {
        var val = $(this).val();
        if (val == "*DECAP*") {
            $("#seccional2").html("<option value=''>Selecione a Seccional</option><option value='*1ª SECCIONAL*'>1ª SECCIONAL</option><option value='*2ª SECCIONAL*'>2ª SECCIONAL</option><option value='*3ª SECCIONAL*'>3ª SECCIONAL</option><option value='*4ª SECCIONAL*'>4ª SECCIONAL</option><option value='*5ª SECCIONAL*'>5ª SECCIONAL</option><option value='*6ª SECCIONAL*'>6ª SECCIONAL</option><option value='*7ª SECCIONAL*'>7ª SECCIONAL</option><option value='*8ª SECCIONAL*'>8ª SECCIONAL</option>");
        } else if (val == "*DEINTER-1*") {
            $("#seccional2").html("<option value=''>Selecione a Seccional</option><option value='*DEL.SEC.S.JOSE DOS CAMPOS*'>DEL.SEC.S.JOSE DOS CAMPOS</option>");
        } else if (val == "*DEINTER-6*") {
            $("#seccional2").html("<option value=''>Selecione a Seccional</option><option value='*DEIC - SANTOS*'>DEIC - SANTOS</option><option value='*DEL.SEC. ITANHAEM*'>DEL.SEC. ITANHAEM</option><option value='*DEL.SEC. JACUPIRANGA*'>DEL.SEC. JACUPIRANGA</option><option value='*DEL.SEC. PRAIA GRANDE*'>DEL.SEC. PRAIA GRANDE</option><option value='*DEL.SEC. REGISTRO*'>DEL.SEC. REGISTRO</option><option value='*DEL.SEC. SANTOS*'>DEL.SEC. SANTOS</option>");
        } else if (val == "*DEIC*") {
            $("#seccional2").html("<option value=''>Selecione a Divisão</option><option value='*DISCCPAT*'>DISCCPAT</option><option value='*DIVECAR*'>DIVECAR</option><option value='*DIG*'>DIG</option><option value='*DCCIBER*'>DCCIBER</option>");
        } else if (val == "*DPPC*") {
            $("#seccional2").html("<option value=''>Selecione a Divisão</option><option value='*DIV.INV.CRIMES CONTRA CONSUMIDOR*'>DIV.INV.CRIMES CONTRA CONSUMIDOR</option><option value='*DIV.INV.CRIMES CONTRA SAÚDE*'>DIV.INV.CRIMES CONTRA SAÚDE</option><option value='*DIV.INV.CRIMES CONTRA MEIO AMBIENTE*'>DIV.INV.CRIMES CONTRA MEIO AMBIENTE</option><option value='*DIV.INV.CRIMES CONTRA FAZENDA*'>DIV.INV.CRIMES CONTRA FAZENDA</option><option value='*DIV.INV.CRIMES CONTRA ADMINISTRAÇÃO*'>DIV.INV.CRIMES CONTRA ADMINISTRAÇÃO</option><option value='*DIV.PRODUTOS CONTROLADOS*'>DIV.PRODUTOS CONTROLADOS</option>");
        }
    });
});

$(document).ready(function () {
    $("#seccional2").change(function () {
        var val = $(this).val();
	  if (val == "*1ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1º DP*'>1º DP</option><option value='*2º DP*'>2º DP</option><option value='*3º DP*'>3º DP</option><option value='*4º DP*'>4º DP</option><option value='*5º DP*'>5º DP</option><option value='*6º DP*'>6º DP</option><option value='*8º DP*'>8º DP</option><option value='*12º DP*'>12º DP</option><option value='*77º DP*'>77º DP</option><option value='*78º DP*'>78º DP</option><option value='*1ª DDM*'>1ª DDM</option><option value='*CERCO - 1ª SEC*'>CERCO - 1ª SEC</option>");
        } else if (val == "*2ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*16º DP*'>16º DP</option><option value='*17º DP*'>17º DP</option><option value='*26º DP*'>26º DP</option><option value='*27º DP*'>27º DP</option><option value='*35º DP*'>35º DP</option><option value='*36º DP*'>36º DP</option><option value='*83º DP*'>83º DP</option><option value='*95º DP*'>95º DP</option><option value='*96º DP*'>96º DP</option><option value='*97º DP*'>97º DP</option><option value='*2ª DDM*'>2ª DDM</option><option value='*CERCO - 2ª SEC*'>CERCO - 2ª SEC</option>");
        } else if (val == "*3ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*07º DP*'>07º DP</option><option value='*14º DP*'>14º DP</option><option value='*15º DP*'>15º DP</option><option value='*23º DP*'>23º DP</option><option value='*33º DP*'>33º DP</option><option value='*34º DP*'>34º DP</option><option value='*37º DP*'>37º DP</option><option value='*46º DP*'>46º DP</option><option value='*51º DP*'>51º DP</option><option value='*75º DP*'>75º DP</option><option value='*87º DP*'>87º DP</option><option value='*89º DP*'>89º DP</option><option value='*91º DP*'>91º DP</option><option value='*93º DP*'>93º DP</option><option value='*3ª DDM*'>3ª DDM</option><option value='*9ª DDM*'>9ª DDM</option><option value='*CERCO - 3ª SEC*'>CERCO - 3ª SEC</option>");
        } else if (val == "*4ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*09º DP*'>09º DP</option><option value='*13º DP*'>13º DP</option><option value='*19º DP*'>19º DP</option><option value='*20º DP*'>20º DP</option><option value='*28º DP*'>28º DP</option><option value='*38º DP*'>38º DP</option><option value='*39º DP*'>39º DP</option><option value='*40º DP*'>40º DP</option><option value='*45º DP*'>45º DP</option><option value='*72º DP*'>72º DP</option><option value='*73º DP*'>73º DP</option><option value='*74º DP*'>74º DP</option><option value='*90º DP*'>90º DP</option><option value='*4ª DDM*'>4ª DDM</option><option value='*CERCO - 4ª SEC*'>CERCO - 4ª SEC</option>");
        } else if (val == "*5ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*10º DP*'>10º DP</option><option value='*18º DP*'>18º DP</option><option value='*21º DP*'>21º DP</option><option value='*29º DP*'>29º DP</option><option value='*30º DP*'>30º DP</option><option value='*31º DP*'>31º DP</option><option value='*42º DP*'>42º DP</option><option value='*52º DP*'>52º DP</option><option value='*56º DP*'>56º DP</option><option value='*57º DP*'>57º DP</option><option value='*58º DP*'>58º DP</option><option value='*81º DP*'>81º DP</option><option value='*5ª DDM*'>5ª DDM</option><option value='*CERCO - 5ª SEC*'>CERCO - 5ª SEC</option>");
        } else if (val == "*6ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*11º DP*'>11º DP</option><option value='*25º DP*'>25º DP</option><option value='*43º DP*'>43º DP</option><option value='*47º DP*'>47º DP</option><option value='*48º DP*'>48º DP</option><option value='*80º DP*'>80º DP</option><option value='*85º DP*'>85º DP</option><option value='*92º DP*'>92º DP</option><option value='*98º DP*'>98º DP</option><option value='*99º DP*'>99º DP</option><option value='*100º DP*'>100º DP</option><option value='*101º DP*'>101º DP</option><option value='*102º DP*'>102º DP</option><option value='*3ª DDM*'>6ª DDM</option><option value='*CERCO - 6ª SEC*'>CERCO - 6ª SEC</option>");
        } else if (val == "*7ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*22º DP*'>22º DP</option><option value='*24º DP*'>24º DP</option><option value='*32º DP*'>32º DP</option><option value='*50º DP*'>59º DP</option><option value='*62º DP*'>62º DP</option><option value='*63º DP*'>63º DP</option><option value='*64º DP*'>64º DP</option><option value='*65º DP*'>65º DP</option><option value='*67º DP*'>67º DP</option><option value='*68º DP*'>68º DP</option><option value='*103º DP*'>103º DP</option><option value='*7ª DDM*'>7ª DDM</option><option value='*CERCO - 7ª SEC*'>CERCO - 7ª SEC</option>");
        } else if (val == "*8ª SECCIONAL*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*41º DP*'>41º DP</option><option value='*44º DP*'>44º DP</option><option value='*49º DP*'>49º DP</option><option value='*53º DP*'>53º DP</option><option value='*54º DP*'>54º DP</option><option value='*55º DP*'>55º DP</option><option value='*66º DP*'>66º DP</option><option value='*69º DP*'>69º DP</option><option value='*70º DP*'>70º DP</option><option value='*8ª DDM*'>8ª DDM</option><option value='*CERCO - 8ª SEC*'>CERCO - 8ª SEC</option>");
        } else if (val == "*DEIC - SANTOS*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DIG*'>1ª DIG</option><option value='*2ª DISE*'>2ª DISE</option><option value='*3ª DIH*'>3ª DIH</option>");
        } else if (val == "*DEL.SEC. ITANHAEM*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1º DP - ITANHAEM*'>1º DP - ITANHAEM</option><option value='*2º DP - ITANHAEM*'>2º DP - ITANHAEM</option><option value='*3º DP - ITANHAEM*'>3º DP - ITANHAEM</option><option value='*1º DP - MONGAGUA*'>1º DP - MONGAGUA</option><option value='*2º DP - MONGAGUA*'>2º DP - MONGAGUA</option><option value='*1º DP - PERUÍBE*'>1º DP - PERUÍBE</option><option value='*DDM - ITANHAÉM*'>DDM - ITANHAÉM</option><option value='*DDM - MOMGAGUÁ*'>DDM - MOMGAGUÁ</option><option value='*DDM - PERUÍBE*'>DDM - PERUÍBE</option><option value='*DEL.POL.ITARIRI*'>DEL.POL.ITARIRI</option><option value='*DEL.POL.MONGAGUA*'>DEL.POL.MONGAGUA</option><option value='*DEL.POL.PEDRO DE TOLEDO*'>DEL.POL.PEDRO DE TOLEDO</option><option value='*DEL.POL.PERUÍBE*'>DEL.POL.PERUÍBE</option><option value='*DIG - ITANHAÉM*'>DIG - ITANHAÉM</option><option value='*DISE - ITANHAÉM*'>DISE - ITANHAÉM</option>");
        } else if (val == "*DEL.SEC. JACUPIRANGA*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1º DP - JACUPIRANGA*'>1º DP - JACUPIRANGA</option><option value='*2º DP - JACUPIRANGA*'>2º DP - JACUPIRANGA</option><option value='*DEL.POL.BARRA DO TURVO*'>DEL.POL.BARRA DO TURVO</option><option value='*DEL.POL.CAJATI*'>DEL.POL.CAJATI</option><option value='*DEL.POL.CANANEIA*'>DEL.POL.CANANEIA</option><option value='*DEL.POL.ELDORADO*'>DEL.POL.ELDORADO</option><option value='*DEL.POL.IPORANGA*'>DEL.POL.IPORANGA</option><option value='*DEL.POL.PARIQUERA-AÇU*'>DEL.POL.PARIQUERA-AÇU</option><option value='*DDM - JACUPIRANGA*'>DDM - JACUPIRANGA</option><option value='*DIG - JACUPIRANGA*'>DIG - JACUPIRANGA</option><option value='*DISE - JACUPIRANGA*'>DISE - JACUPIRANGA</option>");
        } else if (val == "*DEL.SEC. PRAIA GRANDE*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1º DP - PRAIA GRANDE*'>1º DP - PRAIA GRANDE</option><option value='*2º DP - PRAIA GRANDE*'>2º DP - PRAIA GRANDE</option><option value='*3º DP - PRAIA GRANDE*'>3º DP - PRAIA GRANDE</option><option value='*1º DP - SÃO VICENTE*'>1º DP - SÃO VICENTE</option><option value='*2º DP - SÃO VICENTE*'>2º DP - SÃO VICENTE</option><option value='*3º DP - SÃO VICENTE*'>3º DP - SÃO VICENTE</option><option value='*4º DP - SÃO VICENTE*'>4º DP - SÃO VICENTE</option><option value='*DIG - PRAIA GRANDE*'>DIG - PRAIA GRANDE</option><option value='*DISE - PRAIA GRANDE*'>DISE - PRAIA GRANDE</option><option value='*DDM - SÃO VICENTE*'>DDM - SÃO VICENTE</option><option value='*DDM - PRAIA GRANDE*'>DDM - PRAIA GRANDE</option>");
        } else if (val == "*DEL.SEC. REGISTRO*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1º DP - IGUAPE*'>1º DP - IGUAPE</option><option value='*1º DP - REGISTRO*'>1º DP - REGISTRO</option><option value='*2º DP - REGISTRO*'>2º DP - REGISTRO</option><option value='*DEL.POL.IGUAPE*'>DEL.POL.IGUAPE</option><option value='*DEL.POL.ILHA COMPRIDA*'>DEL.POL.ILHA COMPRIDA</option><option value='*DEL.POL.JUQUIA*'>DEL.POL.JUQUIA</option><option value='*DEL.POL.MIRACATU*'>DEL.POL.MIRACATU</option><option value='*DEL.POL.SETE BARRAS*'>DEL.POL.SETE BARRAS</option><option value='*DIG - REGISTRO*'>DIG - REGISTRO</option><option value='*DISE - REGISTRO*'>DISE - REGISTRO</option><option value='*DDM - REGISTRO*'>DDM - REGISTRO</option>");
        } else if (val == "*DEL.SEC. SANTOS*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1º DP - CUBATÃO*'>1º DP - CUBATÃO</option><option value='*2º DP - CUBATÃO*'>2º DP - CUBATÃO</option><option value='*3º DP - CUBATÃO*'>3º DP - CUBATÃO</option><option value='*1º DP - GUARUJÁ*'>1º DP - GUARUJÁ</option><option value='*2º DP - GUARUJÁ*'>2º DP - GUARUJÁ</option><option value='*1º DP - SANTOS*'>1º DP - SANTOS</option><option value='*2º DP - SANTOS*'>2º DP - SANTOS</option><option value='*3º DP - SANTOS*'>3º DP - SANTOS</option><option value='*4º DP - SANTOS*'>4º DP - SANTOS</option><option value='*5º DP - SANTOS*'>5º DP - SANTOS</option><option value='*7º DP - SANTOS*'>7º DP - SANTOS</option><option value='*DDM - CUBATÃO*'>DDM - CUBATÃO</option><option value='*DDM - GUARUJÁ*'>DDM - GUARUJÁ</option><option value='*DDM - SANTOS*'>DDM - SANTOS</option><option value='*DEL.POL.BERTIOGA*'>DEL.POL.BERTIOGA</option><option value='*DEL.POL.CUBATÃO*'>DEL.POL.CUBATÃO</option><option value='*DEL.POL.GUARUJÁ*'>DEL.POL.GUARUJÁ</option><option value='*DEL.PORTO SANTOS*'>DEL.PORTO SANTOS</option><option value='*DEL.PROTEÇÃO IDOSO - SANTOS*'>DEL.PROTEÇÃO IDOSO - SANTOS</option><option value='*DIJU - SANTOS*'>DIJU - SANTOS</option>");
        } else if (val == "*DISCCPAT*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DISCCPAT*'>1ª DISCCPAT</option><option value='*2ª DISCCPAT*'>2ª DISCCPAT</option><option value='*3ª DISCCPAT*'>3ª DISCCPAT</option><option value='*4ª DISCCPAT*'>4ª DISCCPAT</option><option value='*5ª DISCCPAT*'>5ª DISCCPAT</option><option value='*6ª DISCCPAT*'>6ª DISCCPAT</option>");
        } else if (val == "*DIVECAR*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DIVECAR*'>1ª DIVECAR</option><option value='*2ª DIVECAR*'>2ª DIVECAR</option><option value='*3ª DIVECAR*'>3ª DIVECAR</option><option value='*4ª DIVECAR*'>4ª DIVECAR</option>");
        } else if (val == "*DIG*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DIG*'>1ª DIG</option><option value='*2ª DIG*'>2ª DIG</option><option value='*3ª DIG*'>3ª DIG</option>");
        } else if (val == "*DCCIBER*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DCCIBER*'>1ª DCCIBER</option><option value='*2ª DCCIBER*'>2ª DCCIBER</option><option value='*3ª DCCIBER*'>3ª DCCIBER</option><option value='*4ª DCCIBER*'>4ª DCCIBER</option>");
        } else if (val == "*DEL.SEC.S.JOSE DOS CAMPOS*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*01º D.P. S.JOSE DOS CAMPOS*'>01º D.P. S.JOSE DOS CAMPOS</option><option value='*02º D.P. S.JOSE DOS CAMPOS*'>02º D.P. S.JOSE DOS CAMPOS</option><option value='*03º D.P. S.JOSE DOS CAMPOS*'>03º D.P. S.JOSE DOS CAMPOS</option><option value='*04º D.P. S.JOSE DOS CAMPOS*'>04º D.P. S.JOSE DOS CAMPOS</option><option value='*05º D.P. S.JOSE DOS CAMPOS*'>05º D.P. S.JOSE DOS CAMPOS</option><option value='*05º D.P. S.JOSE DOS CAMPOS*'>05º D.P. S.JOSE DOS CAMPOS</option><option value='*06º D.P. S.JOSE DOS CAMPOS*'>06º D.P. S.JOSE DOS CAMPOS</option><option value='*07º D.P. S.JOSE DOS CAMPOS*'>07º D.P. S.JOSE DOS CAMPOS</option><option value='*08º D.P. S.JOSE DOS CAMPOS*'>08º D.P. S.JOSE DOS CAMPOS</option><option value='*DDM SAO JOSE DOS CAMPOS*'>DDM SAO JOSE DOS CAMPOS</option><option value='*DEL.POL.CAÇAPAVA*'>DEL.POL.CAÇAPAVA</option><option value='*DEL.POL.JAMBEIRO*'>DEL.POL.JAMBEIRO</option><option value='*DEL.POL.MONTEIRO LOBATO*'>DEL.POL.MONTEIRO LOBATO</option>");
        } else if (val == "*DIV.INV.CRIMES CONTRA CONSUMIDOR*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DELEGACIA*'>1ª DELEGACIA</option><option value='*2ª DELEGACIA*'>2ª DELEGACIA</option>");
        } else if (val == "*DIV.INV.CRIMES CONTRA SAÚDE*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DELEGACIA*'>1ª DELEGACIA</option><option value='*2ª DELEGACIA*'>2ª DELEGACIA</option>");
        } else if (val == "*DIV.INV.CRIMES CONTRA MEIO AMBIENTE*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DELEGACIA*'>1ª DELEGACIA</option><option value='*2ª DELEGACIA*'>2ª DELEGACIA</option>");
        } else if (val == "*DIV.INV.CRIMES CONTRA FAZENDA*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DELEGACIA*'>1ª DELEGACIA</option><option value='*2ª DELEGACIA*'>2ª DELEGACIA</option><option value='*3ª DELEGACIA*'>3ª DELEGACIA</option>");
        } else if (val == "*DIV.INV.CRIMES CONTRA ADMINISTRAÇÃO*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*1ª DELEGACIA*'>1ª DELEGACIA</option><option value='*2ª DELEGACIA*'>2ª DELEGACIA</option><option value='*3ª DELEGACIA*'>3ª DELEGACIA</option><option value='*4ª DELEGACIA*'>4ª DELEGACIA</option>");
        } else if (val == "*DIV.PRODUTOS CONTROLADOS*") {
            $("#delegacia2").html("<option value=''>Selecione a Delegacia</option><option value='*DEL.INV.PROD.CONTROLADOS*'>DEL.INV.PROD.CONTROLADOS</option>");
        } 
    });
});



function gotowhatsapp() {


    var departamento = document.getElementById("departamento").innerHTML;
    var seccional = document.getElementById("seccional").innerHTML;
    var delegacia = document.getElementById("delegacia").innerHTML;
    var rdo = document.getElementById("rdo").innerHTML;
    var natureza = document.getElementById("natureza").innerHTML;
    var ocorrencia = document.getElementById("ocorrencia").innerHTML;
    var envolvidos = document.getElementById("envolvidos").innerHTML;
    var localfato = document.getElementById("localfato").innerHTML;
    var historico = document.getElementById("historico").innerHTML;

    var url = "https://api.whatsapp.com/send/?phone&text=" 
    + '*Polícia Civil*' + "%0a" + "%0a"
    + departamento + "%0a" + "%0a"
    + seccional + "%0a" + "%0a"
    + delegacia + "%0a" + "%0a"
    + rdo + "%0a" + "%0a"
    + natureza + "%0a" + "%0a"
    + ocorrencia + "%0a" + "%0a"
    + envolvidos + "%0a" + "%0a"
    + localfato + "%0a" + "%0a"
    + "```"+ historico +"```";


    window.open(url, '_blank').focus()

}

    function copyText(){
       var copyText = 
     document.getElementById("resultado").select();
     document.execCommand('copy');
    }
    function preencher(f) {
      document.getElementById("departamento").innerHTML = f.departamento.value;
      document.getElementById("seccional").innerHTML = f.seccional.value;
      document.getElementById("delegacia").innerHTML = f.delegacia.value;
      document.getElementById("rdo").innerHTML = "RDO: " + f.rdo.value + " | " + "Data: " + f.data.value;
      document.getElementById("natureza").innerHTML = f.natureza.value;
      document.getElementById("ocorrencia").innerHTML = f.ocorrencia.value;
      document.getElementById("envolvidos").innerHTML = f.envolvidos.value;
      document.getElementById("localfato").innerHTML = f.localfato.value;
      document.getElementById("historico").innerHTML = f.historico.value;
      }

      //if(f.gerador.checked == true) {}

	function CopyToClipboard (resultado) {
	  // Create a new textarea element and give it id='temp_element'
	  var textarea = document.createElement('textarea')
	  textarea.id = 'temp_element'
	  // Optional step to make less noise on the page, if any!
	  textarea.style.height = 0
	  // Now append it to your page somewhere, I chose <body>
	  document.body.appendChild(textarea)
	  // Give our textarea a value of whatever inside the div of id=containerid
	  textarea.value = document.getElementById(resultado).innerText
	  // Now copy whatever inside the textarea to clipboard
	  var selector = document.querySelector('#temp_element')
	  selector.select()
	  document.execCommand('copy')


  // Remove the textarea
  document.body.removeChild(textarea)
}


// 
const SUPABASE_URL = "https://qtpmqwsjdsnjufngnsdz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0cG1xd3NqZHNuanVmbmduc2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MDkzMjMsImV4cCI6MjA1NTQ4NTMyM30.IM8PxNKULB3f8gwqqL_XZs2x3cNdhnd1pGTjHwLbZzc"; // Substitua pela chave correta
const BUCKET_NAME = "fotos_resenhas";  // Nome do bucket criado no Supabase Storage

async function salvarDados(form) {
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData.entries());

    // Função para remover asteriscos dos valores
    const removerAsteriscos = (valor) => valor ? valor.replace(/\*/g, '').trim() : '';

    // Remove os asteriscos diretamente nos campos a serem enviados
    dados.departamento = removerAsteriscos(dados.departamento);
    dados.seccional = removerAsteriscos(dados.seccional);
    dados.delegacia = removerAsteriscos(dados.delegacia);
    dados.ocorrencia = removerAsteriscos(dados.ocorrencia);
    dados.natureza = removerAsteriscos(dados.natureza);

    // Converte a data, se necessário
    if (dados.data && dados.data.includes("/")) {
        const [dia, mes, ano] = dados.data.split("/");
        dados.data = `${ano}-${mes}-${dia}`;
    }

    

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/resenhas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`
            },
            body: JSON.stringify(dados),
        });

if (response.ok) {
    const savedResenha = await response.json();
    localStorage.setItem('resenha_id', savedResenha[0]?.id); // 🔑 Salva o ID da resenha
    listarFotos(savedResenha[0]?.id); // 📷 Carrega as fotos após salvar
    alert("✅ Dados salvos com sucesso!");
    CopyToClipboard('resultado');
} else {
    const errorData = await response.json();
    alert(`⚠️ Erro ao salvar: ${response.status} - ${errorData.message || 'Erro desconhecido'}`);
}

        alert("✅ Dados salvos com sucesso!");
        CopyToClipboard('resultado');
    } catch (error) {
       
        alert(`⚠️ Erro ao salvar: ${error.message}`);
    }
}


async function buscarRDO() {
    const rdo = document.getElementById('rdoInput').value.trim();

    if (!rdo) {
        alert("⚠️ Por favor, insira um número de RDO.");
        return;
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/resenhas?rdo=eq.${rdo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar RDO: ${response.status}`);
        }

        const registros = await response.json();

        if (registros.length === 0) {
            alert("❌ Nenhum registro encontrado para este RDO.");
            return;
        }

        if (registros.length === 1) {
            const resenhaId = registros[0]?.id;

            if (resenhaId) {
                localStorage.setItem('resenha_id', resenhaId); // ✅ Salva o ID da resenha no localStorage
                preencherFormulario(registros[0]);              // Preenche o formulário com os dados da resenha
                listarFotos(resenhaId);                        // 📷 Carrega as fotos associadas automaticamente
            } else {
                console.error("❌ ID da resenha não encontrado no registro.");
                alert("⚠️ Erro: Resenha encontrada, mas sem ID válido.");
            }
        } else {
            mostrarOpcoes(registros); // 📝 Exibe opções caso haja mais de um registro com o mesmo RDO
        }

    } catch (error) {
        console.error("❌ Erro ao buscar:", error);
        alert(`⚠️ Erro ao buscar: ${error.message}`);
    }
}


function preencherFormulario(dados) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const setSelectValue = (selectName, value) => {
        const select = document.querySelector(`select[name="${selectName}"]`);
        if (!select) return;
        const valorComAsteriscos = `*${value}*`;

        // Tenta encontrar a opção com e sem asteriscos
        const option = Array.from(select.options).find(opt =>
            [opt.value, opt.textContent].some(val => val.trim().toUpperCase() === valorComAsteriscos.toUpperCase())
        );

        if (option) select.value = option.value;
    };

    (async () => {
        // Preenche o Departamento e aciona o evento 'change'
        document.querySelector('select[name="departamento"]').value = `*${dados.departamento}*`;
        $("#type").trigger("change");

        // Aguarda o carregamento das opções de Seccional
        await delay(200);  
        setSelectValue("seccional", dados.seccional);
        $("#seccional2").trigger("change");

        // Aguarda o carregamento das opções de Delegacia
        await delay(200);  
        setSelectValue("delegacia", dados.delegacia);

        // Preenche os demais campos normalmente
        document.querySelector('input[name="rdo"]').value = dados.rdo || '';
        document.querySelector('input[name="data"]').value = dados.data ? dados.data.split('T')[0].split('-').reverse().join('/') : '';
        document.querySelector('input[name="natureza"]').value = dados.natureza || '';
        document.querySelector('input[name="envolvidos"]').value = dados.envolvidos || '';
        document.querySelector('input[name="localfato"]').value = dados.localfato || '';
        document.querySelector('textarea[name="historico"]').value = dados.historico || '';
        setSelectValue("ocorrencia", dados.ocorrencia);

        alert("✅ Registro carregado com sucesso!");
    })();
}


// 📂 Função para verificar se a resenha possui fotos
async function temAnexos(resenhaId) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/fotos_resenhas?resenha_id=eq.${resenhaId}&select=id`, {
        headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
        }
    });

    const fotos = await response.json();
    return fotos.length > 0; // ✅ Retorna true se tiver fotos
}


async function temAnexos(resenhaId) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/fotos_resenhas?resenha_id=eq.${resenhaId}&select=id`, {
        headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
        }
    });

    const fotos = await response.json();
    return fotos.length > 0; // ✅ Retorna true se tiver fotos
}


// 📝 Função para exibir múltiplas opções com indicação de anexos
async function mostrarOpcoes(registros) {
    const modal = document.getElementById('resultadoModal');
    const lista = document.getElementById('resultadoLista');
    lista.innerHTML = '';

    for (const registro of registros) {
        const anexos = await temAnexos(registro.id); // 🔍 Verifica se há fotos
        const statusAnexos = anexos ? "📎 Com Anexos" : "❌ Sem Anexos"; // 📎 ou ❌

        const li = document.createElement('li');
        li.style.cursor = 'pointer';
        li.style.marginBottom = '5px';
        li.innerHTML = `
            <strong>${registro.rdo}</strong> - ${registro.delegacia || 'Sem delegacia'} |
            ${registro.data ? registro.data.split('T')[0].split('-').reverse().join('/') : 'Data não disponível'} |
            <span style="font-weight:bold; color:${anexos ? 'green' : 'red'};">${statusAnexos}</span>
        `;
        li.onclick = () => {
            localStorage.setItem('resenha_id', registro.id);  // 🔑 Salva o ID
            preencherFormulario(registro);                    // 📝 Preenche formulário
            listarFotos(registro.id);                         // 📷 Carrega fotos
            modal.style.display = 'none';                     // 🔒 Fecha modal
        };

        lista.appendChild(li); // ➕ Adiciona ao modal
    }

    modal.style.display = 'block'; // 🔓 Exibe o modal
}
// 🔹 Nova função para processar o formulário e copiar para a área de transferência
document.getElementById("resenhaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 🚫 Impede recarregamento da página
    const form = event.target; // 🎯 Captura o formulário enviado
    preencher(form);         // 📝 Preenche os dados
    salvarDados(form);       // 💾 Salva no Supabase
});

// 🔹 Função para copiar conteúdo para a área de transferência
function CopyToClipboard(resultadoId) {
    var textarea = document.createElement('textarea');
    textarea.id = 'temp_element';
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.getElementById(resultadoId).innerText;
    var selector = document.querySelector('#temp_element');
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("📋 Texto copiado para a área de transferência!");
}
function resetFormulario() {
    document.querySelector("form").reset();      // Reseta todos os campos do formulário
    localStorage.removeItem('resenha_id');       // Remove o ID da resenha do localStorage
    document.getElementById("fotosPreview").innerHTML = ""; // Limpa a visualização das fotos
    alert("🔄 Formulário e fotos resetados!");
}


// ✅ Função para fazer upload das fotos
async function uploadFotos() {
    const resenhaId = localStorage.getItem('resenha_id');
    if (!resenhaId) {
        alert("⚠️ Primeiro salve ou carregue uma resenha para associar as fotos.");
        return;
    }

    const files = document.getElementById("fotoUpload").files;
    if (!files.length) {
        alert("⚠️ Selecione ao menos uma foto.");
        return;
    }

    for (const file of files) {
        // 🗜️ Comprime a imagem antes de enviar
        new Compressor(file, {
            quality: 0.6, // Qualidade da compressão (0 a 1)
            maxWidth: 1024, // Largura máxima (mantém proporção)
            maxHeight: 1024, // Altura máxima
            success: async (compressedFile) => {
                const fileName = `${resenhaId}_${Date.now()}_${file.name}`;
                
                try {
                    // 📤 Upload para o Supabase Storage
                    const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${fileName}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": compressedFile.type,
                            "apikey": SUPABASE_KEY,
                            "Authorization": `Bearer ${SUPABASE_KEY}`
                        },
                        body: compressedFile
                    });

                    if (!response.ok) throw new Error(`Erro ao enviar ${file.name}`);

                    const publicURL = `${SUPABASE_URL.replace('/rest/v1', '')}/storage/v1/object/public/${BUCKET_NAME}/${fileName}`;

                    // 📝 Salva metadados no banco
                    await fetch(`${SUPABASE_URL}/rest/v1/fotos_resenhas`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "apikey": SUPABASE_KEY,
                            "Authorization": `Bearer ${SUPABASE_KEY}`
                        },
                        body: JSON.stringify({
                            resenha_id: resenhaId,
                            url: publicURL,
                            nome_arquivo: fileName,
                        }),
                    });

                    alert(`✅ Foto ${file.name} enviada com sucesso!`);
                    listarFotos(resenhaId); // 🔄 Atualiza o preview
                } catch (error) {
                    alert(`❌ ${error.message}`);
                }
            },
            error(err) {
                alert(`❌ Erro ao comprimir ${file.name}: ${err.message}`);
            },
        });
    }
}

// 📷 Função para listar fotos associadas à resenha
async function listarFotos(resenhaId) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/fotos_resenhas?resenha_id=eq.${resenhaId}`, {
        headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
        }
    });

    const fotos = await response.json();
    const fotosDiv = document.getElementById("fotosPreview");
    fotosDiv.innerHTML = fotos.length ? "" : "<p>Nenhuma foto enviada.</p>";

    fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto.url;
        img.alt = foto.nome_arquivo;
        img.style = "width: 150px; height: auto; margin: 10px; border: 1px solid #ccc;";
        fotosDiv.appendChild(img);
    });
}
