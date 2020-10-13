import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TeamMember from './components/TeamMember';

//initial values (shape of state)
const initialFormValues = {
	name: '',
	email: '',
	jobTitle: '',
	//dropwdown
	location: '',
};

export default function App() {
	//initialize state
	const [teamMembers, setTeamMembers] = useState([]);

	//initialize state for form values
	const [formValues, setFormValues] = useState(initialFormValues);

	const updateForm = (inputName, inputValue) => {
		setFormValues({
			...formValues,
			[inputName]: inputValue,
		});
	};

	const submitForm = () => {
		let teamMember = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
			jobTitle: formValues.jobTitle.trim(),
			location: formValues.location,
		};
		setTeamMembers([...teamMembers, teamMember]);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Team Members</h1>
			</header>
			<Form values={formValues} update={updateForm} submit={submitForm} />

			{teamMembers.map((teamMember) => {
				return <TeamMember details={teamMember} />;
			})}
		</div>
	);
}
