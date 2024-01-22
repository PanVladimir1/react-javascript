import ReactDOM from 'react-dom/client'
import React from 'react';
import { restaurants } from '../materials/mock.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <>
      <h1>{restaurants[0].name}</h1>
      <h3>Menu</h3>
      <ul>
        <li> {restaurants[0].menu[0].name} </li>
        <li> {restaurants[0].menu[1].name} </li>
        <li> {restaurants[0].menu[2].name} </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li> {restaurants[0].reviews[0].text} </li>
        <li> {restaurants[0].reviews[1].text} </li>
      </ul>
    </>
    
    <>
      <h1>{restaurants[1].name}</h1>
      <h3>Menu</h3>
      <ul>
        <li> {restaurants[1].menu[0].name} </li>
        <li> {restaurants[1].menu[1].name} </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li> {restaurants[1].reviews[0].text} </li>
        <li> {restaurants[1].reviews[1].text} </li>
        <li> {restaurants[1].reviews[2].text} </li>
      </ul>
    </>

    <>
      <h1>{restaurants[2].name}</h1>
      <h3>Menu</h3>
      <ul>
        <li> {restaurants[2].menu[0].name} </li>
        <li> {restaurants[2].menu[1].name} </li>
        <li> {restaurants[2].menu[2].name} </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li> {restaurants[2].reviews[0].text} </li>
      </ul>
    </>

    <>
      <h1>{restaurants[3].name}</h1>
      <h3>Menu</h3>
      <ul>
        <li> {restaurants[3].menu[0].name} </li>
        <li> {restaurants[3].menu[1].name} </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li> {restaurants[3].reviews[0].text} </li>
        <li> {restaurants[3].reviews[1].text} </li>
      </ul>
    </>
  </div>
);

// root.render(
//   React.createElement("div", {children: [

//     //* первый ресторан
//     React.createElement("div", {children: [
//       React.createElement("h1", {children: restaurants[0].name}),
//       React.createElement("h3", {children: "Menu"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[0].menu[0].name}),
//         React.createElement("li", {children: restaurants[0].menu[1].name}),
//         React.createElement("li", {children: restaurants[0].menu[2].name}),
//       ]}),
//       React.createElement("h3", {children: "Reviews"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[0].reviews[0].text}),
//         React.createElement("li", {children: restaurants[0].reviews[1].text}),
//       ]}),   
//     ]}),

//     //* второй ресторан
//     React.createElement("div", {children: [
//       React.createElement("h1", {children: restaurants[1].name}),
//       React.createElement("h3", {children: "Menu"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[1].menu[0].name}),
//         React.createElement("li", {children: restaurants[1].menu[1].name}),
//       ]}),
//       React.createElement("h3", {children: "Reviews"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[1].reviews[0].text}),
//         React.createElement("li", {children: restaurants[1].reviews[1].text}),
//         React.createElement("li", {children: restaurants[1].reviews[2].text}),
//       ]}),   
//     ]}),

//     //* третий ресторан
//     React.createElement("div", {children: [
//       React.createElement("h1", {children: restaurants[2].name}),
//       React.createElement("h3", {children: "Menu"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[2].menu[0].name}),
//         React.createElement("li", {children: restaurants[2].menu[1].name}),
//         React.createElement("li", {children: restaurants[2].menu[2].name})
//       ]}),
//       React.createElement("h3", {children: "Reviews"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[2].reviews[0].text}),
//       ]}),   
//     ]}),

//     //* четвертый ресторан
//     React.createElement("div", {children: [
//       React.createElement("h1", {children: restaurants[3].name}),
//       React.createElement("h3", {children: "Menu"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[3].menu[0].name}),
//         React.createElement("li", {children: restaurants[3].menu[1].name})
//       ]}),
//       React.createElement("h3", {children: "Reviews"}),
//       React.createElement("ul", {children: [
//         React.createElement("li", {children: restaurants[3].reviews[0].text}),
//         React.createElement("li", {children: restaurants[3].reviews[1].text})
//       ]}),   
//     ]}),    
//   ]})
// );