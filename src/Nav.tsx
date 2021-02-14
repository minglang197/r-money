import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from 'Icon';

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
          &.selected{
            color: rgb(251 188 5);
            .icon {
              fill: rgb(251 188 5)
            }
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
                    <NavLink to="/tag" replace className="tabbar" activeClassName="selected">
                        <Icon name="tag"/>
                        <p>标签</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" replace className="tabbar" activeClassName="selected">
                        <Icon name="money"/>
                        <p>记账</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" replace className="tabbar" activeClassName="selected">
                        <Icon name="statistics"/>
                        <p>统计</p>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav
