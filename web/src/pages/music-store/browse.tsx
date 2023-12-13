import React from 'react';
import { GetServerSideProps } from 'next';
import { Album } from '../../models/album';
import Link from 'next/link';

interface BrowseProps {
    albums: Album[];
}

export default function BrowsePage({ albums }: BrowseProps) {
    const sortedAlbums = [...albums].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold mb-4">Albums</h1>
            {sortedAlbums.length === 0 ? (
                <p className="text-lg text-red-500">No albums found for this genre.</p>
            ) : (
                <ul className="space-y-4">
                    {sortedAlbums.map((album) => (
                        <li key={album.id} className="p-4 border rounded-lg">
                            <Link href={`/music-store/album/${album.id}`} className="text-blue-500 hover:underline">
                                <h2 className="text-xl font-semibold">{album.title}</h2>
                                <p className="text-gray-500">{album.artist.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link href="/music-store" className="mt-4 text-blue-500 hover:underline">
                Back to Landing Page
            </Link>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const genre = context.query.genre as string;
    const res = await fetch(`http://localhost:3200/albums/genre/${genre}`);
    const data = await res.json();

    return { props: { albums: data } };
}