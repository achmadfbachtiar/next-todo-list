'use client'
import { Grid, Card, Input, Text, Row, Checkbox } from '@nextui-org/react';

const TodoItem = () => {
  return(
    <Card css={{ $$cardColor: 'white', mb: 15, cursor: 'pointer' }}>
      <Card.Body>
        <Row>
          <Grid xl={1}>
            <Checkbox defaultSelected size="lg" color="gradient" isRounded></Checkbox>
          </Grid>
          <Grid xl={10}>
            <Text> alkjlkjslkajslaksll la ksjdlak sdlkajsldkjalskd jlk l laksjdl askjd</Text>
          </Grid>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TodoItem;