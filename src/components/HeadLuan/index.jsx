import React, { Component } from 'react';
import { 
	Luan
} 							from './styled.jsx';

class HeadLuan extends Component {

	//Chama os eventos quando inicia o componente.
	componentWillMount(){
		document.addEventListener( "keydown", this._PressKey.bind( this ) );
	}

	//Case para selecionar os movimentos com base na tecla.
	_PressKey( e ){
		if( e.keyCode === 37 ) this._addMove( 'left' );
		if( e.keyCode === 39 ) this._addMove( 'rigth' );
	}

	//Movimento para esquerda
	_addMove( direction ){
		
		let HeadLuan 		= document.getElementById( "luan" ),
			newPosition 	= parseInt( HeadLuan.style.left );
			newPosition 	= direction === 'left' ? newPosition - 5 : newPosition + 5;

			//Garante que a cabeça não irá para fora do campo de visão.
			newPosition 	= newPosition < 0 ? 0 : newPosition;
			newPosition 	= newPosition > 88 ? 88 : newPosition;

			HeadLuan.style.left = newPosition + '%';
	}

	render() {
		return(
			<Luan id="luan" style={{left: '43%'}}></Luan>
		);
	}
}

export default HeadLuan;