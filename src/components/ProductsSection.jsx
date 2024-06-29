import React, { useRef } from 'react';

const images = [
    { url: '/products/1.jpg', title: "Vacuum Pot", subtitle: "High-quality vacuum pot for industrial use" },
    { url: '/products/2.jpg', title: "Chimney", subtitle: "Efficient chimney system for smoke extraction" },
    { url: '/products/3.jpg', title: "Mixture Machine", subtitle: "Durable mixture machine for various applications" },
    { url: '/products/4.jpg', title: "Ribbon Blender", subtitle: "Precision ribbon blender for thorough mixing" },
    { url: '/products/5.jpg', title: "Reactor", subtitle: "High-performance reactor for chemical processes" },
    { url: '/products/6.jpg', title: "V Clone Blender", subtitle: "Versatile V clone blender for efficient blending" },
    { url: '/products/7.jpg', title: "Storage Tank", subtitle: "Large capacity storage tank for liquids" },
    { url: '/products/8.jpg', title: "Mixture", subtitle: "Reliable mixture equipment for industrial needs" },
    { url: '/products/9.jpg', title: "Condenser", subtitle: "Advanced condenser for effective cooling" },
];

function ImageCard({ url, title = "ono", subtitle = 'no' }) {
    return (
        <div className='w-[326px] flex-shrink-0 p-2 container'>
            <img src={url} alt={title} className='w-[326px] h-[326px] object-cover rounded-xl' />
            <h1 className='font-semibold text-lg'>{title}</h1>
            <h2 className='font-normal text-sm text-[#0D0D0D]/70'>{subtitle}</h2>
        </div>
    );
}

function ProductsSection() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -326, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 326, behavior: 'smooth' });
        }
    };

    return (
        <section id='products' className='flex flex-col p-8'>
            <h1 className='font-normal text-gray-600 text-xl md:text-3xl mb-4 md:mb-12'>Excellence in Every Fabrication</h1>
            <h1 className='font-bold text-2xl md:text-4xl mb-4 md:mb-12'>Our Premier Products</h1>
            <div className='relative'>
                <div
                    className='flex overflow-x-auto no-scrollbar'
                    ref={scrollContainerRef}
                >
                    {images.map((image, index) => (
                        <ImageCard
                            key={index}
                            url={image.url}
                            title={image.title || ""}
                            subtitle={image.subtitle || ""}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProductsSection;
