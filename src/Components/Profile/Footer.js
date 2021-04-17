
import React from 'react'

const stats ={

    display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: '10',

}

const followers ={
    display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',	


	}

const numbers ={
    fontFamily: 'Kumbh Sans, sans-serif',
	fontWeight: '700',
	fontSize: '18',
}

const desc ={

	fontSize: '4',
	color: 'hsl(0, 0%, 59%)',	
    
}

const likes ={
    display: 'flex',

	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',

	marginLeft: '50',
	marginRight: '50',	
    
}

const photos={

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
}

const FooterCpn = () =>{
    return (
    

	
<div style={stats}>
<hr style={{width:'100'}}></hr>  

    <div style={followers}>

        <span style={numbers}>80K</span> 
        <span style={desc}>Followers</span> 

    </div>

    <div style={likes}>
        
        <span style={numbers}>803K</span> 
        <span style={desc}>Likes</span>

    </div>


    <div style={photos}>
        
        <span style={numbers}>1.4K</span>  
        <span style={desc}>Photos</span>

    </div>

</div>

    )
}

export default FooterCpn





