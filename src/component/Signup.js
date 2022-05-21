import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Signup({ myuser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("mysignup -> ", email, password, cpassword, name);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      await result.user.updateProfile({
        displayName: name,
      });
      alert("Succefully Signup");
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center ">
        <img
          alt=""
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="px-2">

      <div className="flex max-w-2xl m-auto flex-col justify-center items-center border-2 border-black shadow-lg shadow-black rounded-lg">
        <h1 className="text-center text-5xl"> SIGNUP</h1>
        <br />
        <div>
          <label className="text-center text-xl">NAME:</label>
          <input
            className="border-b-2 outline-none px-2"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <div>
          <label className="text-center text-xl">EMAIL:</label>
          <input
            className="border-b-2 outline-none px-2"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <div>
          <label>PASSWORD : </label>
          <input
            className="border-b-2 outline-none px-2"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <div>
          <label>CONFORM PASSWORD : </label>
          <input
            className="border-b-2 outline-none px-2"
            type="password"
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
          />
        </div>
        <br />

        <button
          className="border-2 border-black rounded-lg px-2 bg-black text-white hover:bg-white hover:text-black "
          type="button"
          onClick={handleSubmit}
          
        >
          SignUp
        </button>
        <br />
        <div className=" flex "><h3>
        If already have an account..
        </h3>
        <br/>

        <button
          className="border-2 border-black rounded-lg px-2 bg-black text-white hover:bg-white hover:text-black mb-4 "
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
        </div>
        
      </div>
      </div>

    </div>
  );
}

export default Signup;
