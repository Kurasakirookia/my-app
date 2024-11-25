import React , {useState} from 'react'

export default function About() {


    const [setmode , setMode]= useState({
        color: 'black',
        backgroundColor:'white'
    });

    const [btn , btnText]= useState('Enable to Dark mode') 
    const [btncolor, btnColor] =useState({
        color:'white',
        backgroundColor:'blue'
    })

    

    const changeMode =()=>{
        console.log('chnageMode was clicked');
        if (setmode.color ==='black'){
            setMode(
                {
                    color: 'white',
                    backgroundColor:'black'
                }
            );
        btnText('Disable Dark Mode')
        btnColor({
            color:'black',
            backgroundColor:'white'
        })

            }
        else{
            setMode(
                {
                    color: 'black',
                    backgroundColor:'white'
                }
            );
            btnText('Enable Dark Mode')
            btnColor({
                color:'white',
                backgroundColor:'blue'
            })

            
        }
    }
  return (

            <div>
            <h1 style={setmode}>About Us</h1>
            <div className="accordion" id="accordionExample" style={setmode}>
        <div className="accordion-item" style={setmode}>
            <h2 className="accordion-header" style={setmode}>
            <button className="accordion-button collapsed" style={setmode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={setmode}>
            <h2 className="accordion-header" style={setmode}>
            <button className="accordion-button collapsed" style={setmode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={setmode}>
            <h2 className="accordion-header" style={setmode}>
            <button className="accordion-button collapsed" style={setmode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <button className='btn btn-primary my-3 mx-2' onClick={changeMode} style={btncolor} > {btn}</button>
        </div>
            </div>
  )
}
