import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  )
}

function PokemonList() {
  const queryClient = useQueryClient()
  const { isPending, error, data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <p>Liste de 20 pokémons :</p>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => {console.log("refresh"), queryClient.invalidateQueries({ queryKey: ['pokemon'] })}}>refresh</button>
    </div>
  )
}