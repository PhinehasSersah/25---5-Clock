import React, {useState, useEffect} from 'react';
import Clock from "./clock";


const ClockLogics = () => {
    const [breakValue, setBreakValue] = useState(5);
    const [sessionValue, setSessionValue] = useState(25);
    const [minute, setMinute] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [timerLabel, setTimerLabel] = useState('Session Timer')

    useEffect(() => {
        if(playing){
            if (minute>0 && seconds>=0) {
            const interval = setInterval(() => setSeconds(seconds<1? 59 : seconds-1), 1000);
            return () => clearInterval(interval);
          } else if(minute===0 && seconds>0) {
            const interval = setInterval(() => setSeconds(seconds<1? 59 : seconds-1), 1000);
            return () => clearInterval(interval);
          }
        }
     }, [playing,seconds,minute,breakValue]);

     useEffect(() => {
        if(playing){
            if(seconds===0 && minute>0) {
                const interval = setInterval(() => setMinute(minute<1? 0 : minute-1), 1000);
                return () => clearInterval(interval)
            };

            if(seconds===0 && minute===0 && timerLabel==='Session Timer') {
            setTimerLabel('Break Session Started');
            setMinute(breakValue);
            playSound();
                    
            } else if(seconds===0 && minute===0 && timerLabel==='Break Session Started') {
                setTimerLabel('Session Timer')
                setMinute(sessionValue);
            }
        }
     }, [playing, seconds, minute, sessionValue, timerLabel, breakValue]);
      
    //  toggle playing state
     const secControl = () => {
         setPlaying(playing? false:true)
     }

    //increment break value
    const breakDecrement = () => {
            if(breakValue>1 && playing===false) {
                setBreakValue(breakValue-1)
            }
    }
    // decrease break value
    const breakIncrement = () => {
        if(breakValue<60 && breakValue>=1 && playing===false) {
    setBreakValue(breakValue+1)
        }
    }
    // Increases session timer
    const sessionIncrement = () => {
        if(sessionValue<60 && playing===false) {
            setSessionValue(sessionValue+1)
            setMinute(sessionValue+1)
        }
    }
    //Session Decrement
    const sessionDecrement = () => {
        if(sessionValue>1 && playing===false) {
            setSessionValue(sessionValue-1)
            setMinute(sessionValue-1)
        }
    }
    //reset session && break values
    const reset = () => {
        setBreakValue(5);
        setSessionValue(25);
        setSeconds(0);
        setMinute(25);
        setPlaying(false);
        setTimerLabel('Session Timer');
        let beep = document.getElementById('beep');
        beep.pause()
        beep.currentTime = 0;
    };

    //sound function
    const playSound = () => {
        let beep = document.getElementById('beep');
            beep.play();
     }

    return(
        <section>
            <Clock 
            reset={reset}
            sessionDecrement={sessionDecrement}
            sessionIncrement={sessionIncrement}
            breakDecrement={breakDecrement}
            breakIncrement={breakIncrement}
            secControl={secControl}
            breakValue={breakValue}
            sessionValue={sessionValue}
            minute={minute}
            seconds={seconds}
            timerLabel={timerLabel}
            />
        </section>
    )
};

export default ClockLogics;