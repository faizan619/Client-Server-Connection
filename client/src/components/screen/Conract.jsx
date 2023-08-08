
function Conract() {
  
  return (
    <>
      <div className="Container contactContainer">
          <div className="contactupper">
            <div className="firstBox infobox">
              <p>Name:</p>
              <p>Faizan Alam Sajjad</p>
            </div>
            <div className="secondBox infobox">
            <p>Name:</p>
              <p>alamf6023@gmailcom</p>
            </div>
            <div className="thirdBox infobox">
            <p>Phone:</p>
              <p>9987337815</p>
            </div>
          </div>
          <div className="conntactbottom">
            <div className="contacttextarea">
              <h2>Get in Touch</h2>
              <input type="text" placeholder="Enter Details"/>
              <input type="text" placeholder="Enter Details" style={{marginLeft:"17px"}} />
              <input type="text" placeholder="Enter Details" style={{marginLeft:"17px"}} />
              <textarea name="text" id="text" placeholder="Enter Details" ></textarea>
              <button className="btn2">Submit</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Conract