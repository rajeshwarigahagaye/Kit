const Lamas = [
    {
        Lid: 301,
        imageurl: 'https://i.pinimg.com/736x/2e/df/83/2edf83a2fe826c188a7ef871d3146a2a.jpg'
    },
    {
        Lid: 302,
        imageurl: 'https://i.pinimg.com/736x/bc/1e/2a/bc1e2a87d39f55ddf009d415b827f904.jpg'
    }, {
        Lid: 303,
        imageurl: 'https://i.pinimg.com/736x/99/1c/45/991c451318e0040b990eda5660e612b1.jpg'
    }, {
        Lid: 304,
        imageurl: 'https://i.pinimg.com/736x/16/a1/d5/16a1d5ad3cec854595a6195b92be3ca8.jpg'
    }, {
        Lid: 305,
        imageurl: 'https://i.pinimg.com/736x/1b/8a/c9/1b8ac9e432399c0a026dc9a7bf434568.jpg'
    }, {
        Lid: 306,
        imageurl: 'https://i.pinimg.com/736x/28/d3/06/28d306d59bf534a5992a84fce3d3f247.jpg'
    }, {
        Lid: 307,
        imageurl: 'https://i.pinimg.com/736x/fb/e8/dc/fbe8dcf5cea717c2a45db9f4ae15323a.jpg'
    }, {
        Lid: 308,
        imageurl: 'https://i.pinimg.com/736x/64/8f/27/648f273c2f6504000c0519ba085d2568.jpg'
    }, {
        Lid: 309,
        imageurl: 'https://i.pinimg.com/736x/48/c2/d4/48c2d4577974cd7e8c3aff559a02f8dc.jpg'
    }, {
        Lid: 310,
        imageurl: 'https://i.pinimg.com/736x/5d/5c/d8/5d5cd8b6121f21dcb70299f97eca691d.jpg'
    }, {
        Lid: 311,
        imageurl: 'https://i.pinimg.com/736x/c3/27/62/c3276272bee9a955bf16385f29ce1935.jpg'
    }, {
        Lid: 312,
        imageurl: 'https://i.pinimg.com/736x/16/a1/d5/16a1d5ad3cec854595a6195b92be3ca8.jpg'
    }, {
        Lid: 313,
        imageurl: 'https://i.pinimg.com/originals/16/50/d6/1650d692b6137dfb4c0381d1b09962ea.jpg'
    }, {
        Lid: 314,
        imageurl: 'https://i.pinimg.com/736x/a6/ab/de/a6abde986880ef9f914e8041291ddf27.jpg'
    }, {
        Lid: 315,
        imageurl: 'https://i.pinimg.com/736x/06/cf/e8/06cfe81366fe5a25eed205079d9f952a.jpg'
    }, {
        Lid: 316,
        imageurl: 'https://i.pinimg.com/736x/2b/05/20/2b0520c85e5add2f22bfe82b92292c8c.jpg'
    }

];
export default function LamaList() {
    return (
        <>
            {Lamas.map(lama => (
                <div key={lama.Lid} className="cards">
                    <img className="CardImage" src={lama.imageurl} alt="image" />
                </div>
            ))}
        </>
    )
}