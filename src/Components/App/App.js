import './App.css';

import { Container, Card, Row, Col, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import DOMPurify from 'dompurify';
import { marked } from 'marked';

marked.use({
  breaks: true
});

let init = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";




function App() {
  const [editorText, setEditorText] = useState(init);

  useEffect(() => {
    const preview = document.getElementById('preview');
    preview.innerHTML = DOMPurify.sanitize(marked.parse(editorText));
    return () => { }
  }, [editorText]);

  return (
    <Container className="App" fluid >
      <Card className='vh-100'>
        <Card.Header className='text-center display-6'>Markdown Previewer <span className='fs-6'>by <a href='' >BetaKrankri</a></span></Card.Header>
        {/* Content Container */}
        <Card.Body >
          <Row>
            {/* md Editor */}
            <Col xs={6}>
              <Card>
                <Card.Header>md Editor</Card.Header>
                <Form.Control as='textarea'
                  id='editor'
                  value={editorText}
                  style={{
                    minHeight: '70vh'
                  }}
                  onChange={(event) => {
                    setEditorText(event.target.value);
                  }} />
              </Card>
            </Col>
            {/* md Previewer */}
            <Col xs={6}>
              <Card>
                <Card.Header>md Previewer</Card.Header>
                <Card.Body style={{
                  height: '70vh',
                  overflow: 'scroll'
                }}>
                  <div id='preview'>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card >
    </Container >
  );
}





export default App;
