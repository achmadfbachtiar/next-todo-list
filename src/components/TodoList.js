'use client'
import { Grid, Card, Input, Text, Row, Col, Checkbox } from '@nextui-org/react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return(
    <Grid.Container gap={0} justify="center">
      <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
        <Row>
          <Card css={{ $$cardColor: 'white' }}>
            <Card.Body>
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
            </Card.Body>
          </Card>
        </Row>
      </Grid>
    </Grid.Container>
  )
}

export default TodoList;