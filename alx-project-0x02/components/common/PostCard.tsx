import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
    return (
        <div className="border text-black p-4 rounded-md shadow-md bg-white mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">User ID: {userId}</p>
            <p className="mt-2">{content}</p>
        </div>
    )
}
export default PostCard;