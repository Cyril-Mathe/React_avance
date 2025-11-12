import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Test"!</div>
}
