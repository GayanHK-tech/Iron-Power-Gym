function add(){
    let Wei,Hei,answer;

    Wei=parseInt(document.getElementById('weightBMI').value);
    Hei=parseInt(document.getElementById('heightBMI').value);

    answer=(Wei / ((Hei * Hei) / 10000)).toFixed(2);

    if (answer< 18.6){
        alert("Your BMI is" + " " + answer+" "+"And You are Under Weight");
    }else if (answer >= 18.6 && answer < 24.9){
        alert("Your BMI is" + " " + answer+" "+"And You are Normal");
    }else if(answer > 24.9){
        alert("Your BMI is" + " " + answer+" "+"And You are Over Weight");
    }




}