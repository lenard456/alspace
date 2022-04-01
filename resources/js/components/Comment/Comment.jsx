import { useState } from 'react'
import moment from 'moment'
import { Avatar,  Comment as AntComment, Tooltip} from 'antd'
import { LikeFilled } from '@ant-design/icons'
import useUser from '@/js/recoil/selectors/useUser'
import LikeButton from './components/LikeButton'
import { useCommentLikersCount } from '@/js/recoil/selectors/useComment'
import WriteComment from '../WriteComment'
import { createReply } from '@/js/apis/CommentApi'
import ReplyList from './components/ReplyList'

export default function Comment({comment})
{
    const [replyEditorEnabled, setReplyEditorEnabled] = useState(false)
    const [showReplies, setShowReplies] = useState(false)
    const author = useUser(comment.user_id)
    const likersCount = useCommentLikersCount(comment.id)

    const submitReply = (content) => createReply(comment.id, content)
    const replyCallback = (reply) => {
        console.log(reply)
        setReplyEditorEnabled(false)
    }

    return (
        <AntComment 
            className='w-full'
            actions={[
                <LikeButton id={comment.id} key='like' />,
                <span onClick={() => setReplyEditorEnabled(x => !x)} key='reply'>Reply</span>,
                <span onClick={() => setShowReplies(x => !x)} key='view-replies'>{ showReplies ? 'Hide Replies' : 'View Replies' }</span>,
                likersCount > 0 && <span>
                    <LikeFilled /> {likersCount}
                </span>
            ]}
            author={author.fullname}
            avatar={<Avatar src={author.avatarUrl} />}
            content={
                <p>{comment.content}</p>
            }
            datetime={
                <Tooltip title={moment(comment.created_at).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(comment.created_at).fromNow()}</span>
                </Tooltip>
            }
        >
            { showReplies && <ReplyList id={comment.id} />}
            { replyEditorEnabled && <WriteComment placeholder='Write a reply' submitHandler={submitReply} callback={replyCallback} /> }
        </AntComment>
    )
}