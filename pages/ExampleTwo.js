import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleTwo() {
    
    /* the squre brackets [] makes sure the useEffect rund once on page load
    * code on pages will run two times. Once to render what we want and another is to render
    * strict mode to find any common bugs.
    */
    useEffect(() => {
            console.log("run");
    }, [])

    return(
        <>
            <Header/>
            <main>
                <h1>
                    Example 2
                </h1>
            </main>
            <Footer/>
        </>
    )
}