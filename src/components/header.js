import React , {Component} from 'react';
import DropMenu from './image/open-menu.svg'
import './style/header.css';
class Header extends Component {
  render() {
    return (
        <div className="Header">
            <img src={DropMenu} alt="Drop menu"/>
            <h1>D A I L I A S T</h1>
        </div>
    );
  }
}
export default Header;
