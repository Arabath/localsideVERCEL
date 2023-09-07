import { fetchPokemons } from '@/infrastructure/pokemons'
import { useQuery } from '@tanstack/react-query'
import { GET_CORPORATION } from '@/constants/query-keys'

export type Pokemon = {
  name: string
  url: string
}

export type PokemonGet = {
  count: number
  next: string
  previous: string | null
  results: Pokemon[]
}

export const usePokemon = () => {
  return useQuery([GET_CORPORATION], async () => {
    const data = await fetchPokemons()
    return data
  })
}
