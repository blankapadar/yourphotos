import Gallery from "@/components/users/gallery";
import UserDetails from "@/components/users/user-details";
import Head from "next/head";

function UserPage({ user, photos }) {
  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="yourphotos-logo-black.svg" />
      </Head>
      <UserDetails user={user} />
      <Gallery photos={photos} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.userId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const photos = await res.json();

  return {
    props: {
      user: data,
      photos: photos,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { userId: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default UserPage;
