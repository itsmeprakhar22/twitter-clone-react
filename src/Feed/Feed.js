import {React, useState, useEffect} from 'react'
import './Feed.css'
import Post from '../Post/Post'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import TweetBox from '../TweetBox/TweetBox';

function Feed() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function fetchData() {
          // You can await here
          const postList = await getPosts(db)
          console.log(postList)
          setPosts(postList)
        }
        fetchData();
      }, []);
    return (
        
        <div>
            {/* Header */}
            <div className="feed">
                <h2 className="feed__header">Home</h2>
                <TweetBox />
            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </div>
            {/* TweetBox */}
            {/* Post */}
            
            
        </div>
    )
}
async function getPosts(db) {
    const postsCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map(doc => doc.data());
    return postList;
  }

export default Feed
