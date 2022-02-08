import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <div id="title">Main</div>
        <Link to="/dashboard/profile/1e2daae8-1f83-4b20-b87b-21119f49f39c">Go To Profile</Link><br />
        <Link to="/dashboard/">Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
