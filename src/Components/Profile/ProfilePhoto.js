
import React from 'react'

const profile_pic =
{

	marginTop: '-14%',
	marginLeft: '36%',

	border: '5px solid white',
	borderCollapse: 'separate',
	overflow: 'hidden', 
	borderRadius: '50%',

	maxWidth: '100%',
  	height: 'auto',
}

const PhotoCpn = () =>{
    return (
        <div className="header">

			<img style={profile_pic}  src="/Lovelycat.jpg"  alt="Lovely Cat" />

		</div>
    )
}

export default PhotoCpn





