function component() {
  const el = document.createElement('div');
  const arry = ['hello', 'webpack'];
  el.innerHTML = _.join(arry, ' ');
  return el;
}

document.body.appendChild(component());

console.log('hello');

console.log('test2');
