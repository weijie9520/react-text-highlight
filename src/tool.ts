// 将HTML转义为实体
export function escape(html: string): string {
  var elem = document.createElement('div');
  var txt = document.createTextNode(html);
  elem.appendChild(txt);
  return elem.innerHTML;
}
// 将实体转回为HTML
export function unescape(str: string): string {
  var elem = document.createElement('div');
  elem.innerHTML = str;
  return elem.innerText || elem.textContent || '';
}


/**
 * 文本复制
 */

export function classNames(...arg: any[]): string {
  // @ts-ignore
  const classNameMap = arg.reduce((classNameMap, name) => {
    classNameMap as object;
    if (typeof name === 'string') {
      classNameMap[name] = true;
    } else if (typeof name === 'object') {
      Object.keys(name).forEach(key => {
        if (name[key]) {
          classNameMap[key] = true;
        }
      });
    }
    return classNameMap;
  }, {});

  return Object.keys(classNameMap).join(' ');
}


export function getElementLeft(element: any, topNode: any) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;
  while (current !== null && current !== topNode) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

// 距离页面顶部的距离
export function getElementTop(element: any, topNode: any) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  while (current !== null && current !== topNode) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

/**
 * 文本复制
 */

export function copyToShearPlate(str: string): void {
  var input = document.createElement('input');
  input.type = 'text';
  input.value = str;
  document.body.appendChild(input);
  // HTMLInputElement.select() 方法选中一个 <textarea>
  // 元素或者一个 带有 text 字段的 <input> 元素里的所有内容。
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}
