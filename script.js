

// ==========================
function iterateThroughStudents() {
    // loop through students, print them out, add eventListeners to make them clickable
    // mainArray(myDojo);

    // myDojo = [];
    tmp = document.getElementById('populatePage');
    tmp.innerHTML = "";

    populateStudentObj('5281588390', 'sam', 'brown', 'brown green');
    pushStudent();

    populateStudentObj('2489558741', 'leo', 'green', 'black')
    pushStudent();

    populateStudentObj('9173578387', 'tim', 'purple blue', 'green')
    pushStudent();

    myDojo.forEach((item, index) => {
        makeFrontPageCards(item.randomID, item.name, item.belt, item.stripes)
    });
    // loopThroughToPromote(myDojo[0].randomID);
    myDojo.forEach((item, index) => {
        document.getElementById(myDojo[index].randomID).addEventListener('click', () => {
            // debugger;
            loopThroughToPromote(myDojo[index].randomID)
        });

    }); 
   
}


let savedIndex = 0;
function loopThroughToPromote(id) {
    // promote Page, populate current Student status and apply new status

    myDojo.forEach((item, index) => {
        if (item.randomID == id) {
            console.log(item.randomID)
            savedIndex = index;
            // debugger;
        }
    });
    makePromotePage()
    document.getElementById('beltName').innerText = myDojo[savedIndex].belt;
    document.getElementById('studentName').innerText = myDojo[savedIndex].name;
    if (myDojo[savedIndex].stripes.includes('brown'))
        document.getElementById('brownCheckbox').checked = true;
    if (myDojo[savedIndex].stripes.includes('green'))
        document.getElementById('greenCheckbox').checked = true;
    if (myDojo[savedIndex].stripes.includes('black'))
        document.getElementById('blackCheckbox').checked = true;
    if (myDojo[savedIndex].stripes.includes('red'))
        document.getElementById('redCheckbox').checked = true;
}

// ===================
function makeFrontPageCards(randomID, name, belt, stripes) {
    // make the Student cards, on dashboard

    let tmp = document.getElementById('populatePage')

    tmp = document.getElementById('populatePage')
    tmp.innerHTML += ["<div class='$ md:margin-top[40px]'><div class='$ md:padding[10px]  md:border-radius[10px] md:margin[auto] md:width[70%] md:[w3-card-2] md:font-size[40px]'><div class='$ md:[w3-grey] md:padding[10px] md:border-radius[10px]'>",
        "<div id='",
        // randomID
        , "' class='$ md:color[white]'>",
        name,
        "</div>",
        "</div><div>"
        , belt,
        "</div><div class='$ md:margin-top[10px]'>"
        , stripes,
        "</div><div><button id='",randomID,"'>Promote</button><button>Notes</button></div></div></div>"].join("");
}

function makePromotePage() {
    // populate a Student OBJ, and change it's stripes/belts
    // let tmp = document.getElementById('studentContainer')

    // tmp = document.getElementById('studentContainer')
    // tmp.innerHTML = "<div class='$ md:margin-top[40px]'><div class='$ md:padding[10px]  md:border-radius[10px] md:margin[auto] md:width[70%] md:[w3-card-2] md:font-size[40px]'>    <div class='w3-dropdown-hover'> <button class='w3-button'>Dropdown</button><div class='w3-dropdown-content w3-bar-block w3-card-4' ><a href='#' class='w3-bar-item w3-button'>Link 1</a><a href='#' class='w3-bar-item w3-button'>Link 2</a><a href='#' class='w3-bar-item w3-button'>Link 3</a></div ></div></div></div>"

    document.getElementById('studentContainer').style['display'] = 'block';
    document.getElementById('populatePage').style['display'] = 'none';

    let tmp = document.getElementById('studentContainer')

    tmp = document.getElementById('studentContainer')
    tmp.innerHTML = ["<div class='$ md:margin-top[40px]'><div class='$ md:padding[10px]  md:border-radius[10px] md:margin[auto] md:width[70%] md:[w3-card-2] md:font-size[15px]'><div class='$ md:[w3-grey]' id='studentName'></div>",
        "<div class='$ md:display[flex]>",
        "<div>",
        "<div class='$ md:width[50%]'>",
        "<div class='w3-dropdown-hover'>",
        "<button id='beltButton' class='w3-button md:width[40px] md:font-size[20px]' id='getBelt'>Dropdown</button><div class='w3-dropdown-content w3-bar-block w3-card-4' ><a href='#' id='white Belt' class='w3-bar-item w3-button'>White</a><a href='#' id='white yellow Belt' class='w3-bar-item w3-button'>White Yellow</a><a href='#' id='yellow Belt' class='w3-bar-item w3-button'>Yellow</a><a href='#' id='yellow orange Belt' class='w3-bar-item w3-button'>Yellow Orange</a><a href='#' id='orange Belt' class='w3-ba r-item w3-button'>Orange</a><a href='#' id='orange purple Belt' class='w3-bar-item w3-button'>Orange Purple</a><a href='#' id='purple Belt' class='w3-bar-item w3-button'>Purple</a><a href='#' id='purple blue Belt' class='w3-bar-item w3-button'>Purple Blue</a><a href='#' id='blue Belt' class='w3-bar-item w3-button'>Blue</a><a href='#' id='blue green Belt' class='w3-bar-item w3-button'>Blue Green</a><a href='#' id='green Belt' class='w3-bar-item w3-button'>Green</a><a href='#' id='green brown Belt' class='w3-bar-item w3-button'>Green Brown</a><a href='#' id='brown Belt' class='w3-bar-item w3-button'>Brown</a><a href='#' id='black Belt' class='w3-bar-item w3-button'>Black</a></div></div>",
        , "<div class='$ md:width[50%] md:margin[auto]' id='beltName'></div>",
        "</div>"
        , "<div><label class='checkbox-inline'><input id='greenCheckbox' type='checkbox' name='checkbox1'>Green</label><label class='checkbox-inline'><input id='brownCheckbox' type='checkbox' name='checkbox2'>Brown</label><label class='checkbox-inline'> <input id='blackCheckbox' type='checkbox' name='checkbox3'>Black</label><label class='checkbox-inline'><input id='redCheckbox' type='checkbox' name='checkbox4'>Red</label></div>"
        , "<button id='saveBeltInfo'>Save</button>"
        , "</div>"
        , "</div>",
        , "</div>",
    ].join('');

    makeBeltsWork();

    // document.getElementById('saveBeltInfo').addEventListener('click', ()=>{
    //     myDojo[savedIndex].belt
    // });
}
function makeBeltsWork() {
    // function that makes drop down and seleteced stripes work
    const beltArray = ['white Belt', 'white yellow Belt', 'yellow Belt', 'yellow orange Belt', 'orange Belt', 'orange purple Belt', 'purple Belt', 'purple blue Belt', 'blue Belt', 'blue green Belt', 'green Belt', 'green brown Belt', 'brown Belt', 'black Belt'];
    beltArray.forEach((item, index) => {
        document.getElementById(item).addEventListener('click', () => {
            console.log(item);
            document.getElementById('beltName').innerText = item;
            debugger;
            myDojo[savedIndex].belt = item;
        });
    });
    myDojo[savedIndex].stripes = '';
    const checkboxes = ['greenCheckbox', 'brownCheckbox', 'blackCheckbox', 'redCheckbox'];
    document.getElementById('saveBeltInfo').addEventListener('click', () => {
        checkboxes.forEach((item, index) => {
            var checkbox = document.getElementById(item).checked;
            if (document.getElementById(item).checked == true) {
                console.log('checked:', item);
                debugger;
                myDojo[savedIndex].stripes += item+" ";
            }

        });
    });
}


// ==========================
let myDojo = [];
// function mainArray(myDojo){
//   myDojo.push(['name', myDojo]);
// }

function pushStudent() {
    myDojo.push(studentObj);
    studentObj = {};
}

let studentObj = {};
function populateStudentObj(randomID, name, belt, stripes) {
    studentObj['randomID'] = randomID;
    studentObj['name'] = name;
    studentObj['belt'] = belt;
    studentObj['stripes'] = (stripes);

    //   pushStudent();
}
// ==========================
// making buttons work
function makeButtonsWork() {
    document.getElementById('home').addEventListener('click', () => {
        document.getElementById('studentContainer').style['display'] = 'none';
        document.getElementById('populatePage').style['display'] = 'block';
        myDojo = []; 
        iterateThroughStudents();

    });

}

// ==========================
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomNumber;
}

// window.onload = function () {

    makeButtonsWork();
// }

//   TODO
//  - make home button work
//  - make a new student OBJ
//  - store in Dojo Array
//  - save to Local Storage
//  - retrieve, populate in HTML, and eventListener it
