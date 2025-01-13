import { classNames } from 'primereact/utils'
import BookGrid from '../bookgrid'
import { books } from '../service/ProductService'
import ProfileHeader from './profile'
import Statistics from './statistics'

export async function getServerSideProps() {
    let userBooks = [];

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        userBooks = await response.json();
    } catch (error) {
        console.error("Error fetching books:", error);
    }

    return {
        props: {
            userBooks,
        },
    };
}


export default async function Library({ userBooks }) {

    return (
        <div>
            <div className='custom-library t-p-3 t-mb-5'>
                <ProfileHeader/>
            </div>
            <Statistics classNames='t-mb-3 t-mt-2' />
            <BookGrid data={userBooks}/>
        </div>
    )
}