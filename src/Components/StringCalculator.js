import React, { useState } from 'react';

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const add = (numbers) => {
        if (numbers === '') return 0;

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            delimiter = parts[0].slice(2);
            numbers = parts[1];
        }

        const regex = new RegExp(`[${delimiter}\\n]`);
        const numberList = numbers.split(regex).map(Number);

        let total = 0;
        const negatives = [];

        numberList.forEach((num) => {
            if (num < 0) negatives.push(num);
            total += num;
        });

        if (negatives.length > 0) {
            throw new Error(`Negative Numbers Not Allowed ${negatives.join(',')}`);
        }

        return total;
    };

    const handleCalculate = () => {
        try {
            const total = add(input);
            setResult(total);
            setError('');
        } catch (e) {
            setError(e.message);
            setResult(null);
        }
    };

    return (
        <div class="card-container ">
        <div class="card card-container m-3 p-3 " style={{width:"600px"}}>

            <h1 className='mt-2 mb-2'>String Calculator</h1>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows="5"
                cols="5"
                class="form-control my-2"
                placeholder="Enter numbers"
            />
            <br />
            <button onClick={handleCalculate} class="btn btn-success">Calculate</button>
            {result !== null && <h2 className='mt-3 mb-3' style={{ color: 'blue' }}>Result: {result}</h2>}
            {error && <h2 className='mt-3 mb-3' style={{ color: 'red' }}>{error}</h2>}
        </div>
        </div>
    );
};

export default StringCalculator;