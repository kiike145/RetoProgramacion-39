import { useEffect, useState } from 'react'
import { findPitagoricos } from '../utils'

const ListaPitagoricos = ({limite} : {limite:number})  => {

	const [pitagoricos, setPitagoricos] = useState<number[][]>([])

	useEffect(() => {
		setPitagoricos(findPitagoricos(limite))	
	}, [limite])
	
	return (
		<>
			{
				pitagoricos.map((n, i) => (
					<p key={i}>{n.join('-')}</p>
				))
			}
		</>
	)
}

export default ListaPitagoricos