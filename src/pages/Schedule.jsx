import React from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button'

export const Schedule = () => {
  return (
    <Container>
      <h1>Schedule Page</h1>
      <Button>Go To Notifications page</Button>
    </Container>
  )
}

const Container = styled("div")`
  width: 96%;
  height: 94%;
  margin: 1.5rem;
  background-color: white;
  & h1{
    font-weight: 600;
    padding: 1.5rem 1rem;
  }
  & button{
    margin-top: 3rem;
    margin-left: 1rem;
  }
`