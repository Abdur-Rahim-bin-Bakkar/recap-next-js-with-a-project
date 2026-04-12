import Image from 'next/image';
import downlode from '../../public/images/icon-downloads.png'
import rating from '../../public/images/icon-ratings.png'
import review from '../../public/images/icon-review.png'
import InstallBtn from './InstallBtn/InstallBtn';

const DetCard = ({ expectedData }) => {
    // console.log('hi i am det Card')
    
    return (
        <div>
            <div className="card card-side bg-transparent flex  justify-center items-center flex-col md:flex-row mt-10">
                <div className=' '>
                    <Image
                        src={expectedData.image}
                        alt="Movie"
                        className=' max-h-60 w-60 p-3 bg-white' width={100} height={100} />
                </div>
                <div className="card-body text-center md:text-start-+">
                    <h2 className="card-title text-3xl font-bold">{expectedData.title}</h2>
                    <p className=' font-semibold'>Developed By: <span className=' bg-linear-to-bl to-[#632EE3] from-[#9F62F2] bg-clip-text text-transparent cursor-pointer'>{expectedData.companyName}</span> </p>


                    <div className="grid  md:grid-cols-3 gap-3">
                        <div className="space-y-2">
                            <Image src={downlode} alt="" className='w-10 mx-auto md:ms-auto' width={100} height={100} />
                            <p>Downloads</p>
                            <h2 className='text-2xl font-bold'>{expectedData.downloads}</h2>
                        </div>
                        <div className="space-y-2">
                            <Image src={rating} alt="" className='w-10 mx-auto md:ms-auto' width={100} height={100} />
                            <p>Average Ratings</p>
                            <h2 className='text-2xl font-bold'>{expectedData.ratingAvg}</h2>
                        </div>
                        <div className="space-y-2">
                            <Image src={review} alt="" className='w-10 mx-auto md:ms-auto' width={100} height={100} />
                            <p>Total Reviews</p>
                            <h2 className='text-2xl font-bold'>{expectedData.reviews}</h2>
                        </div>
                    </div>
                    <InstallBtn expectedData={expectedData}></InstallBtn>
                   

                </div>
            </div>
        </div>
    );
};

export default DetCard;