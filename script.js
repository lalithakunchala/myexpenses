
flatpickr(".demo", {
	enableTime: true,
    mode: "multiple",
    dateFormat: "F j, Y h:i K"
});

$(function () {
    $('#datetimepicker1').datetimepicker();
});

// increment counter

var total = 0;
// console.log(val);
var inc = document.getElementById('inc');
var display = document.getElementById('display');
inc.addEventListener('click',function(){
    var val = document.getElementById('val').value;
     total +=  Number(val);
    // console.log(total);
    display.textContent = total
})

//date display

// var date = document.getElementById('date');
// var time = document.getElementById('time');
// var moon = document.getElementById('moon');
// var good = document.getElementById('good');
// var v1 = document.getElementById('v1');
// var v2 = document.getElementById('v2');
// var v3 = document.getElementById('v3');

time.addEventListener('click', function(){
    var date = document.getElementById('date');
    var moon = document.getElementById('moon');
    var good = document.getElementById('good');
    var v1 = document.getElementById('v1');
    var v2 = document.getElementById('v2');
    var v3 = document.getElementById('v3');
    var dt = date.value.split(' ').map(ele=>ele.split('/'));
    console.log(dt[0]);

    //variable 1
    var timecal = 0;
    var [a] = dt[1]
    a = a.split(':');
    if(dt[2]=="AM"){
        timecal = Number(a[0]);
    }
    else{
        timecal = Number(a[0])+12;
    }
    
    var wish = wishing(timecal);
    good.textContent = wish;

    //variable 2

    var day = Number(dt[0][0]);
    var var2 = variable2(day);
    v1.textContent = var2[0];
    v3.textContent = var2[1];
    var var3 = variable3(day);
    v2.textContent= var3[0];
    moon.setAttribute('src',var3[1])
})

// 1, 4, 8, 12, 15, 19, 23, 27 - Today is , we are in

function wishing(n){
    
    if(n<5 || n>21){
        return "Good Night";
    }
    if(n>=5 || n<12){
        return "Good Morning";
    }
    if(n>=12 || n<18){
        return "Good Afternoon";
    }
    if(n>=18 || n<21){
        return "Good Evenning";
    }
}


function variable2(n){
    var arr = [1, 4, 8, 12, 15, 19, 23, 27]
    if(arr.indexOf(n)==-1){
        return ["We are in","Day"];
    }
    else{
        return ["Today is","Phase"];
    }
}

function variable3(n){
    if(n<4){
        return ["New Moon","https://i.imgur.com/9b9dC2V.jpg"];
    }
    if(n<8){
        return ["First Quarter Moon","https://i.imgur.com/1B97Net.jpg"]
    }
    if(n<12){
        return ["Waxing Crescent Moon","https://i.imgur.com/GcAthW4.jpg"]
    }
    if(n<15){
        return ["Waxing Gibbous Moon","https://i.imgur.com/LtxgSqm.jpg"]
    }
    if(n<19){
        return ["Full Moon","https://i.imgur.com/ZbxDzES.jpg"]
    }
    if(n<23){
        return ["Waning Gibbous Moon","https://i.imgur.com/ZnSTp3J.jpg"]
    }
    if(n<27){
        return ["Waning Crescent Moon","https://i.imgur.com/ytObI8T.jpg"]
    }
    if(n<32){
        return ["hird Quarter Moon","https://i.imgur.com/TT39XAI.jpg"]
    }
}

// function variable4(n){
    
// }