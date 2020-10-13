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
		<form onSubmit={onSubmit}>
			<div>
				{/* name */}
				<label>
					Name
					<input
						type='text'
						name='name'
						onChange={onChange}
						value={values.name}
						placeholder='Name'
						required
						autoFocus
					/>
				</label>
				{/* email */}
				<label>
					Email
					<input
						type='email'
						name='email'
						onChange={onChange}
						value={values.email}
						placeholder='Email'
						required
					/>
				</label>
				{/* job title */}
				<label>
					Job Title
					<input
						type='text'
						name='jobTitle'
						onChange={onChange}
						value={values.jobTitle}
						placeholder='Job Title'
					/>
				</label>
				{/* location */}
                {/* dropdown */}
				<label>
					Location
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
				</label>
				{/* submit button */}
				<div className='submit'>
					<button>Submit</button>
				</div>
			</div>
		</form>
	);
}
