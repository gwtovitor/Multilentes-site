import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './talkingUs.module.scss';
import { Mail, Msg, Phone2 } from '../utils/icons';
import ReCAPTCHA from 'react-google-recaptcha';

export default function TalkingUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [captchaValido, setCaptchaValido] = useState(null); // 👈 novo estado

	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleCaptchaChange = (value) => {
		setCaptchaValido(value); // 👈 atualiza se reCAPTCHA foi preenchido
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!captchaValido) {
			alert('Por favor, confirme o CAPTCHA antes de enviar.');
			return;
		}

		emailjs
			.sendForm(
				'service_o5jb08d',
				'template_bvx6xu3',
				formRef.current,
				'6yNv4dx1ER555Hsbh'
			)
			.then(
				(result) => {
					console.log('Email enviado com sucesso!', result.text);
					alert('Mensagem enviada com sucesso!');
					setFormData({ name: '', email: '', message: '' });
					setCaptchaValido(null); // reseta captcha
				},
				(error) => {
					console.error('Erro ao enviar email:', error.text);
					alert('Falha ao enviar a mensagem. Tente novamente.');
				}
			);
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
					<span>(51) 9.9348-3947</span>
				</div>
				<div className={styles.group}>
					<Phone2 />
					<span>(51) 3012-0226</span>
				</div>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className={styles.form}
				>
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
					<div className={styles.wrapperFooter}>
						<ReCAPTCHA
							sitekey={process.env.REACT_APP_RECATPCHA_KEY}
							onChange={handleCaptchaChange}
						/>
						<button
							type="submit"
							className={styles.btn}
							disabled={!captchaValido}
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
			<div className={styles.imgWrapper}>
				<img src="/assets/HomeView/1.jpg" alt="Contato" />
			</div>
		</div>
	);
}
