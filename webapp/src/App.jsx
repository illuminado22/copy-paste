import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MemberPage from "./pages/MemberPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:id" element={<MemberPage />} />
        </Routes>
      </main>
    </>
  );
}