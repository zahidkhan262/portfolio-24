import React from 'react'

type ButtonPorpsType = {
    label: string;
    icon: React.ReactNode;
    position: string;
    otherClasses?: string;
    handleClick?: () => void;
}
const MagicButton = ({ label, icon, position, otherClasses, handleClick }: ButtonPorpsType) => {

    return (
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className={`sm:px-10 sm:py-3 px-4 py-2 flex items-center bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
                {position === 'left' && icon}
                {label}
                {position === 'right' && icon}
            </div>
        </button>
    )
}

export default MagicButton