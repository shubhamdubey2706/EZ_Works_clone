import "../SmallText/SmallText.css";

export default function TextView({ title, size }) {
  const fontSize = size ? `${size}px` : `${24}px`;
  return <p style={{ fontSize }}>{title}</p>;
}
