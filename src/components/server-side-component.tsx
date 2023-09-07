import type { Pokemon } from '@/core/corporation'
import React from 'react'

const ClientSideComponent = ({ pokemons }: { pokemons: Pokemon[] }): JSX.Element => {
  return (
    <div>
      <h2 className='text-lg font-bold'>Server side</h2>
      {pokemons.map((pokemon: Pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  )
}

export default ClientSideComponent
