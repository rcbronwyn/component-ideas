import Card from './components/cards/card';
import CardFooter from './components/cards/cardFooter';
import CardMedia from './components/cards/cardMedia';
import CardContent from './components/cards/cardContent';
import BoraBora from './assets/bora-bora-3023437_640.jpg';
import './App.css';

function App() {
 
  return (
    <>
      <Card>
        <CardMedia image={BoraBora} />
        <CardContent 
          title={"Card Title"} 
          subTitle='Subtitle Goes Here'
          description='This is the description that you are looking for'
          footer={<button className="card__button">Read More...</button>} />
       
      </Card>
    </>
  )
}

export default App
