import React from 'react';
import MaskedInput from 'react-text-mask'
import styled from 'styled-components';

function Input({type, mask, placeholder}) {
  	return (
    	<Wrapper>
			<MaskedInput
				type={type}
				mask={mask}
				placeholder={placeholder}
				className='input-placeholder-text'
			/>
    	</Wrapper>
  	);
}

const Wrapper = styled.nav`
	margin: 20px 0 -10px;

	.input-placeholder-text {
		width: 100%;
		font-family: 'Jost';
		font-size: 16px;
		font-weight: 300;
		border: 1px solid var(--clr-primary-4);
		padding-left: 10px;
		::placeholder {
			color: var(--clr-primary-4);
		}
	}
`

export default Input;