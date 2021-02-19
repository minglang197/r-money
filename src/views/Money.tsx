import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagSection} from '../Money/Tagsection';
import {TypeSection} from '../Money/Typesection';
import {NoteSection} from '../Money/Notsection';
import {PadSection} from '../Money/Padsection';
import {useRecords} from '../hooks/useRecords';
const MaxDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
`
type Types = '-' | '+'
const defaultData = {
    tagIds: [1] as number[],
    note: '',
    category: '-' as Types,
    amount: 0
}
function Money() {
    const [selected,setSelected] = useState(defaultData)
    const onChange = (obj: Partial<typeof selected>)=> {
        setSelected({...selected, ...obj})
    }
    const {addRecord} = useRecords();

    const submit = ()=> {
        if(addRecord(selected)) {
            setSelected(defaultData)
        }
    };
    return (
        <Layout>
            <MaxDiv>
                <PadSection value={selected.amount}
                    onChange={amount=>onChange({ amount})}
                            onOk = {submit}
                />
                <NoteSection value={selected.note}
                    onChange={note=>onChange({note})}
                />
                <TagSection value={selected.tagIds}
                    onChange={tagIds=> onChange({tagIds})}
                />
                <TypeSection value = {selected.category}
                    onChange={(category)=>onChange({category})}
                />
            </MaxDiv>
        </Layout>
    )
}
export default Money