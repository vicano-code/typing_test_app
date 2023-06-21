import { useContext, useState } from 'react';
import '../App.css';
import { data } from '../TextData';
import { MyContext } from '../App';


function SampleTextSection() {
    const [index, setIndex] = useState(0);
    const {text, setText} = useContext(MyContext)

    function handleTextChange() {
        let textsize = data.length;
        if (index < textsize - 1) {
            setIndex(index + 1);
            setText(data[index])
        } else {
            setIndex(0);
            setText(data[index])
        }
    }
    return (
        <section aria-label="Sample text for typing" id="sampleTextSection">
            <button aria-label="Get new text" class="btn" id="generateTextBtn" onClick={handleTextChange}>Get New Text</button>
            <div id="sampleTextBox">
                {text}
            </div>
        </section>
        
    )
}

export default SampleTextSection;