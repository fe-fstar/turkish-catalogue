import TopicsMenu from "./topics-menu";

export default function Header() {
    return (
        <header className="absolute w-screen p-4 flex items-center justify-evenly bg-cafe_noir *:text-white *:basis-1/3 *:flex *:items-center shadow-lg border-b-2 border-lemon_chiffon">
            <div className="justify-center md:justify-start">
                <TopicsMenu />
            </div>
            <h1 className="flex max-md:hidden font-milksty text-6xl justify-center items-center text-center">Turkish Catalogue</h1>
            <div className="flex max-md:hidden"></div>
        </header>
    );
}