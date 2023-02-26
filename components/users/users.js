import Link from "next/link";
import Image from "next/image";

function Users(props) {
  return (
    <div className="grid md:grid-cols-5 justify-items-center gap-y-12 mt-20 mb-20">
      {props.users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            <Image
              className="m-auto"
              src="/images/placeholder-img.jpg"
              alt="Picture of the author"
              width={120}
              height={120}
            />
            <h4 className="text-white text-center mt-3 transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
              {user.name}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
