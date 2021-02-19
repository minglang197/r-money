import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../hooks/useTag';
import styled from 'styled-components';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
import {Header} from '../components/Header';
import {Div} from '../components/Div';
import {Button} from '../components/Button';
import {Center} from '../components/Center';

const OlWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  background: #eee;
  margin: 20px 0 0 0;
  height: 60vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; 
  }

  >li {
      background: #fff;
      border-bottom: 2px solid #ccc;

      >a {
        padding: 21px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >span {
          width: 80px;
          display: inline-block;
        }
      }
    }
`
function Tag() {
    const {tags,addTag} = useTags()
    return (
        <Layout>
            <Div>
                <Header>
                    <span>标签</span>
                </Header>
                <OlWrapper>
                    {tags.map(tag=>
                        <li key={tag.id}>
                            <Link to={'/tag/' + tag.id}>
                                <span>{tag.name}</span>
                                <Icon name="right"/>
                            </Link>
                        </li>
                    )}
                </OlWrapper>
                <Center>
                    <Button onClick={addTag}>新增标签</Button>
                </Center>
            </Div>
        </Layout>
    )
}
export default Tag
