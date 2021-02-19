import React, {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
    tagIds : number[]
    note: string
    category: '+'|'-'
    amount: number
    createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>



const useRecords = ()=> {
    const [records,setRecords] = useState<RecordItem[]>([]);
    useEffect(()=> {
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[]);
    useUpdate(()=> {
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records]);
    const addRecord = (newRecord: newRecordItem)=> {
        if(newRecord.amount<= 0) {
            alert('请输入金额')
            return false
        }
        if(newRecord.tagIds.length<1) {
            alert('请选择一个标签');
            return;
        }
        const record = {...newRecord,createdAt: (new Date().toISOString())};
        setRecords([...records,record]);
        return true
    };
    return {records,addRecord};
}
export {useRecords}
{/*<Div>*/}
{/*    {records.map(r => {*/}
{/*        return <li key={r.createdAt}>*/}
{/*            <span>{r.createdAt.slice(0,10)}</span>*/}
{/*            <Link to={'/tag'}>*/}
{/*                <span>{r.amount}</span>*/}
{/*                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}*/}
{/*            </Link>*/}
{/*        </li>*/}
{/*    })}*/}
{/*</Div>*/}

// const Div = styled.div`
//   padding-top:20px;
//   display: flex;
//   flex-grow: 1;
//   overflow: auto;
//   flex-direction: column;
//   >li {
//     display: flex;
//     font-size: 18px;
//     flex-direction: column;
//     >span {
//       color: #aaa;
//       padding: 6px 0 6px 4px;
//       font-size: 14px;
//     }
//     >a {
//       display: flex;
//       justify-content: space-between;
//       background-color: #fff;
//       padding: 16px;
//
//     }
//   }
// `


// <div>
//     {records.map(r => {
//         return <Item>
//             <div className="tags oneLine">
//                 {r.tagIds
//                     .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
//                     .reduce((result, span, index, array) =>
//                         result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
//                 }
//             </div>
//             <div className="amount">
//                 ￥{r.amount}
//             </div>
//         </Item>;
//     })}
// </div>

