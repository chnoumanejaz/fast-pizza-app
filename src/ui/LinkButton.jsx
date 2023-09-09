import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "inline-block rounded-full bg-yellow-200 p-2 text-sm text-stone-600 transition-all duration-300 hover:bg-yellow-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 active:bg-yellow-200";

  if (to === "-1")
    return (
      <button className={className} onClick={(e) => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      &larr; {children}
    </Link>
  );
}

export default LinkButton;
