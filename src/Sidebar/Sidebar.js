import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import Search from '@material-ui/icons/Search'
import Notifications from '@material-ui/icons/Notifications'
import Home from '@material-ui/icons/Home'
import SidebarOption from '../SidebarOptions/SidebarOption'
import { Bookmark, Message, More, Note, Person } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import './Sidebar.css'
function Sidebar(props) {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__tweetIcon"/>
            <SidebarOption Icon={Home} text="Home"/>
            <SidebarOption Icon={Search} text="Explore"/>
            <SidebarOption Icon={Notifications} text="Notifications"/>
            <SidebarOption Icon={Message} text="Messages"/>
            <SidebarOption Icon={Bookmark} text="Bookmarks"/>
            <SidebarOption Icon={Note} text="Lists"/>
            <SidebarOption Icon={Person} text="Profile"/>
            <SidebarOption Icon={More} text="More"/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
