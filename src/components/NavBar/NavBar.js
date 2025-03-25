// import Image from 'next/image';
import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
import styles from './navBar.module.scss';

export default function NavBar() {
	const props = {
		items: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Produtos',
				link: '#brandings',
			},
			{
				text: 'Onde Estamos',
				link: '#findus',
			},
			{
				text: 'Contato',
				link: '#contact',
			},
		],
		logo: {
			img: '/assets/logo.png',
		},
		style: {
			barStyles: {
				background: '#ffffff', // Branco
				buttonColor: '#007bff', // Azul padrão Bootstrap
			},
			sidebarStyles: {
				background: '#ffffff', // Branco
				buttonColor: '#007bff', // Azul padrão Bootstrap
			},
			linkStyles: {
				color: '#007bff', // Azul para os textos dos links
				fontSize: '18px',
			},
		},
	};

	return (
		<div className={styles.navBar}>
			<Navbar  {...props} />
		</div>
	);
}
