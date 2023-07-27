/****************************
* File Name: RatingForm.jsx *
* Author: Ammar S.A.A       *
* Output: Rating Form       *
****************************/

import React from 'react'

export default function RatingForm() {
  return (
    <div className="back">
    <div className="container1" id="co1">
      <div className="post">
        <div className="text">Thanks for Rating us!</div>
        <div className="edit">Edit</div>
        <i className="fas fa-times" id="close" />
      </div>
      <div className="star-widget">
        <input type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1" className="fas fa-star" />
        <form action="#">
          <i className="fas fa-times" id="close" />
          <h4 />
          <div className="textarea">
            <textarea
              cols={30}
              placeholder="Describe your experience"
              defaultValue={""}
            />
          </div>
          <div className="btn">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
