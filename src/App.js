import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Production from "./pages/Production";
import Contribute from "./pages/Contribute";
import Insights from "./pages/Insights";
import Compare from "./pages/Compare";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="Production" element={<Production />} />
                <Route path="Insights" element={<Insights />} />
                <Route path="Contribute" element={<Contribute />} />
                <Route path="Compare" element={<Compare />} />

            </Routes>
        </BrowserRouter>
    <Analytics />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
