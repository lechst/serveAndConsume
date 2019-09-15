import React from 'react'

const Contacts = ({contacts}) => {
	return (
		<div className="card-columns">
			{contacts.map((contact) => (
				<div className="card">
					<img className="card-img-top" src={contact.image} alt="Card image cap"></img>
					<div className="card-body">
						<h5 className="card-title">{contact.username}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
						<p className="card-text">{contact.image}</p>
					</div>
				</div>
			))}
		</div>
	)
};

export default Contacts