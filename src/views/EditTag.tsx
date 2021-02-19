import React from 'react';
import {Link, useHistory, useParams } from 'react-router-dom';
import {useTags} from '../hooks/useTag';
import Icon from '../Icon';
import styled from 'styled-components';
import {Div} from '../components/Div';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
const Topbar = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: flex-end;
  background: rgb(251 188 5 );
  align-items: center;
  padding: 24px 10px 24px 50px;
  > span {
    flex-grow: 20;
    display: flex;
    justify-content: center;
  }
  >a {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
`
const Label = styled.label`
  display: flex;
  margin-top: 20px;
  background-color: #fff;
  >span {
    font-size: 18px;
    padding: 20px;
  }
  >input {
    font-size: 14px;
    flex-grow: 1;
  }
`
type Params = {
    id: string
}
const EditTag: React.FC = ()=> {
    const history = useHistory();
    const {tags,findTag,updateTag,delectTag} = useTags()
    let {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    const onDelectTag = ()=> {
        if(tags.length < 5) {
            alert('默认标签不能删除')
            return ;
        }
        if(window.confirm("确定要删除嘛？")) {
            delectTag(tag.id);
            history.goBack()
        }else {
            return;
        }
    }
    if(tag) {
        return (
            <Div className="height">
                <Topbar>
                    <span>编辑标签</span>
                    <Link to={'/tag'}>
                        <Icon name="right"/>
                    </Link>
                </Topbar>
                <Label>
                    <span>标签名</span>
                    <input defaultValue={tag.name} maxLength={4}
                           placeholder="编辑标签，标签名最多四个字"
                           onChange={(e) => {
                               updateTag(tag.id, {name: e.target.value})
                           }}
                    />
                </Label>
                <Center>
                    <Button className="button" onClick={onDelectTag}>删除标签</Button>
                </Center>
            </Div>
        )
    }else  {
        return (
            <div>不存在</div>
        )
    }
}
export default EditTag