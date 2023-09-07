'use client'

import type { Pokemon, PokemonGet } from '@/core/corporation'
import React from 'react'
import { usePokemon } from '@/core/corporation'

const ClientSideComponent = (): JSX.Element => {
  const { data: pokemons, isLoading } = usePokemon() as { data: PokemonGet; isLoading: boolean }

  if (isLoading || !pokemons) return <div>Loading...</div>

  return (
    <div>
      <h2 className='text-lg font-bold'>Client side</h2>
      {pokemons.results.map((pokemon: Pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  )
}

export default ClientSideComponent
