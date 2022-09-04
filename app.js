const htmlClock= document.querySelector("#clock");
let clock = ()=>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = " am";
    if(hr ==0){
        hr = 12;
    }else if(hr >=12){

    }if(hr > 12){
        hr = hr -12;
        period= " pm";
    }
    hr = hr <10?"0" + hr: hr;
    min = min <10?"0" + min: min;
    sec = sec <10?"0" + sec: sec;
    
    let time = `${hr}:${min}:${sec}:${period}`;
    htmlClock.innerText= time;
    setTimeout(clock, 1000);
};
clock();