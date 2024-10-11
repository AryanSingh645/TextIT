import { useParams } from 'next/navigation'
import React from 'react'

const ChatHome = () => {
    const {userId} = useParams<{userId: string}>();
    return (
        <div>{userId}</div>
    )
}

export default ChatHome