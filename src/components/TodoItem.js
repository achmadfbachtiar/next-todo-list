'use client'
import { useState, useEffect } from 'react';
import { useUpdateMutation } from '@/api/todoSlice';
import { Grid, Card, Input, Text, Row, Checkbox } from '@nextui-org/react';

const TodoItem = (props) => {
  const [data, setData] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [updateData] = useUpdateMutation()
  
  const toggleEdit = () => {
    setData({
      ...props.data,
      isEdit: true
    })
  }
  
  const handleSelectCheckbox = (event) => {
    setData({
      ...data,
      completed: event
    })

    const payload = {
      ...data,
      completed: event
    }

    updateData({id: data.id, payload: payload})
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    setData({
      ...data,
      title: title,
      isEdit: false
    })
    const payload = {
      ...data,
      title: title
    }

    updateData({id: data.id, payload: payload})
    setTitle("")
  }

  useEffect(() => {
    setData({
      ...props.data, 
      isEdit: false
    })
    setTitle(props.data.title)
  }, [props.data])

  return(
    <Card css={{ $$cardColor: 'white', mb: 15, cursor: 'pointer' }}>
      <Card.Body>
        {!data.completed && data.isEdit ?
          <Row>
            <Grid xl={12} lg={12}>
              <form onSubmit={handleUpdate} style={{ width: '100%' }}>
                <Input css={{width: '100%'}} size='xl' value={title} onChange={(event) => setTitle(event.target.value)} />
              </form>
            </Grid>
          </Row>
        :
          <Row>
            <Grid xl={1} lg={1}>
              <Checkbox isSelected={data.completed} size="lg" color="gradient" isRounded onChange={(event) => handleSelectCheckbox(event)}></Checkbox>
            </Grid>
            <Grid xl={11} lg={11} onClick={toggleEdit}>
              <Text css={{ color: data.completed ? '$accents5' : '$accents10', textDecoration: data.completed ? 'line-through' : 'none' }}>
                {data.title}
              </Text>
            </Grid>
          </Row>
        }
      </Card.Body>
    </Card>
  )
}

export default TodoItem;