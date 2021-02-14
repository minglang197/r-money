import styled from 'styled-components';
import React, {useState} from 'react';

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
        margin: 0 20px 10px 0;
        border-radius: 16px;
        &.selected {
          background: rgb(251 188 5);
        }
      }
    }
`
type Props = {
    value: string[]
    onChange: (selected: string[])=>void
}
const TagSection: React.FC<Props> = (props)=> {
    const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
    const selectedTag = props.value
    const onToggle = (tag: string)=> {
        const index = selectedTag.indexOf(tag)
        if(index>= 0) {
            props.onChange(selectedTag.filter(t => t !== tag))
        } else {
            props.onChange([...selectedTag,tag])
        }
    }
    const getClass = (tag: string)=> selectedTag.indexOf(tag)>= 0 ? 'selected': ''

    return(
        <Wrapper>
            <ol>
                {tags.map(tag=>
                    <li key={tag} onClick={()=>onToggle(tag)} className={getClass(tag)}>
                        {tag}
                    </li>
                )}
            </ol>
        </Wrapper>
    )
}

export {TagSection}
