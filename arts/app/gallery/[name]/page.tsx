import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"




export default function GalleryPage({ params }: { params: { name: string } }) {
  const { name } = params

  // This would typically come from a database or API
  const artworks = [
  `/${name}/1.png`,
  `/${name}/2.png`,
  `/${name}/3.png`,
  `/${name}/4.png`,
]

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <header className="bg-pink-200 p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-800">Artist: {name}</h1>
        <Link href="/">
          <Button variant="outline" className="bg-white text-pink-800 border-pink-800 hover:bg-pink-100">
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Image
            //src={artworks[0]}
            src={artworks[0] || "/placeholder.svg"} //this is where we need the index of the clicked carousel item
            alt={`${name}'s artwork`}
            width={600}
            height={400}
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {artworks.map((artwork, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={artwork || "/placeholder.svg"}
                      alt={`${name}'s artwork ${index + 1}`}
                      width={200}
                      height={150}
                      className="w-full h-auto rounded"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>

      <footer className="bg-pink-200 p-4 text-center text-pink-800">2025 Maternal Instincts</footer>
    </div>
  )
}

