import { useEffect, useState } from 'react'
import { List, Skeleton } from "antd";
import Comment from "../Comment";
import useApi from '@/js/hooks/useApi';
import { fetchComment } from '@/js/apis/CommentApi';
import { arrayIsLoading } from '@/js/utils';


export default function ReplyList({ id })
{

    const { isLoading, data, status } = useApi(fetchComment, {params: [id], executeOnMount: true})

    const [replies, setReplies] = useState([])

    useEffect(() => {
        if (status === 'success') {
            setReplies(data.comments)
        }
    }, [status])

    return (
        <List
            size='small'
            locale={{emptyText: 'No replies'}}
            dataSource={arrayIsLoading(replies, isLoading, 1)}
            renderItem={
                comment => (
                    <List.Item style={{padding: 0}}>
                        <Skeleton  style={{padding: '8px 0'}} rows={1} avatar loading={comment.isLoading} active>
                            <Comment comment={comment} />
                        </Skeleton>
                    </List.Item>
                )
            }
        />
    )
}