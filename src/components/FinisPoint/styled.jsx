import styled from 'styled-components';

export const Finis = styled.div`
	width: 30px;
	height: 30px;
	background: blue;
	position: absolute;
	top: 0%;
	left: 0%;
	-webkit-transition: all 0.8s ease-in-out;
	-moz-transition: all 0.8s ease-in-out;
	-o-transition: all 0.8s ease-in-out;
	transition: all 0.8s ease-in-out;

	background: url(/images/fini1.png) no-repeat center;

    &.fini1{ background: url(/images/fini1.png) no-repeat center; background-size: contain;}
    &.fini2{ background: url(/images/fini2.png) no-repeat center; background-size: contain;}
    &.fini3{ background: url(/images/fini3.png) no-repeat center; background-size: contain;}
    &.fini4{ background: url(/images/fini4.png) no-repeat center; background-size: contain;}
    &.fini5{ background: url(/images/fini5.png) no-repeat center; background-size: contain;}
    &.fini6{ background: url(/images/fini6.png) no-repeat center; background-size: contain;}

	&.hidden{
		display: none;
	}
`;