import Image from "next/image";
import loader from "../public/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5", // Optional: Add a background color
      }}
    >
      <Image src={loader} alt="Loading..." height={150} width={150} />
    </div>
  );
};

export default LoadingPage;
