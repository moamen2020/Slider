//  get Slider Itms 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slider
var sliderCount = sliderImages.length;

// Set Current Slid
var currentSlid = 1;

// Get Number ELement
var slideNumberELement = document.getElementById('slider-number');

// Previous And Next Button
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlid;
prevButton.onclick = prevSlid;



// Creat The main UL ELement
var paginationElement = document.createElement('ul');

// Set ID on Creat UL Element
paginationElement.setAttribute('id', 'pagination-ul');



for (let i = 1; i <= sliderCount; i++) {
    
    // Creat The LI
    var paginationItms = document.createElement('li');

    // Set Data In THe LI
    paginationItms.setAttribute('data-index', i)
    
    // Set Itms Content
    paginationItms.appendChild(document.createTextNode(i));

    // Append Itms To The Main UL List
    paginationElement.appendChild(paginationItms);
}


document.getElementById('indicators').appendChild(paginationElement);

// Get The New Creat Ul 
var paginationCreatul = document.getElementById('pagination-ul');

//  get Slider Itms 
var sliderpagination = Array.from(document.querySelectorAll('#pagination-ul li'));



// Checher Function
Checker();

// Next Slid Function
function nextSlid() {
    if (currentSlid >= sliderCount ) {
        
    }else {
        currentSlid++;
        Checker();
    }
}

// Previous Slid Function
function prevSlid() {
    if (currentSlid == 1 ) {
        
    }else {
        currentSlid--;
        Checker();
    }
}





// Creat The Checker Function 
function Checker() {

    // Set The Slider Number
    slideNumberELement.textContent = 'Slider # ' + currentSlid  + ' of ' + sliderCount ;

    removeAllActive();

    // Add CLass Active In Images
    sliderImages[currentSlid - 1].classList.add('active');

    // Add Class Active in li
    paginationElement.children[currentSlid - 1].classList.add('active');

    // Chech if Current Slide is The First
    if (currentSlid == 1) {
        prevButton.classList.add('disabled');

    }else {
        prevButton.classList.remove('disabled');
    }

    // Chech if Current Slide is The First
    if (currentSlid == sliderCount ) {
        nextButton.classList.add('disabled');

    }else {
        nextButton.classList.remove('disabled');
    }
    
}



// Remove  All Active Class From Images And Pagination Bulats
function removeAllActive() {
    
    // Remove All Active CLass In Images
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    })

    // Remove All Active Class In Pagination Bulats
    sliderpagination.forEach(function (bule) {
        bule.classList.remove('active');
    })

}