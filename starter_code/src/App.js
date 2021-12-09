import "./styles.css";
import { Route, BrowserRouter } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import Comments from "./components/Comments.jsx";

export default function App() {
  var comments = [
    [
      "@LegolasGreenleaf  Wow I cannot believe you were able to see all that all the time. That is crazy",
      "@MerriadocBrandybuck  Not all who wander are lost",
      "@AragornTelcontar  wowoowowowowowowowow soooooo yessss"
    ],
    [
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss",
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss",
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss",
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss"
    ],
    [
      "@FrodoBaggins  THINGS I cannot believe you were able to see all that all the time. That is crazy",
      "@RosieCotton  Not all who wander are lost",
      "@TheodenEdnew wowoowowowowowowowow soooooo yessss",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss"
    ]
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path={"/"}>
            <Posts />
          </Route>
          <Route path={"/details"}>
            <Comments />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}
