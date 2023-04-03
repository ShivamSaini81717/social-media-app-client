
import './App.css';

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Header } from './compnents/Header/Header';
import { Login } from './compnents/Login/Login';
import { loadUser } from './Action/User';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Home } from './compnents/Home/Home';
import { Account } from './compnents/Account/Account';
import { NewPost } from './compnents/NewPost/NewPost';
import { Register } from './compnents/Register/Register';
import { UserProfile } from './compnents/UserProfile/UserProfile';
import { UpdatePassword } from './compnents/UpdatePassword/UpdatePassword';
import { ForgetPassword } from './compnents/ForgetPassword/ForgetPassword';
import { ResetPassword } from './compnents/ResetPassword/ResetPassword';
import { UserProfile2 } from './compnents/UserProfile-2/UserProfile2';
import { Search } from './compnents/Search/Search';
import { NotFound } from './compnents/NotFound/NotFound';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
  <Router>
  {
    isAuthenticated && <Header/>
  }

  <Routes>
    <Route path='/' element={isAuthenticated ? <Home/> : <Login/>}/>
    <Route path='/account' element={isAuthenticated ? <Account/> : <Login/>}/>
    <Route path='/newpost' element={isAuthenticated ? <NewPost/> : <Login/>}/>
    <Route path='/register' element={isAuthenticated?<Account/>:<Register/>}/>
    <Route path='/update/profile' element={isAuthenticated ? <UserProfile/> : <Login/>}/>
    <Route path='/forgot/password' element={isAuthenticated ? <UpdatePassword/> : <ForgetPassword/>}/>
    <Route path='/update/password' element={isAuthenticated ? <UpdatePassword/> : <Login/>}/>
    <Route path='/password/reset/:token' element={isAuthenticated ? <UpdatePassword/> : <ResetPassword/>}/>
    <Route path='/user/:id' element={isAuthenticated ? <UserProfile2/> : <Login/>}/>
    <Route path='/search' element={isAuthenticated ? <Search/> : <Login/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </Router>
 


  );
}

export default App;
