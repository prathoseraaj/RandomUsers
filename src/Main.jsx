import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = () => {

  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    async function getuserdata() {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      console.log(data)
      setUserdata(data);
    }

    getuserdata()
  }, []);

  return (
    <div className='container'>
      <div className='in-container'>
        {userdata?.results?.[0] ? (  
          <>
            <div className='left'>
              <img src={userdata.results[0].picture.large} alt="User" />
            </div>
            <div className='right'>
              <div className='names'>
                <h3 className='firstname'>{userdata.results[0].name.first}</h3>
                <h3 className='lastname'>{userdata.results[0].name.last}</h3>
              </div>
              <div className='details'>
                <h3 className='gender'>{userdata.results[0].gender}</h3>
                <h3 className='phonenum'>{userdata.results[0].cell}</h3>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>  
        )}
      </div>
    </div>
  );
};

export default Main