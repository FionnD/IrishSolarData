import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Production from "./pages/Production";
import Contribute from "./pages/Contribute";
import Insights from "./pages/Insights";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="Production" element={<Production />} />
                <Route path="Insights" element={<Insights />} />
                <Route path="Contribute" element={<Contribute />} />

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
