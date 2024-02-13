import React from "react";

interface CardContentProps {
    title?: string,
    subTitle?: string,
    description?: string,
    footer?: React.ReactNode,
};

const CardContent = ({
    title, 
    subTitle, 
    description, 
    footer,
    }: CardContentProps): React.ReactElement => {
    return (
        <div className="card__content">
            {title && <h2 className="card__title">{title}</h2>}
            {subTitle && <h3 className="card__subtitle">{subTitle}</h3>}
            {description && <p className="card__description">{description}</p>}
            {footer && <div className="card__footer">{footer}</div>}
        </div>
       
    );
}

export default CardContent;