'use client'
import { Grid, Card, Input, Text, Row, Checkbox } from '@nextui-org/react';

const TodoItem = (props) => {
  return(
    <Card css={{ $$cardColor: 'white', mb: 15, cursor: 'pointer' }}>
      <Card.Body>
        <Row>
          <Grid xl={1}>
            <Checkbox isSelected={props.data.completed} size="lg" color="gradient" isRounded></Checkbox>
          </Grid>
          <Grid xl={10}>
            <Text>
              {props.data.title}
            </Text>
          </Grid>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TodoItem;