import React, { useState } from 'react'
import { Button } from 'antd';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment'

function Comment(props) {

    const user = useSelector(state => state.user)
    const videoId = props.postId;
    const [commentValue, setcommentValue] = useState("")

    const handleClick = (e) => {
        setcommentValue(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            postId: videoId
        }

        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success) {
                setcommentValue("")
                props.refreshFunction(response.data.result)
            } else{
                alert('Can\'t save comment.')
            }
        })
    }

    return (
        <div>
            <br />
            <p> Replies</p>
            <hr />

            {/* Comment Lists  */}
            {props.commentLists && props.commentLists.map((comment, index) => (
                (!comment.responseTo && 
                    <React.Fragment>
                        <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={videoId} />
                        <ReplyComment refreshFunction={props.refreshFunction} parentCommentId={comment._id} postId={videoId} commentLists={props.commentLists} />
                    </React.Fragment>
                )
            ))}
            
            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit} >
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder="Add a comment"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit} >Submit</Button>
            </form>

        </div>
    )
}

export default Comment