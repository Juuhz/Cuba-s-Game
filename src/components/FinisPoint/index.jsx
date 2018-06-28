import React, { Component } from 'react';
import { 
	Finis
} 							from './styled.jsx';

class FinisPoint extends Component{

	//Velocidades
	speeds = {
		rain: 500,
		points: 2000
	}

	componentDidMount(){

		//Inicia o Jogo com 1 Fini
		this._newFiniPoint();

		//Cria Rotina para colocar vários Finis
		setInterval( () => {
			this._newFiniPoint();
		}, this.speeds.points );

	}

	_newFiniPoint(){

		let Fini 		= document.getElementById( "PointMain" ),
			NewFini 	= Fini.cloneNode(true);

			//Remove class Hidden
			NewFini.classList.remove( "hidden" );

			//Muda tipo do doce
			NewFini.classList.add( this._RandomFini() );

			//Inicia o Point na tela com uma posicao aleatória
			NewFini.style.left = this._RandomPosition();
			document.getElementById( "MainWrapper" ).appendChild( NewFini );

			//Inicia o efeito "chuva" no Point
		let idInterval = setInterval( () => {
							
							//Efeito Chuva
							this._EffectRain( NewFini );

							//Verifica se o Fini foi comigo
							if( this._CheckEaten( NewFini ) )
								clearInterval( idInterval ); //Se sim, para o evento Chuva

							this._CheckLoser( NewFini ); //Verifica se algum fini passou pela cabeça

						}, this.speeds.rain);
	}

	//Retorna uma posição aleatória
	_RandomPosition(){
		return Math.floor((Math.random() * 93) + 1) + '%';
	}

	//Retorna uma classe aleatória para modificar o doce do fini
	_RandomFini(){
		return 'fini' + Math.floor((Math.random() * 6) + 1);
	}

	//Efeito "chuva" para o Point ficar caindo na tela
	_EffectRain( Fini ){

		//Calcula nova posição
		let newPosition = parseInt( Fini.style.top ) + 4;

		//Garante que a cabeça não irá para fora do campo de visão.
		newPosition 	= newPosition > 98 ? 98 : newPosition;

		//Adiciona nova posição
		Fini.style.top = newPosition + '%';

	}

	//Verifica se o Fini foi comido
	_CheckEaten( Fini ){

		//Pega a posição atual da cabeça
		let HeadLuan 			= document.getElementById( "luan" ),
			PositionHeaderY 	= HeadLuan.offsetTop,
			PositionHeaderX 	= HeadLuan.offsetLeft;

		//Pega posição atual do Fini
		let PositionPointY 		= Fini.offsetTop,
			PositionPointX 		= Fini.offsetLeft;

		//Pega a diferenca entre cada posição X e Y para ferificar se elas se cruzam
		let DiffY 				= PositionPointY - PositionHeaderY,
			DiffX 				= PositionPointX - PositionHeaderX;

			//Caso elas se cruzarem, o elemento é destruido ( para dar o efeito de comer )
			if( ( DiffY >= -26 && DiffY <= 51 ) && ( DiffX >= -10 && DiffX <= 30 ) ){
				Fini.parentNode.removeChild(Fini);
				return true;
			}

		return false;

	}

	//Verifica se o Fini chegou ao final da tela, ou seja, não foi comigo ( jogo perdido )
	_CheckLoser( Fini ){

		let PositionFini = parseInt( Fini.style.top );

		//Para o jogo caso algum Fini tenha passado pela Cabeça
		if( PositionFini >= 98 ) {

			//Para o jogo
			for( let i = 0; i < 200; i++ ){
				window.clearInterval( i );
    		}

    		alert( 'Você Perdeu' );
		}

	}

	render(){
		return(
			<Finis className="point hidden" id="PointMain" style={{left: '0%',top: '0%'}}></Finis>
		);
	}
}

export default FinisPoint;