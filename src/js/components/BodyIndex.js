import React from 'react';
import ReactDOM from 'react-dom';
export default class BodyIndex extends React.Component {
    render() {

        var userName = 'Parry';
        var isTrue = true;
        var html = '<a>BBBBB</a>'

        return (
            <div>
                <h1>这里是主体！</h1>
                <p>{userName== '' ? '用户还没有登录' : '用户名' + userName}</p>
                <p><input type='button' value = '默认按钮' disabled='{isTrue}'/></p>
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html : html}} />
            </div>
        )
    }
}
