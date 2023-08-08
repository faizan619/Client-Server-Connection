
function About() {
  return (
    <>
      <div className="Container">
          <div className="infoContainer">
            <div className="leftContainer infopart">
              <img src="data:image/jpeg;base64,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" alt="photo" />
              <div className="leftinfodetails">
               <p>name:faizan</p>
               <p>Youtube: NA</p>
               <p>instgram : faizan619</p>
               <p>facebook :faizan</p>
               <p>figma:design</p>
               <p>instgram : faizan619</p>
               <p>facebook :faizan</p>
               <p>figma:design</p>
               <p>instgram : faizan619</p>
               <p>facebook :faizan</p>
               <p>figma:design</p>
              </div>
            </div>
            <div className="rightContainer infopart">
            <div className="infoupper">
            <div className="infiname">
              <p>Faizan alam</p>
              <p>web developer</p><br />
              <p>Ranking :9.2/10</p>
            </div>
            <div className="btndiv"><button className="btninfo">Edit Profile</button></div>
            </div>
            <div className="infoabouttimeline">
              <h4 style={{textAlign:"left",marginTop:'50px'}}><span style={{borderBottom:"1px solid black"}}>About</span><span style={{color:"blue",marginLeft:'30px'}}>Timeline</span></h4>
              <div className="infofulldetails">
                <div className="aainfodetails">
                  <p style={{fontWeight:'bold'}}>User ID :</p>
                  <p style={{color:'blue'}}>994338483I23ID</p>
                </div>
                <div className="aainfodetails">
                  <p style={{fontWeight:'bold'}}>Name :</p>
                  <p style={{color:'blue'}}>Faizan Alam</p>
                </div>
                <div className="aainfodetails">
                  <p style={{fontWeight:'bold'}}>Email :</p>
                  <p style={{color:'blue'}}>alamf6023@gmail.com</p>
                </div>
                <div className="aainfodetails">
                  <p style={{fontWeight:'bold'}}>Phone :</p>
                  <p style={{color:'blue'}}>9987337815</p>
                </div>
                <div className="aainfodetails">
                  <p style={{fontWeight:'bold'}}>Profession :</p>
                  <p style={{color:'blue'}}>web developer</p>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default About