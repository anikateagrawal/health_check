import { useContext } from 'react';
import { symptoms } from '../context/symptoms';
import './Symptom.scss'

const Symptom = (props) => {
    const {data}=useContext(symptoms);
  return (
    <div className='symptom m-1'>
      <div>
        <label htmlFor={props.val} className="form-label">Select Symptom{props.val+1} : </label>
        <select name={props.val} id={props.val} defaultValue="none" className='form-control'>
          <option value="none">None</option>
          {data.map((sym)=><option value={sym}>{sym}</option>)}
        </select>
        </div>
    </div>
  )
}

export default Symptom