import { useEffect, useState } from 'react'
import { fetchDummyData } from './api/api';
import './App.css'
import React from 'react';

const BanglaAboutpage = ()=> {
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDummyData()
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
          <h3 style={{ color: "#268209" }}>আমাদের সম্পর্কে</h3>
          <div className="card-body shadow">
            <p className='t1'>__বিডিজবস.কম লিমিটেড দেশের প্রথম ও নেতৃস্থানীয় ক্যারিয়ার ম্যানেজমেন্ট সাইট। আট তরুণ তথ্যপ্রযুক্তিবিদ ও ব্যবসায়ী, যারা ই-বিজনেসে মজবুত ধারণা রাখতেন এবং এদেশের চাকরীপ্রার্থীদের এবং নিয়োগকর্তাদের প্রয়োজন সম্পর্কে গভীর ধারণা রাখতেন , এই উদ্যোগ গ্রহন করেন ২০০০ সালের জুলাই মাসে।</p>
            <p className="t2 mt-4">
              এই কোম্পানীর লক্ষ্য ছিলো ইন্টারনেট প্রযুক্তিকে মূলধারার ব্যবসা এবং সমাজের অর্থনৈতিক কর্মকান্ডে সম্পৃক্ত করা।
            </p>
            <p className="t1 mt-4">
              __আমাদের ওয়েব সাইটের লক্ষ্য ইন্টারনেটের সর্বোচ্চ ব্যবহার। আমরা বিশ্বাস করি আমাদের সেবাটি চাকরী প্রার্থীদের কর্মজীবনকে আরো দক্ষতার সাথে পরিচালনায় সাহায্য করবে। এছাড়া এই সাইটটি নিয়োগকারীদের প্রচলিত নিয়োগ পদ্ধতির সাথে যুক্ত বহু সমস্যা সমাধানের জন্য সাহায্য এবং তাদের সময় ও অর্থ বাঁচানোর সুযোগ করে দেবে।
            </p>
            <p className="t1 mt-4">
              __সাইটটি শুরু করার পর থেকেই দেশের ইন্টারনেট ব্যবহারকারীদের আকৃষ্ট করতে সক্ষম হয়েছে। সাইটে চাকরির তথ্য নিয়মিত হালনাগাদ করা হয় (গড়ে ২৫০০র ও বেশি চাকরীর সঠিক তথ্য থাকে প্রতি মূহুর্তে এই সাইটটিতে), অনলাইনে আবেদন করার ও তার জীবনবৃত্তান্ট পোস্ট করার সুযোগ দেয় চাকরি প্রার্থীদের। দেশের প্রচুর সংখ্যক প্রতিষ্ঠানের কাছ থেকে ভালো সাড়া পেয়েছে সাইটটি। এরা সাইটটির অনলাইন জব বিজ্ঞাপন সুবিধা, অনলাইন সিভি ব্যাংক এক্সেস এবং অনলাইন আবেদন প্রাপ্তি এবং প্রক্রিয়াকরণের সুযোগ গ্রহণ করেন। এখন পর্যন্ত ৪৫,০০০+ এর ও বেশি নিয়োগকর্তা ৩,৫০,০০০ এর ও বেশি পেশাজীবিকে তাদের প্রতিষ্ঠানের বিভিন্ন পর্যায়ে নিয়োগ দান করেছেন বিডিজবস.কম এর সেবা গ্রহণ করে।
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="col-md-6">
              <table className="table table-striped table-border">
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((aboutData, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="table-a">স্বতন্ত্র দৈনিক দর্শক সংখ্যা:(গড়ে)</td>
                          <td className="table-a">{aboutData["স্বতন্ত্র দৈনিক দর্শক সংখ্যা"]}</td>
                        </tr>
                        <tr>
                          <td className="table-a">মাসিক পৃষ্ঠাদর্শন:</td>
                          <td className="table-a">{aboutData["মাসিক পৃষ্ঠাদর্শন"]}</td>
                        </tr>
                        <tr>
                          <td className="table-a">রিজিউমি সংখ্যা:</td>
                          <td className="table-a">{aboutData["রিজিউমি সংখ্যা"]}</td>
                        </tr>
                        <tr>
                          <td className="table-a">কর্পোরেট অ্যাকাউন্ট সংখ্যা:</td>
                          <td className="table-a">{aboutData["কর্পোরেট অ্যাকাউন্ট সংখ্যা"]}</td>
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
                      কোম্পানী ম্যানেজমেন্ট
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["কোম্পানী ম্যানেজমেন্ট"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    টেকনিক্যাল টিম
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["টেকনিক্যাল টিম"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    এডমিনিষ্ট্রেশন ডিপার্টমেন্ট
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["এডমিনিষ্ট্রেশন ডিপার্টমেন্ট"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    কনটেন্ট টিম
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["কনটেন্ট টিম"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    সেলস এ্যান্ড মার্কেটিং টিম
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["সেলস এ্যান্ড মার্কেটিং টিম"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    ফিন্যান্স এ্যান্ড এ্যাকাউন্টস টিম
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["ফিন্যান্স এ্যান্ড এ্যাকাউন্টস টিম"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    ট্রেইনিং ডিভিশন
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["ট্রেইনিং ডিভিশন"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="card-header card-h-text">
                    কাস্টমার সাপোর্ট
                    </div>
                    <div className="row card-body d-flex justify-content-start">
                      {aboutData["কাস্টমার সাপোর্ট"].map((management, index) => (
                        <div className='col-lg-6 ccc my-2' key={index}>
                          {management["নাম"]}
                          <br />
                          <span style={{opacity: "0.9"}}>{management["পদবী"]}</span>
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
export default BanglaAboutpage;