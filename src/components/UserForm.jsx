import React, { useState } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {


    const [formData, setFormData] = useState(() =>{
      const savedData = localStorage.getItem('formData');   //Let me know if data is saved in local storage or not 
      return savedData ? JSON.parse(savedData) : {          //if saved then return it else return empty object.
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        bio: '',
      }
    })

    const [step, setStep] = useState(1);
    //Proceed to next 
    const nextStep = () => setStep(step + 1);

    //go back to previous step 
    const prevStep = () => setStep(step - 1);

    //Handle Field change
    const handleChange = (input) => (e) => {
      const updatedFormData = {...formData, [input]: e.target.value}
        setFormData(updatedFormData);
        localStorage.setItem('formData', JSON.stringify(updatedFormData))
    }


    switch (step) {
        case 1:
          return (
            <FormPersonalDetails
              nextStep={nextStep}
              handleChange={handleChange}
              values={formData}
            />
          );
        case 2:
          return (
            <FormUserDetails
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={formData}
            />
          );
          case 3:
            return (
              <Confirm
                prevStep={prevStep}
                nextStep={nextStep}
                values={formData}
              />
            )
            case 4:
              localStorage.removeItem('formData')
              return <Success />;
        default:
          return <h1>Something went wrong.</h1>;
      }
}

export default UserForm;
