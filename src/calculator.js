import React, { useState } from "react";
import ReactDOM from "react-dom";

const Calculator = () => {
	const [calc, setCalc] = useState("");
	const digits = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
	const ops = new Set(["+", "-", "/", "*", "%"]);

	const handleClick = (evt) => {
		evt.preventDefault();
		const text = evt.target.innerText;

		if (calc.length === 0) {
			if (ops.has(text)) return;
		}

		setCalc(calc + text);
		document.querySelector(".output").innerText = evt.target.innerText;
	};

	const handleSubmit = (nums) => {
		const arr = [];
		let num = "";

		nums = nums.split("").map((ele) => {
			if (digits.has(+ele)) return +ele;
			return ele;
		});

		for (let i = 0; i < nums.length; i++) {
			let val = nums[i];

			if (digits.has(val)) {
				num += val;
			} else {
				arr.push(+num);
				arr.push(val);
				num = "";
			}

			if (i === nums.length - 1) {
				arr.push(+num);
			}
		}

		let result = arr[0];

		for (let i = 1; i < arr.length; i++) {
			if (arr[i] === "+") {
				i++;
				result += arr[i];
			} else if (arr[i] === "-") {
				i++;
				result -= arr[i];
			} else if (arr[i] === "/") {
				i++;
				result /= arr[i];
			} else if (arr[i] === "*") {
				i++;
				result *= arr[i];
			} else {
				i++;
				result %= arr[i];
			}
		}

		return calc + " = " + result;
	};

	return (
		<>
			<h1>Calculator</h1>
			<h2 class="output">Output goes here</h2>
			<div class="container">
				<div class="row">
					<button onClick={handleClick}>1</button>
					<button onClick={handleClick}>2</button>
					<button onClick={handleClick}>3</button>
				</div>

				<div class="row">
					<button onClick={handleClick}>4</button>
					<button onClick={handleClick}>5</button>
					<button onClick={handleClick}>6</button>
				</div>

				<div class="row">
					<button onClick={handleClick}>7</button>
					<button onClick={handleClick}>8</button>
					<button onClick={handleClick}>9</button>
				</div>

				<div class="row">
					<button onClick={handleClick}>0</button>
					<button onClick={handleClick}>+</button>
					<button onClick={handleClick}>-</button>
				</div>

				<div class="row">
					<button onClick={handleClick}>/</button>
					<button onClick={handleClick}>*</button>
					<button onClick={handleClick}>%</button>
				</div>
				<button
					class="clear"
					onClick={() => {
						document.querySelector(".output").innerText = "Output goes here";
						setCalc("");
					}}
				>
					C
				</button>
				<button
					class="submit"
					onClick={() => {
						document.querySelector(".output").innerText = handleSubmit(calc);
						setCalc("");
					}}
				>
					Submit
				</button>
			</div>
		</>
	);
};

ReactDOM.render(<Calculator />, document.querySelector(".calculator"));
