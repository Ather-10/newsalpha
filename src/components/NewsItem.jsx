import React from 'react'

const NewsItem = (props) => {
 
    let { title, description, imageUrl,newsurl,author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div>
           <span className="position-absolute badge rounded-0 bg-danger d-flex justify-content-end position-absolute end-0">{source}</span>

          </div>
            <img src={imageUrl?imageUrl:"https://images.theconversation.com/files/683612/original/file-20250804-56-fp3vtb.jpg?ixlib=rb-4.1.0&rect=943%2C0%2C3530%2C1765&q=45&auto=format&w=1356&h=668&fit=crop"} className="card-img-top" alt="News" style={{ height: "200px", objectFit: "cover" }}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description?description:"This aritcal description is not avalibal.Please clickon read more"}...</p>
                <p className='card-text'><small className='text-muted'>by <b>{author?author:"Unkonow"}</b> on <b>{new Date(date).toLocaleDateString("en-US",{
                  day:"numeric",
                  month:"long",
                  year :"numeric"
                } )}</b></small></p>
                <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>

      </div>
    )
  
}

export default NewsItem