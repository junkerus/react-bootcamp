/*props = es un objeto que contiene toda la información que le llega al componente*/
const Mensaje = (props) => {
  console.log(props);

  return <h1 style={{color: props.color}}>{props.message}</h1>
      
  };

  export default Mensaje;