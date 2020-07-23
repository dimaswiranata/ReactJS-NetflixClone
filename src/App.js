import React from 'react';
import './App.css';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

function App() {
  
  return (
    <div className="App">
      {/* Nav */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies}
      />
      <Row 
        title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
        title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;

// npm install -g firebase-tools

// 255dcbd0d00b40dfda07ce3be225f62b

// const firebaseConfig = {
//   apiKey: "AIzaSyA1q5EpkmK1UhgAAiYVm9l7qlUyorzGmqo",
//   authDomain: "netflix-clone-1a164.firebaseapp.com",
//   databaseURL: "https://netflix-clone-1a164.firebaseio.com",
//   projectId: "netflix-clone-1a164",
//   storageBucket: "netflix-clone-1a164.appspot.com",
//   messagingSenderId: "137502182309",
//   appId: "1:137502182309:web:6698121f1276ab9709764c",
//   measurementId: "G-FHJ0EVKXK8"
// };