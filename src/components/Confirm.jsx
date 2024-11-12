import React from 'react';

const Confirm = ({ prevStep, nextStep, values }) => {

    const {firstName, lastName, email, occupation, city, bio} = values;

    const handleConfirm = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="max-w-[670px] mx-auto my-6 ">
            <h2 className="bg-purple-500 text-white text-3xl text-center p-4 rounded-lg">
              Confirm Your Details
             </h2>
            <ul  className="flex flex-col gap-4 p-6" >
                <li className="border-2 rounded-lg p-4 text-white"> <strong>First Name:   </strong> {firstName}</li>
                <li className="border-2 rounded-lg p-4 text-white"> <strong>Last Name:   </strong>  {lastName}</li>
                <li className="border-2 rounded-lg p-4 text-white"> <strong>Email:   </strong> {email} </li>
                <li className="border-2 rounded-lg p-4 text-white"> <strong>Occupation:   </strong> {occupation}</li>
                <li className="border-2 rounded-lg p-4 text-white"> <strong>City:   </strong> {city}</li>
                <li className="border-2 rounded-lg p-4 text-white"> <strong>Bio:   </strong> {bio}</li>
            </ul>

            <div className="flex justify-between mx-6 " >
            <button  className="bg-purple-500 px-4 py-2 rounded-lg text-white lg:text-3xl flex items-center gap-2" onClick={prevStep} >Edit Details</button>
            <button  className="bg-purple-500 px-4 py-2 rounded-lg text-white lg:text-3xl flex items-center gap-2" onClick={handleConfirm} >Confirm & Submit</button>
           
                </div> 
        </div>
    );
}

export default Confirm;
