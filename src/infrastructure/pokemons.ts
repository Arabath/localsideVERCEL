import { handler } from '@/utils/error-handler'

export const fetchPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  return handler(response)
}
