
import './App.css';

/* Import custom modules created */
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

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
        <Feed/>
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
