import './App.css';
import Mensaje from './Mensaje';


const App = () => (
  <div className="App"> 
    <Mensaje color='blue' message= 'Estamos trabajando'/>
    <Mensaje color='orange' message= 'En el curso'/>
    <Mensaje color='purple' message= 'De React'/>
    </div>
  );

export default App;
