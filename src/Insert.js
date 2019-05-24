import React from 'react'
import './App.css'

const Insert = (props) => {
  return(
    <div className="grid">
				
			<div className='input'>
				<div className='string'>Insert here:</div>
				<input 
					name="inputVal"
					type="text" 
					placeholder="input" 
					onChange={props.handleChange} 
					value={props.data.inputVal}
				/>
				<button onClick={props.onInserted}>insert</button>
			</div>
			
			<div className='code'>
				<label> coding: </label>	
				<select
					value={props.data.code}
					onChange={props.handleChange}
					name="code"
				>
					<option value='first'>first</option>
					<option value='second'>second</option>
					<option value='third'> third</option>
				</select>
			</div>
			
				
			<div className="boxes">
        {props.data.inputValArr}
      </div>
      <div className='btn-start'>
        <button className='btn' onClick={props.startMachine.bind(this)}>start</button>
			</div>

			<textarea className='output' value={props.data.output}>
			</textarea>
    </div>
	)

}

export default Insert
