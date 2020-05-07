export const tamplate = (item) => {
  return `
      <li>
          <p>Name: ${item.name}</p>
          <p>Car: ${item.car}</p>
          <img height=220 src="${item.urlImage}" alt="" >
          <button type='button'>Delete</button>
      </li>
      `;
};
