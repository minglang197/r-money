import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  >a {
    display: flex;
    padding: 30px 0 0 0;
    border-bottom: 2px solid #000;
  }
`

function NoMatch() {
    return (
        <Header>
            <h3>搞的什么鬼，页面根本不存在</h3>
            <a href="/">点我返回首页</a>
        </Header>
    )
}
export default NoMatch
