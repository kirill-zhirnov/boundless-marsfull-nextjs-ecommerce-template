import {ReactNode} from 'react';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {faShippingFast} from '@fortawesome/free-solid-svg-icons/faShippingFast';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function MarsTopNav() {
	return (
		<nav className={'mars-top-nav'}>
			<div className={'container-xxl mars-top-nav__container'}>
				<div className={'mars-top-nav__contacts'}>
					<Contact href={'tel:+18001234567'}
									 label={'+1 (800) 123-45-67'}
									 icon={<FontAwesomeIcon icon={faPhoneAlt} />}
					/>
					<Contact href={'https://api.whatsapp.com/send?phone=10001234567&text=hello'}
									 label={'+1 (000) 123-45-67'}
									 icon={<FontAwesomeIcon icon={faWhatsapp} />}
					/>
				</div>
				<div className={'mars-top-nav__note'}>
					Opening hours 9 a.m. - 6 p.m. <FontAwesomeIcon icon={faShippingFast} className={'text-theme-color ms-1'} />
				</div>
				<ul className={'mars-top-nav__menu list-unstyled'}>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/shipping'}>
							<a className='mars-top-nav__menu-link'>Shipping</a>
						</Link>
					</li>
					<li>
						<Link href={'/about'}>
							<a className='mars-top-nav__menu-link'>About</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

const Contact = ({href, label, icon}: {href: string, label: string, icon?: ReactNode}) => {
	return (
		<div className={'mars-top-nav__contact'}>
			{icon &&
			<a className={'mars-top-nav__contact-icon'} href={href}>{icon}</a>}
			<a className={'mars-top-nav__contact-txt'} href={href}>
				{label}
			</a>
		</div>
	);
};