const findPitagoricos = (limite:number) => {

	const listaPitagoricos:number[][] = []

	for (let i = 0; i < limite-1; i++) {
		for (let j = i+1; j < limite; j++) {
			for (let k = j+1; k <= limite; k++) {
				if ((Math.pow(i,2) + Math.pow(j,2)) === Math.pow(k,2)) {
					listaPitagoricos.push([i , j , k])
				}
			}
		}
	}

	return listaPitagoricos;
}


export {findPitagoricos}