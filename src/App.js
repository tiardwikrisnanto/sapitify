import './App.css';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sapitify</h1>
        <h2>{process.env.REACT_APP_CLIENT_ID}</h2>
        {/* <a href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPON_TYPE}`}>Login to Sapitify</a> */}
      </header>
    </div>
  );
}

export default App;
