import { Postcard } from '../postCard';
import './styles.css'

export const Posts = ({posts}) =>{
    return (
    <div className="posts">        
    {posts.map(post => (
      <Postcard 
      key={post.id} 
      title={post.title}   
      body={post.body}
      id={post.id}         
      cover={post.cover}           
      />      
    ))}
    </div>
  )    
}