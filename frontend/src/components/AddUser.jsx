import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddUser = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [gender, setGender] = useState("Male");
     const navigate = useNavigate();

     const saveUser = async (e) => {
          e.preventDefault();
          try {
               await axios.post("http://localhost:5000/user", {
                    name,
                    email,
                    gender,
               });
               navigate("/");
          } catch (error) {
               console.log(error);
          }
      };

     return (
          <div className="columns mt-5">
               <div className="column is-half">
                    <form onSubmit={saveUser}>
                         <div className="field">
                              <label htmlFor="name" className="label">
                                   Name
                              </label>
                              <input
                                   type="text"
                                   name="name"
                                   id="name"
                                   className="input"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   placeholder="Name"
                              />
                         </div>
                         <div className="field">
                              <label htmlFor="email" className="label">
                                   Emil
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   id="name"
                                   className="input"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Emil"
                              />
                         </div>
                         <div className="field">
                              <label htmlFor="gender" className="label">
                                   Gender
                              </label>
                              <div className="control">
                                   <div className="select is-fullwidth">
                                        <select
                                             value={gender}
                                             onChange={(e) => setGender(e.target.value)}
                                             id="gender"
                                        >
                                             <option value="Male">Male</option>
                                             <option value="Female">Female</option>
                                        </select>
                                   </div>
                              </div>
                         </div>
                         <div className="field">
                              <Link to="/" className="button is-info mr-3">Back</Link>
                              <button type="submit" className="button is-success">Save</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddUser;
