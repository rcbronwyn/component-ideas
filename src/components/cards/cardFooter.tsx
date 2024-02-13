import {ReactNode} from 'react'

interface CardFooterProps {
    children: ReactNode;
};

const CardFooter = ({children}:CardFooterProps) => {
    return (
       <div className="card__footer">{
        children}</div>
    );
}

export default CardFooter;