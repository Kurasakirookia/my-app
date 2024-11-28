import React ,{useState} from 'react'

export default function TextForm(props) {
    const convertToUpper=() =>{
        console.log("convertoUpper was clicked" );
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('Text is converted to Upper case','success');
    }
    const convertToLower=() =>{
        console.log("convertoLower was clicked" );
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert('Text is converted to lower case','success');
    }

    const textAreaChange =(event)=>{
        console.log("textAreaChange was clicked");
        setText(event.target.value)
    }
    const clearText =()=>{
        let newtext='';
        setText(newtext )
        props.showAlert('Text is cleared','success');
    }
    
    const copyText =()=>{
      var text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text is copied','success');
    }

    const [text, setText] = useState('enter the2 text here');

    const capitalize = () => {
      let newText = text.charAt(0).toUpperCase() + text.slice(1);
      setText(newText);
      props.showAlert('Text is capitalized','success');
  };
  



  return (
    <>
    
    <div className={`container `} style={{color:props.mode==='dark'?'white':'black'}} >
      <div className="mb-3">

        </div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        

        <textarea className="form-control" value={text} onChange={textAreaChange} id="myBox" rows="8"      style={{backgroundColor:props.mode==='dark' ? '#004462' :'white', color:props.mode==='dark' ? 'white' :'black'}}  ></textarea>
        <button className='btn btn-primary my-2 mx-2' onClick={convertToUpper}  style={props.btncolor} >Convert to upper case</button>
        <button className='btn btn-primary my-2 mx-2' onClick={convertToLower} style={props.btncolor} >Convert to Lower case</button>
        <button className='btn btn-primary my-2 mx-2' onClick={clearText} style={props.btncolor}>Clear text</button>
        <button className='btn btn-primary my-2 mx-2' onClick={copyText} style={props.btncolor}>Copy text</button>
        <button className='btn btn-primary my-2 mx-2' onClick={capitalize} style={props.btncolor}>Captilize</button>


        </div>
    </div>

    <div className="container my-2" style={{color:props.mode==='light'?'black':'white', border:props.mode==='dark'?'1px solid white':'1px soild black', borderRadius:'20px'}}>
        <h1>Summer of your text</h1>
        <p> {text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} length</p>
        <p> {0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read this</p>


    </div>

    </>



  )
}
