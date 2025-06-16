import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>hello world update</h1>
      {/* <img
        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
        alt=""
      /> */}
      <Image
        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
        alt=""
        width={200}
        height={200}
      />
    </>
  );
}
