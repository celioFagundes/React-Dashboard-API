
import './App.css';
import { Switch, Route } from 'react-router';
import TopHeader from './components/TopHeader/TopHeader'
import Resumo from './components/Resumo/Resumo'
import Consultas from './components/Consultas/Consultas'
import Faturamento from './components/Faturamento/Faturamento'
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
      <div>
        <TopHeader/>
        <Container fluid>
          <Row>
            <Col>
            <Switch>
                    <Route exact path ='/' component = {Resumo}/>
                    <Route path = '/appointments' component = {Consultas}/>
                    <Route path = '/income' component = {Faturamento}/>
              </Switch>
            </Col>
          </Row>
        </Container> 
      </div>
    
  );
}

export default App;
