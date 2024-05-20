import React, {useState} from 'react';
import '../style.css'

export default function TextForm(props) {

    //abel to change code on textBox
    const [Text, setText] = useState('');

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }

    //upper case logic
    const HandleUpcase = ()=> {
        if (Text.length === 0) return props.showAlert(": Enter some text to perform your task","warning")
        else {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert(": your text convo upperCase","success ")
        }
    }

    
    //lowerCase logic
    const HandleLocase = ()=> {
         if (Text.length === 0) return props.showAlert(": Enter some text to perform your task","warning")
        else {
         let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert(": your text converted to lowerCase","success ")}
    }

    //remove extra spaces logic
    const HandleRvexsp = () => {
         if (Text.length === 0) return props.showAlert(": Enter some text to perform your task","warning")
         else {
        let newText = Text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert(": removed extra spaces from your text","success ")}
    }

    //capitalize per word logic
    const Handle1stc = () => {
         if (Text.length === 0) return props.showAlert(": Enter some text to perform your task","warning")
         else {
        let new2Text = Text;
        let arr = new2Text.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        let newText = arr.join(" ");
        setText(newText)
        props.showAlert(": added per word capitalize to your text","success ")}

    
    }

    const HandleCopy = () => {
        var text = document.getElementById("Text")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    
    //word variable to found word count
    let wordCount = Text.split(" ").filter((element)=>{return element.length!== 0}).length
    

  return (

    <div>

    
        
        
        <div className="container" style={{ color: props.mode==="dark"?"white":"#2c2556" }}>
            <div className="mb-3"> 
            <label className="mb-3" htmlFor="Text"><h1>{props.heading}</h1></label>
            
            <textarea className="form-control" value={Text} onChange={HandleOnChange} id="Text" style={{ backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#2c2556" }} rows="12"></textarea>

            <div className='formButton'>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpcase}>convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={HandleLocase}>convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={HandleRvexsp}>remove extra space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Handle1stc}>capitalize per word</button>
                <button className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>copy text</button>
                

                 
            </div>
            </div>
        </div>

        <div className="container my-3" style={{ color: props.mode==="dark"?"white":"#2c2556" }}>
            <h1>Your text summery</h1>
        
            <p>number of characters is : {Text.length} <br/>
               number of word is : {wordCount} <br/>
               number of time to speak text : { Math.floor(0.008* wordCount *100)/100 }min <br/>
               number of time to read upper text : { Math.floor(0.005* wordCount *100)/100 }min
            </p>

            <h1>Preview</h1>
            <p><i>{Text.length>0?Text:"Enter some Text in the textBox above to preview it"}</i></p>
        </div>

        <div>
        
        </div>
        
    </div>
  )
}
