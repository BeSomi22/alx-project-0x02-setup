import React from "react";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UserPageProps {
    users: UserProps[];
}

const UserPage: React.FC<UserPageProps> = ({ users }) => {
    return (
        <>
            <Header />
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Users Page</h1>
                {users.map(user => (
                    <UserCard key={user.id} {...user} />
                ))}
            </main>
        </>
    )
}

export async function getStaticProps(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        return {
            props: { users },
        }
    }catch (error){
        console.error('Failed to fetch useres:', error)
        return{
            props: {users: [],}
        }
    }
}

export default UserPage;