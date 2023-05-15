'use client'
import { Grid, Card, Input } from '@nextui-org/react';

const TodoForm = () => {
  return(
    <Grid.Container gap={0} justify="center">
      <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
        <Card css={{ $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <Input placeholder="Type your task here then press Enter ↵" size='xl' clearable status="primary" />
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default TodoForm;