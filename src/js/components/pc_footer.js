import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        };
    }
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                      fffffffffffffffffffffffffffffffffffff
                    </Col>

                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}
