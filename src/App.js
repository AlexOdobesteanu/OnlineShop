import React, { useState } from 'react';
import Nav from './components/nav';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Magazine from './components/magazine';
import MainPage from './components/mainpage';
import Gestionare from './components/gestionare';
import { Link } from 'react-router-dom';
import MenuAdmin from './components/menuadmin.jsx'
import RegisterForm from './components/register';
import EditForm from './components/edit';
import shopCart from './components/cos';
import Shop from './components/shop';
import DataProvider from './components/produse';
import MenuClient from './components/menuclient';
import About from './components/about';
import Detalii from './components/details';
import Payment from './components/payment';

function App() {
  const adminUser = {
    email: "admin@yahoo.com",
    password: "admin",
  };
  const clientUser = {
    email: "client@yahoo.com",
    password: "client",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {

    console.log(details);


    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("LOGGED IN");
      setUser({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log("NOT LOGGED IN");
    }

    if (details.email == clientUser.email && details.password == clientUser.password) {
      console.log("LOGGED IN");
      setUser({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log("NOT LOGGED IN");
    }

  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: "",
    })
  }
  return (
    <DataProvider>
      <Router>

        <div className="App">
          <Nav />
          <Switch>
            <Route path='/Login'>
              <div>
                {
                  (() => {
                    if (user.email === "admin@yahoo.com") {
                      return (
                        <div className="welcome">
                          <MenuAdmin></MenuAdmin>
                          <button className='button1' onClick={Logout}>Logout</button>
                        </div>
                      )
                    } else if (user.email === "client@yahoo.com") {
                      return (
                        <div className="welcome">
                          <MenuClient></MenuClient>
                          <button className='button1' onClick={Logout}>Logout</button>
                        </div>
                      )
                    } else {
                      return (
                        <LoginForm Login={Login} error={error} />
                      )
                    }
                  }
                  )()
                }
              </div>
            </Route>
            <Route path="/MainPage" exact component={MainPage} />

            <Route path='/shop'>

              <Shop>
              </Shop>

            </Route>

            <Route path='/Magazine' component={Magazine} />
            <Route path='/gestionare' component={Gestionare} />

            <Route path='/register'>
              <RegisterForm></RegisterForm>
            </Route>

            <Route path='/edit' component={EditForm} />
            <Route path='/About' component={About} />

            <Route path='/Cart' component={shopCart} />

            <Route path='/MenuAdmin' component={MenuAdmin}/>
            <Route path='/MenuClient' component={MenuClient}/>



            <Route path='/product/:id'>
              <Detalii></Detalii>
            </Route>

            <Route path='/payment'>
              <Payment></Payment>
            </Route>



          </Switch>



        </div>

      </Router >
    </DataProvider >
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;