import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-2">
      <div className="relative w-32 h-32 md:w-32 md:h-32 lg:w-36 lg:h-36">
        <Image
          fill
          alt="Logotipo Fresh Coffee"
          src="/logo.svg"
          priority={true}
        />
      </div>
    </div>
  );
}
