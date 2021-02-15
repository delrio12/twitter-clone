import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        /* go to the collection and set the posts to the values inside the docs on the database and map them */
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2> Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <FlipMove>
            {posts.map(post => (
                <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />

            ))}
            </FlipMove>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
    
        </div>
    )
}

export default Feed
