import React from 'react'

const Footer = () => {
	const year = new Date()
	return <footer>Copyright &copy; {year.getFullYear()}, Dibash Thapa</footer>
}

export default Footer
