import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../../app/Queryclient'
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute('/movies/$id')({
  loader: ({ params }) => 
    queryClient.ensureQueryData({
      queryKey: ['movie', params.id],
      queryFn: () => fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=26f9e8b3`).then(r => r.json()),
    }),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetch(`http://www.omdbapi.com/?i=${id}&apikey=26f9e8b3`).then(r => r.json()),
  })

  if (!data) return <div>Loading...</div>

  return (
      <div className='h-screen bg-lime-50'>
        <h2>{data.Title}</h2>
        <img src={data.Poster} alt={data.Title} />
        <p>{data.Plot}</p>
        <p>Note IMDb : {data.imdbRating}/10</p>
        <button className="w-[150px] bg-orange-200 rounded-lg"><Link to="/movies">Catalogue de films</Link></button>
      </div>
  )
}
