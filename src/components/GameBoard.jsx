import { useState, useEffect } from 'react';
import person from "../assets/person-1.png"
import rock from "../assets/stone-real.png"
import paper from "../assets/paperr.png"
import scissor from "../assets/scissor2.png"
import mark from "../assets/angry-1.png"

export default function GameBoard() {
    const [personImage, setPersonImage] = useState(person);
    const [computerImage, setComputerImage] = useState(mark);
    const [isAnimating, setIsAnimating] = useState(false);
    const [computerChoice, setComputerChoice] = useState("");
    const [playerChoice, setPlayerChoice] = useState("");
    const [result, setResult] = useState("");
    const [isComputerAnimating, setIsComputerAnimating] = useState(false);

    // Function to get image based on choice
    const getImageForChoice = (choice) => {
        switch(choice) {
            case "rock": return rock;
            case "paper": return paper;
            case "scissor": return scissor;
            default: return mark;
        }
    };

    function handleComputerChoice() {
        if (playerChoice === "") {
            alert("Please select rock, paper, or scissor first!");
            return;
        }

        setIsComputerAnimating(true);
        setResult("");

        const choices = ["rock", "paper", "scissor"];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // Animation interval
        let counter = 0;
        const animationInterval = setInterval(() => {
            const cycleChoice = choices[counter % 3];
            setComputerImage(getImageForChoice(cycleChoice));
            counter++;
        }, 200); // Change image every 200ms

        // Stop animation after 3 seconds and show result
        setTimeout(() => {
            clearInterval(animationInterval);
            setComputerImage(getImageForChoice(randomChoice));
            setComputerChoice(randomChoice);
            setIsComputerAnimating(false);

            // Determine winner
            if (playerChoice === randomChoice) {
                setResult("It's a tie!");
            } else if (
                (playerChoice === "rock" && randomChoice === "scissor") ||
                (playerChoice === "paper" && randomChoice === "rock") ||
                (playerChoice === "scissor" && randomChoice === "paper")
            ) {
                setResult("You win!");
            } else {
                setResult("You lose!");
            }
        }, 3000); // Stop after 3 seconds
    }

    function handlePlayerChoice(choice) {
        setIsAnimating(true);       
        setPlayerChoice(choice);
        
        // Determine which image to show
        let newImage;
        if (choice === "rock") {
            newImage = rock;
        }
        else if (choice === "paper") {
            newImage = paper;
        }
        else if (choice === "scissor") {
            newImage = scissor;
        }
        else {
            newImage = person;
        }

        // Reset result when making new choice
        setResult("");
        setComputerImage(mark);

        // Add a small delay before changing the image for smooth transition
        setTimeout(() => {
            setPersonImage(newImage);
            setTimeout(() => setIsAnimating(false), 150);
        }, 150);
    }

    return (
        <div className="relative w-full flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="flex gap-20">
                    {/* Player's choice box */}
                    <div className="flex flex-col items-center">
                        <div className="w-160 h-110 border-2 border-[#8B4513] rounded-lg">
                            <div className="w-120 h-60 ml-14">
                                <div>
                                    <img 
                                        src={personImage} 
                                        alt="" 
                                        className={`transition-all duration-300 ${isAnimating ? 'scale-90 opacity-80' : 'scale-100 opacity-100'}`}
                                    />
                                </div>
                                <div className="flex gap-10 justify-center mt-7">
                                    <button 
                                        onClick={() => handlePlayerChoice("rock")} 
                                        className="text-[#8b4513] border-2 border-[#8B4513] rounded-lg px-4 py-2 text-2xl cursor-pointer font-extrabold"
                                        disabled={isComputerAnimating}
                                    >ROCK</button>
                                    <button 
                                        onClick={() => handlePlayerChoice("paper")} 
                                        className="text-[#8b4513] border-2 border-[#8B4513] rounded-lg px-4 py-2 text-2xl cursor-pointer font-extrabold"
                                        disabled={isComputerAnimating}
                                    >PAPER</button>
                                    <button 
                                        onClick={() => handlePlayerChoice("scissor")} 
                                        className="text-[#8b4513] border-2 border-[#8B4513] rounded-lg px-4 py-2 text-2xl cursor-pointer font-extrabold"
                                        disabled={isComputerAnimating}
                                    >SCISSOR</button>
                                </div>
                            </div>
                        </div>
                        {result && (
                            <div className="mt-6 text-4xl font-bold text-[#8B4513]">
                                Player
                            </div>
                        )}
                    </div>

                    {/* Computer's choice box */}
                    <div className="flex flex-col items-center">
                        <div className="w-160 h-110 border-2 border-[#8B4513] rounded-lg flex items-center justify-center">
                            <div className="w-90 h-60 ml-14 mb-28">
                                <div>
                                    <img 
                                        src={computerImage}
                                        alt=""
                                        className={`transition-all duration-300 ${isComputerAnimating ? 'animate-pulse' : ''}`}
                                    />
                                </div>
                                <div className="flex justify-center mt-10">
                                    <button 
                                        onClick={handleComputerChoice} 
                                        className="text-[#8b4513] border-2 border-[#8B4513] rounded-lg px-4 py-2 text-2xl cursor-pointer font-extrabold"
                                        disabled={isComputerAnimating}
                                    >START</button>
                                </div>
                            </div>
                        </div>
                        {result && (
                            <div className="mt-6 text-4xl font-bold text-[#8B4513]">
                                Computer
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Game Result */}
                {result && (
                    <div className="mt-8 text-6xl font-extrabold text-[#8B4513] animate-bounce">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}

