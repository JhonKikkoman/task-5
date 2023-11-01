import React from 'react';
import './App.css';
import { CardBody } from './components/Card-body/CardBoby';
import { CardImage } from './components/Card-image/CardImage';
import { Card } from './components/Card/Card';

const imgUrl = {
  url: 'https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg'
}

const propObj1 = {
  title: 'Card title',
  text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  btnValue: 'Go somewhere'
}

const propObj2 = {
  title: 'Special title treatment',
  text: 'With supporting text below as a natural lead-in to additional content.',
  btnValue: 'Go somewhere'
}

function App() {
  return (
    <>
      <Card>
        <CardImage propImg={imgUrl}/>
        <CardBody propObj={propObj1}/>
      </Card>
      <Card>
        <CardBody propObj={propObj2}/>
      </Card>
    </>
  );
}

export default App;
