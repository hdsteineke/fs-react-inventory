import { useState } from 'react';
import { createDeck } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const [deck, setDeck] = useState('');
  const [creators, setCreators] = useState('');
  const [type, setType] = useState('');
  const [cardCount, setCardCount] = useState(78);
  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();

    await createDeck({
      deck,
      creators,
      type,
      num_cards: cardCount
    });

    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Deck:
        <input value={deck} onChange={e => setDeck(e.target.value)}>
        </input>
      </label>

      <label>
        Creator:
        <input value={creators} onChange={e => setCreators(e.target.value)}>
        </input>
      </label>

      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value='tarot'>Tarot</option>
          <option value='oracle'>Oracle</option>
        </select>
      </label>

      <label>
        Card Count:
        <input value={cardCount} onChange={e => setCardCount(e.target.value)}>
        </input>
      </label>
      <button>Add deck</button>
    </form>
  );
}
