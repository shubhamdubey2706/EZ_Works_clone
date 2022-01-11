import "./CardImage.css";

export default function CardImage({ url, height, width }) {
  return (
    <>
      <img alt="" height={45} src={url} />
    </>
  );
}
