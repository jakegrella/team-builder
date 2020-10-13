import React from 'react';

export default function TeamMember(props) {
    const { details } = props
    
    if (!details) {
        return <h3>fetching details...</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <h2>Job Title: {details.jobTitle}</h2>
            <p>Email: {details.email}</p>
            <p>Location: {details.location}</p>
        </div>
    )
}