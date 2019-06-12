import React from 'react';
import logo from './logo.svg';
import Matter from 'matter-js'
import test from './test.svg';
import './App.css';

function App() {
  // module aliases
  window.decomp = require('poly-decomp');

  var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Svg = Matter.Svg;

  const HEIGHT = window.innerHeight;
  const WIDTH  = window.innerWidth;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
           height: HEIGHT,
           width: WIDTH,
           wireframes: false
       }
  });

  const THICK  =  20;

  // TODO: write a function to scale letters

  // letters and their vertices
  const letterA = [];
  // const letterB = [];
  const letterC = [];
  const letterD = [];
  const letterE = [];
  // const letterF = [];
  // const letterG = [];
  const letterH = [];
  const letterI = [
    {x : 0 , y : 0},
    {x : 500 , y : 0},
    {x : 500 , y : 100},
    {x : 300 , y : 100},
    {x : 300 , y : 400},
    {x : 500 , y : 400},
    {x : 500 , y : 500},
    {x : 0 , y : 500},
    {x : 0 , y : 400},
    {x : 200 , y : 400},
    {x : 200 , y : 100},
    {x : 0 , y : 100},
  ];

  // const letterJ = [];
  // const letterK = [];
  // const letterL = [];

  const letterO = [];
  const letterP = [];
  // const letterQ = [];
  const letterR = [];
  const letterS = [];

  const letterT = [
    {x : 0 , y : 0},
    {x : 500 , y : 0},
    {x : 500 , y : 100},
    {x : 300 , y : 100},
    {x : 300 , y : 500},
    {x : 200 , y : 500},
    {x : 200 , y : 100},
    {x : 0 , y : 100},
  ];

  // const letterU = [];
  // const letterV = [];
  // const letterW = [];
  // const letterX = [];
  // const letterY = [];
  // const letterZ = [];


  const letterN = [
        {x : 0 , y : 500},
        {x : 0 , y : 0},
        {x : 100 , y : 0},
        {x : 400 , y : 300},
        {x : 400 , y : 0},
        {x : 500 , y : 0},
        {x : 500 , y : 500},
        {x : 300 , y : 500},
        {x : 100 , y : 200},
        {x : 100 , y : 500},
      ];

  const letterM = [
        {x : 0 , y : 500},
        {x : 0 , y : 0},
        {x : 250 , y : 200},
        {x : 500 , y : 0},
        {x : 500 , y : 500},
        {x : 400 , y : 500},
        {x : 400 , y : 200},
        {x : 250 , y : 300},
        {x : 100 , y : 200},
        {x : 100 , y : 500},
      ];

  var boxA = Bodies.rectangle(400, 200, 200, 80);
  var boxB = Bodies.rectangle(800, 500, 80, 80);
  var m = Bodies.fromVertices(400, 400, letterM);
  var i = Bodies.fromVertices(800, 400, letterI);
  var n = Bodies.fromVertices(1200, 400, letterN);
  var t = Bodies.fromVertices(1600, 400, letterT);
  var ground = Bodies.rectangle(WIDTH/2, HEIGHT+THICK/2, WIDTH, THICK, { isStatic: true });
  var left = Bodies.rectangle(-THICK/2, HEIGHT/2, THICK, HEIGHT, { isStatic: true });
  var right = Bodies.rectangle(WIDTH+THICK/2, HEIGHT/2, THICK, HEIGHT, { isStatic: true });
  ground.friction = .05;


  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, ground, left, right, m, i, n, t]);
  engine.world.gravity.x = 0

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
