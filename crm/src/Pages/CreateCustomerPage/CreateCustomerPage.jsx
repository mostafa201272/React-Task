import React, {useState} from 'react'

// Styles
import customerStyles from './customer.module.css'

const CreateCustomer = () =>{

    // Step Status
    const [activeStep, setActiveStep] = useState(0);

    // Handel Next Step
    const NextFormHandeler = () => {
        
        // Update NextStatus
        setActiveStep(prevStep => prevStep + 1);

        // Active the next form
        const activeForm = document.querySelectorAll(`.${customerStyles['form_step_active']}`);
        activeForm[0].nextSibling.classList.add(customerStyles['form_step_active']);
        activeForm[0].classList.remove(customerStyles['form_step_active']);

        // Find the last active step and add the active-bar class and activat the step
        const activeSteps = document.querySelectorAll(`.${customerStyles['steps-slider']} .${customerStyles['active']}`);
        const lastActiveStep = activeSteps[activeSteps.length - 1];
        lastActiveStep.classList.add(customerStyles['active-bar']);
        lastActiveStep.nextSibling.classList.add(customerStyles['active']);
    }

    // Handel Next Step
    const PrevFormHandeler = () => {
        
        // Update NextStatus
        setActiveStep(prevStep => prevStep - 1);

        // Active the next form
        const activeForm = document.querySelectorAll(`.${customerStyles['form_step_active']}`);
        activeForm[0].previousSibling.classList.add(customerStyles['form_step_active']);
        activeForm[0].classList.remove(customerStyles['form_step_active']);

        // Find the last active step and add the active-bar class and activat the step
        const activeSteps = document.querySelectorAll(`.${customerStyles['steps-slider']} .${customerStyles['active']}`);
        // const lastActiveStep = activeSteps[activeSteps.length - 1];
        activeSteps[activeSteps.length - 2].classList.remove(customerStyles['active-bar']);
        activeSteps[activeSteps.length - 1].classList.remove(customerStyles['active']);
    }

    return(
        <>
            {/* <!-- START OF CREATE CUSTOMER PAGE --> */}
            <section className={customerStyles['create-customer-page']} id="create-customer-page">
                
                <div class={customerStyles['steps-slider']} id="steps-slider">
                    <div className={`${customerStyles['step']} ${customerStyles['active']}`}>
                        <span>1</span>
                        <span className={customerStyles["step-title"]}>Customer</span>
                    </div>
                    <div className={customerStyles['step']}>
                        <span>2</span>
                        <span className={customerStyles["step-title"]}>Subscription</span>
                    </div>
                    <div className={customerStyles['step']}>
                        <span>3</span>
                        <span className={customerStyles["step-title"]}>Payment</span>
                    </div>
                    <div className={customerStyles['step']}>
                        <span>4</span>
                        <span className={customerStyles["step-title"]}>Order</span>
                    </div>
                </div>

                <div className="form">
                    <form>


                        <div className={`${customerStyles['form-step']} ${customerStyles['form_step_active']}`}>
                            

                            <div className="row">
                                
                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Customer Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="nationality" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="nationality" placeholder="Customer Nationality" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="marital-status" className="form-label">Marital Status</label>
                                    <input type="text" className="form-control" id="marital-status" placeholder="Customer Marital Status" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="family-name" className="form-label">Family name</label>
                                    <input type="text" className="form-control" id="family-name" placeholder="Customer Family name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="middle-name" className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" id="middle-name" placeholder="Customer Middle Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM -->    */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="given-name" className="form-label">Given Name</label>
                                    <input type="text" className="form-control" id="given-name" placeholder="Customer Given Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="legal-name" className="form-label">Legal Name</label>
                                    <input type="text" className="form-control" id="legal-name" placeholder="Customer Legal Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="type" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="type" placeholder="Customer Type" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="card-number" className="form-label">Card Number</label>
                                    <input type="text" className="form-control" id="card-number" placeholder="Customer Card Number" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="issue-date" className="form-label">Issue Date</label>
                                    <input type="text" className="form-control" id="issue-date" placeholder="Customer Issue Date" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="valid-for" className="form-label">Valid For</label>
                                    <input type="text" className="form-control" id="valid-for" placeholder="Customer Valid For" />
                                </div>
                                {/* <!-- END OF FORM ITEM -->    */}
                                
                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="start-date" className="form-label">Start Date</label>
                                    <input type="text" className="form-control" id="start-date" placeholder="Customer Start Date" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className={`col-md-12 mb-3 ${customerStyles['form-buttons']}`}>
                                    <button type="button" onClick={NextFormHandeler} className={`btn ${customerStyles['custom-btn']}`}>
                                        <span>Next</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                                {/* <!-- END OF FORM ITEM -->    */}

                            </div>

                        </div>

                        <div className={customerStyles['form-step']}>

                            <div className="row">

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Customer Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="nationality" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="nationality" placeholder="Customer Nationality" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className={`col-md-12 mb-3 ${customerStyles['form-buttons']}`}>
                                    <button type="button" onClick={PrevFormHandeler} className={`btn ${customerStyles['custom-btn']}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                        <span>Previous</span>
                                    </button>
                                    <button type="button" onClick={NextFormHandeler} className={`btn ${customerStyles['custom-btn']}`}>
                                        <span>Next</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                                {/* <!-- END OF FORM ITEM -->    */}

                            </div>

                        </div>

                        <div className={customerStyles['form-step']}>

                            <div className="row">

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Customer Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="nationality" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="nationality" placeholder="Customer Nationality" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className={`col-md-12 mb-3 ${customerStyles['form-buttons']}`}>
                                    <button type="button" onClick={PrevFormHandeler} className={`btn ${customerStyles['custom-btn']}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                        <span>Previous</span>
                                    </button>
                                    <button type="button" onClick={NextFormHandeler} className={`btn ${customerStyles['custom-btn']}`}>
                                        <span>Next</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                                {/* <!-- END OF FORM ITEM -->    */}

                            </div>

                        </div>
                        
                        <div className={customerStyles['form-step']}>
                            <div className="row">
                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Customer Name" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className="col-md-6 mb-3">
                                    <label for="nationality" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="nationality" placeholder="Customer Nationality" />
                                </div>
                                {/* <!-- END OF FORM ITEM --> */}

                                {/* <!-- START OF FORM ITEM --> */}
                                <div className={`col-md-12 mb-3 ${customerStyles['form-buttons']}`}>
                                    <button type="button" onClick={PrevFormHandeler} className={`btn ${customerStyles['custom-btn']}`} id="btn-prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                        <span>Previous</span>
                                    </button>
                                    <button type="sunmit" className={`btn ${customerStyles['custom-btn']}`} id="btn-submit">
                                        <span>Submit</span>
                                    </button>
                                </div>
                                {/* <!-- END OF FORM ITEM -->    */}

                            </div>
                        </div>

                    </form>
                </div>

            </section>
            {/* <!-- END OF CREATE CUSTOMER PAGE --> */}
        </>
    );
}

export default CreateCustomer;