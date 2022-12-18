import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>

      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2PdEL8i94WdFGX75RfDJ6QunfBo-U1lhcg&usqp=CAU" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2PdEL8i94WdFGX75RfDJ6QunfBo-U1lhcg&usqp=CAU" alt="" />
        
      </div>
    </div>
  )
}

export default Message