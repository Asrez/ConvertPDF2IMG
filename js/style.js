
const getFileInput = document.querySelector(".input");
const boxConvert = document.querySelector(".main-box-convert");
const textAfterOutput = document.querySelector(".text-after-output");
const convertButton = document.querySelector(".convert-button");
const loadingConvert = document.querySelector(".loading-convert");
const inputDrop =document.querySelector(".input-drop");


function inpuDropAll(){
    const filenamePaswand1 = inputDrop.files[0].type;
    if(filenamePaswand1 === "application/pdf"){
        const specification = {
            filesize: inputDrop.files[0].size,
            filename: inputDrop.files[0].name,
        }
        textAfterOutput.classList.add("active2");
        addAfterTextOutput(specification);
        convertButton.addEventListener('click', ()=>{

                loadingConvert.classList.add("active3");
                const boxFill =document.querySelector(".box-fill").clientWidth;
                const boxnull =document.querySelector(".box-null").clientWidth;
                console.log(boxFill,boxnull)
                if(boxFill === boxnull){
                        addItemFile(specification); 
                }

        })
    }else{
        alert("the selcted file must be pdf")
    }
};
inputDrop.addEventListener('change', function(){
    inpuDropAll();
});
inputDrop.addEventListener('dragend', function(){
    inpuDropAll();
});

getFileInput.addEventListener("change", function(){
    const filenamePaswand = getFileInput.files[0].type;
    console.log(filenamePaswand)
    if(filenamePaswand === "application/pdf"){
        const specification = {
            filesize: getFileInput.files[0].size,
            filename: getFileInput.files[0].name,
        };
        textAfterOutput.classList.add("active2");
        addAfterTextOutput(specification);
        convertButton.addEventListener('click', ()=>{
                loadingConvert.classList.add("active3");
                const boxFill =document.querySelector(".box-fill").clientWidth;
                const boxnull =document.querySelector(".box-null").clientWidth;
                console.log(boxFill,boxnull)
                if(boxFill === boxnull){
                    loadingConvert.classList.remove("active3");
                    textAfterOutput.innerText = "";
                        // document.querySelector(".output-selection").innerhtml = "";
                        addItemFile(specification);
                        console.log(addItemFile)

                }

        });

    }else{
        alert("the selcted file must be pdf")
    }
});

function addItemFile(specification){
    boxConvert.insertAdjacentHTML("beforeend",`
    <div class="output-selection">
        <div class="left">
            <p class="p1">${specification.filename}</p>
            <div class="line"></div>
            <p class="p2">${specification.filesize}MB</p>
        </div>
        <div class="icon">
            <img class="img-arrow-right" src="img/right-arrow.png" alt="">
        </div>
        <div class="right">
            <p class="p1">${specification.filename}</p>
            <div class="line"></div>
            <p class="p2">Download</p>
        </div>                  
    </div>
    `)
};

function addAfterTextOutput(specification){
    textAfterOutput.insertAdjacentHTML("afterbegin",`
    <p class="text-bottom">The<span>${specification.filename}</span>file hasbeenreceived.Press the convert button to Convert it to a photo</p>
    `)
};