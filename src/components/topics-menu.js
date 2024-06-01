"use client"

import { useState } from "react";

export default function TopicsMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="z-20 text-black bg-white hover:text-white hover:bg-black hover:border-white *:hover:fill-white flex justify-evenly items-center cursor-pointer p-4 border border-black rounded gap-2 transition-all duration-300" onClick={() => {
                setIsOpen((previousIsOpen) => !previousIsOpen);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className={"w-6 h-6 " + (isOpen ? "rotate-180" : "rotate-0")}>
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Topics</span>
            </div>
            <nav className={"fixed md:p-4 transition-all duration-300 ease-out left-0 z-10 w-screen h-dvh bg-cafe_noir overflow-hidden *:text-white " + (isOpen ? "bottom-0" : "bottom-full")}>
                <h1 className="text-center block max-md:hidden">Topics</h1>
            </nav>
        </>
    );
}