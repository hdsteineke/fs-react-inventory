import { useEffect, useState } from 'react';
import Deck from './Deck';
import { getDecks } from './services/fetch-utils';


export default function ListPage({ decks }) {
  const [deckCollection, setDeckCollection] = useState([]);

  useEffect(() => {
    async function fetch() {
      const deckData = await getDecks();

      setDeckCollection(deckData);
    }
    fetch();
  }, []);


  return (
    <div>ListPage
      {deckCollection.map(deck => 
        <Deck key={deck.deck} deck={deck} />)}
    </div>
  );
}
