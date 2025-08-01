
import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import QueryForm from "./components/QueryForm";
import ResultsView from "./components/ResultsView";
import GraphVisualizer from "./components/GraphVisualizer";

function App() {
  const [caseId, setCaseId] = useState(null);
  const [argument, setArgument] = useState(null);
  const [factCheck, setFactCheck] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-['Inter']">
      {/* Navbar */}
      <nav className="bg-white/80 shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img src="/logo192.png" alt="Nyay-Sahayak Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-700 tracking-wide">Nyay-Sahayak</span>
        </div>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">Home</a>
          <a href="#upload" className="text-gray-700 hover:text-blue-700 font-medium">Upload</a>
          <a href="#graph" className="text-gray-700 hover:text-blue-700 font-medium">Graph</a>
          <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 drop-shadow-lg">
          AI-Powered Legal Analysis
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-8">
          Upload Supreme Court judgments, visualize knowledge graphs, and generate structured legal arguments with advanced AI.
        </p>
        <a
          href="#upload"
          className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg shadow-lg font-semibold text-lg hover:bg-blue-800 transition"
        >
          Get Started
        </a>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4" id="upload">
        <div className="w-full max-w-2xl bg-white/90 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Upload Case Document</h2>
          <FileUpload onUpload={setCaseId} />
        </div>
        {caseId && (
          <div className="w-full max-w-2xl bg-white/90 rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Ask a Legal Query</h2>
            <QueryForm
              caseId={caseId}
              onResult={(arg) => setArgument(arg)}
              onFactCheck={setFactCheck}
            />
          </div>
        )}
        {argument && factCheck && (
          <ResultsView argument={argument} factCheck={factCheck} />
        )}
        {caseId && <div id="graph"><GraphVisualizer caseId={caseId} /></div>}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 mt-10">
        &copy; {new Date().getFullYear()} Nyay-Sahayak. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
