import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function ExampleFour() {
    //var [text, setText] = useState("");
    //number is a variable on the left side that is used to display or grab value from useState
    //setNumber is used to update teh useState

    const [number, setNumber] = useState(0); // initially start as the number 0
    // default template of useState
    const [color, setColor] = useState("gray");// default as string of gray

    const [trigger, setTrigger] = useState(false);// default boolean fault

    const HandleChange = () => {
        if(number > 2) {
            setColor("orange");
        }
    }
// set outside the HandleChange
    useEffect(() => {
        var interval;

        if(trigger) {
            interval = setInterval(() => {
                HandleChange();
                setTrigger(false);
            }, 3000) //after 3s then it will do console.log below
        }
        console.log(number);
        console.log(trigger);

    return () => clearInterval(interval); 
    //clearing the interval so it doesn't get stuck in a loop
    })
    
    return(
        <>
        <Header/>
        <main>
            <button onClick={() => {
                setNumber(number + 1) // when click -> goes up by 1
                setTrigger(true)
            }}>Add Number</button>
            <h1 style={{color: color}}>Changing the text color</h1>
            {
                // 
                number > 1 && <div style={{
                    backgroundColor: `${color}`, // color from useState
                    lineHeight: 10,
                    padding: 20 }}>
                        Box
                    </div>
                
            }
        </main>
        </>
    )
}