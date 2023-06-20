import { useEffect, useState } from 'react'
import './App.css'
import React from 'react';
import { fetchDummyDataEng } from './api/apiEng';

const EnglishAboutPage = ()=> {
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDummyDataEng()
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error message", error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <>
    <h2>----Navbar----</h2>
      <div className="container container-color mt-5 shadow">
        <div className="inside-container">
          <h3 style={{ color: "#268209" }}>About us</h3>
          <div className="card-body shadow">
            <p className='t1'>__Bdjobs.com Ltd. is the first and leading career management site in the country. Eight young business and IT professional backed by strong command over e-business and in-depth understanding of the needs of job seekers and employers in the country's context started this venture on July 2000.</p>
            <p className="t2 mt-4">
            The vision of the company is to try bringing Internet technology in the mainstream business and economic life of the society.
            </p>
            <p className="t1 mt-4">
              __Our web-site aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently. This site will also help employers solve many of the problems associated with traditional recruiting methods and allow them to save time and money.
            </p>
            <p className="t1 mt-4">
              __Right after its launching, the site has been able to attract the Internet users in the country. The site regularly updates Job Information (on average more than 4500 valid job news are placed at any point of time at the site), provides facility to the job seekers for posting resume and online application. The site has also been able to get good response from a large number of organizations in the country who use online job advertisement facility, online CV bank access and online application receiving and processing facility of www.bdjobs.com. Till now, more than 45,000 employers in the country have recruited more than 1 million professionals at different levels for their organizations through Bdjobs.com service.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="col-md-6">
              <table className="table table-striped table-border">
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((aboutData, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="table-a">No. of Unique Daily Visitors :</td>
                          <td className="table-a">{aboutData["No. of Unique Daily Visitors"]}</td>
                        </tr>
                        <tr>
                          <td className="table-a">Monthly Pageviews :</td>
                          <td className="table-a">{aboutData["Monthly Pageviews"]}</td>
                        </tr>
                        <tr>
                          <td className="table-a">No. of Resumes :</td>
                          <td className="table-a">{aboutData["No. of Resumes"]}</td>
                        </tr>
                        <tr>
                          <td className="table-a">No. of Corporate Accounts :</td>
                          <td className="table-a">{aboutData["No. of Corporate Accounts"]}</td>
                        </tr>
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td>No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
              </div>
            </div>

          </div>
          {
            Array.isArray(data) && data.length > 0 ? (
              data.map((aboutData, index) => (
                <React.Fragment key={index}>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Company Management
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Company Management"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Technical Team
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Technical Team"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Administration Department
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Administration Department"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Content Team
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Content Team"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Sales & Marketing Team
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Sales & Marketing Team"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Finance & Accounts Team
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Finance & Accounts Team"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Training Division
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Training Division"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    Customer Support
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["Customer Support"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["Name"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["Designation"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </React.Fragment>
              ))
            ) : (
              <span>No data available</span>
            )

          }

        </div>
        <h6>other details + footer</h6>
      </div>
    </>
  )
}
export default EnglishAboutPage;