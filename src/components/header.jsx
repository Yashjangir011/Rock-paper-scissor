import { useState } from 'react';
import logo from "../assets/logo-2.png"
import mark from "../assets/mark-1.png"
import tick from "../assets/tick-1.png"

function Header() {
    const [playerName, setPlayerName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);

    const handleSetPlayerName = () => {
        if (playerName.trim()) {
            setIsNameSet(true);
        }
    };

    return (
        <header className="relative w-full flex flex-col bg-gradient-to-b">
            {/* First row 
            :- The logo of the game is on the left side
            :- The question mark is the description of the game tell the user the rules of the game
            */}
            <div className="w-full flex justify-between items-center p-4">
                <img src={logo} alt="Game Logo" className="w-auto h-16 hover:scale-150 transition-transform duration-300" />
                <button 
                    onClick={() => window.alert('Game Instructions:\n1. Choose your move\n2. Computer will make its move\n3. Winner will be declared based on classic rules\n- Rock beats Scissors\n- Scissors beats Paper\n- Paper beats Rock')} 
                    className="w-12 h-12 hover:cursor-pointer rounded-full border-4 border-[#8B4513] flex items-center justify-center p-1  transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <img src={mark} alt="" className="w-10 h-8 hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* 
            :- herewe use ternary operator to check if the player name is set or not
            :- if the player name is not set we show the input field and the tick button so they can insert there name 
            :- if the player name is set we show only the player name and the oponnent name
            */}
            <div className="w-full flex justify-center items-center gap-12 "> 
                {!isNameSet ? (
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Player Name" 
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            className="text-xl p-2 rounded-full border-1 border-[#8B4513] focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all duration-300 shadow-md hover:shadow-lg"
                        />
                        <button className="w-13 h-13 hover:cursor-pointer -ml-2" onClick={handleSetPlayerName}>
                            <img className="mt-2 ml-2 hover:scale-150 transition-transform duration-300" src={tick} alt="" />
                        </button>
                    </div>
                ) : (
                    <h1 className="text-4xl text-[#8b4513] font-extrabold tracking-wide rounded-full border-1 border-[#8B4513] p-4 px-8 ">{playerName}</h1>
                )}
                
                <h1 className="text-5xl font-extrabold text-[#8B4513] ">VS</h1>
                
                <h1 className="text-4xl font-extrabold text-[#8B4513] tracking-wide rounded-full border-1 border-[#8B4513] p-4 px-8 ">META</h1>
            </div>
        </header>
    );
}

export default Header;