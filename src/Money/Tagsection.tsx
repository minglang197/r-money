import styled from 'styled-components';
import React from 'react';
import {useTags} from '../hooks/useTag';

const Wrapper = styled.section`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: auto;
    >ol {
      display: flex;
      flex-wrap: wrap;
      padding: 14px 10px 0 10px;
      >li {
        background: #ccc;
        padding: 6px 20px;
        margin: 0 12px 10px 0;
        border-radius: 16px;
        &.selected {
          background: rgb(251 188 5);
        }
      }
    }
`
type Props = {
    value: number[]
    onChange: (selected: number[])=>void
}
const TagSection: React.FC<Props> = (props)=> {
    const {tags} = useTags()
    const selectedTagIds = props.value
    const onToggle = (tagId: number)=> {
            const index = selectedTagIds.indexOf(tagId)
            if(index>= 0) {
                props.onChange(selectedTagIds.filter(t => t !== tagId))
            } else {
                props.onChange([tagId])
            }
    }
    const getClass = (tagId: number)=>
        selectedTagIds.indexOf(tagId)>= 0 ? 'selected': ''

    return(
        <Wrapper>
            <ol>
                {tags.map(tag=>
                    <li key={tag.id} onClick={()=>onToggle(tag.id)} className={getClass(tag.id)}>
                        {tag.name}
                    </li>
                )}
            </ol>
        </Wrapper>
    )
}

export {TagSection}
