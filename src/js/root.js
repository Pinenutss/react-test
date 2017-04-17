import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MeidiaQuery from 'react-responsive';

export default class Root extends React.Component {
    render() {
        return (
            <div>
              <MeidiaQuery query='(min-device-width: 1224px)'>
                <PCIndex></PCIndex>
              </MeidiaQuery>
              <MeidiaQuery query='(max-device-width: 1224px)'>
                <MobileIndex></MobileIndex>
              </MeidiaQuery>
            </div>
        );
    }
}

ReactDOM.render(
    <Root/>, document.getElementById('mainContainer'))
