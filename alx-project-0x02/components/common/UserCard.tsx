import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border text-white rounded-lg p-4 shadow mb-4">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-400">{email}</p>
            <p className="text-sm text-gray-400">
                {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </p>
        </div>
    )
}
export default UserCard;