import React from 'react';
import { GetServerSideProps } from 'next';
import { Album } from '../../../models/album';
import Image from 'next/image';
import Link from 'next/link';

interface AlbumPageProps {
    album: Album;
}

export default function Album({ album }: AlbumPageProps) {
    const formattedPrice = album.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold mb-4">{album.title}</h1>
            {/* album image, with artist, genre & price */}
            <div className="mb-4">
                <Image src={album.imageUrl} alt={album.title} width={150} height={150} />
            </div> 
            <p className="mb-2"><strong className="font-semibold">Artist:</strong> {album.artist.name}</p>
            <p className="mb-2"><strong className="font-semibold">Genre:</strong> {album.genre.name}</p>
            <p className="mb-2"><strong className="font-semibold">Price:</strong> {formattedPrice}</p>
            <Link className="mt-4 text-blue-500 hover:underline" href={`/music-store/browse?genre=${album.genre.name}`}>
                Back to Albums
            </Link>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;

    if (!id) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(`http://localhost:3200/albums/${id}`);
    
    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    const data = await res.json();

    return { props: { album: data } };
}