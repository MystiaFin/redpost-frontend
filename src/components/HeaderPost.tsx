import avatarImage from '../assets/avatar.png';
import { useState } from 'react';
import NewPostModal from './NewPostModal';

function HeaderPost() {
    const [text, setText] = useState('');
    const [modal, setModal] = useState(false)
    const toggleModal = ()  => {
        setModal(!modal)
    }

    return (
        <div className='bg-gray-900 p-4 rounded-xl mb-6 '>
            <div className='flex items-center gap-3'>
                <img src={avatarImage} className='w-16 rounded-full' alt="Avatar"/>
                
                <div className='flex-1 flex flex-col'>
                <button onClick={toggleModal} className="bg-gray-800 rounded-full lg:text-base md:text-base sm:text-xs pl-4 text-gray-500 lg:py-2 md:py-0 sm:py-0 flex items-center">
                    <span className="hidden lg:inline">What's on your mind?</span>
                </button>
                    <div className='flex gap-5 mt-3 text-gray-400 text-sm'>
                        <button className='flex items-center bg-black p-2 px-4 rounded-full'>
                            <i className="ri-image-line mr-2"></i>
                            Photo/Video
                        </button>
                        <button className='flex items-center bg-black p-2 px-4 rounded-full'>
                            <i className="ri-bar-chart-horizontal-line mr-2"></i>
                            Poll
                        </button>
                    </div>
                </div>
            </div>
            <NewPostModal isOpen={modal} onClose={toggleModal} />
        </div>
    );
}

export default HeaderPost;
