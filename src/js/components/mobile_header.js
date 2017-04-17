import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        };
    }
    render() {
        return (
            <div id="mobileheader">
              <header>
                <img src="./src/img/logo.png" alt="logo"></img>
                <span>ReactNews</span>
              </header>
            </div>
        );
    }
}
