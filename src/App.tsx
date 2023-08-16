
import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { environment } from './environment';

const queryClient = new QueryClient();
const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      </BrowserRouter>
      {environment.development && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
export default App
