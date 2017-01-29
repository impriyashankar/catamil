var p1="புலம்பெயர்ந்து கலிஃபோர்னியாவில் வாழும் குழந்தைகளுக்கு தமிழ் மொழியையும் தமிழ் பண்பாட்டையும் கற்றுத்தர ஆரம்பிக்கப்பட்ட, கலிஃபோர்னியா தமிழ்க் கழகம் இப்பொழுது உலகமுழுதும் பரவி, உலகத் தமிழ்க்கல்விக் கழகம் எனச் செயல்பட்டு வருகிறது.";
var p2="California Tamil Academy founded to teach Tamil language and Tamil culture to diaspora Tamil children in California is now spread all over the world as International Tamil Academy.";
var texts = [p1,p2];
var count = 0;
var disp_text=document.getElementById("intro");
function changeText() {
    disp_text.innerHTML=texts[count];
    /*alert(document.getElementById("intro").style.font);*/
    
    if(count == 0)
    {
    	document.getElementById("intro").style.fontStyle="italic";
    }
    else
    {
    document.getElementById("intro").style.fontStyle="normal";	
    }
    count++;
    if(count >= texts.length) 
    { 
    count = 0; 
    }

}
setInterval(changeText, 2000);