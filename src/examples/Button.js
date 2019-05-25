import styled from 'styled-components'

/*
EXAMPLE use of styled components
return (
      <Layout>
        hello from tours page
        <div>
          <Button>first button</Button>
          <Button color="yellow" big>
            second button
          </Button>
        </div>
      </Layout>
    )

*/

const color = `blue`
const Button = styled.button`
  /* color: red; */
  color: ${props => props.color || 'red'};
  background: ${color};
  font-size: ${props => (props.big ? '3rem' : '1rem')};
  padding: 1rem;
  margin: 1rem;
`

export default Button
