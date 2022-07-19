import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<IndexView />} />
        <Route path = '/create' element = {<CreateView />} />
        <Route path = '/:id' element = {<DetailView />} />
        <Route path = '/:id/edit' element = {<EditView />} />
      </Routes>
    </div>
  );
}

export default App;
