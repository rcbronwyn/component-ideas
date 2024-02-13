interface CardMediaProps {
    image: string
};

const CardMedia = ({image}:CardMediaProps) => {
    return (
       <div className="card__preview">
            <img src={image} alt="Card Preview" className="card__image" />
        </div>
    );
}

export default CardMedia;