import React from 'react';
import { Link } from 'react-router-dom';

export default function Deck({ deck }) {
  return (
    <Link to={`/tarot-decks/${deck.id}`}>
      <div className='deck'>
        <h3>{deck.deck}</h3>
        <img src={deck.image} />
        <p>Creator(s): {deck.creators}</p>
        <p>Type: {deck.type}</p>
        <p>Card count: {deck.num_cards}</p>
      </div>
    </Link>
        
  );
}
