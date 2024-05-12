import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[670px] px-5 sm:px-5 mx-auto">
      <Header />
      <Portfolio />
      <p className="md:text-sm text-xs mb-8 text-slate-400">
        © 2024 Ahmad Mirza Rafiq Azmi
      </p>
    </div>
  );
};

export default App;
