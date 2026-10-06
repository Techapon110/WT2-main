import { OrbitProgress } from "react-loading-indicators";
import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <HashLoader color="#ec4899" size={57} speedMultiplier={1.45} />
      {/* <OrbitProgress variant="track-disc" color="#465eed" size="medium" text="" textColor="" /> */}
    </div>
  );
}

export default Loading;
