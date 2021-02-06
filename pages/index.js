import styled from 'styled-components';
import db from '../db.json';

const Title = styled.h4`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div style={{backgroundImage: db.bg}}>
      lorem ipsum
    </div>



  )
}
