import logo from './logo.svg';
import './App.css';

import NameCpt from './Components/Profile/FullName';
import PhotoCpn from './Components/Profile/ProfilePhoto';
import AdrCpmt from './Components/Profile/Address';
import FooterCpn from './Components/Profile/Footer';




function App() {
  return (
    <div style={{backgroundColor: '#a0b7bd'}}>
    <div className="card">
         <PhotoCpn/>

    <div className="credentials">
			
			  <div>

            <NameCpt/>
            <br></br>
           <AdrCpmt/>
	
		      </div>
    </div>
 
<br/>  
    
   
    <FooterCpn/>
    </div>
    </div>
  );
}

export default App;
