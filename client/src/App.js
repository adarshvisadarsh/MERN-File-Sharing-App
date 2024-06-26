import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './services/api';



function App() {
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')
  const [click, setClick] = useState(false);
  const fileInputRef = useRef();
  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  const onUploadClick = () => {
    fileInputRef.current.click()
  }
  //console.log(file)
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
        setResult(response.path)
      }
    }
    getImage();

  }, [file])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Link copied to clipboard!');
  };
  
  return (
    <div className='container'>
     
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button className="upload-btn" onClick={onUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {result && <p className="success-msg">File uploaded successfully!</p>}
       {result && (
          <div>
            <button className="link-btn" onClick={() => setClick(true)}>Get Link</button>
            <button className="copy-btn" onClick={copyToClipboard}>Copy Link</button>
          </div>
        )}
        {click && <a className="download-link" href={result} target="_blank" rel="noopener noreferrer">{result}</a>}
      </div>
    </div>
  );
}

export default App;
