import React from 'react'
import './table.scss'
import Write from '../resources/icon/write.svg'
import Delete from '../resources/icon/delete.svg'
import avatar from '../resources/icon/avatar.png'
export default function TableRow({ user }) {
	return (

		<tr className='TableContent__row'>
			<td>
				<div className="TableContent__row--container">
					<div className="TableContent__row--avatar">
						<img src={avatar} alt="" />
					</div>
					{user.name}
				</div>
			</td>
			<td>{user.email}</td>
			<td>Date</td>
			<td>Visit Time</td>
			<td>Doctor</td>
			<td>Conditions</td>
			<td className='TableContent__row--icon'><img src={Write} /></td>
			<td className='TableContent__row--icon'><img src={Delete} /></td>
		</tr>

	)
}

