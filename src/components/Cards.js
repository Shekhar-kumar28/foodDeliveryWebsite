import React from 'react'

const Cards = () => {
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996&t=st=1701927873~exp=1701928473~hmac=35b7c5ad8abb3e475e3caf59a27b7a2817187283c95ba0c965cda1cb7b9204db" className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is some important Text.</p>
            <div className="container w-100">
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className='d-inline h-100 fs-5'>
                Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
