const Lions = [
    {
        L1id: 401,
        imageurl: 'https://i.pinimg.com/736x/d2/c4/c3/d2c4c355b4e75f868928f4012d8db71a.jpg'
    }, {
        L1id: 402,
        imageurl: 'https://i.pinimg.com/736x/46/0c/9c/460c9c048b52a1ce98b30b3e13ab9a44.jpg'
    }, {
        L1id: 403,
        imageurl: 'https://i.pinimg.com/736x/0b/ec/6e/0bec6e2fe1bedfe79f566aa5ad7956f7.jpg'
    }, {
        L1id: 404,
        imageurl: 'https://i.pinimg.com/736x/ab/75/39/ab7539f340125b4d531fa0d61b410e47.jpg'
    }, {
        L1id: 405,
        imageurl: 'https://i.pinimg.com/736x/6b/13/83/6b13837afddf5c7f10440ba3f7f583fa.jpg'
    }, {
        L1id: 406,
        imageurl: 'https://i.pinimg.com/736x/0b/0d/c8/0b0dc85ec83aed8ed640cbbc1ad7765c.jpg'
    }, {
        L1id: 407,
        imageurl: 'https://i.pinimg.com/736x/fd/68/dd/fd68dda9bd80abcae383440c04778e5b.jpg'
    }, {
        L1id: 408,
        imageurl: 'https://i.pinimg.com/736x/c7/b7/81/c7b7810e33e5a84778be8a3d6e6eb023.jpg'
    }, {
        L1id: 409,
        imageurl: 'https://i.pinimg.com/736x/4f/2a/53/4f2a53f668a2038ea2fd212d3f0dc328.jpg'
    }, {
        L1id: 410,
        imageurl: 'https://i.pinimg.com/736x/68/c1/24/68c12442fbf8718e34410d4f4be02247.jpg'
    }, {
        L1id: 411,
        imageurl: 'https://i.pinimg.com/736x/ab/cd/4f/abcd4ff7e598d51603792edbb1ca0f81.jpg'
    }, {
        L1id: 412,
        imageurl: 'https://i.pinimg.com/736x/f3/2a/75/f32a75528a6659749c0d2fb07b4b7295.jpg'
    }, {
        L1id: 413,
        imageurl: 'https://i.pinimg.com/736x/4b/82/60/4b8260075daa5855aa65d6c72a2b561c.jpg'
    }, {
        L1id: 414,
        imageurl: 'https://i.pinimg.com/736x/ab/65/af/ab65af5a4a3eb6a0e794a6338af0e8ee.jpg'
    }, {
        L1id: 415,
        imageurl: 'https://i.pinimg.com/736x/9b/18/24/9b18240c840a05286fdb6fc01af7a6fc.jpg'
    }, {
        L1id: 416,
        imageurl: 'https://i.pinimg.com/736x/fb/26/dc/fb26dc8eb07b8a6e123ad651704638bb.jpg'
    }
];
export default function LionList() {
    return (
        <>
            {Lions.map(lion => (
                <div key={lion.L1id} className="cards">
                    <img className="CardImage" src={lion.imageurl} alt="image" />
                </div>
            ))}
        </>
    )
}