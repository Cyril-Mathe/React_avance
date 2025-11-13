import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'
  
  const router = createRouter({ routeTree })
  const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)