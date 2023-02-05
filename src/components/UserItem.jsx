import React from 'react'

const UserItem = (props) => {
   const {user} =props 
  const { name, username,email, phone, website, address,company } = user;
  const { street, city, zipcode,suite } = address;
 
  return (
<div className="card" style={{width: "22rem"}}>
      
      <div className="card-body">
        <h5  style={{color:"#d92c9c"}} className="card-title">{name} ({username})</h5>
       <p className="card-text">{suite},{street},{city},{zipcode}</p>
      </div>
      <ul className="list-group list-group-flush">
       
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
        <li className="list-group-item">{website}</li>
        <li style={{color:"#3682bf"}} className="list-group-item">{company.name}</li>
        <li style={{color:"#3682bf"}} className="list-group-item">{company.catchPhrase}</li>
        <li style={{color:"#3682bf"}} className="list-group-item">{company.bs}</li>




      

      </ul>
      
    </div>
    
  )
}

export default UserItem
