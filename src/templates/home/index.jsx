import './index.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/button/loadMore'
import { InputText } from '../../components/inputText'

export class Home extends Component {
  
  state = {
     posts: [],
     allPosts: [],
     page: 0,
     postsPerPage: 25,
     searchText: '' 
  }    
  
  async componentDidMount(){
    await this.loadApi()
  }

  loadApi = async () => {
    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos})
  }

  loadNext = () => {
    const {posts, allPosts, page, postsPerPage} = this.state

    const nextPage = page + postsPerPage
    const newPost = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...newPost)

    this.setState({posts, page: nextPage})
  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({searchText: value})
    console.log(value)  
  }

  render(){
    const { posts, page, postsPerPage, allPosts, searchText } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPost = !!searchText ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchText.toLowerCase())
    }) : posts
    
    return (    
    
      <section className='container'>        
        <div className='input-container'>
        {!!searchText && (
          <h1>hey: {searchText} </h1>
        )}
        
        <InputText searchValue={searchText} handleChange={this.handleChange}/>
        </div>
        
         {filteredPost.length > 0 && (
           <Posts posts={filteredPost}/>
         )}
        
        {filteredPost.length === 0 && (
           <p>Nao encontramos nenhum post :(</p>
         )}



        <div className='button-container'>
          {!searchText &&(
            <Button className='botaozin'
            disabled={noMorePosts}
            text='Load more posts'
            onClick={this.loadNext}
          />
          )}
          
        </div>        
      </section>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

