import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Hydrate,QueryClient ,QueryClientProvider} from 'react-query';

const client = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  return (<QueryClientProvider client={client}><Hydrate state={pageProps.dehydratedState}><Component {...pageProps} /></Hydrate></QueryClientProvider>)
}
