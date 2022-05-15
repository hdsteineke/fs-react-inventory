import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });  

  return response.user;

}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function createDeck(deck) {
  const response = await client
    .from('tarot_decks')
    .insert([deck]);

  return checkError(response);
}

export async function getDecks() {
  const response = await client
    .from('tarot_decks')
    .select('*');
    
  return checkError(response);
}

export async function getDeckById(id) {
  const response = await client
    .from('tarot_decks')
    .select('*')
    .match({ id })
    .single();

  return checkError(response);
}

export async function updateDeck(id, newDeck) {
  const response = await client
    .from('tarot_decks')
    .update(newDeck)
    .match({ id });

  return checkError(response);
      
}