import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";




// я должен придерживатся принципа don't repeat youyrself
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
