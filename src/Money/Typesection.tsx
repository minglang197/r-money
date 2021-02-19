import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
    display: flex;
    >ol {
      display: flex;
      width: 100%;
      >li {
        padding: 16px 0;
        width: 50%;
        text-align: center;
        background-color: #ccc;
        font-size: 20px;
        &.selected {
          background: rgb(251 188 5);
        }
      }
    }
`
type Props = {
    value: '-' | '+'
    onChange: (value: '-'|'+') => void
}
const TypeSection: React.FC<Props> = (props)=> {
    const category = props.value
    return(
        <Wrapper>
            <ol>
                <li className={category === '-'? 'selected': ''}
                    onClick={()=> {props.onChange('-')}}
                >支出
                </li>
                <li className={category === '+'? 'selected': ''}
                    onClick={()=> {props.onChange('+')}}
                >收入
                </li>
            </ol>

        </Wrapper>
    )
}
export {TypeSection}