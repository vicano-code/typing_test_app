import { useContext } from 'react';
import '../App.css';
import { MyContext } from '../App';

function InputTextSection () {
    const {input, setInput, status} = useContext(MyContext);
    function handleInputChange(e) {
        setInput(e.target.value)
    }
    return (
        <section aria-label="Input text" id="inputSection">
            <textarea 
                name="inputText" 
                id="textBox" 
                value = {input} 
                onChange = {handleInputChange} 
                placeholder='Enter text here'
                disabled={status==='Start'? true : false} />
        </section>
    )
}

export default InputTextSection;