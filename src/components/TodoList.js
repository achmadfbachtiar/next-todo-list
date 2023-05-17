'use client'
import { useState, useEffect } from "react"
import { Grid, Card, Input, Text, Row, Col, Checkbox, Container } from '@nextui-org/react';
import { useGetListQuery } from "@/api/todoSlice";
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    data, 
    error, 
    isLoading
  } = useGetListQuery({start: props.queryStart, limit: 10})
  
  useEffect(() => {
    props.setTodoList(data)
  }, [data])

  return(
    <Grid.Container gap={0} justify="center">
      <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
        <Row>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>
              {props.todoList ? 
                props.todoList.map((item, index) => {
                  return(
                    <TodoItem data={item} isEdit={false} key={index} />
                  )  
                })
                :
                <Container align="center" justify="center">
                  <Text>
                    No Data
                  </Text>
                </Container>
              }
            </Card.Body>
          </Card>
        </Row>
      </Grid>
    </Grid.Container>
  )
}

export async function getStaticProps() {
  const {
    data, 
    error, 
    isLoading
  } = useGetListQuery({ start: props.queryStart, limit: 10 })
 
  return {
    props: {
      data
    },
    revalidate: 10,
  };
}

export default TodoList;