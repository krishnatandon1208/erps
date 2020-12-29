import React, { useState } from 'react';

const allItems = [
	{ id: 'a', value: 'apple' },
	{ id: 'o', value: 'orange' },
	{ id: 'g', value: 'grapes' },
	{ id: 'p', value: 'pear' }
];

export default function App() {
	const [ items, setItems ] = useState(allItems);
	console.log(items);

	const addItem = () => {
		setItems([...items, allItems.find(i => !items.includes(i))]);
	}

	const removeItem = (item) => {
		setItems(items.filter(i => i !== item));
	}

	return (
		<div
			style={{
				height: 200,
				width: 400,
				backgroundColor: '#CCCCCC',
				borderRadius: 4,
				padding: 20
			}}
		>

			<button disabled={items.length >= allItems.length} onClick={addItem}>
				Add Item
			</button>
			<ul style={{ listStyle: 'none', paddingLeft: 0 }}>
				{items.map((item) => (
					<li key={item.value}>
						<label htmlFor={`${item.value}-input`}>{item.value}</label>
						<input id={`${item.value}-input`} defaultValue={item.value} />
						<button onClick={() => removeItem(item)}>Remove Item</button>
					</li>
				))}
			</ul>
		</div>
	);
}
