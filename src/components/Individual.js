import React, { useState, useEffect } from 'react';
import './Individual.css'
import { useNavigate } from 'react-router-dom';

function Individual() {

  const navigate = useNavigate();

    useEffect(()=>{

        console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')) {
            navigate("/login")
        }
    },[])

  const [prog, setProg] = useState(0);
  const [cbValue1, setCbValue1] = useState(0)
  let checkbox = [];

  useEffect(() => {
    // console.log(typeof (window.localStorage.getItem('ch1')))
    // console.log();
    if ((window.localStorage.getItem('ch1')) === '1') { setCbValue1(1); console.log("tr"); }
    // else console.log("kk");
    // else setCbValue1(false)
  }, [])

  const handleCheckboxChange = (event) => {
    // console.log(event.target);
    let tickedCount = 0;
    checkbox.forEach((chkbox) => {
      if (chkbox.checked) {
        tickedCount++;
      }
    });
    if (tickedCount === 0) {
      window.localStorage.setItem("cb1", 1);
      setProg(0);
    } else if (tickedCount === 1) {
      window.localStorage.setItem("cb1", 1);
      setProg(prog + 25);
    } else if (tickedCount === 2) {
      window.localStorage.setItem("cb1", 1);
      setProg(prog + 25);
    } else if (tickedCount === 3) {
      setProg(prog + 25);
    } else if (tickedCount === 4) {
      setProg(100);
    }
  };


  return (
    <>
      <div className='c1'>
        <h1 contentEditable>Project Name:</h1>
        <h1 contentEditable>Problem Statement:</h1>
        <h1>Target:</h1>
      </div>
      <div className="target">
        <label className='tt' htmlFor="target">Target 1</label>
        <input className="form-check-input" checked={cbValue1 === 1 ? true : false} onClick={(e) => {
          handleCheckboxChange(e); window.localStorage.setItem('ch1', cbValue1 ? 0 : 1); setCbValue1(cbValue1 ? 0 : 1)
        }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <textarea></textarea><br />
        <label className='tt' htmlFor="target">Target 2</label>
        <input className="form-check-input" onClick={handleCheckboxChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <textarea></textarea><br /><label className='tt' htmlFor="target">Target 3</label>
        <input className="form-check-input" ref={(el) => (checkbox[2] = el)} onClick={handleCheckboxChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <textarea></textarea><br /><label className='tt' htmlFor="target">Target 4</label>
        <input className="form-check-input" ref={(el) => (checkbox[3] = el)} onClick={handleCheckboxChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <textarea></textarea></div>
      <h3>Status: {prog}</h3>
    </>
  );
}

export default Individual;