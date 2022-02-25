import React from 'react';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
const Content = () => {
  toast.error("OH NO ERROR");
  toast.success("YOU SUCCEEDED");
  return (
    <div>
        <ToastContainer/>
        <h1>Content</h1>
    </div>
  )
}

export default Content