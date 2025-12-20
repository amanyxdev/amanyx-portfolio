import { useState } from "react"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import { useEffect } from "react"
import { motion } from "framer-motion"

const App = () => {
    // const [loading, setLoading] = useState(true)
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => setLoading(false), 2000);
    //     return () => clearTimeout(timer)
    // }, []);
    //
    // if (loading) {
    //     return (
    //         <div className="h-screen w-full bg-black flex items-center justify-center">
    //             <motion.h1
    //                 initial={{ scale: 0 }}
    //                 animate={{ scale: [1, 1.2, 1] }}
    //                 transition={{ repeat: Infinity }}
    //                 className="text-yellow-400 font-comic text-6xl italic"
    //             >
    //                 LOADING...
    //             </motion.h1>
    //         </div>
    //     )
    // }
    return (
        <main className="bg-black">
            <section id="hero" className="relative h-screen">
                <Hero />
            </section>


            <section id="projects" className="relative">
                <Projects />
            </section>

            <section id="contact" className="relative h-screen">
                <Contact />
            </section>
        </main>)
}

export default App
