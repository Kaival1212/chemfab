import { ModelViewer } from "./ModelViewer";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="p-8 h-auto md:h-[100vh] bg-gradient-to-b from-[#EAEEFE] to-[#5743CD] from-20% to-100%"
        >
            <div className="flex-col flex md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-[70px] md:text-[90px] bg-gradient-to-b from-black to-[#001354] text-transparent bg-clip-text">
                        Leaders in Quality Engineering
                    </h1>
                    <h5 className="text-[#010D3E] text-xl my-4 mr-10">
                        Excellence in Chemical, Pharmaceutical, and Dyes Process Equipment
                    </h5>
                    <div className={'flex gap-10 mb-4'}>
                        <button className="bg-[#2463EB] text-white font-semibold px-4 py-2 rounded-xl">
                            Get a Quote
                        </button>
                        <button className="bg-[#F5DBDB] text-black font-semibold px-4 py-2 rounded-xl">
                            Learn more
                        </button>
                    </div>
                </div>
                <ModelViewer />

            </div>
        </section>
    );
}
