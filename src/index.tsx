import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RecoilRoot } from 'recoil'
import 'assets/css/tailwind.css'
import 'assets/css/main.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryDelay: 3500,
    },
  },
})

const { worker } = require('./mocks/browser')
worker.start()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </BrowserRouter>
)
