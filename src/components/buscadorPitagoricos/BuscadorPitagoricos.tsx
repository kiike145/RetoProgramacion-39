import React, { useState } from 'react'
import ListaPitagoricos from '../listaPitagoricos/ListaPitagoricos';

const BuscadorPitagoricos = () => {

	const [limit, setLimit] = useState<number>(1)
	const [showErrorMsge, setShowErrorMsge] = useState(false)

	const onInputChage = (event : React.ChangeEvent<HTMLInputElement>) => {

		parseInt(event.target.value) > 0
			? (
					setShowErrorMsge(false),
					setLimit(parseInt(event.target.value)) 
				)
			: (
					setShowErrorMsge(true)
				)
	}

	const onHandleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
	<>
		<form onSubmit={onHandleSubmit}>
			<input 
				type="number" 
				onChange={onInputChage}
				value={limit}
			/>
		</form>
		{showErrorMsge && <p>Únicamente se admiten valores mayores a 0</p>}
		<ListaPitagoricos limite={limit}/>
	</>
	)
}

export default BuscadorPitagoricos