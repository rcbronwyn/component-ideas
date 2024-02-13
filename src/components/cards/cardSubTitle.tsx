interface CardSubTitleProps {
    children: string
};

const CardSubTitle = ({children}:CardSubTitleProps) => {
    return (
       <p className="card__subTitle">{children}</p>
    );
}

export default CardSubTitle;

