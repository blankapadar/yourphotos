import Image from "next/image";

function Gallery(props) {
  return (
    <>
      <h1 className="uppercase text-white text-center mt-16 text-5xl mb-8">
        Gallery
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-12">
        {props.photos.map((photo) => (
          <div key={photo.id}>
            <Image
              key={Math.random()}
              src={photo.url}
              alt="picture"
              width={400}
              height={400}
            />
            <p className="text-white max-w-sm text-sm md:text-base lg:text-sm mt-2">
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
