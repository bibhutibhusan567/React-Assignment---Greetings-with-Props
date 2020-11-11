import React from 'react';
// write code for Welcome component here
// export default class Welcome extends React.Component{

//     render(){
//         return (
//             <div>
//                 <h1>Hey {this.props.name}!</h1>
//                 <h2>Welcome to Newton School.</h2>
//             </div>
//             );
//     }

// }

//functional component
export default function Welcome(props){
    return(<div>
        <h1>Hey {props.name}!</h1>
        <h2>Welcome to Newton School.</h2>
    </div>);

}