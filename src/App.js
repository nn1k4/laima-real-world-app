import React, {useMemo, useState, useRef} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


import './styles/App.css';

import PostFilter from './components/PostFiletr';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: 'aJavaScript 1', body: 'dDescription'},
    {id: 2, title: 'bJavaScript 2', body: 'cDescription'},
    {id: 3, title: 'cJavaScript 3', body: 'bDescription'},
    {id: 4, title: 'dJavaScript 4', body: 'aDescription'},
  ])


const [filter, setFilter] = useState({sort:'', query:''});
const [modal, setModal] = useState(false);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}



  return (
    <div className="App">

      <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/> 
      </MyModal>
    
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} 
          setFilter={setFilter}
      />
        
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about JS" />
      
        
      </div>
  );
}

export default App;
