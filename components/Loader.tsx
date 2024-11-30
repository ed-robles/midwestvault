import { LoaderIcon } from "lucide-react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderIcon className="w-24 h-24 animate-spin text-black" />
    </div>
  );
}

export default Loader;
