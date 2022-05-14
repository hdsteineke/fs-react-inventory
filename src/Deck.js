import React from 'react';

export default function Deck({ deck }) {
  return (
    <div>Deck Component
      <h3>Deck: {deck.deck}</h3>
      <img src={deck.image} />
      <p>Creator(s): {deck.creators}</p>
      <p>Type: {deck.type}</p>
      <p>Card count: {deck.num_cards}</p>
        
    </div>
  );
}
