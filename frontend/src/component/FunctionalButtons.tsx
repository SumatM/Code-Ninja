import { ReactNode } from "react"

interface Button{
    title:string,
    action:any,
    icon:ReactNode
}


export const FunctionalButtons = ({title,action,icon}:Button) => {
   
  return (
    <div>
      <button style={{display:"flex",alignItems:'center',justifyContent:'space-between'}} onClick={action}>{icon} {title}</button>  
    </div>
  )
}
