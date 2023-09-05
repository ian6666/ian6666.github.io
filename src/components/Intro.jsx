import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Ian Li</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Researcher, Developer, Explorer</p>
            
            <div className="flex max-w-xl mb-6">
                <p className="text-sm font-bold mr-3 text-left mb-6">
                    Hi! This is Ian! Welcome to my corner on the internet! 
                    I am studying CS/Math at Harvey Mudd College. Currently,
                    my academic journey has led me to the fascinating world 
                    of artificial intelligence and machine learning research. With a 
                    curious mind and a drive for innovation, I'm constantly exploring
                    the endless possibilities that AI offers to reshape our future.
                    <br></br>
                    <br></br>
                    In my freetime, I enjoy cooking <span> 🥘 </span>, basketball <span>🏀</span>, <br />
                    rock-climbing <span>🧗</span>, and reading non-fictions <span>📖</span>.
                </p>
                
                <img
                    src="\assets\ian.png"
                    alt="Profile"
                    className="w-64 h-64 rounded-lg"
                />
            </div>
        </div>
    )
}

export default Intro;
