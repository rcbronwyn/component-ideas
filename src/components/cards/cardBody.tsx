interface CardBodyProps {
    children: string
};

const CardBody = ({children}:CardBodyProps) => {
    return (
       <p className="card__description">{children}</p>
    );
}

export default CardBody;