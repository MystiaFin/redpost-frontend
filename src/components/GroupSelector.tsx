import groupImage from '../assets/groupImage1.png';
import groupImage2 from '../assets/groupImage2.jpg';

function GroupSelector() {

    <div className="flex flex-col lg:flex-row items-center gap-3">
            <img src={groupImage} className='lg:w-12 lg:h-12 md:w-8 md:h-8 sm:w-8 sm:h-8 rounded-full' />
            <div className="hidden lg:block">
                <p className="font-semibold text-lg">Kessoku Band</p>
            </div>
            <img src={groupImage2} className='lg:w-12 lg:h-12 md:w-8 md:h-8 sm:w-8 sm:h-8 rounded-full' />
            <div className="hidden lg:block">
                <p className="font-semibold text-lg">Kessoku Band</p>
            </div>
    </div>
}

export default GroupSelector