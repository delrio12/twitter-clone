import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core"
import db from "./firebase";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName:"Andres Del Rio",
            username: "DevRio11",
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1320509869280137218/tTpOmYM0_400x400.jpg"
        });

        setTweetMessage("");
        setTweetImage(""); 
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1320509869280137218/tTpOmYM0_400x400.jpg"></Avatar>
                    <input
                        onChange={e => setTweetMessage(e.target.value)} 
                        value={tweetMessage}
                        placeholder="What's happening?" 
                        type="text" 
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                <div className="tweetBox__Icons">
                    <div className="tweetBox__shareIcons">
                        <ImageOutlinedIcon></ImageOutlinedIcon>
                        <GifOutlinedIcon></GifOutlinedIcon>
                        <BarChartOutlinedIcon></BarChartOutlinedIcon>
                        <SentimentSatisfiedOutlinedIcon></SentimentSatisfiedOutlinedIcon>
                        <CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>
                    </div>
                        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
                         
                </div>
                

                 </form>
        </div>
    )
}

export default TweetBox
