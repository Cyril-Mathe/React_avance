import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PokemonList from './components/PokemonList'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  )
}