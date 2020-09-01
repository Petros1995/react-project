import React from 'react';
import { Tab } from 'react-bootstrap';
import { Navbar, Nav, Row, Container, Form, Col, Card } from 'react-bootstrap';
export default class Aboute extends React.Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column mt-3">
        <Nav.Item>
          <Nav.Link eventKey="first">C++</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">JavaScript</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Php</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Python</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth">Java</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content className="mt-3">
        <Tab.Pane eventKey="first">
<Card >
  <img width={150}
     variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
  <Card.Body>
    <Card.Title>About C++</Card.Title>
    <Card.Text>
    C++ широко используется для
     разработки программного обеспечения, являясь одним из
      самых популярных языков программирования[мнения 1][мнения 2].
       Область его применения включает создание операционных систем, разнообразных прикладных программ
       , драйверов устройств, приложений для встраиваемых систем, высокопроизводительных
        серверов, а также игр. Существует множество реализаций языка C
        ++, как бесплатных, так и коммерческих и для различных платформ. Например,
         на платформе x86 это GCC, Visual C++, Intel C++ Compiler, Embarcadero
          (Borland) C++ Builder и другие. C++ оказал огромное влияние на другие языки программирования, в первую очередь на
           Java и C#.

Синтаксис C++ унаследован от языка C. Одним из принципов
 разработки было сохранение совместимости с C. Тем не менее, C++ не
  является в строгом смысле надмножеством C; множество программ, которые могут одинаково успешно
   транслироваться как компиляторами C, так и компиляторами C++, довольно велико, но 
   не включает все возможные программы на C.
    </Card.Text>
  </Card.Body>
</Card>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Card >
  <img width={150}
     variant="top" src="data:image/png;base64,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" />
  <Card.Body>
    <Card.Title>About Java Script</Card.Title>
    <Card.Text>
    JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык
     программирования. Поддерживает объектно
    -ориентированный, императивный и функциональный стили. Является
     реализацией стандарта ECMAScript (стандарт ECMA-262[7]).


JavaScript обычно используется как встраиваемый язык для программного
 доступа к объектам приложений. Наиболее широкое применение находит в браузерах как
  язык сценариев для придания интерактивности веб-страницам[8].

Основные архитектурные черты: динамическая типизация, слабая
 типизация, автоматическое управление памятью, прототипное программирование,
  функции как объекты первого класса.


На JavaScript оказали влияние многие языки, при разработке была
 цель сделать язык похожим на Java. Языком JavaScript не
  владеет какая-либо компания или организация, что отличает его
   от ряда языков программирования, используемых в веб-разработке[~ 1][9].

Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США[10].
    </Card.Text>
  </Card.Body>
</Card>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Card >
  <img width={250}
     variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" />
  <Card.Body>
    <Card.Title>About Php</Card.Title>
    <Card.Text>
    PHP (/pi:.eɪtʃ.pi:/ англ. PHP
    : Hypertext Preprocessor — «PHP: препроцессор гипертекста»; первоначально PHP/FI (Personal Home
     Page / Form Interpreter), а позже названный Personal Home Page Tools[13]
      — «Инструменты для создания персональных веб-страниц») — скриптовый язык[14] общего назначения,
       интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается 
       подавляющим большинством хостинг-провайдеров и является одним из 
    лидеров среди языков, применяющихся для создания динамических веб-сайтов[15].
    </Card.Text>
  </Card.Body>
</Card>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Card >
  <img width={250}
     variant="top" src="https://cdn2.hexlet.io/derivations/image/fill/850/400/eyJpZCI6IjUwMGU1ZGRmNDlkZjRlZTZmYzVlOTU5MWIzODNiZGExLnBuZyIsInN0b3JhZ2UiOiJzdG9yZSJ9?signature=3971e6e7216b2d319bc597136a78fb47c19e64d7d9a696347073c084519a6fbe" />
  <Card.Body>
    <Card.Title>About Python</Card.Title>
    <Card.Text>
    Python[комм 1] (МФА: [ˈpʌɪθ(ə)n
    ]; в русском языке распространено название пито́н[10]) —
     высокоуровневый язык программирования общего назначения, ориентированный на повышение производительности разработчика
      и читаемости кода. Синтаксис ядра Python минималистичен. В то
       же время стандартная библиотека включает большой набор полезных функций.

Python поддерживает структурное, обобщенное, объектно
-ориентированное, функциональное и аспектно-ориентированное программирование. Основные
 архитектурные черты — динамическая типизация,
  автоматическое управление памятью, полная интроспекция,
   механизм обработки исключений, поддержка многопоточных вычислений, высокоуровневые структуры данных. 
Поддерживается разбиение программ на модули, которые, в свою очередь, могут объединяться в пакеты.
    </Card.Text>
  </Card.Body>
</Card>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
        <Card >
  <img width={150}
     variant="top" src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/1200px-Java_logo.svg.png" />
  <Card.Body>
    <Card.Title>About Java</Card.Title>
    <Card.Text>
    Java[прим. 1] — строго типизированный объектно-ориентированный язык программирования общего назначения,
     разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle).
      Разработка ведётся 
    сообществом, организованным через Java Community Process, язык и
     основные реализующие его технологии распространяются по лицензии GPL. Права на торговую
      марку принадлежат корпорации Oracle.

Приложения Java обычно транслируются в специальный байт
-код, поэтому они могут работать на любой компьютерной архитектуре
, для которой существует реализация виртуальной Java-машины. Дата официального выпуска — 23
 мая 1995 года. На 2019 год Java — один из самых популярных языков программирования[2][3].
    </Card.Text>
  </Card.Body>
</Card>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            </Container>
        )
    }
}