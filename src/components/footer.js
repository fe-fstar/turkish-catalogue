export default function Footer() {
    return (
        <footer className="w-screen p-4 pt-0 *:text-white bg-cafe_noir">
            <div className="w-full rotate-180">
                <svg className="relative block w-full h-[135px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="fill-[#FCF6CE]"></path>
                </svg>
            </div>
            <div className="flex justify-evenly items-center p-4">
                <h1 className="text-xl">Turkish Catalogue, 2024</h1>
                <a className="text-xl hover:opacity-75" href="https://kolta.dev" target="_blank">Visit the Developer</a>
            </div>
        </footer>
    );
}