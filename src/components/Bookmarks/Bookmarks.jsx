import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3">
            <p>Bookmarked Blogs : {bookmarks.length}</p>
            {
                bookmarks?.map(bookmark => <Bookmark 
                    key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;