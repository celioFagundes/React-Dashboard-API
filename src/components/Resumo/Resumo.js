import React, { Component } from 'react'
import { Container , Row, Col, Card} from 'react-bootstrap';
import {resumoService } from '../../services/resumoService';
export default class Resumo extends Component {

    constructor(props){
        super(props);
        this.state ={
            consultas :{
                consultas_30dias_anteriores:0,
                consultas_30dias_posteriores:0
            },
            faturamento :{
                anterior:{
                    valor: 0,
                    comparativo: 0
                },
                previsao :{
                    valor: 0,
                    comparativo: 0
                }
            }
        }
    }
    componentDidMount(){
        resumoService().then(dados => this.setState(dados));
    }

    render() {
        return (
            <Container fluid>
                <h2 className="mt-2">Resumo</h2>
                <Row >
                    <Col lg={true}>
                        <h3>Consultas</h3>     
                        <Row>
                            <Col>
                                <Card className="mt-2 text-center">
                                    <Card.Header >
                                       Ultimos 30 dias
                                    </Card.Header>
                                    <Card.Body>
                                        { this.state.consultas.consultas_30dias_anteriores}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mt-2 text-center">
                                    <Card.Header>
                                        Proximos 30 dias
                                    </Card.Header>
                                    <Card.Body>
                                        { this.state.consultas.consultas_30dias_posteriores }
                                    </Card.Body>
                                </Card>
                            </Col>                            
                        </Row>
                    </Col>
                    
                    <Col > 
                        <h3>Faturamento</h3>    
                        <Row>
                            <Col>
                                <Card className="mt-2 text-center" >
                                    <Card.Header >
                                        Ultimos 30 dias
                                    </Card.Header>
                                    <Card.Body>
                                        { this.state.faturamento.anterior.valor.toLocaleString("pt-BR", { style : "currency", currency : "BRL"}) }
                                        <span className={ this.state.faturamento.anterior.comparativo > 0 ? "badge mx-1 bg-success rounded" : "badge mx-1 bg-danger rounded"}>
                                           { this.state.faturamento.anterior.comparativo }%
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mt-2 text-center">
                                    <Card.Header>
                                        Proximos 30 dias
                                    </Card.Header>
                                    <Card.Body>
                                        { this.state.faturamento.previsao.valor.toLocaleString("pt-BR", { style : "currency", currency : "BRL"}) }
                                        <span className={ this.state.faturamento.previsao.comparativo > 0  ? "badge mx-1 bg-success rounded" : "badge mx-1 bg-danger rounded"}>
                                            { this.state.faturamento.previsao.comparativo}%
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
