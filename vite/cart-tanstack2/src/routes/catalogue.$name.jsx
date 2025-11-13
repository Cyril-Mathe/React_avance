import { createFileRoute } from '@tanstack/react-router'
import { useParams } from "@tanstack/react-router"


export const Route = createFileRoute('/catalogue/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { name } = useParams()
  return <h2>Catégorie du produit : {name}</h2>
}