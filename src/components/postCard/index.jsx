import './styles.css'

export const Postcard = (props) => {
     const title = props.title
     const body = props.body
     //const id = props.id
     const cover = props.cover
    return (
        // <h1>OI! {props.title}</h1>
        <div className='post'>        
        <img src={cover} alt={title} />
        <div className='post-content'>
            <h5>trivela</h5>
            <h1>{title}</h1>
            <h3>{body}</h3>
        </div>  
    </div>  
    )
    
}