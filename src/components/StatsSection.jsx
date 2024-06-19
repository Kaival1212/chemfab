export default function StatsSection(){
    return (
        <section id={'stats'} className={'bg-white h-[25vh] border-y  grid grid-cols-1 gap-2 md:grid-cols-4 items-center py-12'}>

            <div className={'text-center border-b md:border-none'}>
                <h1 className={'text-3xl text-black font-bold'}>{'5.5M'}</h1>
                <h6 className={'text-sm text-[#0D0D0D] font-medium'}>{'over 500 Projects'}</h6>
            </div>

            <div className={'text-center border-b md:border-none'}>
                <h1 className={'text-3xl text-black font-bold'}>{'24.5B'}</h1>
                <h6 className={'text-sm text-[#0D0D0D] font-medium'}>{'Global Impact'}</h6>
            </div>

            <div className={'text-center border-b md:border-none'}>
                <h1 className={'text-3xl text-black font-bold'}>{'99%'}</h1>
                <h6 className={'text-sm text-[#0D0D0D] font-medium'}>{'99% Satisfaction'}</h6>
            </div>

            <div className={'text-center border-b md:border-none'}>
                <h1 className={'text-3xl text-black font-bold'}>{'30K'}</h1>
                <h6 className={'text-sm text-[#0D0D0D] font-medium'}>{'over 30+ years'}</h6>
            </div>

        </section>

    )
}


