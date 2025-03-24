import React, { useState } from 'react';
import axios from 'axios';
import styles from './talkingUs.module.scss';
import { Mail, Msg } from '../utils/icons';
export default function TalkingUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post('/api/sendEmail', formData);
			console.log(response.data);
			alert('Mensagem enviada com sucesso!');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			console.error(
				'Erro ao enviar o e-mail:',
				error.response?.data || error.message
			);
			alert('Erro ao enviar a mensagem.');
		}
	};

	return (
		<div id="contact" className={styles.talkingUs}>
			<div className={styles.wrapperForm}>
				<h1>Fale conosco</h1>
				<div className={styles.group}>
					<Mail /> <span>multilentes@multilentes.com.br</span>
				</div>
				<div className={styles.group}>
					<Msg />
					<span>(51) 993.483.947</span>
				</div>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.inputWrapper}>
						<input
							type="text"
							name="name"
							placeholder="Seu nome"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Seu email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<textarea
						name="message"
						placeholder="Sua mensagem"
						value={formData.message}
						onChange={handleChange}
						required
					/>
					<button type="submit" className={styles.btn}>
						Enviar
					</button>
				</form>
			</div>
			<div className={styles.imgWrapper}>
				<img src="/assets/HomeView/1.jpg" alt="Contato" />
			</div>
		</div>
	);
}
