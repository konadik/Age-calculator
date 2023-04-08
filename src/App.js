import "./App.css";
import Card from "./components/Card";
import InputFields from "./components/InputFields";
import PageBreak from "./components/PageBreak";
import AgeDisplay from "./components/AgeDisplay";

function App() {
    return <Card>
        <InputFields/>
        <PageBreak/>
        <AgeDisplay/>
    </Card>;
}

export default App;
