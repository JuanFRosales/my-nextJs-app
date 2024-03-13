import { fetchMediaById } from "@/app/models/mediaModel"
import Image from "next/image"



export default async function Single({ params }: { params: { id: string } }) {
    const mediaItem = await fetchMediaById(Number(params.id))
    if (!mediaItem) {
        return <p>No media found</p>
    }
    
    return (
        <section className="flex flex-col p-8">
        <div className="flex flex-col items-center border border-gray-300 p-4 shadow-lg rounded-md bg-white">
            <Image src={mediaItem.thumbnail} alt={mediaItem.title} width={320} height={200} />
            <h3 className="text-lg font-bold self-start">{mediaItem.title}</h3>
            <p>Description: {mediaItem.description}</p>
            <p>
            Date: {new Date(mediaItem.created_at).toLocaleDateString("fi-FI")}
            </p>
        </div>
        </section>
    )
    }