import React from 'react'
import { Timeline, Tweet } from 'react-twitter-widgets'
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
          <Tweet tweetId='1441885899126501382'/>
          <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'TheCodeShuriken'
            }}
            options={{
                height: '400'
            }}
          />   
        </div>
      </div>
    );
  }
  
  export default Widgets;