
interface Button{
    title:string,
    action:any
}


export const FunctionalButtons = ({title,action}:Button) => {
  return (
    <div>
      <button onClick={action}>{title}</button>  
    </div>
  )
}
