
const cats = [
    {
        Cid: 1,
        imageurl: 'https://i.pinimg.com/736x/d9/88/2f/d9882fd1d9e7a67d47ea8c8049a7208c.jpg',
    }, {
        Cid: 2,
        imageurl: 'https://i.pinimg.com/736x/a1/da/a2/a1daa282c4faa8fc6b74e3a0396b4413.jpg',
    }, {
        Cid: 3,
        imageurl: 'https://i.pinimg.com/736x/19/48/9d/19489d372b292e32386d0cf6cbeed594.jpg',
    }, {
        Cid: 4,
        imageurl: 'https://i.pinimg.com/736x/89/bb/35/89bb35c730f40852ffcd9e885587175b.jpg',
    }, {
        Cid: 5,
        imageurl: 'https://i.pinimg.com/736x/90/dd/3f/90dd3f2ef158e6c34afa09ff68729ddb.jpg',
    }, {
        Cid: 6,
        imageurl: 'https://i.pinimg.com/736x/b9/c5/cb/b9c5cbef081116e04ac39fb090a3202a.jpg',
    }, {
        Cid: 7,
        imageurl: 'https://i.pinimg.com/736x/10/3a/e4/103ae4a3c4af99a3ce544c441e04e942.jpg',
    }, {
        Cid: 8,
        imageurl: 'https://i.pinimg.com/736x/f3/08/4e/f3084e6f0cfb342579f4db9b771d9145.jpg',
    }, {
        Cid: 9,
        imageurl: 'https://i.pinimg.com/736x/f9/37/f2/f937f2ec3d7273e04c01422496bf3e18.jpg',
    }, {
        Cid: 10,
        imageurl: 'https://i.pinimg.com/736x/a5/c9/bd/a5c9bdb005e049505d359945ccbbfb19.jpg',
    }, {
        Cid: 11,
        imageurl: 'https://i.pinimg.com/736x/58/c4/8b/58c48b8d1199e321585047a540ef65d1.jpg',
    }, {
        Cid: 12,
        imageurl: 'https://i.pinimg.com/736x/04/bb/7f/04bb7fda8227004dffb9d1a3b03ca3b4.jpg',
    }, {
        Cid: 13,
        imageurl: 'https://i.pinimg.com/736x/54/b3/5c/54b35ca5f63355d9e4714a6159564d45.jpg',
    }, {
        Cid: 14,
        imageurl: 'https://i.pinimg.com/736x/7b/47/67/7b476781f011f67a990c593db98819ae.jpg',
    }, {
        Cid: 15,
        imageurl: 'https://i.pinimg.com/736x/a1/da/a2/a1daa282c4faa8fc6b74e3a0396b4413.jpg',
    }

];
export default function CatList() {
    return (
        <>
            {cats.map((cat, index) => (
                <div key={index} className="cards">
                    <img className="CardImage" src={cat.imageurl} alt="image" />
                </div>
            ))}

            {/* {cats.map(cat => (
                <div key={cat.Cid} className="cards">
                    <img className="CardImage" src={cat.imageurl} alt="image" />
                </div>
            ))} */}
        </>
    );
}