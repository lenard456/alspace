import Http, { requestCookie } from "../utils/Http"

export const likeComment = async (commentId) => {
    await requestCookie()
    return await Http.post(`/comments/${commentId}/like`);
}

export const unlikeComment = async (commentId) => {
    await requestCookie()
    return await Http.post(`/comments/${commentId}/unlike`);
}

export const createReply = async (commentId, content) => {
    await requestCookie()
    return await Http.post(`/comments/${commentId}`, {content})
}