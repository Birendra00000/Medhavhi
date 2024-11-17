import Image from "next/image";
type ImagesProps = {
  src: string;
  className?: string; // Allow className as an optional prop
  width?: number; // Add optional width
  height?: number; // Add optional height
};

export default function Images({ src, className }: ImagesProps) {
  return (
    <Image
      src={src}
      alt="Picture of the author"
      quality={100}
      className={className}
      width={500}
      height={500}
    />
  );
}
