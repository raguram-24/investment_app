

const Input = ({type,label,isRequired, children}) => {
    return (
        <div>
            <label>{children}</label>
            <input type={type} required={isRequired}/>
        </div>
    )
}

export default Input