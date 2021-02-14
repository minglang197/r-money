import Layout from '../Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagSection} from '../Money/Tagsection';
import {TypeSection} from '../Money/Typesection';
import {NoteSection} from '../Money/Notsection';
import {PadSection} from '../Money/Padsection';

const MaxDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
`
type Types = '-' | '+'
function Money() {
    const [selected,setSelected] = useState({
        tag: [] as string[],
        note: '',
        category: '-' as Types,
        amount: 0
        })
    return (
        <Layout>
            <MaxDiv>
                {selected.tag.join(',')}
                <hr/>
                {selected.note}
                {selected.category}
                {selected.amount}
                <PadSection value={selected.amount}
                    onChange={(amount)=>{
                        setSelected({
                            ...selected,
                            amount: amount
                        })
                    }}
                />
                <NoteSection value={selected.note}
                    onChange={(note)=>{setSelected({
                        ...selected,
                        note: note
                    })}}
                />
                <TagSection value={selected.tag}
                    onChange={(tag)=> setSelected({
                        ...selected,
                        tag: tag
                    })}
                />
                <TypeSection value = {selected.category}
                    onChange={(category)=>setSelected({
                        ...selected,
                            category: category
                    })}
                />
            </MaxDiv>
        </Layout>
    )
}
export default Money