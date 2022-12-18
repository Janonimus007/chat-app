import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find user'/>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2PdEL8i94WdFGX75RfDJ6QunfBo-U1lhcg&usqp=CAU" alt="" />
        <div className="userChatinfo">
          <span>Alejandro</span>
        </div>
      </div>
    </div>
  )
}

export default Search