// Code Keypad Component Here
const handleChange = () => console.log('Entering password...')

function Keypad (){
    return (
        <input type="password" onChange={handleChange}></input>
    )
}

export default Keypad;