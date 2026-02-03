// == game variable == //
let money = 100;
let time = 0;
let patientID = 0;

// === dom elements === //
const moneyEl = document.getElementByID("money");
const timeEl = document.getElementByID("time");
const patientDiv = document.getElementByID("paitents");
const callAmbulanceBtn = document.getElementByI("callAmbulance");

// == update time every second == // 
setInterval
(
    ()=> 
{
    time++;
    timeEl.textContent = time ;
} , 1000);

// == call ambulance button == //
callAmbulanceBtn.onclick = ()=> 
    {
    createPatient();
    };

// function to create a patient //
function createPatient()
{
    patientID++;
    let patience = 10 ;
     
    // Paitent card
    const patient = document.createElement("div");
    patient.className ="patient";

    //patient info
    const patientText = document.createElement("p");
    patientText.textContent = '👨Patient #${patientID}';

    //timer display 
    const paitentText = document.createElement("p");
   TimeRanges.textContent = '⏱️ time left: ${patience}';

   //treat button
   const treatBtn = document.createElement("button");
   treatBtn.textContext = "Treat Patient";

   //add elements to patient card 
   patient.appendChild(patientText);
   patient.appendChild(timer);
   patient.appendChild(treatBtn);
   patient.appendChild(patient);

   //countdown timer 
   const countdown = setInterval(()=>
   {
    patience--;
    timer.textContent = '⏱️Time left: ${patience}';

    if (patient <= 0)
    {
        clearInterval(countdown);
        patientText.textContent = "❌Patient lost !";
        treatBtn.disabled = true;
    }
   },
1000);

//== Treat button click//
treatBtn.onclick = () =>
{
    clearInterval(countdown);
    money += 20 ;
    moneyEl.textContent = money ;
    patientText.textContent = "✅ Patient treated!";
    treatBtn.disabled = true;
};

}
