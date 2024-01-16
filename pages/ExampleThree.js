import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {
    // cannot redeclare
   const [number, setNumber] = useState(0);
   // length of array, color.length, if/else
   // 6 > colors.length = 6- 1 = 5
   
   const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

   useEffect(() => {
    if(number > colors.length - 1) {
        setNumber(0);
        console.log("changing number value: " + colors[0]);
    } else {
        console.log("changing number value: " + colors[number]); 
    }
    }, [number])

   //console.log("changing number value: " + colors[number]);}, [number])
   
   
    return (
        <>
            <Header/>
            <main>
                <h1> Example 3</h1>

                <button style={{backgroundColor: colors[number]}}
                        onClick={() => setNumber(number + 1 )}> 
                            Increment Button
                </button>
                <div>
                    {number}
                </div>
            </main>
            <Footer/>
        </>
    )
}