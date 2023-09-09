import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (username.trim().length < 1) {
      toast.error("Please enter your name ...");
      return;
    } else {
      dispatch(updateName(username));
      navigate("/menu");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base ">
        👋 Welcome! Please start by telling us your name
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="input mb-6 w-72"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
