import "./Logo.css";

export default function Logo() {
  return (
    <>
      <div className="Logo">
        <img
          width={400}
          alt=""
          src={require("../../assets/EZ Works Blue@2x.png")}
        />
      </div>
    </>
  );
}
