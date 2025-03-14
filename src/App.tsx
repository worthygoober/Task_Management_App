import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext'
import './App.css'
import TaskDashboard from './pages/TaskDashboard';

function App() {

  return (
    <>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskDashboard />} />

          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </>
  )
}

export default App
