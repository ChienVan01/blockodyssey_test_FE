import React from 'react';
import './App.css';
import { Tree } from 'react-tree-graph';
import { parents } from './data';
import 'react-tree-graph/dist/style.css'

const App = () => {
  return <Tree data={parents} height={700} width={1280} />;
};

export default App;
