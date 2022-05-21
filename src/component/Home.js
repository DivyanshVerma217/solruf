import React, { useEffect, useState } from "react";
import { auth, storage } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { Avatar } from "@mui/material";

function Home({ myuser }) {
  const navigate = useNavigate();
  const [username, setuserName] = useState("");
  const [updatedusername, setUpdateedUserName] = useState("");
  const [imageurl, seturl] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (myuser) {
      setuserName(myuser.multiFactor.user.displayName);
      seturl(myuser.multiFactor.user.photoURL);
    } else {
      navigate("/");
    }
  }, [myuser]);

  let file = [];

  return (
    <div>
      <div className="flex justify-center items-center ">
        <img
          alt=""
          src="data:image/jpeg;base64,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"
        />
      </div>

      <div className="mb-6 px-2">
        <div className="max-w-2xl  m-auto border-2 border-black rounded-lg shadow-lg shadow-black">
          <div className="p-2">
            <h3 className="text-center text-5xl"> Welcome Back!!</h3>

            <br />

            <div className="flex flex-col justify-center items-center">
              <Avatar
                className=""
                src={imageurl}
                alt="blog title"
                sx={{ width: 120, height: 120 }}
              />
              <h1 className="text-2xl m-6 font-bold">
                <label for="img">Name : {username}</label>
              </h1>

              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => {
                  file = e.target.files[0];
                }}
                accept="image/*"
              />
              <br />

              <button
                className=" border-2 border-black px-2 rounded-lg bg-black text-white hover:bg-white hover:text-black   "
                type="button"
                
                onClick={() => {
                    alert("Profile pic is getting updated...Please wait!!")
                  console.log(file);
                  var uploadTask = storage
                    .ref()
                    .child(username + file.name)
                    .put(file);
                  uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                      var progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log("Upload is " + progress + "% done");
                      if (progress == `100`)
                        console.log("image uploaded complete");
                    },
                    (error) => {
                      console.log(error);
                    },
                    () => {
                      uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL) => {
                          console.log("File available at", downloadURL);
                          seturl(downloadURL);
                          const auth = getAuth();
                          updateProfile(auth.currentUser, {
                            photoURL: downloadURL,
                          })
                            .then((res) => {
                              console.log(res);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        });
                    }
                  );
                }}
              >
                UPLOAD
              </button>
            </div>
            <br />
            <br />
            <div className="flex flex-row justify-center items-center">
              <div>
                <input
                  placeholder="Enter name to update"
                  className=" border-b-2 px-2 placeholder-gray-500  outline-none"
                  type="text"
                  value={updatedusername}
                  onChange={(e) => {
                    setUpdateedUserName(e.target.value);
                  }}
                />
                <button
                  className="border-2 border-black ml-2  px-2 rounded-lg text-white hover:bg-white hover:text-black bg-black "
                  type="text"
                  onClick={(e) => {
                    setuserName(updatedusername);
                    const auth = getAuth();
                    updateProfile(auth.currentUser, {
                      displayName: updatedusername,
                    })
                      .then((res) => console.log(res))
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Update Name
                </button>
              </div>
            </div>
            <br />
            <div className="flex flex-col items-center">
              <button
                className="border-2 border-black p-2 px-2 rounded-lg text-white hover:bg-white hover:text-black bg-black"
                type="button"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
