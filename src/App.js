import React from 'react';
import Prop_it_up from './components/Prop_it_up'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1><Prop_it_up  User = {" Doe, Jane"} /></h1>
     <Prop_it_up User = {"Age: 45"} />
     <Prop_it_up User = {"Hair Color: Black"} />

     <h1><Prop_it_up  User = {" Smith, John"} /></h1>
     <Prop_it_up User = {"Age: 85"} />
     <Prop_it_up User = {"Hair Color: Brown"} />

     <h1><Prop_it_up  User = {" Filmore, Millard"} /></h1>
     <Prop_it_up User = {"Age: 50"} />
     <Prop_it_up User = {"Hair Color: Brown"} />

     <h1><Prop_it_up  User = {" Smith, Maria"} /></h1>
     <Prop_it_up User = {"Age: 65"} />
     <Prop_it_up User = {"Hair Color: Brown"} />
    </div>
    
  );
}

export default App;
