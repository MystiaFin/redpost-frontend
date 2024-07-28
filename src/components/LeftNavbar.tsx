import 'remixicon/fonts/remixicon.css'
import avatarImage from '../assets/avatar.png';

function LeftNavBar() {
  return (
    <nav className="text-white sticky top-0 h-screen flex flex-col justify-around border-r border-gray-800 w-16 lg:w-auto p-2 lg:p-5">
        <div className="text-white text-4xl font-bold">
            <span className='text-red-600'>R</span><span className="hidden lg:inline"><span className='text-red-600'>ed</span>Post</span>
        </div>
        <button className="bg-red-600 rounded-full text-lg py-2 flex items-center justify-center">
            <i className="ri-add-line"></i> <span className="hidden lg:inline">New Post</span>
        </button>
        <div>
            <ul className="space-y-2 text-xl">
                <li className="flex items-center justify-center lg:justify-start hover:bg-gray-900 p-2 rounded-2xl">
                    <i className="ri-home-fill lg:mr-4"></i><span className="hidden lg:inline">Home</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start hover:bg-gray-900 p-2 rounded-2xl">
                    <i className="ri-chat-1-fill lg:mr-4"></i> <span className="hidden lg:inline">Chat</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start hover:bg-gray-900 p-2 rounded-2xl">
                    <i className="ri-search-fill lg:mr-4"></i> <span className="hidden lg:inline">Search</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start hover:bg-gray-900 p-2 rounded-2xl">
                    <i className="ri-notification-2-fill lg:mr-4"></i> <span className="hidden lg:inline">Notification</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start hover:bg-gray-900 p-2 rounded-2xl">
                    <i className="ri-heart-fill lg:mr-4"></i> <span className="hidden lg:inline">Liked Posts</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start hover:bg-gray-900 p-2 rounded-2xl">
                    <i className="ri-bookmark-fill lg:mr-4"></i> <span className="hidden lg:inline">Saved</span>
                </li>
            </ul>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3">
            <img src={avatarImage} className='w-12 h-12 rounded-full'/>
            <div className="hidden lg:block">
                <p className="font-semibold text-xl">stvnzey</p>
                <p className="text-sm text-gray-400">@tag</p>
            </div>
            <button className="hover:bg-gray-900 px-1 rounded-full mt-2 lg:mt-0">
                <i className="ri-settings-3-fill text-2xl"></i>
            </button>
        </div>
    </nav>
  );
};

export default LeftNavBar;