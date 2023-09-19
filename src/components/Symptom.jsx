import { useContext } from 'react';
import { symptoms } from '../context/symptoms';
import './Symptom.scss'

const Symptom = (props) => {
    const {data}=useContext(symptoms);
  return (
    <div className='symptom'>
        <label htmlFor={props.val}>Select Symptom{props.val+1} : </label>
        <select name={props.val} id={props.val} defaultValue="none">
          <option value="none">None</option>
          {data.map((sym)=><option value={sym}>{sym}</option>)}
        </select>
    </div>
  )
}

export default Symptom