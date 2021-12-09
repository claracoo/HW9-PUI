import { BrowserRouter, Link } from "react-router-dom";
import BabyChild from "./BabyChild";

export default function NextPage() {
  return (
    <div>
      <Link to="/">Click here to go home</Link>
      <h1>THIS IS A NEW PAGE</h1>
      <BabyChild />
    </div>
  );
}
