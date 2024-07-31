import avatarImage from '../assets/avatar.png';
import postImage from '../assets/image.png';
import { useState } from 'react';

function PostCard() {
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    return(
        <div className="bg-gray-900 p-4 rounded-xl mb-2">
            <div className='flex flex-row gap-4 text-white mb-4'>
                <img src={avatarImage} className='w-12 h-12 rounded-full'/>
                <div className='flex flex-col'>
                    <span className='font-semibold text-lg'>stvnzey</span>
                    <span className='text-xs text-gray-400'>28 July 2024</span>
                </div>
            </div>
            <div className='text-white border-b-2 border-gray-600 pb-2'>
                <p className='mb-2'>This is a post card</p>
                <img src={postImage} className='rounded-lg'/>
            </div>
            <div className='flex flex-row items-center justify-between mt-1'>
                <div className='container flex flex-row gap-4'>
                    <div className='flex flex-row gap-2 items-center'>
                        <button className='flex items-center gap-2 text-white hover:text-red-600' onClick={handleLike}>
                            <i className={`ri-heart-fill ${isLiked ? 'text-red-600' : 'text-gray-400'}`}/>
                        </button>
                        <span className='text-white text-xs'>{likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostCard