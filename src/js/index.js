var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';

import 'antd/dist/antd.css';

class Index extends React.Component {
    render() {
        return (
            <div>
                <ComponentHeader/>
                <BodyIndex userid={6666} username={'ssss'}/>
                <ComponentFooter/>
            </div>
        );
    }
}

ReactDOM.render(
    <Index/>, document.getElementById('example'))
