import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex h-80 flex-col items-center justify-center">
      {error.data ? (
        <h1 className="text-xl font-semibold">Page Not Found 😢</h1>
      ) : (
        <h1 className="text-xl font-semibold">Something Went Wrong 😣</h1>
      )}
      <p className="mb-6 mt-2">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
