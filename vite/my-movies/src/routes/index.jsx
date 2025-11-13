import { createFileRoute } from '@tanstack/react-router'
import HomePage from '../pages/HomePage'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    <div className='h-screen bg-lime-50'>
        <HomePage />
    </div>
    </>
  )
}