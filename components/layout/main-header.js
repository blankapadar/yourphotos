import Link from "next/link";
import Image from "next/image";

function MainHeader() {
  return (
    <header className="bg-header-gray">
      <div className="flex flex-row justify-between">
        <Link className="self-center ml-8" href="/">
          <Image
            src="/images/yourphotos-logo-white.png"
            alt="logo"
            width="0"
            height="0"
            sizes="150vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <div className="flex flex-row pt-3 pb-3">
          <Image
            className="rounded-full mr-8 "
            src="/images/placeholder-img.jpg"
            alt="Avatar of the user"
            width={50}
            height={50}
          />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
