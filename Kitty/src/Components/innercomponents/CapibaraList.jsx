
const Capibaras = [
    {
        C1id: 101,
        imageurl: 'https://i.pinimg.com/736x/21/df/37/21df37621c3165486a410dbfb289b37b.jpg'
    },
    {
        C1id: 102,
        imageurl: 'https://i.pinimg.com/736x/0f/0a/b8/0f0ab897f060fc5a060d3a8e92528857.jpg'
    },
    {
        imageurl: 'https://i.pinimg.com/736x/e2/d1/46/e2d1469a9beafa1c533a1b5e08cd73a6.jpg'
    },
    {
        C1id: 103,
        imageurl: 'https://i.pinimg.com/736x/40/9b/1f/409b1f28798f084d7c6c07a8cfc4d2e6.jpg'
    }, {
        C1id: 104,
        imageurl: 'https://i.pinimg.com/736x/68/63/d8/6863d8191258833f7a12a5c830a1813b.jpg'
    },
    {
        C1id: 105,
        imageurl: 'https://i.pinimg.com/736x/e4/90/69/e4906990a32bf81229ae0500eaa21d04.jpg'
    },
    {
        C1id: 106,
        imageurl: 'https://i.pinimg.com/736x/e5/9a/f1/e59af1d9de690cb2c4f9f13f9f1db2bd.jpg'
    },
    {
        C1id: 107,
        imageurl: 'https://i.pinimg.com/736x/4f/17/5d/4f175d7c0c4d4c7bbefda19ada8e56a9.jpg'
    },
    {
        C1id: 108,
        imageurl: 'https://i.pinimg.com/736x/ab/ef/a2/abefa201ae68bf28f4aefbcafdf80d26.jpg'
    },
    {
        C1id: 109,
        imageurl: 'https://i.pinimg.com/736x/40/82/97/4082973d20331f1f33b6d82d8654097a.jpg'
    },
    {
        C1id: 110,
        imageurl: 'https://i.pinimg.com/736x/00/06/18/0006183d90b7865fdacf53475a0b8904.jpg'
    },
    {
        C1id: 111,
        imageurl: 'https://i.pinimg.com/736x/10/76/c2/1076c2ae80d6fccec8930b104dc40b85.jpg'
    },
    {
        C1id: 112,
        imageurl: 'https://i.pinimg.com/736x/d9/a5/9c/d9a59c3891a82bf47b3522e891a582be.jpg'
    },
    {
        C1id: 113,
        imageurl: 'https://i.pinimg.com/736x/4d/0c/7c/4d0c7c6aad0600428634157c2e71f932.jpg'
    },
    {
        C1id: 114,
        imageurl: 'https://i.pinimg.com/736x/9b/71/27/9b7127d7fec4004904a487a19b0e73e6.jpg'
    },
    {
        C1id: 115,
        imageurl: 'https://i.pinimg.com/736x/e9/2e/5b/e92e5b47a5b49ae4816b278ce7b90f61.jpg'
    }
];
export default function CapibaraList() {
    return (
        <>

            {Capibaras.map(capibara => (
                <div key={capibara.C1id} className="cards">
                    <img className="CardImage" src={capibara.imageurl} alt="image" />
                </div>
            ))}

        </>
    )
}