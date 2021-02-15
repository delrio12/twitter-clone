import React from 'react';
import "./Widgets.css";
/* On the console, I installed these three using npm i react-twitter-embed, which lets me */ 
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
            
                <TwitterTweetEmbed tweetId={"1295163407939837952"} />
                <TwitterTweetEmbed tweetId={"1294382104307007492"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="DevRio11"
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={"https://andresdelrio.dev/"}
                    options={{text: "Check out Andres Portfolio!", via: "DevRio11"}}
                />
            </div>

        </div>
    )
}

export default Widgets;


