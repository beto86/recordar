function Tempo(){
    var data=new Date();
    var sem=data.getDay();
    var dia=data.getDate();
    var mes=data.getMonth();
    var ano=data.getFullYear();
    var hora=data.getHours();
    var minuto=data.getMinutes();
    var seg=data.getSeconds();
    if(seg<10){
        seg="0"+seg;
    }
    if(minuto<10){
        minuto="0"+minuto;
    }
    m=new Array();
    m[0]="Janeiro";
    m[1]="Fevereiro";
    m[2]="Março";
    m[3]="Abril";
    m[4]="Maio";
    m[5]="Junho";
    m[6]="Julho";
    m[7]="Agosto";
    m[8]="Setembro";
    m[9]="Outubro";
    m[10]="Novembro";
    m[11]="Dezembro";
    d=new Array();
    d[0]="Domingo";
    d[1]="Segunda-feira";
    d[2]="Terça-feira";
    d[3]="Quarta-feira";
    d[4]="Quinta-feira";
    d[5]="Sexta-feira";
    d[6]="Sábado";
    document.getElementById('hora').innerText=(d[sem]+", "+ dia + " de " + m[mes] + " de " + ano + ". Agora são: " + hora + ":" + minuto + ":" + seg);
    setTimeout("Tempo()","1000");
}

function fraseDia(){
    msg=new Array();
    msg[1]="Mensagem do dia 01";
    msg[2]="Mensagem do dia 02";
    msg[3]="Mensagem do dia 03";
    msg[4]="Mensagem do dia 04";
    msg[5]="Mensagem do dia 05";
    msg[6]="Mensagem do dia 06";
    msg[7]="Mensagem do dia 07";
    msg[8]="Mensagem do dia 08";
    msg[9]="Mensagem do dia 09";
    msg[10]="Mensagem do dia 10";
    msg[11]="Mensagem do dia 11";
    msg[12]="Mensagem do dia 12";
    msg[13]="Mensagem do dia 13";
    msg[14]="Mensagem do dia 14";
    msg[15]="Mensagem do dia 15";
    msg[16]="Mensagem do dia 16";
    msg[17]="Mensagem do dia 17";
    msg[18]="Mensagem do dia 18";
    msg[19]="Mensagem do dia 19";
    msg[20]="Mensagem do dia 20";
    msg[21]="Mensagem do dia 21";
    msg[22]="Mensagem do dia 22";
    msg[23]="Mensagem do dia 23";
    msg[24]="Mensagem do dia 24";
    msg[25]="Mensagem do dia 25";
    msg[26]="Mensagem do dia 26";
    msg[27]="Mensagem do dia 27";
    msg[28]="Mensagem do dia 28";
    msg[29]="Mensagem do dia 29";
    msg[30]="Mensagem do dia 30";
    msg[31]="Mensagem do dia 31";
    data=new Date();
    dia=data.getDate();
    document.getElementById('msg').innerText=msg[dia];
}