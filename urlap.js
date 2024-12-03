
document.getElementById("q").addEventListener("input", update)
document.getElementById("type").addEventListener("input", update)
document.getElementById("mikor").addEventListener("input", update)
document.getElementById("kor").addEventListener("input", kor)
document.getElementById("kenyelem").addEventListener("click", update)
document.getElementById("kinezet").addEventListener("click", update)

const radio = document.querySelectorAll('input[name="freq"]');
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", update);
}


let korvaltozott = false;

function update() {
    let total = 6;
    let kesz = 0;

    const a = document.getElementById("q").value;
    const b = document.getElementById("type").value;
    const c = document.querySelector('input[name="freq"]:checked');
    const d = document.getElementById("mikor").value;
    const e = document.getElementById("kor").value;
    const f = document.getElementById("kenyelem").checked;
    const g = document.getElementById("kinezet").checked;

    let progressbar = document.getElementById("progressbar");

    if (a) kesz++;
    if (b) kesz++;
    if (c) kesz++;
    if (d) kesz++;
    if (f || g) kesz++;

    if (korvaltozott){
        kesz++
    }

    let progress = (kesz/total) * 100;
    progressbar.value = progress

}

    function kor() {
        let korInput = document.getElementById("kor");
        let korvalue = document.getElementById("korErtek");
        korvalue.innerHTML = korInput.value; 

        korvaltozott = true;

        update();
    };

document.getElementById("reset").addEventListener("click", alap);
  function alap() {
        let progressbar = document.getElementById("progressbar");
        progressbar.value = 0; 
    };
//----------------------------------------------------
/*
document.getElementById("calculate").addEventListener("click", calculateCO2);
document.getElementById("cartype").addEventListener("input", calculateCO2);
document.getElementById("distance").addEventListener("input", calculateCO2);

function calculateCO2() {
    const cartypevalue = document.getElementById("cartype").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const resultdiv = document.getElementById("result");


    const co2perkm = {
        benzines: 120, // Benzines autó Co2 kibocsátása
        diesel: 100,   // Dízel autó Co2 kibocsátása
        elektromos: 0  // Elektromos autó Co2 kibocsátása
    };

    const co2Emission = co2perkm[cartypevalue] * distance;

    let resulttext = "";
    if (cartypevalue === "elektromos") {
        resulttext = `Az elektromos autóval ${distance} km megtétele, nem bocsátott ki közvetlen CO₂-t.`;
    } else {
        resulttext = `A(z) ${cartypevalue} autóval ${distance} km megtétele során ${co2Emission} gramm CO₂ került kibocsátásra.`;
    }

    resultdiv.innerHTML = resulttext; 
}
//-------------------------------------------------

document.getElementById("rangeSlider").addEventListener("input", fgv);

const rangeSlider = document.getElementById("rangeSlider");
const image = document.getElementById("image");
const text = document.getElementById("info");

const images = ["Otto1.jpg","Otto2.jpg","Otto3.jpg","Otto4.jpg"];

const texts = [
"Kitolás: A négyütemű motorok negyedik üteme. A kitolás során a dugattyú felfele mozog, miközben a kiömlő szelepek nyitva vannak és a beömlők zárva. A felfele mozgás során a dugattyú kinyomja az égésterméket a hengertérből a szabadba. Amikor a dugattyú eléri a felső holtpontját, akkor a folyamat a szívás fázissal kezdődik elölről.",
"Munkaütem: A négyütemű motorok harmadik üteme. A munkaütem során a szikra által okozott robbanás lefelé löki a dugattyút. Ebben a fázisban a beömlő és kiömlő szelepek zárva vannak. Tehát ebben a fázisban történik meg az üzemanyag elégetése, amit a motor mechanikai energiává alakít át. Amikor a dugattyú eléri az alsó holtpontját, akkor kezdődik a negyedik ütem.",
"Sűrítés: A négyütemű motorok második üteme. A sűrítés során a dugattyú elkezd felfelé mozogni, miközben a beömlő és kiömlő szelepek egyaránt zárva vannak. Ezáltal a levegő és üzemanyag nagyon pontosan meghatározott arányú keveréke egyre kisebb térfogatú lesz. Amikor a keverék a legsűrűbb állapotában van, akkor az elektromos szikra begyújtja azt. A robbanás választja el a második és harmadik ütemet.",
"Szívás: A négyütemű motorok első üteme. A szívás során a dugattyú lefelé mozog, miközben a beömlő szelepek nyitva vannak (a kiömlők zárva), amiken keresztül a hengertérbe áramlik a levegő és üzemanyag nagyon pontosan meghatározott arányú keveréke. Amikor a dugattyú eléri az alsó holtpontját, épp, amikor elkezd felfelé mozogni, akkor kezdődik a második ütem."
];

function fgv(){
    const index = rangeSlider.value - 1; //indexek miatt -1
    image.src = images[index];
    text.innerHTML = texts[index];
    };
*/

