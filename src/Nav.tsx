import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.div`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul {
      display: flex;
      >li {
        width: 33.333%;
        padding: 16px;
        text-align: center;
      }
    }
  `;
const Nav = ()=> {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags" replace>tags</Link>
                </li>
                <li>
                    <Link to="/money" replace>money</Link>
                </li>
                <li>
                    <Link to="/statistics" replace>statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav
