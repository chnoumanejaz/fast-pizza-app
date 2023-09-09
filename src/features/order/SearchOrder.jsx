import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length < 1) {
      toast.error("Please enter something to search");
      return;
    }
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-500 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500"
      />
    </form>
  );
}

export default SearchOrder;
