import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getDeckById, updateDeck } from './services/fetch-utils';


export default function UpdatePage() {
  const [deck, setDeck] = useState({});
  const { id } = useParams();
  const history = useHistory();


  useEffect(() => {
    async function fetch() {
      const deckData = await getDeckById(id);

      setDeck(deckData);
    }
    fetch();
  }, [id]);


  async function handleSubmit(e) {
    e.preventDefault();


    await updateDeck(id, {
      deck: deck.deck,
      creators: deck.creators,
      type: deck.type,
      num_cards: deck.num_cards
    }
    );

    history.push('/tarot-decks');
  }



  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Deck Details</h2>
      <label>
        Deck:
        <input value={deck.deck} onChange={e => setDeck({ ...deck, deck: e.target.value })}>
        </input>
      </label>

      <label>
        Creator:
        <input value={deck.creators} onChange={e => setDeck({ ...deck, creators: e.target.value })}>
        </input>
      </label>

      <label>
        Type:
        <select value={deck.type} onChange={e => setDeck({ ...deck, type: e.target.value })}>
          <option value='Tarot'>Tarot</option>
          <option value='Oracle'>Oracle</option>
        </select>
      </label>

      <label>
        Card Count:
        <input value={deck.num_cards} onChange={e => setDeck({ ...deck, num_cards: e.target.value })}>
        </input>
      </label>
      <button>Update deck</button>
    </form>
  );
}
