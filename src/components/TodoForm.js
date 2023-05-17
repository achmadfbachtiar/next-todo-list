'use client'
import { useState, useEffect } from 'react';
import { useAddMutation } from '@/api/todoSlice';
import { Grid, Card, Input } from '@nextui-org/react';

const TodoForm = (props) => {
  const [title, setTitle] = useState("")
  const [addData] = useAddMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      userId: 1, 
      title: title, 
      completed: false
    }
    addData(payload)
    setTitle("")
    
    let tempTodoList = [...props.todoList]
    tempTodoList.pop()
    tempTodoList.unshift(payload)

    props.setTodoList(tempTodoList)
  }
  
  return(
    <Grid.Container gap={0} justify="center">
      <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
        <Card css={{ $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <Input css={{width: '100%'}} placeholder="Type your task here then press Enter ↵" size='xl' clearable status="primary" value={title} onChange={(event) => setTitle(event.target.value)} />
            </form>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default TodoForm;