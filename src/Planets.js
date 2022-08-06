export const Planets = (props)=>{
      return(
        <div>
          {props.isGas ? <h1>{props.name}</h1>:<h1></h1>}
        </div>
      )
    }