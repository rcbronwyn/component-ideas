interface CardTitleProps {
    children: string
};

const CardTitle = ({children}:CardTitleProps) => {
    return (
       <h2 className="card__title">{children}</h2>
    );
}

export default CardTitle;