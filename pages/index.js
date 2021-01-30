import styled from 'styled-components'

const Title = styled.h4`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>projeto</Title>
}
