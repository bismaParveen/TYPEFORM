import React from 'react'
import '../Form/Form.css'
import Sample from "../Images/product-sample@1x.webp"

function Form() {
  return (
<div className="form-container" id='form'>
    <h2>Sign up
    and come on in</h2>
    <img src={Sample} alt="" />
    <span>&copy; Typeform</span>
</div>

  )
}

export default Form
