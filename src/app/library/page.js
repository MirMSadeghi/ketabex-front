import { fetcher } from '../hoc/fetcher';

import BookGrid from '../components/bookgrid'
import ProfileHeader from './profile'
import Statistics from './statistics'

export default async function Library() {

    const userBooks = await fetcher('/books');

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