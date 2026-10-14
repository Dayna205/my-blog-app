import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-text"><span className="logo-accent">The</span><span> Out<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(246, 243, 237, 1.0)"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg></span>d<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(253, 202, 226, 0.8)"><path d="M600-120q-118 0-210-67T260-360H120v-80h122q-3-24-2.5-44.5T242-520H120v-80h140q38-106 130-173t210-67q69 0 130.5 24.5T840-748l-57 56q-37-32-83.5-50T600-760q-85 0-152 44.5T347-600h253v80H323q-4 27-3 47.5t3 32.5h277v80H347q34 71 101 115.5T600-200q53 0 99.5-18t83.5-50l57 56q-48 43-109.5 67.5T600-120Z"/></svg><span className="logo-text1">   Blogger</span></Link>
      <nav aria-label="Main navigation">
        <Link to="/">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}

function Main() {
  return (<>
    <main>
      <div className="page-wrapper">
        <div className="post-slider">
          <h1 className="slider-title">Trending Posts</h1>
          <i className="fas fa-chevron-left prev" aria-hidden="true"></i>
          <i className="fas fa-chevron-right next" aria-hidden="true"></i>

          <div className="post-wrapper">

            <div className="post">
              <div className="slider-image" aria-hidden="true" />
              <div className="post-info">
                <h4><a href="single.html">One day your life will flash before your eyes</a></h4>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 8, 2019</i>
              </div>
            </div>

            <div className="post">
              <div className="slider-image" aria-hidden="true" />
              <div className="post-info">
                <h4><a href="single.html">One day your life will flash before your eyes</a></h4>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 8, 2019</i>
              </div>
            </div>

            <div className="post">
              <div className="slider-image" aria-hidden="true" />
              <div className="post-info">
                <h4><a href="single.html">One day your life will flash before your eyes</a></h4>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 8, 2019</i>
              </div>
            </div>

            <div className="post">
              <div className="slider-image" aria-hidden="true" />
              <div className="post-info">
                <h4><a href="single.html">One day your life will flash before your eyes</a></h4>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 8, 2019</i>
              </div>
            </div>

            <div className="post">
              <div className="slider-image" aria-hidden="true" />
              <div className="post-info">
                <h4><a href="single.html">One day your life will flash before your eyes</a></h4>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 8, 2019</i>
              </div>
            </div>

            <div className="post">
              <div className="slider-image" aria-hidden="true" />
              <div className="post-info">
                <h4><a href="single.html">One day your life will flash before your eyes</a></h4>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 8, 2019</i>
              </div>
            </div>
          </div>
        </div>

        <div className="content clearfix">
          <div className="main-content">
            <h1 className="recent-post-title">Recent Posts</h1>

            <div className="post clearfix">
              <img src="images/image_3.png" alt="" className="post-image" />
              <div className="post-preview">
                <h2><a href="single.hmtl">The strongest and sweetest songs yet remain to be sung</a></h2>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 11, 2019</i>
                <p className="preview-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem optio possimus a inventore maxime laborum.
                </p>
                <a href="single.html" className="btn read-more">Read More</a>
              </div>
            </div>

            <div className="post clearfix">
              <img src="images/image_4.png" alt="" className="post-image" />
              <div className="post-preview">
                <h2><a href="single.hmtl">The strongest and sweetest songs yet remain to be sung</a></h2>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 11, 2019</i>
                <p className="preview-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem optio possimus a inventore maxime laborum.
                </p>
                <a href="single.html" className="btn read-more">Read More</a>
              </div>
            </div>

            <div className="post clearfix">
              <img src="images/image_3.png" alt="" className="post-image" />
              <div className="post-preview">
                <h2><a href="single.hmtl">The strongest and sweetest songs yet remain to be sung</a></h2>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 11, 2019</i>
                <p className="preview-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem optio possimus a inventore maxime laborum.
                </p>
                <a href="single.html" className="btn read-more">Read More</a>
              </div>
            </div>

            <div className="post clearfix">
              <img src="images/image_3.png" alt="" className="post-image" />
              <div className="post-preview">
                <h2><a href="single.hmtl">The strongest and sweetest songs yet remain to be sung</a></h2>
                <i className="far fa-user"> Awa Melvine</i>
                &nbsp;
                <i className="far fa-calendar"> Mar 11, 2019</i>
                <p className="preview-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem optio possimus a inventore maxime laborum.
                </p>
                <a href="single.html" className="btn read-more">Read More</a>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="section search">
              <h2 className="section-title">Search</h2>
              <form action="index.html" method="post">
                <input type="text" name="search-term" className="text-input" placeholder="Search..." />
              </form>
            </div>

            <div className="section topics">
              <h2 className="section-title">Topics</h2>
              <ul>
                <li><a href="#">Poems</a></li>
                <li><a href="#">Quotes</a></li>
                <li><a href="#">Fiction</a></li>
                <li><a href="#">Biography</a></li>
                <li><a href="#">Motivation</a></li>
                <li><a href="#">Inspiration</a></li>
                <li><a href="#">Life Lessons</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

function About() {
  return (
    <main>
      <h1>About Awa Inspires</h1>
      <p>This is the about page of the application.</p>
    </main>
  )
}

function SimplePage({ title }) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  )
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text"><span>Awa</span>Inspires</h1>
            <p>
              AwaInspires is a fictional blog conceived for the purpose of a tutorial on YouTube.
              However, Awa has a blog called pieceofadvice.org where he writes truly inspiring stuff.
            </p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
              <span><i className="fas fa-envelope"></i> &nbsp; info@awainspires.com</span>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <br />
            <ul>
              <a href="#">
                <li>Events</li>
              </a>
              <a href="#">
                <li>Team</li>
              </a>
              <a href="#">
                <li>Mentores</li>
              </a>
              <a href="#">
                <li>Gallery</li>
              </a>
              <a href="#">
                <li>Terms and Conditions</li>
              </a>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact us</h2>
            <br />
            <form action="index.html" method="post">
              <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
              <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
              <button type="submit" className="btn btn-big contact-btn">
                <i className="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; codingpoets.com | Designed by Awa Melvine
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<SimplePage title="Services" />} />
        <Route path="/login" element={<SimplePage title="Login" />} />
        <Route path="/dashboard" element={<SimplePage title="Dashboard" />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
