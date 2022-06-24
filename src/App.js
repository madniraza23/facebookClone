import './App.css';
import AppProvider from './Context';
import Main from './Screens/Main';

function App() {
  return (
    <AppProvider>
      <Main/>
    </AppProvider>
  );
}

export default App;
