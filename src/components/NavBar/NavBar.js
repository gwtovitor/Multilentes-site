// import Image from 'next/image';
import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
import styles from './navBar.module.scss';

export default function NavBar() {
	// const props = {
    //     align:'left',
	// 	items: [
	// 		{ text: 'Home', link: '/' },
	// 		{ text: 'Doc', link: '#docs' },
	// 		{ text: 'Custom', link: '#custom-bar' },
	// 		{ text: 'Contact', link: '#contact' },
	// 	],
	// 	logo: {
	// 		img: '/assets/logo.png', // Caminho da imagem dentro de `public/`
	// 		link: '/',
	// 	},
    //     linkStyles: {
    //         color: 'blue'
    //       },
	// 	style: {
	// 		barStyles: { background: '#FFFFFF' },
	// 		sidebarStyles: {
    //             background: 'green',
    //             buttonColor: 'white'
    //           },
	// 	},
	// };
    const props = {
		items: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Doc',
				link: '#docs',
			},
			{
				text: 'Custom',
				link: '#custom-bar',
			},
			{
				text: 'Contact',
				link: '#contact',
			},
		],
		logo: {
			// link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavM-2nVnS5cJV5PgcMHYoyZLE6f6eKVhugg&s',
            // text: 'http://localhost:3000/assets/logo.png'
            img: '/assets/logo.png'
		},
		style: {
			barStyles: {
				background: 'white',
                buttonColor: "blue"
			},
			sidebarStyles: {
				background: '#000',
				buttonColor: '#000',
			}
		},
	};

	return (
		<div className={styles.navBar}>
			<Navbar {...props} />
		</div>
	);
}
