const Squirrels = [
    {
        Sid: 501,
        imageurl: 'http://i.pinimg.com/736x/4d/c8/b0/4dc8b0db5e2aa889c26002bf5dca6219.jpg'
    },
    {
        Sid: 502,
        imageurl: 'https://i.pinimg.com/736x/0b/62/6d/0b626dd49ff82896ab02a52e4f44f3df.jpg'
    }, {
        Sid: 503,
        imageurl: 'https://i.pinimg.com/736x/24/d6/06/24d606de86061b6bb11a7b33f2f86b3d.jpg'
    }, {
        Sid: 504,
        imageurl: 'https://i.pinimg.com/736x/1c/42/ec/1c42ec0457deb278ed8f1a5e08e0a656.jpg'
    }, {
        Sid: 505,
        imageurl: 'https://i.pinimg.com/736x/97/63/a8/9763a8ee358660c761efa0f9503cc593.jpg'
    }, {
        Sid: 506,
        imageurl: 'https://i.pinimg.com/736x/6e/a1/dd/6ea1dda75aa1b5d2d4bfb977fb153538.jpg'
    }, {
        Sid: 507,
        imageurl: 'https://i.pinimg.com/736x/19/48/a9/1948a9cefd2d10268767f512623749e2.jpg'
    }, {
        Sid: 508,
        imageurl: 'https://i.pinimg.com/736x/6f/1a/ec/6f1aecb8fe80ced0d30957dc72f6fc7f.jpg'
    }, {
        Sid: 509,
        imageurl: 'https://i.pinimg.com/736x/3f/4d/e6/3f4de6c821d02a2f6c35f1a60c61aea3.jpg'
    }, {
        Sid: 510,
        imageurl: 'https://i.pinimg.com/736x/ef/10/6b/ef106b4b54dd40b00ca999d214e952c2.jpg'
    }, {
        Sid: 511,
        imageurl: 'https://i.pinimg.com/736x/74/27/41/742741991bce9ac154a329473c6a8f0e.jpg'
    }, {
        Sid: 512,
        imageurl: 'https://i.pinimg.com/736x/e2/10/86/e210864d0f36a92eab21dc81ca5d30a9.jpg'
    }, {
        Sid: 513,
        imageurl: 'https://i.pinimg.com/736x/95/fd/f0/95fdf0931bb00f006bcd961b5720c2ab.jpg'
    }, {
        Sid: 514,
        imageurl: 'https://i.pinimg.com/736x/43/28/54/43285477ee4b0a4c2aaaa55db8efb95f.jpg'
    }, {
        Sid: 515,
        imageurl: 'https://i.pinimg.com/736x/c1/db/71/c1db71765a2169decd2d32b83c32fd48.jpg'
    }, {
        Sid: 516,
        imageurl: 'https://i.pinimg.com/736x/d9/89/5e/d9895e05600bc81cf1cbce434bb59738.jpg'
    }, {
        Sid: 517,
        imageurl: 'https://i.pinimg.com/736x/7a/86/23/7a862339d4111287804bc837bf2f815f.jpg'
    }, {
        Sid: 518,
        imageurl: 'https://i.pinimg.com/736x/ac/6a/24/ac6a24db243d6084a9c3437694ddfbf1.jpg'
    },
];
export default function SquirrelList() {
    return (
        <>
            <div className="scroll"> {Squirrels.map((squirrel) => (
                <div className="cards" key={squirrel.Sid}><img className="CardImage" src={squirrel.imageurl} alt="image" /></div>
            ))}</div>
        </>
    )
}