import React, { Component } from 'react'
import {faturamentoService } from '../../services/faturamentoService';
import { Container, Row, Col, Card , Table} from 'react-bootstrap';
export default class Faturamento extends Component {
    constructor(props){
        super(props);
        this.state = {
            detalhamento : []
        };
    }
    componentDidMount(){
        faturamentoService().then(dados => this.setState(dados));
    }
    render() {
        return (
            <Container fluid>
                <h2 className="mt-2">Faturamento</h2>

                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                Total por forma de pagamento
                            </Card.Header>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th className="text-right">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        this.state.detalhamento.map((item,indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.descricao}</td>
                                                    <td className="text-right">
                                                        { item.valor.toLocaleString("pt-BR", { style : "currency", currency : "BRL"}) }
                                                    </td>
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
