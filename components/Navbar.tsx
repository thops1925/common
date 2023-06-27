import React from 'react';
import Image from 'next/image';
const Navbar = () => {
	return (
		<nav className='flex justify-between py-5 px-8 border-b border-nav-border gap-4'>
			<div className='flex-1'>
				<Link></Link>
				<Image src='/thops3.png' alt='logo' width={116} height={43} alt='logo' className='blur-none' />
			</div>
		</nav>
	);
};

export default Navbar;
