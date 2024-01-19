import Firstpage from "./Firstpage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Secondpage from "./Secondpage";

export default function App() {
  //   const [search, setSearch] = useState<string>("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/second-page" element={<Secondpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
