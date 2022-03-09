import React from 'react';

type ContainerProps ={
    children:React.ReactNode;

}

const ContainerComponent =(props:Partial<ContainerProps>)=>{
    const {children} = props;
 return(<div style={{width:'100%',height:'100%'}}>

     {children}
 </div>)

}

export default ContainerComponent;
