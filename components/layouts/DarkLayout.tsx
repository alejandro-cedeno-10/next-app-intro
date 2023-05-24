
import {FC} from "react";

// @ts-ignore
export const DarkLayout: FC = ({ children }) =>{
    return (
        <div style={{
            backgroundColor: 'red',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <h3>Dark-Layout</h3>
           <div>
               {children}
           </div>
        </div>
    )
}
