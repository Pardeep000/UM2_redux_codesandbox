import React, { useEffect, useState, useRef } from "react";
import { Toast } from "react-bootstrap";
// import Toast from "react-bootstrap/Toast";
// import ToastContainer from "react-bootstrap/ToastContainer";
import { ToastContainer } from "react-bootstrap";
//
import logo from "../Media/logo.PNG";
//
import { useSelector, useDispatch } from "react-redux";
import { showToast, nullifyToast } from "../state/reducers/toastReducer";
//
export default function ToastComponent() {
  //redux
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast.toast);
  //
  const [count, setCount] = useState(0);
  const timerId = useRef();
  //
  let check = () => {
    dispatch(nullifyToast());
  };
  //
  useEffect(
    (e) => {
      console.log("toast COmponent ", toast);
      console.log("toast COmponent show", toast.show);
      console.log("toast COmponent msg", toast.msg);
      if (toast.msg.length !== 0 && count === 0) {
        timerId.current = setInterval(() => {
          setCount((count) => count + 1);
          // setCount(count + 1);
          console.log(count);
        }, 1000);
      } else {
        clearInterval(timerId.current);
        timerId.current = null;
        setCount(0);
        console.log("in else of toast");
      }
    },
    [toast, toast.msg]
    // [toast.show, toast.msg]
  );

  return (
    <ToastContainer position="top-center" className="mt-5">
      <Toast
        onClose={() => {
          dispatch(nullifyToast());
        }}
        autohide
        show={toast.show}
        delay={5000}
      >
        <Toast.Header className="bg-dark text-light">
          <img
            src={logo}
            style={{ width: "10%", height: "10%" }}
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">{count} seconds ago</small>
        </Toast.Header>
        <Toast.Body>{toast.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
// if (props.toast === true) {
//   console.log("toaster is active");
//   let count = 0;
//   let tid = setInterval(() => {
//     settimerId(tid);
//     count++;
//     console.log(count);
//   }, 1000);
// }
// if (props.toast === false) {
//   clearInterval(timerId);
//   console.log("toaster is closed");
// }
