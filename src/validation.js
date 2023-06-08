let validation = (data) => {
    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Email is not valid'
    }
    if(!data.email){
        errors.e2 = 'Enter email'
    }
    if(data.email.length > 35){
        errors.e3 = 'Less than 35 characters'
    }
    if(!/\d/.test(data.password)){
        errors.p1 ='Must contain one number'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Longitud incorrecta'
    }
    return errors;
}

export default validation