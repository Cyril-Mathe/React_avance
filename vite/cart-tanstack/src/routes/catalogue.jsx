import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/catalogue')({
  component: Catalogue,
})

function Catalogue() {
  return <div className="p-2">Hello from Catalogue!</div>
}