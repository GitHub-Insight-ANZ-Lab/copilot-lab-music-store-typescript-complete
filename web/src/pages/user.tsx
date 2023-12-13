import React from 'react';

interface UserProps {
    name: string;
    email: string;
}

export default function User({ name, email }: UserProps) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();

    return { props: { name: data.name, email: data.email } };
}