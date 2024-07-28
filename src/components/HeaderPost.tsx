import avatarImage from '../assets/avatar.png';
import { useState } from 'react';

function HeaderPost() {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
        // Adjust the height of the textarea to fit the content
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    return (
        <div className='bg-gray-900 p-4 rounded-xl'>
            <div className='flex items-center gap-3'>
                <img src={avatarImage} className='w-16 rounded-full' alt="Avatar"/>
                
                <div className='flex-1 flex flex-col'>
                    <textarea
                        className='w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg px-6 py-3 focus:outline-none resize-none overflow-hidden'
                        placeholder="What's on your mind?"
                        value={text}
                        onChange={handleInputChange}
                        rows={1} // Start with a single line
                    />
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
        </div>
    );
}

export default HeaderPost;
