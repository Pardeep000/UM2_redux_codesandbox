import "./UserManagement.css";
//
import { useState } from "react";
import TopBar from "./Components/TopBar";
//
import { Link, useNavigate } from "react-router-dom";
//
import { useSelector, useDispatch } from "react-redux";
//
function UserManagement(props) {
  //redux
  const logindata = useSelector((state) => state.loginUser.userObject.data);
  const navigate = useNavigate();
  //
  const [mode, setMode] = useState("dark");
  let changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  console.log("data from welcome => ", props.logindata);
  //
  // if(props.welcomeflag==false){
  // setTimeout(() => {
  //   console.log('directing to home')
  //   navigate('/')
  // }, 2000);
  // }
  if (logindata === null) {
    setTimeout(() => {
      console.log("directing to home");
      navigate("/");
    }, 2000);
  }
  //
  return (
    <>
      {logindata === null ? (
        <h1 style={{ color: "white" }}>
          User can not view User Management Screen without Login
        </h1>
      ) : (
        <>
          <div style={{ color: "white" }}>
            <h2>
              {logindata == null
                ? "nothing"
                : `Welcome ${logindata.fname} ${logindata.lname}`}
            </h2>
            <h5>{logindata == null ? "nothing" : `(${logindata.uemail})`}</h5>
          </div>
          <div className="container">
            <TopBar mode={mode} changeMode={changeMode} />
          </div>
        </>
      )}
      {/* {props.welcomeflag==false?<h1 style={{color:'white'}}>User can not view User Management Screen without Login</h1>:<><div style={{color:'white'}}>
    <h2>{props.logindata==null?'nothing':`Welcome ${props.logindata.fname} ${props.logindata.lname}`}</h2>
    <h5>{props.logindata==null?'nothing':`(${props.logindata.uemail})`}</h5>
    </div>
      <div className="container">
        <TopBar mode={mode} changeMode={changeMode} />
      </div></>} */}
    </>
  );
}

export default UserManagement;
