let singleStudent = {};
function makeOneStudentObj(name, age, beltRank,) {
    singleStudent['name'] = name;
    singleStudent['age'] = age;
    singleStudent['beltRank'] = beltRank;
}

makeOneStudentObj('sam', '12', ['whiteYellow', 'brown'])

let dynamicAttributes = ["md:margin-top[40px]", "md:display[flex] md:align-items[center ]"];
// let combo = dynamicAttributes.join(' ');
let innerCustomHTML = ["<div> class='w3-card-2' >", "hello", "</div>"];
let combo2 = innerCustomHTML.join(' ');

// debugger;
function printSingleStudent() {
    // debugger;       
    applyDynamicAttributes(dynamicAttributes, 'studentContainer', "<div>hello</div>");
    // debugger;       
}

// ===================
function makeFrontPageCards() {
    let tmp = document.getElementById('studentContainer')

    tmp = document.getElementById('studentContainer')
    tmp.innerHTML = "<div class='$ md:margin-top[40px]'><div class='$ md:padding[10px]  md:border-radius[10px] md:margin[auto] md:width[70%] md:[w3-card-2] md:font-size[40px]'><div class='$ md:[w3-grey] md:padding[10px] md:border-radius[10px]'>Sam Smith</div><div>WhiteBelt</div><div>Brown Stripe</div><div><button>Promote</button><button>Notes</button></div></div></div>"
}

function makePromotePage() {
    // let tmp = document.getElementById('studentContainer')

    // tmp = document.getElementById('studentContainer')
    // tmp.innerHTML = "<div class='$ md:margin-top[40px]'><div class='$ md:padding[10px]  md:border-radius[10px] md:margin[auto] md:width[70%] md:[w3-card-2] md:font-size[40px]'>    <div class='w3-dropdown-hover'> <button class='w3-button'>Dropdown</button><div class='w3-dropdown-content w3-bar-block w3-card-4' ><a href='#' class='w3-bar-item w3-button'>Link 1</a><a href='#' class='w3-bar-item w3-button'>Link 2</a><a href='#' class='w3-bar-item w3-button'>Link 3</a></div ></div></div></div>"

    let tmp = document.getElementById('studentContainer')

    tmp = document.getElementById('studentContainer')
    tmp.innerHTML = "<div class='$ md:margin-top[40px]'><div class='$ md:padding[10px]  md:border-radius[10px] md:margin[auto] md:width[70%] md:[w3-card-2] md:font-size[40px]'>    <div class='w3-dropdown-hover'> <button class='w3-button'>Dropdown</button><div class='w3-dropdown-content w3-bar-block w3-card-4' ><a href='#' class='w3-bar-item w3-button'>Link 1</a><a href='#' class='w3-bar-item w3-button'>Link 2</a><a href='#' class='w3-bar-item w3-button'>Link 3</a></div ></div></div></div>"



}