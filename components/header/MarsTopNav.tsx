import {ReactNode} from 'react';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function MarsTopNav() {
	return (
		<nav className={'mars-top-nav'}>
			<div className={'mars-top-nav__contacts'}>
				<div className={'mars-top-nav__contact'}>
					<Contact href={'tel:+18001234567'}
									 label={'+1 (800) 123-45-67'}
									 icon={<FontAwesomeIcon icon={faPhoneAlt} />}
					/>
					<Contact href={'https://api.whatsapp.com/send?phone=10001234567&text=hello'}
									 label={'+1 (000) 123-45-67'}
									 icon={<FontAwesomeIcon icon={faWhatsapp} />}
					/>
				</div>
			</div>
		</nav>
	);
}

const Contact = ({href, label, icon}: {href: string, label: string, icon?: ReactNode}) => {
	return (
		<div className={'mars-top-nav__contact'}>
			{icon &&
			<a className={'mars-top-nav__contact-icon'}>{icon}</a>}
			<a className={'mars-top-nav__contact-txt'} href={href}>
				{label}
			</a>
		</div>
	);
};