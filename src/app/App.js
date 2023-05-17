'use client';
import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Row, Col, Text, Card, Spacer, Grid, Pagination } from '@nextui-org/react';
import { useGetListQuery } from "@/api/todoSlice";
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default function App(props) {
  const [queryStart, setQueryStart] = useState(0)
  const [todoList, setTodoList] = useState(null)

  const setPage = (event) => {
    setQueryStart(event)
  }

  return (
    <main className={styles.main}>
      <Container gap={0}>
        <Row gap={1}>
          <Col>
            <Grid.Container gap={0} justify="center">
              <Grid xl={6} lg={6} md={8} sm={12} xs={12} justify="center">
                <Text h1 color="white" css={{ mb: 15, textAlign: 'center' }}>
                  YOUR TODO
                </Text>
              </Grid>
            </Grid.Container>
          </Col>
        </Row>
        <Row gap={1} css={{ mb: 30 }}>
          <Col>
            <TodoForm todoList={todoList} setTodoList={setTodoList} />
          </Col>
        </Row>
        <Row gap={1}>
          <Col>
            <TodoList queryStart={queryStart} todoList={todoList} setTodoList={setTodoList} />
          </Col>
        </Row>
        <Row gap={1} align="center" css={{ mt: 30 }}>
          <Grid.Container gap={0} justify="center">
            <Grid xl={12} justify="center">
              <Pagination rounded total={20} initialPage={1} onChange={setPage} />
            </Grid>
          </Grid.Container>
        </Row>
      </Container>
    </main>
  )
}

export async function getServerSideProps() {
  const {
    data, 
    error, 
    isLoading
  } = useGetListQuery({ start: props.queryStart, limit: 10 })

  return {
      props : {data}
  }
}
