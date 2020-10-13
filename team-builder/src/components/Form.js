import React from 'react';

export default function Form(props) {
	const { values, update, submit } = props;

	const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit();
    }

	return (
		<form className='form' onSubmit={onSubmit}>
                <h2>Add New Team Member</h2>
			<div className='form-fields'>
				{/* name */}
                <div className='form-line'>
				    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Name'
                        required
                        autoFocus
                    />
                </div>
				{/* email */}
                <div className='form-line'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='Email'
                        required
                    />
                </div>
				{/* job title */}
                <div className="form-line">
                    <label>Job Title</label>
                    <input
                        type='text'
                        name='jobTitle'
                        onChange={onChange}
                        value={values.jobTitle}
                        placeholder='Job Title'
                    />
                </div>
				{/* location */}
                {/* dropdown */}
                <div className="form-line">
                    <label>Location</label>
                    <select name='location' value={values.location} onChange={onChange}>
                        <option value=''>--- Select Location ---</option>
                        <option value='chicago'>Headquarters (Chicago)</option>
                        <option value='santaMonica'>
                            West Coast Office (Santa Monica){' '}
                        </option>
                        <option value='boston'>East Coast Office (Boston)</option>
                        <option value='madrid'>International Headquarters (Madrid)</option>
                        <option value='remote'>Remote</option>
                    </select>
                </div>
			</div>
				{/* submit button */}
				<div className='submit'>
					<button>Submit</button>
				</div>
		</form>
	);
}
