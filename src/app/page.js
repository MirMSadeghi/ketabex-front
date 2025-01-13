import  BookGrid   from './components/bookgrid';

export default async function Home() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${apiEndpoint}`);
    const books = await data.json()

    return (
        <BookGrid data={books}/>
    )
}
