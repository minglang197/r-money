import Layout from '../components/Layout';
import React, {useState} from 'react';
import {Div} from '../components/Div';
import {useTags} from '../hooks/useTag';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {TypeSection} from '../Money/Typesection';
import day from 'dayjs'
import styled from 'styled-components';

const Biv = styled.div`
      display: flex;
      flex-direction: column;
      >span {
        padding: 6px 0 6px 4px;
        color: #aaa;
      }
      > div{
        display: flex;
        background-color: #fff;
        padding: 14px 16px;
        font-size: 18px;
        margin-bottom: 3px;
        justify-content: space-between;
      }
`

function Statistics() {
    const {records} = useRecords();
    const {getName} = useTags();
    const [category,setCategory] = useState<'-'|'+'>('-');
    const selectedRecords = records.filter(r => r. category === category);
    const hash: { [k: string] : RecordItem[] } = {};
    selectedRecords.map(r=> {
        const key = day(r.createdAt).format('YYYY-MM-DD');
        if(!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });
    return (
        <Layout>
            <Div>
                <TypeSection value = {category}
                             onChange={(type)=>setCategory(type)}
                />
                {array.map(([date, records]) => <Biv>
                    <span key={date}>{date}</span>
                        {records.map(r=> {
                            return <div >
                                        {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                                        <span>{r.category}{r.tagIds}{r.amount}</span>
                            </div>;
                        })}
                </Biv>)}
            </Div>
        </Layout>
    )
}
export default Statistics