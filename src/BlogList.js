import './index.css';
import {Link, useParams} from 'react-router-dom';

const BlogList = ({blogs,title,handleDelete}) => {
    //const blogs= props.blogs;
    //console.log(props,blogs);
    const id = useParams();

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>{/* AQUI EU USEI O SHIT + CRASE + SPAÇO */}
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;