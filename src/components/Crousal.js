import React from 'react'

const Crousal = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success text-white" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active height: 100px;">
                        <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996&t=st=1701927873~exp=1701928473~hmac=35b7c5ad8abb3e475e3caf59a27b7a2817187283c95ba0c965cda1cb7b9204db" className="d-block w-100 object-fit-cover height: 100px;" style={{filter:"brightness=(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996&t=st=1701927873~exp=1701928473~hmac=35b7c5ad8abb3e475e3caf59a27b7a2817187283c95ba0c965cda1cb7b9204db" className="d-block w-100 object-fit-cover height: 100px;" style={{filter:"brightness=(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=826&t=st=1701929876~exp=1701930476~hmac=b3d030305904b372a36d1ea721dedbbe348b4f414720c46450eef5b6fa12695f" className="d-block w-100 object-fit-cover height: 100px;" style={{filter:"brightness=(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Crousal
