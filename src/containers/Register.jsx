import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

class Register extends React.Component {

	state = {};

	handleChange = e => {
		console.log(e)
		console.log({ 
			name: e.target.name,
			value: e.target.value 
		});

		this.setState({
			[e.target.name]: e.target.value
		})
	};

	render() {
		return (
			<section className="register">
				<section className="register__container">
					<h2>Regístrate</h2>
					<form className="register__container--form">
						<input
							className="input"
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={this.handleChange}
							value={this.state.firstName}
						/>
						<input
							className="input"
							type="text"
							placeholder="Last name"
							name="lastName"
							onChange={this.handleChange}
							value={this.state.lastName}
						/>
						<input
							className="input"
							type="text"
							placeholder="Email"
							name="email"
							onChange={this.handleChange}
							value={this.state.email}
						/>

						<input
							className="input"
							type="password"
							placeholder="Contraseña"
							name="password"
							onChange={this.handleChange}
							value={this.state.password}
						/>

						<button className="button">Registrarme</button>

					</form>
					<Link to="/login">
						Iniciar sesión
                                        </Link>
				</section>
			</section>
		);
	}
};

export default Register;
