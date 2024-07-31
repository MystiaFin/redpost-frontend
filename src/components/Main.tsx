import HeaderPost from "./HeaderPost"
import PostCard from "./PostCard"

function Main() {
    return(
        <>
        <div className="p-2 px-8 lg:max-w-2xl md:max-w-xl sm:max-w-xl">
            <HeaderPost/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
        </>
    )
}

export default Main