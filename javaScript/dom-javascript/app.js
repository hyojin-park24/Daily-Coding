// document.body.children[1].children[0].href = 'https://google.com';

// console.log(document);
// console.dir(document);

// let anchorElement= document.getElementById('external-link');
// anchorElement.href = 'https://google.com';
//
// anchorElement = document.querySelector('a'); // a { color:red }
// anchorElement = document.querySelector('p a'); // p a { color:red }
// anchorElement = document.querySelector('#external-link'); // p a { color:red }
//
// anchorElement.href = 'https://naver.com';

// 1.
//let h1Element = document.getElementsByClassName('intro-text');
// let h1Element = document.body.firstElementChild;
// h1Element = document.body.children[0];
//
// console.dir(h1Element);
//
// // 2.
// console.dir(h1Element.parentElement);       // 부모 요소 엑세스
//
// console.dir(h1Element.previousElementSibling);     // 형제 요소 엑세스
// console.dir(h1Element.nextElementSibling);  // 형제 요소 엑세스
//
// // 3.
// h1Element = document.getElementById('first-title');
//
// console.dir(h1Element);
//
// // 4.
// let secondParagraphElement = document.querySelector('.second-paragraph');
//
// console.dir(secondParagraphElement);
//
// // 5.
// secondParagraphElement.textContent = 'Change Text!';

// ADD AN ELEMENT

let newAnchorElement  = document.createElement('a');    // 메모리에만 저장 되어있음
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'Leads to Google!';

let firstParagraph = document.querySelector('.second-paragraph');
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS

let firstH1Element = document.querySelector('h1');


firstH1Element.remove();

// firstH1Element.parentElement.removeChild(firstH1Element);   // for older browser (window explore)

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);
