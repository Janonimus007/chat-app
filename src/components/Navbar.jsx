import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>CHAT APP</span>
      <div className='user'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2PdEL8i94WdFGX75RfDJ6QunfBo-U1lhcg&usqp=CAU" alt="" />
        <span>Alejandro </span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar