import React from 'react';
import Link from 'next/link';
import { Genre } from '../../models/genre';

interface MusicStoreProps {
    genres: Genre[];
}

export default function MusicStorePage({ genres }: MusicStoreProps) {
    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl font-bold mb-4">Music Store</h1>
                <ul className="space-y-2">
                    {genres.map((genre) => (
                        <li key={genre.id} className="p-2 rounded bg-blue-100 hover:bg-blue-200 transition-colors duration-200">
                            <Link className="text-blue-500 hover:underline" href={`/music-store/browse?genre=${genre.name}`}>
                               {genre.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3200/genres');
    const data = await res.json();

    return { props: { genres: data } };
}