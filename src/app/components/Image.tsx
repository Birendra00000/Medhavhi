import Image from "next/image";
type ImagesProps = {
  src: string;
};

export default function Images({ src }: ImagesProps) {
  return (
    <Image
      src={src}
      width={128}
      height={32}
      alt="Picture of the author"
      quality={100}
    />
  );
}
