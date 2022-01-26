import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';
import {nanoid} from 'nanoid';
function App() {
  console.log(data);
  const cards = data.map(card => {
    return (
      <Card 
      key={nanoid()}
      image={card.imageUrl}
      location={card.location}
      googleMaps={card.googleMapsUrl}
      title={card.title}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      />
    )
  })
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        {cards}
      </main>
    </div>
  );
}

export default App;
