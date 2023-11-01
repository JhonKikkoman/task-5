/* eslint-disable jsx-a11y/anchor-is-valid */
type propInfo = {
    propObj: {
        title: string,
        text: string,
        btnValue: string
    }

}

export function CardBody({ propObj }: propInfo) {
    return (
        <>
            <div className="card-body">
                <h5 className="card-title">{propObj.title}</h5>
                <p className="card-text">{propObj.text}</p>
                <a href="#" className="btn btn-primary">{propObj.btnValue}</a>
            </div>
        </>
    )
}