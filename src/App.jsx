import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "./assets/data";

function App() {
  const [form, setForm] = useState(data);

  function handleChange(e) {
    e.preventDefault();
    setForm(e.target.value);
  }

  return (
    <div className="container">
      <textarea
        onChange={handleChange}
        value={form}
        id="editor"
        name="input-md"
      />
      <div id="preview">
        <ReactMarkdown>{form}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
