import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from "@tanstack/react-router";

export default function MoviesPage() {
  return <MoviesList />
}

export function MoviesList() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { isPending, error, data } = useQuery({
    queryKey: ['movie'],
    queryFn: async () => {
      const res1 = await fetch('https://www.omdbapi.com/?t=mulholland%20drive&apikey=26f9e8b3')
      const res2 = await fetch('https://www.omdbapi.com/?t=come%20and%20see&apikey=26f9e8b3')
      const res3 = await fetch('https://www.omdbapi.com/?s=batman&page=1&apikey=26f9e8b3')
      const res4 = await fetch('https://www.omdbapi.com/?s=mad%20max&page=1&apikey=26f9e8b3')
      const data1 = await res1.json()
      const data2 = await res2.json()
      const data3 = await res3.json()
      const data4 = await res4.json()
      return [data1,data2, ...(data3.Search || []), ...(data4.Search || [])]},
      staleTime: 1000 * 30,
})

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='h-screen bg-lime-50'>
      <p>Liste de films :</p>
      <div className='flex flex-wrap'>
        {data.map((movie) => (
          <div className='w-[200px]' key={movie.imdbID}>
            {movie.Poster && movie.Poster !== 'N/A' && (
              <div
                onClick={() => navigate({ to: `/movies/${movie.imdbID}` })}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={movie.Poster} 
                  alt={movie.Title} 
                  width={150}
                  style={{ display: 'block' }}
                />
              </div>
            )}
            <p>{movie.Title}</p>
            {movie.imdbRating && <p>Note IMDb : {movie.imdbRating}/10</p>}
          </div>
        ))}
      </div>
      <button onClick={() => {console.log("refresh"), queryClient.invalidateQueries({ queryKey: ['movie'] })}}>refresh</button>
    </div>
  )
}