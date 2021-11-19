import _ from 'lodash'

function component() {
  const el = document.createElement('div');
  const arry = ['hello', 'webpack'];
  el.innerHTML = _.join(arry, ' ');
  return el;
}

document.body.appendChild(component());


