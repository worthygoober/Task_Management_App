import { Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import './App.css';
import TaskDashboard from './pages/TaskDashboard';
import LoginPage from './pages/Login';
import AuthenticationGuard from './components/AuthenticationGuard';
import RegisterPage from './pages/Register';
import CallbackPage from './pages/CallbackPage';
import LogoutButton from './components/LogoutButton';
import TaskDetails from './pages/TaskDetails';


const App: React.FC =() => {

  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path='/' element={<AuthenticationGuard component={TaskDashboard} />}
          />
          <Route path='/login' element={<LoginPage />}
          />
          <Route path='/register' element={<RegisterPage />}
          />
          <Route path='/task/:id' element={<AuthenticationGuard component={TaskDetails} />}
          />
          <Route path='/callback' element={<CallbackPage />}
          />

        </Routes>
      </TaskProvider>
      <LogoutButton />
    </>
  );
};

export default App;
