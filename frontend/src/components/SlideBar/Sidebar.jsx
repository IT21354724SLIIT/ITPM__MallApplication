import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2 style={{ color: 'white' }}>Dashboard</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/AdsTable">Advertisements</Link>
          </li>
          <li>
            <Link to="/Feedbackreview">FeedBacks</Link>
          </li>
          <li>
            <Link to="/Login">Logout</Link>
          </li>
          {/* <li>
            <Link to="/update">Update Ad</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;