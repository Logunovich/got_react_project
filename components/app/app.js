import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';
import ErrorMessage from '../errorMessage';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showRandomChar: true
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this)
    }

    toggleRandomChar() {
        this.setState((prev) => {
            return {
                showRandomChar: !prev.showRandomChar
        }
    })
}

    render () {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                            className="random-btn"
                            onClick={this.toggleRandomChar}>
                                Toggle random character!
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};
