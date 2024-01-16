import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleFive() {
    // we want to set up a counter
    // after everyone s teh number increases by 1
    // we want to display that number on screen as it increase
    // no button is needed it will up date automatically

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count])

    return(
        <>
        <Header/>
        <main>
            <div>
                <h1>Number Counter</h1>
                <h3>Example using Interval</h3>
                <div>{count}</div>
            </div>
        </main>
        <Footer/>
        </>
    )
}