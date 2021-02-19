import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
    display:flex;
    background: #eee;
    >label {
      display: flex;
      padding: 15px 10px;
      justify-content: center;
      align-items: center;
      width: 100%;
      >input {
        display: flex;
        flex-grow: 1;
        padding: 1px 0 0  20px;
      }
    }
`
type Props = {
    value: string
    onChange: (value: string) => void
}
const NoteSection: React.FC<Props> =(props)=> {
    const note = props.value
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur=()=> {
        if(refInput.current !== null) {
            props.onChange(refInput.current.value)
        }
    }
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input placeholder="最多输入八个字"
                       maxLength={8} defaultValue={note}
                       ref = {refInput} onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}

export {NoteSection}