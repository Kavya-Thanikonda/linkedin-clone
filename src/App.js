
import './App.css';

/* Import custom modules created */
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>

      {/* APP Body */}
      <div className='app__body'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
