import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div className="container-fluid bg-dark d-flex " id="banner">
        	<div className="d-block bg-transparent container h-50 m-block-auto text-align-center" id="intro">
        		<h3 className="bg-transparent" id="name">SANJAI GANDHI</h3>
        		<hr className="border-3 mx-auto w-25 border-light" />
        		<p className="bg-transparent" id="para">A Passionate Fullstack Developer</p>
        	</div>
      </div>
      <div className="container bg-black d-flex align-items-center justify-content-center mt-3 text-light">
      		<h1 id="name" className="text-light">INTRODUCTION</h1>
      </div>
      <div className="bg-black container p-3 rounded-5 d-lg-flex align-items-center">
      	<div className="m-2 col-lg-4" id="card1">
      		<div className="bg-dark h-100 col p-10 rounded-5">
      			<div className="container-fluid bg-transparent p-1">
      				<img src="https://c4.wallpaperflare.com/wallpaper/556/656/872/digital-art-black-background-minimalism-abstract-wallpaper-thumb.jpg" alt="UI/UX" className="img-fluid rounded-5" />
      			</div>
      			<div className="container-fluid bg-dark text-light p-5 rounded-5">
      				<h1 className="bg-dark">MERN Stack Developer</h1>
      				<hr className="border-3 w-25" />
      				<p className="bg-dark">A full-stack developer driven to engineer comprehensive both front and back-end technologies seamlessly.</p>
      			</div>
      		</div>
      	</div>
      	<div className="m-2 col-lg-4" id="card1">
      		<div className="bg-dark h-100 col p-10 rounded-5">
      			<div className="container-fluid bg-transparent p-1">
      				<img src="https://c4.wallpaperflare.com/wallpaper/548/527/820/space-shuttle-shuttle-smoke-dark-wallpaper-thumb.jpg" alt="UI/UX" className="img-fluid rounded-5" />
      			</div>
      			<div className="container-fluid bg-dark text-light p-5 rounded-5">
      				<h1 className="bg-dark"> UI/UX Designer</h1>
      				<hr className="border-3 w-25" />
      				<p className="bg-dark">A passionate UI/UX designer on a mission to craft digital experiences that blend form and function seamlessly.</p>
      			</div>
      		</div>
      	</div>
      	<div className="m-2 col-lg-4" id="card1">
      		<div className="bg-dark h-100 col p-10 rounded-5">
      			<div className="container-fluid bg-transparent p-1">
      				<img src="https://c4.wallpaperflare.com/wallpaper/596/453/207/digital-digital-art-artwork-illustration-simple-hd-wallpaper-thumb.jpg" alt="UI/UX" className="img-fluid rounded-5" />
      			</div>
      			<div className="container-fluid bg-dark text-light p-5 rounded-5">
      				<h1 className="bg-dark">Gaming Geek</h1>
      				<hr className="border-3 w-25" />
      				<p className="bg-dark">A passionate gaming enthusiast on a quest to create immersive digital experiences that seamlessly blend excitement and functionality.</p>
      			</div>
      		</div>
      	</div>
      </div>
      <div className="container-fulid bg-dark d-flex mt-auto" id="quote">
      <div class="container mt-5 bg-transparent d-block">
        <blockquote class="blockquote bg-transparent align-items-center">
        <h3 className="bg-transparent text-dark bold">FAVOURITE QUOTE</h3>
            <h3 class="bg-transparent mt-2 text-dark" id="q">"I CAN DO THIS ALL DAY"</h3>
            <p class="blockquote-footer mt-2 bg-transparent text-dark">Steve Rogers</p>
        </blockquote>
    </div>
    </div>
    </>
  );
}

export default Home;
