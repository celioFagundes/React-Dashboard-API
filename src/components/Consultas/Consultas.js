import React, { Component } from 'react'
import { consultasService } from '../../services/consultasService'
import { Container,Row,Col,Card,Table } from 'react-bootstrap';
export default class Consultas extends Component {

    constructor(props){
        super(props);
        this.state ={
            realizadas: [],
            marcadas :[]
        };
    }

    componentDidMount(){
        consultasService().then(dados => this.setState(dados));
    }
    render() {
        return (
            <Container fluid>
                <h2 className="mt-2">Consultas</h2>
                <Row>
                    <Col>
                        <Card className ='mt-2'>
                            <Card.Header>
                                Realizadas
                            </Card.Header>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        this.state.realizadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    <Col>
                        <Card className ='mt-2'>
                            <Card.Header>
                                Marcadas
                            </Card.Header>
                            <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.marcadas.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.especialidade}</td>
                                                <td>{item.quantidade}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
