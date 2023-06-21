import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { useRef } from "react";


function Dashboard() {

    const {status, setStatus, counter, setCounter, input, setInput, text} = useContext(MyContext);
    const intervalRef = useRef(null);
    const wordcountRef = useRef(0);
    const speedRef = useRef(0);
    const accuracyRef = useRef(0);

   // Code for count timer 
    useEffect(() => {
        if (status === 'Stop') {
            intervalRef.current = setInterval(() => {
                setCounter(counter => counter + 1);  
            }, 1000);
        } 
        return () =>  clearInterval(intervalRef.current);
    }, [status, counter,setCounter]);

    var sec = Math.floor((counter % 60));
    var min = Math.floor((counter % (60 * 60)) / (60));
    var hour = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
    if (sec < 10) {
        sec = '0'+ sec;
    }
    if (min < 10) {
        min = '0' + min;
    } 
    if (hour < 10) {
        hour = '0' + hour;
    } 

    //Calculate word count
    var m=0, n=0;
    while (input.length > 0 && m <= input.length) {
        if (input[m] === ' ' && input[m+1] !== ' ') {
            n++;
            wordcountRef.current = n;
        }
        m++;
    }

    // Calculate typing speed at button 'Stop'
    function handleStart(){
        if (status === 'Start'){
            setStatus('Stop');
        } else {
            setStatus('Start');
            if (min > 0) {
                var inputTextArray = input.split(' ');
                var sampleTextArray = text.split(' ');
                //compute speed
                speedRef.current = Math.round(wordcountRef.current/min);
                //compute accuracy
                var i = 0, j = 0, accuracyCount = 0;
                while (i<inputTextArray.length){
                    if (inputTextArray[i] === sampleTextArray[j]){
                        accuracyCount += 1;
                    }
                    i++; j++;
                }
                accuracyRef.current = (accuracyCount/inputTextArray.length * 100).toFixed(2);
            }
        }
    }

    //code for resetting the app
    function resetApp() {
        clearInterval(intervalRef.current);
        setStatus('Start');
        setCounter(0);
        setInput('');
        wordcountRef.current = 0;
        speedRef.current = 0;
    }
    return (
        <section aria-label="Dashboard" id="dashboard">
            <button aria-label="Reset app" class="btn" id="resetBtn" onClick={resetApp}>Reset</button>
            <button aria-label="Start time counter" class="btn" id="startBtn" onClick={handleStart}>
                {status}
            </button>
            <div aria-label="TImer" className="timer" id="counttimerdiv">
                <p style={{color: 'red'}}>Timer</p>
                <div id="counttimer">{hour + ':' + min + ':' + sec} </div>
            </div>
            <div aria-label="Word count" className="timer" id = "wordcountdiv">
                <p style={{color: 'red'}}>Word Count</p>
                <div id="wordcount">{wordcountRef.current}</div>
            </div>
            {(speedRef.current > 0) ? <div className="timer" id="typingspeeddiv">
                <p style={{color: 'red'}}>Speed</p>
                <div aria-label="Typing speed and accuracy value"id="typingspeed">
                    {speedRef.current === 0 ?  0 : speedRef.current + " words/minute"}
                    <hr />
                    <p style={{color: 'red'}}>Accuracy</p>
                    {accuracyRef.current + ' percent'}
                </div>
            </div> : null}
        </section>
    )
}

export default Dashboard