import React from 'react';
import ReactDOM from 'react-dom';

import {Input} from 'antd';
const Search = Input.Search;
import {Button} from 'antd';
import {Rate} from 'antd';
import {DatePicker} from 'antd';
const {MonthPicker, RangePicker} = DatePicker;

export default class BodyIndex extends React.Component {
    // render() {
    //
    //     var userName = 'Parry';
    //     var isTrue = true;
    //     var html = '<a>BBBBB</a>'
    //
    //     return (
    //         <div>
    //             <h1>这里是主体！</h1>
    //             <p>{userName== '' ? '用户还没有登录' : '用户名' + userName}</p>
    //             <p><input type='button' value = '默认按钮' disabled='{isTrue}'/></p>
    //             <p>{html}</p>
    //             <p dangerouslySetInnerHTML={{__html : html}} />
    //         </div>
    //     )
    // }

    constructor() {
        super();
        this.state = {
            user: "ssss",
            age: "26"
        };
    }

    render() {
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        setTimeout(() => {
            this.setState({age: "一万岁"})
        }, 2000);
        return (
            <div>
                <h2>页面的主体</h2>
                <p>{this.state.user} {this.state.age}
                    {this.props.userid}{this.props.username}</p>
                <Search placeholder="input search text" style={{
                    width: 200
                }} onSearch={value => console.log(value)}/><br/>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button><br/>
                <Rate allowHalf defaultValue={2.5}/><br/>
                <DatePicker onChange={onChange}/>
                <br/>
                <MonthPicker onChange={onChange} placeholder="Select month"/>
                <br/>
                <RangePicker onChange={onChange}/>
            </div>
        )
    }
}
