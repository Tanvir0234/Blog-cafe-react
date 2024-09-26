import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover pictureof the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-8'>
                    <img src={author_img} alt="" className='w-14'/>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>


                </div>
                <div>
                    <span>{reading_time} read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-blue-600'><FaBookmark></FaBookmark></button>

                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            {
                hashtags.map((hash,idx)=><span key={idx}><a href=''>{hash}</a></span>)
            }
        </div>
    );
};



Blog.PropTypes ={
      blog : PropTypes.object.isRequired,
      handleAddToBookmark: PropTypes.func

}

export default Blog;