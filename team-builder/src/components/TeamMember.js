import React from 'react';

export default function TeamMember(props) {
    const { details } = props
    
    if (!details) {
        return <h3>fetching details...</h3>
    }

    return (
        <div className='team-member'>
            <h2>{details.name}</h2>
            <h3>Job Title: {details.jobTitle}</h3>
            <p>Email: {details.email}</p>
            <p>Location: {details.location}</p>
        </div>
    )
}