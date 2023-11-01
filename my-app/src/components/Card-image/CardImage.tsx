type imgT = {
    propImg: { url: string }
}

export function CardImage({ propImg }: imgT) {

    return (
        <>
            <img src={propImg.url} className="card-img-top" alt="..." />
        </>
    )
}