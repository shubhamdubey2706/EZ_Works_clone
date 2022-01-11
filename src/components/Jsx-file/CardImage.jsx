import "./CardImage.css";

export default function CardImage({ url, height, width }) {
  return (
    <>
      <img alt="" height={40} src={url} />
    </>
  );
}
