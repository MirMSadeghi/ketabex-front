import { fetcher } from './hoc/fetcher';

import  BookGrid   from './components/bookgrid';

export default async function Home() {

    const books = await fetcher('/books');

    return (
        <BookGrid data={books}/>
    )
}
