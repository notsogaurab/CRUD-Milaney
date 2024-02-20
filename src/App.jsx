import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Edit from './routes/Edit'
import RouteButton from './components/RouteButton'
import Add from './routes/Add'
import View from './routes/View'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultView />} />
      <Route path="/form" element={<Add />} />
      <Route path="/table" element={<View />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}

function DefaultView() {
  return (
    <div className='w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
      <div className='py-10'>
        <h1 className='text-8xl text-gray-700 font-bold'>Intern Data</h1>
      </div>
      <div className='flex justify-center space-x-6'>
        <RouteButton to='/form' backgroundColor='blue-500' textColor='white' className='px-6 py-3 rounded-md text-lg font-semibold'>
          Add Intern
        </RouteButton>
        <RouteButton to='/table' backgroundColor='blue-500' textColor='white' className='px-6 py-3 rounded-md text-lg font-semibold'>
          View Data
        </RouteButton>
      </div>
    </div>
  );
}

export default App
