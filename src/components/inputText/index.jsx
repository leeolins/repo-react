//import { Component } from 'react'
import './styles.css'


export const InputText = ({searchValue, handleChange}) =>{
    return (
        <input 
            placeholder='Digite o nome do card'
            className='inputStyle'
            type="search"
            value ={searchValue}
            onChange={handleChange}
         />
    )
}


// export class InputText extends Component {
    
//     render(){
//         const { onChange } = this.props
//         return <input 
//             type="search"
//             onChange={onChange}
//          />
//     }
// }