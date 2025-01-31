import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-[url(./assets/images/bg-primary.jpg)] bg-cover bg-center bg-no-repeat w-svw h-svh">
      <AppRoutes />
    </div>
  );
}

export default App;
