
export function Notes() {
    return (
        <div aria-label="Important notes about this app" id="notes" style={{fontFamily:"sans", textAlign: "justify"}}>
            <h3 style={{color: 'red', fontFamily: 'Cursive', fontWeight: 'bolder', textAlign:'center'}}>Some Notes</h3>
            <p>This app is not designed for mobiles or tablets</p>
            <p>The input text section is disabled until you click the <code>Start</code> button.</p>
            <p>The <code>Start</code> button changes to <code>Stop</code> when clicked</p>
            <p>When you click the <code>Stop</code> button, your typing speed and accuracy are calculated and displayed on the dashboard</p>
            <p>You must type into the text area for at least one minute to see your speed and accuracy</p>
            <p>Punctuations are not included in the dashboard computations</p>
            <p>The app ignores character case for dashboard computations</p>
        </div>
    )
}