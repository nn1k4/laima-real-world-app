
import React, {useState, useRef} from 'react';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

import './styles/App.css';

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
    {id: 4, title: 'JavaScript 4', body: 'Description'},
  ])



const createPost = (newPost) => {
    setPosts([...posts, newPost]);
}


const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">

      <PostForm create={createPost}/> 
      <PostList remove={removePost} posts={posts} title="Posts about JS" />
     
    </div>
  );
}

export default App;
