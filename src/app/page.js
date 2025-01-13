
import { books } from './service/ProductService';
import  BookGrid   from './bookgrid';

export default async function Home() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`)
    const books = await data.json()

    return (
        <BookGrid data={books}/>
    )
}
