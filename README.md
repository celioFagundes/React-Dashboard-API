# React dashboard API

<img src="https://user-images.githubusercontent.com/77676047/135660406-626473db-c67b-4fa0-8dc1-74c3ff742c4f.png" width =50% height = 50%>
<img src="https://user-images.githubusercontent.com/77676047/135660551-e6db7895-a8e9-4a0c-917e-7a3e52343d44.png" width =50% height = 50%>
<img src="https://user-images.githubusercontent.com/77676047/135660657-c0f1c736-d1e2-4aa5-a6bd-fb30aaebf1a8.png" width =50% height = 50%>

### About
  Dashboard ReactJS app created with Class components, Fetch API, React Bootstrap, Bootstrap 5.1 and react-router-dom 

### Functionalities

- Fetch API used to get data
- Navigate between three pages, Resumo(overview),Consultas(appointments) and Faturamento(income)
- Services folder contains the base.js file which exports the default API URL
  <img src="https://user-images.githubusercontent.com/77676047/135676406-ad75fc8e-56be-4e9e-96b8-3ef2c7e4c512.png" >
- Each service files exports a function which uses the default url + it's endpoint to return JSON data
  <img src="https://user-images.githubusercontent.com/77676047/135676889-45c4e655-9319-48b4-aaed-710c9804e00f.png" >
- Each components imports it's service and sets it's state with the data
  <img src="https://user-images.githubusercontent.com/77676047/135677284-a21cc6be-c3fe-41ef-9cac-a03da5efeb6b.png" >
  
### Learnings
- Fetch API
- Class components
- React-bootstrap

## Prerequisites

- NodeJs
- Yarn ``npm install --global yarn``
- React ``npm install -g create-react-app ``
- Bootstrap ``npm install bootstrap``
- React Bootstrap ``npm install react-bootstrap@next``
- React router DOM ``npm install --save react-router-dom``

## Installing

Clone this repository
- `` git clone https://github.com/celioFagundes/React-Dashboard-API.git``
- `` cd React-Dashboard-API.git``
- `` npm install ``
