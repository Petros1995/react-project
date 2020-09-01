import React from 'react';
import {Carousel, Container, Card, CardDeck, Button, Row, Col, Media, ListGroup } from 'react-bootstrap';
export default class Blog extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                    <Media className="m-5">
  <img
    width={150}
    height={150}
    className="mr-3"
    src="https://webformyself.com/javascript/img/icon-js.png"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Java Script</h5>
    <p>
    В 1992 году компания Nombas (впоследствии приобретённая Openwave[en]) 
    начала разработку встраиваемого скриптового языка Cmm (Си-минус-минус), 
    который, по замыслу разработчиков, должен был стать достаточно мощным, 
    чтобы заменить макросы, сохраняя при этом схожесть с Си, чтобы разработчикам не составляло 
    труда изучить его[11]. Главным отличием от Си была работа с памятью.
    </p>
  </Media.Body>
</Media>
<Media className="m-5">
  <img
    width={150}
    height={150}
    className="mr-3"
    src="https://webformyself.com/javascript/img/icon-js.png"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Java Script</h5>
    <p>
    В новом языке всё управление памятью осуществлялось автоматически: не было необходимости 
    создавать буфера, объявлять переменные, осуществлять преобразование типов. 
    В остальном языки сильно походили друг
     на друга: в частности, Cmm поддерживал стандартные функции и операторы Си[12]. 
    </p>
  </Media.Body>
</Media>
<Media className="m-5">
  <img
    width={150}
    height={150}
    className="mr-3"
    src="https://webformyself.com/javascript/img/icon-js.png"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Java Script</h5>
    <p>
    Cmm был переименован в ScriptEase, поскольку исходное название звучало слишком негативно, 
    а упоминание в нём Си «отпугивало» людей[11][13]. На основе этого языка был создан проприетарный
     продукт CEnvi.
     В конце ноября 1995 года Nombas разработала версию CEnvi, внедряемую в веб-страницы. 
    </p>
  </Media.Body>
</Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">
                            Categories
                        </h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item active>JavaScript</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                AJAX
                                </Card.Title>
                                <Card.Text>
                                JavaScript используется в AJAX, популярном подходе к построению интерактивных пользовательских 
                                интерфейсов веб-приложений, заключающемся в «фоновом» асинхронном обмене данными браузера с
                                 веб-сервером. В результате, при обновлении данных веб-страница
                                  не перезагружается полностью и интерфейс веб-приложения становится
                                 быстрее, чем это происходит при традиционном подходе (без применения AJAX).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}