import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from 'Icon';

// require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/statistics.svg')
//
const NavWrapper = styled.div`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul {
      display: flex;
      >li {
        width: 33.333%;
        text-align: center;
        .tabbar {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          >.icon{
            height: 24px;
            width: 24px;
          }

        }
      }
    }
  `;
const Nav = ()=> {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tag" replace className="tabbar">
                        <Icon name="tag"/>
                        <p>标签</p>
                    </Link>
                </li>
                <li>
                    <Link to="/money" replace className="tabbar">
                        <Icon name="money"/>
                        <p>记账</p>
                    </Link>
                </li>
                <li>
                    <Link to="/statistics" replace className="tabbar">
                        <Icon name="statistics"/>
                        <p>统计</p>
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav
