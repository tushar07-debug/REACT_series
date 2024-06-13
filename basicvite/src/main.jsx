
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://googel.com',
//       target:'_blank'
//   }, 
//   children:'Click me to visit google'
// }





// const anotherElement = {
//   <a href="https://google.com", target='_blank'>
//   google
//   </a>
// }


// const reactElement  = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},'clcick me'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement() not run due to structure
 <App/>
)
