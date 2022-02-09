  import React from 'react'
  import { Link, Route, Switch } from 'react-router-dom'
  import Header from './header'
  import User from './user'
  import Main from './main'
  import NotFound from './404'

  const Home = () => {
    return (
      <div>
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <Switch>
              <Route path="/dashboard" exact component={() => {
                return <div>
                    <div id="title">Dashboard</div>
                    <Link to="/dashboard/profile/1e2daae8-1f83-4b20-b87b-21119f49f39c">Go To Profile</Link><br />
                    <Link to="/dashboard/main">Go To Main</Link>
                </div>
              }} />
              <Route path="/dashboard/main" exact component={() => <Main />} />
              <Route path="/dashboard/profile/:username" exact component={() => <User />}/>
              <Route component={() => <NotFound />} />
            </Switch>
          </div>
        </div>
      </div>
    )
}

Home.propTypes = {}

export default React.memo(Home)
