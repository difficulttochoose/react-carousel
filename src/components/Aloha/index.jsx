import React from 'react';

const Aloha=(props)=> {
    const {name, isGreeting=true}=props;
return <div>{isGreeting?'Hello':'Bye'} {name}</div>;
    
}
export default Aloha;
