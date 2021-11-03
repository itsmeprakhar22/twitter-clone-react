
import {React} from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import {VerifiedUser, ChatBubbleOutline, Repeat ,Favorite, Publish} from '@material-ui/icons'

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
    
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName} {" "}
                        <span className="post_headerSpecial">
                            {verified && <VerifiedUser className="post_badge"/> } @{userName}
                        </span>
                        </h3>
                        
                    </div> 

                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>  
                    
                </div>
                <img src={image} alt="" />  
                <div className="post_footer" font-size="small">
                    <ChatBubbleOutline font-size="small" className="post_badge"/>
                    <Repeat font-size="small" className="post_badge"/>
                    <Favorite font-size="small" className="post_badge"/>
                    <Publish font-size="small" className="post_badge"/>
                </div>
            </div>
            
        </div>
    )
}

  
export default Post
