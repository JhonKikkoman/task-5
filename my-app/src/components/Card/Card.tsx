interface propWithChildren1 {
    children?: React.ReactNode,
}

export function Card({ children }: propWithChildren1) {
    return (
        <>
            <div className="card">
                {children}
            </div>
        </>
    )
}