import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import LikeDislikes from './LikeDislikes';


const { TextArea } = Input;

function SingleComment(props) {
    const user = useSelector(state => state.user)

    const [CommentValue, setCommentValue] = useState("")
    const onHandleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            content: CommentValue,
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id
        }

        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success) {
                setCommentValue("")
                setOpenReply(false)
                props.refreshFunction(response.data.result)
            } else{
                alert('Can\'t save comment.')
            }
        })
    }

    const [OpenReply, setOpenReply] = useState(false)
    const onClickReplyOpen = () => {
        setOpenReply(!OpenReply)
    }
    const likeDislikeButton = props.comment.writer._id !== localStorage.getItem('userId') && <LikeDislikes userId={localStorage.getItem('userId')} commentId={props.comment._id} />

    const actions = [
        likeDislikeButton,
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to">Reply to</span>
    ]

    return (
        <div>
            <Comment 
                actions={actions} 
                author={props.comment.writer.name}
                avatar={
                    <Avatar 
                        src={props.comment.writer.image} 
                    />
                }
                content={
                    <p>
                        {props.comment.content}
                    </p>
                }
            />

            {OpenReply && 
                <form style={{ display: 'flex' }} onSubmit={onSubmit} >
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={onHandleChange}
                    value={CommentValue}
                    placeholder="Add a comment"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
                </form>
            }

            
        </div>
    )
}

export default SingleComment
