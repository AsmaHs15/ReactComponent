import React from 'react'



const nameStyle={
    fontFamily: 'Kumbh Sans, sans-serif',
	fontWeight: '700',
	fontSize: '18',
}

const ageStyle = {
  
    color : '#889598',
 	fontSize : '19',
	fontWeight : '500',

}



const NameCpt = () => {
    return (
     
        <div>

                <span style = {nameStyle}>Lovely Kitty</span>
                &nbsp;
                <span style={ageStyle}>3M</span> 

        </div>

    );
}

export default  NameCpt 