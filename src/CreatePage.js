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
        <input required value={deck} onChange={e => setDeck(e.target.value)}>
        </input>
      </label>

      <label>
        Creator:
        <input required value={creators} onChange={e => setCreators(e.target.value)}>
        </input>
      </label>

      <label>
        Type:
        <select required value={type} onChange={e => setType(e.target.value)}>
          <option value='Tarot'>Tarot</option>
          <option value='Oracle'>Oracle</option>
        </select>
      </label>

      <label>
        Card Count:
        <input required value={cardCount} onChange={e => setCardCount(e.target.value)}>
        </input>
      </label>
      <button>Add deck</button>
    </form>
  );
}
