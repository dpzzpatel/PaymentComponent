import React from 'react';
import { countryList } from '../data/listofcountries';

function Form(){
    const options = ()=>{
        return countryList.map((country)=>{
            return(
                <option key={country} value={country}>{country}</option>
            )
        })
    }
  return (
    <div className="row row-cols-2 mb-3 gap-3">
        <input className='col-5 rounded-pill p-2' type='email'    name='email'     placeholder='Email'   required/>
        <input className='col-5  rounded-pill p-2' type='text'     name='address'   placeholder='Address' required/>
        <input className='col-5  rounded-pill p-2' type='text'     name='fname'     placeholder='First Name'   required/>
        <input className='col-5  rounded-pill p-2' type='text'     name='lname'     placeholder='Last Name'   required/>
        <input className='col-5  rounded-pill p-2' type='text'     name='city'      placeholder='City'   required/>
        <input className='col-5  rounded-pill p-2' type='number'     name='postal'      placeholder='Postal Code/Zip'   required/>
        <input className='col-5  rounded-pill p-2' type='tel'      name='Phone Number'    placeholder='Phone Number'   pattern="[0-9]{10}" required/>
        <select className='col-5  rounded-pill p-2' type='select' aria-label="Default select example">
            <option>Open this select menu</option>
            {options()}
        </select>
    </div>
  )
}

export default Form;