'use client'
import { useState, useEffect } from "react"
import { Grid, Card, Input, Text, Row, Col, Checkbox } from '@nextui-org/react';
import { useGetListQuery } from "@/api/todoSlice";
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([])

  const {
    data, 
    error, 
    isLoading
  } = useGetListQuery({start: 0, limit: 10})
  
  useEffect(() => {
    setTodoList(data)
  }, [data])

  return(
    <Grid.Container gap={0} justify="center">
      <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
        <Row>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>
              {todoList.map((item, index) => {
                return(
                  <TodoItem data={item} />
                )  
              })}
            </Card.Body>
          </Card>
        </Row>
      </Grid>
    </Grid.Container>
  )
}

export default TodoList;