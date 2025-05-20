const Tigers = [
    {
        Tid: 601,
        imageurl: 'https://i.pinimg.com/736x/d1/38/5f/d1385fedff3ecc92a754d536994e9fa7.jpg'
    },
    {
        Tid: 602,
        imageurl: 'https://i.pinimg.com/736x/86/0a/77/860a77a4caf4959478094e6c1314a6b0.jpg'
    },
    {
        Tid: 603,
        imageurl: 'https://i.pinimg.com/736x/8b/46/59/8b4659f2d0f207c43755f6c61e6ce912.jpg'
    }, {
        Tid: 604,
        imageurl: 'https://i.pinimg.com/736x/dd/9c/a1/dd9ca1cb6ce332037f5844a5fcf55f60.jpg'
    }, {
        Tid: 605,
        imageurl: 'https://i.pinimg.com/736x/e4/b4/07/e4b4076d20339003d65c4c0e3fbcd3bc.jpg'
    }, {
        Tid: 606,
        imageurl: 'https://i.pinimg.com/736x/e4/b4/07/e4b4076d20339003d65c4c0e3fbcd3bc.jpg'
    }, {
        Tid: 607,
        imageurl: 'https://i.pinimg.com/736x/32/99/48/329948af20af7103544bc1a571b5ccab.jpg'
    }, {
        Tid: 608,
        imageurl: 'https://i.pinimg.com/736x/f4/19/62/f4196227983072722ee3c80d816b31fc.jpg'
    }, {
        Tid: 609,
        imageurl: 'https://i.pinimg.com/736x/2a/61/68/2a61682d3efeb19299453a77edf0a10e.jpg'
    }, {
        Tid: 610,
        imageurl: 'https://i.pinimg.com/736x/57/7f/6a/577f6a10c04673defe2ffb6bd16ce2bf.jpg'
    }, {
        Tid: 611,
        imageurl: 'https://i.pinimg.com/736x/72/79/94/727994e393ea0c78d3668d099d4b4cb5.jpg'
    }, {
        Tid: 612,
        imageurl: 'https://i.pinimg.com/736x/b0/5e/06/b05e06945fb04c5861dd5f9ad661cc70.jpg'
    }, {
        Tid: 613,
        imageurl: 'https://i.pinimg.com/736x/15/8b/f5/158bf558a1c9d48c5d0828d7e3b164e4.jpg'
    }, {
        Tid: 614,
        imageurl: 'https://i.pinimg.com/736x/3b/38/59/3b38594643d18f4b2b8772638dcc6bff.jpg'
    }, {
        Tid: 615,
        imageurl: 'https://i.pinimg.com/736x/40/d7/71/40d77107aeec20781533f4e96757a536.jpg'
    }, {
        Tid: 616,
        imageurl: 'https://i.pinimg.com/736x/6a/2c/74/6a2c7403a80a33841dd3935f7dc9a86f.jpg'
    }, {
        Tid: 617,
        imageurl: 'https://i.pinimg.com/736x/0c/81/45/0c81457710634496720d3c301a8c15a0.jpg'
    }, {
        Tid: 618,
        imageurl: 'https://i.pinimg.com/736x/4b/97/37/4b9737db97470935b75f936ccdcb53d4.jpg'
    }, {
        Tid: 619,
        imageurl: 'https://i.pinimg.com/736x/bb/67/e7/bb67e78978efe6b7c7df1c788d93a093.jpg'
    }
];
export default function TigerList() {
    return (
        <>
            {Tigers.map((tiger) => (
                <div className="cards" key={tiger.Tid}><img className="CardImage" src={tiger.imageurl} alt="image" /></div>
            ))}
        </>
    )
}