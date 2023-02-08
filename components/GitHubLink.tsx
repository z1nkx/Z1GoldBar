import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "0px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #000000",
          cursor: "",
        }}
        role=""
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/github.png"}
          width={40}
          height={40}
          role=""
          style={{ cursor: "" }}
        />
      </div>
    </>
  );
}
