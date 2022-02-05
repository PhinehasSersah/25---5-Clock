import './clock.css'
    const Clock = ({reset,sessionDecrement,sessionIncrement,
                    breakDecrement,breakIncrement,secControl,
                    breakValue,sessionValue,minute,seconds,
                    timerLabel,
                }) => {
    return (
    <section className="clock"> 
            <audio id="beep" src='https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg'></audio>
        <div className="break">
            <h3 id="break-label">Break Length</h3>
            <p id="break-length">{breakValue}</p>
            <button id="break-decrement" onClick={breakDecrement}>Decrease Break</button>
            <button id="break-increment" onClick={breakIncrement}>Increase Break</button>
        </div>
        <div className="session">
            <h3 id="session-label">Session Length</h3>
            <p id="session-length">{sessionValue}</p>
            <button id="session-decrement" onClick={sessionDecrement}>Decrease Session</button>
            <button id="session-increment" onClick={sessionIncrement}>Increase Session</button>
        </div>
        <div>
            <h3 id="timer-label">{timerLabel}</h3>
            <div id="time-left"><p className='time' id='time-left'>{minute<10? `${0}`+ minute : minute}:{seconds<10? `${0}`+ seconds : seconds}</p></div>
        </div>
        <div className="controls">
            <button id="start_stop" onClick={secControl}>Start | Pause</button>
            <button id='reset' onClick={reset}>Reset</button>
        </div>

    </section>
    )
};


export default Clock;