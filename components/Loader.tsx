import { Handshake } from "lucide-react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Handshake className="w-24 h-24 animate-spin text-gray-900" />
    </div>
  );
}

export default Loader;
