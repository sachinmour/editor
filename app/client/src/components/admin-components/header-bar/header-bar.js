import React, { Component } from 'react';

import HeaderMessages from './header-messages/header-messages';
import HeaderNotifications from './header-notifications/header-notifications';
import HeaderTasks from './header-tasks/header-tasks';

export default class HeaderBar extends Component {

  pushMenu() {
    var body = document.body;
    if (body.clientWidth > 768) {
      if (body.className.indexOf('sidebar-collapse') === -1) {
        body.className += ' sidebar-collapse';
      } else {
        body.className = body.className.replace(' sidebar-collapse', '');
      }
    } else {

      if (body.className.indexOf('sidebar-open') === -1) {
        body.className += ' sidebar-open';
      } else {
        body.className = body.className.replace(' sidebar-open', '');
      }
    }
  }

  componentDidMount() {
    this.body = document.body
  }

  render() {
    return (
      <header className='main-header'>
        { /* Logo */ }
        <a href='index2.html' className='logo'>
          { /* mini logo for sidebar mini 50x50 pixels */ } <span className='logo-mini'><b>N</b>YC</span>
          { /* logo for regular state and mobile devices */ } <span className='logo-lg'><b>NYC</b>Outward Bound</span></a>
        { /* Header Navbar: style can be found in header.less */ }
        <nav className='navbar navbar-static-top' role='navigation'>
          { /* Sidebar toggle button*/ }
          <a href='#'
            className='sidebar-toggle'
            data-toggle='offcanvas'
            role='button'
            onClick={ () => this.pushMenu }><span className='sr-only'>Toggle navigation</span></a>
          <div className='navbar-custom-menu'>
            <ul className='nav navbar-nav'>
              { /* Messages: style can be found in dropdown.less*/ }
              <HeaderMessages />
              { /* Notifications: style can be found in dropdown.less */ }
              <HeaderNotifications />
              { /* Tasks: style can be found in dropdown.less */ }
              <HeaderTasks />
              { /* User Account: style can be found in dropdown.less */ }
              <li className='dropdown user user-menu'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown'><img src='/molly.PNG' className='user-image' alt='User Image' /> <span className='hidden-xs'>Molly Dunbar</span></a>
                <ul className='dropdown-menu'>
                  { /* User image */ }
                  <li className='user-header'>
                    <img src='/molly.PNG' className='img-circle' alt='User Image' />
                    <p>
                      Molly Dunbar - The Boss
                      <small>Member since Forever</small>
                    </p>
                  </li>
                  { /* Menu Body */ }
                  <li className='user-body'>
                    <div className='col-xs-4 text-center'>
                      <a href='#'>Followers</a>
                    </div>
                    <div className='col-xs-4 text-center'>
                      <a href='#'>Sales</a>
                    </div>
                    <div className='col-xs-4 text-center'>
                      <a href='#'>Friends</a>
                    </div>
                  </li>
                  { /* Menu Footer */ }
                  <li className='user-footer'>
                    <div className='pull-left'>
                      <a href='#' className='btn btn-default btn-flat'>Profile</a>
                    </div>
                    <div className='pull-right'>
                      <a href='#' className='btn btn-default btn-flat'>Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              { /* ontrol Sidebar Toggle Button */ }
              <li>
                <a href='#' data-toggle='control-sidebar'><i className='fa fa-gears'></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      );
  }
}