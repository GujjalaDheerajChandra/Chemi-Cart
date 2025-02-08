import { Route, Routes } from "react-router-dom";
import Header from "./header/header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "about-us",
//     element: <div>About Us</div>,
//   },

//   {
//     path: "contact-us",
//     element: <div>Contact Us</div>,
//   },
// ]);

export default function Root() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
        <Route path="/about-us" element={<div>About Us</div>} />
      </Routes>
    </>
  );
}
