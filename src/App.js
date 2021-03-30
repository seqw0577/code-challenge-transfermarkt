import React from 'react';
import {Layout} from "antd";
import IndexRouter from './router';
import "./static/css/index.css";
import Container from './component/container';

function App() {
  return <Layout className="pageLayout">
      <Container style={{ paddingTop: '15vh' }}>
          <IndexRouter/>
      </Container>
  </Layout>;
}

export default App;
