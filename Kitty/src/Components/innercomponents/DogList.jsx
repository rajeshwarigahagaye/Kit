const Dogs = [
    {
        Did: 201,
        imageurl: 'https://i.pinimg.com/736x/93/7b/15/937b153577577a9ce5a9cd41198e6d18.jpg',
    }, {
        Did: 202,
        imageurl: 'https://i.pinimg.com/736x/05/5d/fa/055dfa76a1cb21372b47b8405607a413.jpg',
    }, {
        imageurl: 'https://i.pinimg.com/736x/79/bd/cb/79bdcb8463b145b7a82d4bf1f3417716.jpg',
    }, {
        Did: 203,
        imageurl: 'https://i.pinimg.com/736x/79/bd/cb/79bdcb8463b145b7a82d4bf1f3417716.jpg',
    }, {
        Did: 204,
        imageurl: 'https://i.pinimg.com/736x/4c/86/4a/4c864a9df4975820008a1e08dbaff077.jpg',
    }, {
        Did: 205,
        imageurl: 'https://i.pinimg.com/736x/3c/c7/30/3cc730fd765cce25560d26238a1e71a4.jpg',
    }, {
        Did: 206,
        imageurl: 'https://i.pinimg.com/736x/1a/5e/4d/1a5e4d1666f339d2fa8898cfc7e92246.jpg',
    }, {
        Did: 207,
        imageurl: 'https://i.pinimg.com/736x/24/67/81/2467816a0b0a1dc602eccfb5c520590a.jpg',
    }, {
        Did: 208,
        imageurl: 'https://i.pinimg.com/736x/02/0b/c1/020bc1628007aca25b2e8bb4be98a18d.jpg',
    }, {
        Did: 209,
        imageurl: 'https://i.pinimg.com/736x/b3/d9/78/b3d9786872ae5c1d16958a8a562451ba.jpg',
    }, {
        Did: 210,
        imageurl: 'https://i.pinimg.com/736x/2f/69/4d/2f694d06e9edbc7562e4a32beaf290a3.jpg',
    }, {
        Did: 211,
        imageurl: 'https://i.pinimg.com/736x/b1/cc/88/b1cc88a8bd876348e86b18e38997eb0b.jpg',
    }, {
        Did: 212,
        imageurl: 'https://i.pinimg.com/736x/18/e6/54/18e6549e729fb0e2e0997bfaf34be694.jpg',
    }, {
        Did: 213,
        imageurl: 'https://i.pinimg.com/736x/d8/2c/9e/d82c9ece63f5d724959da6d181ae0bef.jpg',
    },

];
export default function DogList() {
    return (
        <>
            {Dogs.map(dog => (
                <div key={dog.Did} className="cards">
                    <img className="CardImage" src={dog.imageurl} alt="image" />
                </div>
            ))}
        </>
    )
}