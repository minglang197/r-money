import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
    >.number {
      font-size: 24px;
      line-height: 48px;
      text-align: right;
      padding: 0 16px;
      box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                  inset 0 5px 5px -5px rgba(0,0,0,0.25);

    }
    >.numberPad {
      >button {
        float: left;
        width: 25%;
        height: 60px;
        &.zero {
          width: 75%;
        }
        &.ok {
          float: right;
          height: 120px;

        }
        &:nth-child(1) {
          background: #f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5){
          background: #e0e0e0;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9){
          background: #d3d3d3;
        }
        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10){
          background: #c1c1c1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13){
          background: #b8b8b8;
        }
        &:nth-child(12) {
          background: #9a9a9a;
        }
        &:nth-child(14) {
          background: #a9a9a9;
        }
      }
    }
`
type Props = {
    value: number,
    onChange: (value: number) => void
    onOk?: ()=>void
}
const PadSection: React.FC<Props> = (props)=> {
    const output = props.value.toString()
    const setOutput = (output: string)=> {
        let value
        if(output.length>6) {
            value = parseFloat( output.slice(0,6))
        }else if(output.length === 0) {
            value = 0
        }else {
            value = parseFloat(output)
        }
        props.onChange(value)
    };
    const onclickButton = (e: React.MouseEvent)=> {
        const text = (e.target as HTMLButtonElement).textContent
        if(text === null){return;}
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(output === '0') {
                    setOutput(text)
                }else {
                    setOutput(output+text)
                }
                break;
            case '删除':
               if(output.length === 1) {
                   setOutput('0')
               }else {
                   setOutput(output.slice(0,-1))
               }
                break;
            case '清空':
                setOutput('0')
                break;
        }
        if(text === 'ok') {
            if(props.onOk) {props.onOk()}
            return;
        }
    }
    return(
        <Wrapper>
            <div className="number">{output}</div>
            <div className="numberPad" onClick={onclickButton}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
            </div>
        </Wrapper>
    )
}
export {PadSection}
