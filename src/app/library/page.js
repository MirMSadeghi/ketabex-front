import { classNames } from 'primereact/utils'
import BookGrid from '../bookgrid'
import { books } from '../service/ProductService'
import ProfileHeader from './profile'
import Statistics from './statistics'


export default async function Library() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`)
    const userBooks = await data.json()

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