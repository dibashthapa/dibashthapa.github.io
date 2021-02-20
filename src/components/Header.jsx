import React from 'react'
import { Link } from 'gatsby'
import myImage from '../images/myImage.jpg'

const Header = () => {
	return (
		<>
			<header className="header-title">
				<Link to="/">
					<h2>Dibash Blogs</h2>
				</Link>
			</header>
			<aside className="author-info">
				<div className="img">
					<img src={myImage} alt="Dibash Thapa" className="profile-pic" />
				</div>
				<div className="text">
					<p>A personal blog by Dibash Thapa.</p>
					<ul className="social-media-links">
						<li>
							<a href="https://www.facebook.com/dibash.thapa55/" target="blank">
								<i className="fab fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/dibash_thapa" target="blank">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/dibashthapa" target="blank">
								<i className="fab fa-github"></i>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	)
}

export default Header
