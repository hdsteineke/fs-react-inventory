import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });  

  return response.user;

}

export async function SignIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function createDeck(deck) {
  const response = await client
    .from('tarot-decks')
    .insert([deck]);

  return checkError(response);
}

export async function getDecks() {
  const response = await client
    .from('tarot-decks')
    .select('*');
    
  return checkError(response);
}

export async function getDeckById(id) {
  const response = await client
    .from('tarot-decks')
    .select('*')
    .match({ id })
    .single();

  return checkError(response);
}

export async function updateGame(id, newDeck) {
  const response = await client
    .from('tarot-decks')
    .update(newDeck)
    .match({ id });

  return checkError(response);
      
}