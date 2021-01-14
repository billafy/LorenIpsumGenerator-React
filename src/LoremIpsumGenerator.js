import React, {useState} from 'react';
import text from './data';
import './lorem.css';

const LoremIpsumGenerator = () => {
	const [numOfPar,setNumOfPar] = useState(0);
	const [lorems,setLorems] = useState([]);

	const generateLoremIpsum = (event) => {
		event.preventDefault();
		if(numOfPar<0)
			setLorems([]);
		else if(numOfPar>=text.length)
			setLorems(text);
		else
			setLorems(text.slice(0,numOfPar));
	}

	return (
		<>
			<h1 className='heading'>Lorem Ipsum Generator</h1>
			<form className='form' onSubmit={generateLoremIpsum}>
				<label htmlFor='numOfPar'>Paragraphs</label>
				<input type='number' name='numOfPar' id='numOfPar' value={numOfPar} onChange={(event)=>setNumOfPar(event.target.value)}/>
				<button type='submit'>Generate</button>
			</form>
			<section className='lorem'>
				{lorems.map((lorem) => {
						return <p>{lorem}</p>;
					})}
			</section>
		</>
	);
}

export default LoremIpsumGenerator;