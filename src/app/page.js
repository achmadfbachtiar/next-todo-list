'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Row, Col, Text, Card, Spacer, Grid } from '@nextui-org/react';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default function Home() {
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
            <TodoForm />
          </Col>
        </Row>
        <Row gap={1}>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
