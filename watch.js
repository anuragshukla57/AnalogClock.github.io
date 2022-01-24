setInterval(() => {
    d=new Date();                      //1.       //ROTATION FOR HOUR HAND
    htime=d.getHours();              //  12 HOUR= 360*  =>  1 HOUR= 360/12 => 30*   30h(GENERAL REPRESENTATION)
    mtime=d.getMinutes();            // ROTATION IN HOUR HAND DUE TO MIN HAND
    stime=d.getSeconds();            // 60 MIN=30*  => 1MIN= 60/30 => 1/2*          1/2m(GENERAL REPRESENTATION)
    hrotation= 30*htime + mtime/2;   // => ROTATION FOR HOUR HAND =>  30h + m/2 (GENERAL REPRESENTATION
    mrotation= 6*mtime;
    srotation=  6*stime             //2.        //ROTATION FOR MINUTE HAND     |      //3.ROTATION FOR SECOND HAND    
                                  // 60 MIN=360*  => 1 MIN= 360/60 => 6*       |  60 SECONDS = 360*    
                                  // FOR m MINUTES  6m (GENERAL REPRESENTATION)|  => 1SECOND = 6* 
    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
    
}, 1000);                         
                                  
                                  