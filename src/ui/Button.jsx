import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 transition hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 active:bg-yellow-300 disabled:cursor-not-allowed disabled:bg-yellow-200  uppercase";

  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + " px-4 py-2 md:py-2.5 md:px-5 text-xs",
    round: base + " px-1 py-1 md:py-2 md:px-2",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300  font-semibold tracking-wide text-stone-400 transition hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 active:bg-stone-200 disabled:cursor-not-allowed disabled:bg-stone-100  uppercase px-4 py-2.5 md:py-3.5 md:px-6",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
