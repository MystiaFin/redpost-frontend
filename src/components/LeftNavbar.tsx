import 'remixicon/fonts/remixicon.css'
import avatarImage from '../assets/avatar.png';

function LeftNavBar() {
  return (
    <nav className="text-white sticky top-0 h-screen flex flex-col justify-around w-24 lg:w-auto p-4 lg:p-5 lg:max-w-screen-xl md:max-w-16 sm:max-w-16 ">
      <div className=''>
        //logo
      </div>
      <button className="bg-red-600 rounded-full text-lg lg:py-2 md:py-0 sm:py-0 flex items-center justify-center">
        <i className="ri-add-line"></i> <span className="hidden lg:inline">New Post</span>
      </button>
      <div>
        <ul className="space-y-2 text-lg">
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
      <div>
        <button className="flex flex-col lg:flex-row items-center gap-3">
          <img src={avatarImage} className='lg:w-12 lg:h-12 md:w-8 md:h-8 sm:w-8 sm:h-8 rounded-full' />
            <div className="hidden lg:flex lg:flex-col lg:items-start">
                <p className="font-semibold text-lg">stvnzey</p>
                <p className="text-sm text-gray-400">@tag</p>
              </div>
          <button className="hover:bg-gray-900 px-1 rounded-full mt-2 lg:mt-0">
            <i className="ri-settings-3-fill text-2xl"></i>
          </button>
        </button>
      </div>
    </nav>
  );
};

export default LeftNavBar;
