import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Production from "./pages/Production";
import Infrastructure from "./pages/Infrastructure";
import About from "./pages/About";
import Insights from "./pages/Insights";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="Production" element={<Production />} />
                <Route path="Infrastructure" element={<Infrastructure />} />
                <Route path="Insights" element={<Insights />} />
                <Route path="About" element={<About />} />

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
