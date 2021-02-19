import {useEffect, useState} from 'react';
import {createId} from '../lib/CreateId';
import {useUpdate} from './useUpdate';
const useTags = ()=> {
    const [tags,setTags] = useState<{id: number;name:string}[]>([])
    useEffect(()=> {
        let localTag = JSON.parse(window.localStorage.getItem('tags')|| '[]')
        if(localTag.length === 0) {
            localTag = [
                {id: createId(),name: '衣'},
                {id: createId(),name: '食'},
                {id: createId(),name: '住'},
                {id: createId(),name: '行'}
            ]
        }
    setTags(localTag)
    },[])
    useUpdate(()=> {
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
    const findTag = (id: number) =>tags.filter(tag=>tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1
        for(let i = 0;i<tags.length;i++) {
            if(tags[i].id === id) {
                result = i
                break;
            }
        }
        return result
    }
    const updateTag = (id: number,{name}: {name: string})=> {
        setTags(tags.map(tag=> tag.id === id? {id,name: name}: tag))
    }
    const delectTag = (id: number)=> {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const addTag =()=> {
        let tagName =window.prompt('请输入新的标签名,最多输入四个字')
        if(tagName=== null) {return;}
        if(tagName.length=== 0) {return window.alert('标签名不能为空')}
        if(tagName.length>4) {
            tagName =  tagName.slice(0,4)
                setTags([...tags, {id: createId(), name: tagName}])
        }else {
            setTags([...tags,{id: createId(),name: tagName}])
        }
    }
    const getName = (id: number)=> {
        const tag = tags.filter(t=> t.id === id)[0];
        return tag ? tag.name : '';
    };
    return {tags, setTags, findTag, updateTag, findTagIndex, delectTag, addTag,getName}
}
export {useTags}
