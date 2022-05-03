import { Button, Container, Heading } from '@chakra-ui/react';
import {useMoralis} from 'react-moralis';
import Main from './Main'
function App() {
  const {authenticate,isAuthenticated,logout} = useMoralis();
  if(isAuthenticated){
   return(
      <Container>
        <br/>
      <Heading> Welcome User! </Heading>
      <br/>
      <Button onClick={()=>logout()}>Logout</Button>
    </Container>
   );}
  return (
    <Container>
      <br/>
    <Heading >
    Connect Wallet
    </Heading>
    <br/>
    <Button onClick={()=>authenticate()}>Authenticate</Button>
<Main/>
    </Container>
  );
}

export default App;
