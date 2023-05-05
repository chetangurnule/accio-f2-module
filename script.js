
fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json").then(data=>{
    return data.json();
}).then((objectArray)=>{

    //  adding object to arr array

    let arr = [];
    objectArray.forEach((student)=>{
        let obj = {};
        obj.id = student.id;
        obj.fullName = student.first_name + " " + student.last_name;
        obj.image = student.img_src;
        obj.gender = student.gender;
        obj.studentClass = student.class;
        obj.marks = student.marks;
        obj.passing = student.passing;
        obj.email = student.email;
        arr.push(obj);
    });

    let tableBody = document.querySelector(".table-body");
    // function for adding data to table
    function addingData(arr){
        arr.forEach(student=>{
            let tr = document.createElement("tr");
            tr.innerHTML = `<th>${student.id}</th>
            <td><img src="${student.image}" alt="image">${student.fullName}</td>
            <td>${student.gender}</td>
            <td>${student.studentClass}</td>
            <td>${student.marks}</td>
            <td>${student.passing}</td>
            <td>${student.email}</td>`;
            tableBody.append(tr);
        });
    }
    addingData(arr);

    
    // searching in table
    let input = document.querySelector("input");
    let searchButton = document.querySelector(".searchBtn");
    searchButton.addEventListener("click", myFunction)
    function myFunction(e){
        e.preventDefault();
        let filter = input.value.toUpperCase();
        let tr = document.querySelectorAll("tr");
        for(let i = 1; i < tr.length; i++){
            let a = tr[i].children[1].textContent.toUpperCase();
            if(a.indexOf(filter) >-1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }


    // function for sorting data in table

    // sorting from A to Z
        let sortAccending = document.querySelector(".sortAccen");
        sortAccending.addEventListener("click", AccendingSort)
        function AccendingSort(){
            console.log("hello");
            arr.sort((a, b)=>{
                let smallA = a.fullName.toLowerCase();
                let smallB = b.fullName.toLowerCase();
                return (smallA > smallB) ? 1:-1;
            });
            tableBody.textContent = "";
            addingData(arr);
        }


        // sorting form Z to A
        let sortDecending = document.querySelector(".sortDecen");
        sortDecending.addEventListener("click", decendingSort);
        function decendingSort(){
            arr.sort((a, b)=>{
                let smallA = a.fullName.toLowerCase();
                let smallB = b.fullName.toLowerCase();
                return (smallA > smallB) ? -1:1;
            });
            tableBody.textContent = "";
            addingData(arr);
        }

        //  sort by marks
        let sortMarks = document.querySelector(".sortMarks");
        sortMarks.addEventListener("click", sortingMarks);
        function sortingMarks(){
            arr.sort((a, b)=>{
               return (a.marks - b.marks);
            });
            tableBody.textContent = "";
            addingData(arr);
        }



        // sort by passing
        let sortpassing = document.querySelector(".sortPass");
        sortpassing.addEventListener("click", sortingPass);
        function sortingPass(){
            arr.sort((a, b)=>{
                let smallA = a.passing;
                let smallB = b.passing;
                return (smallA > smallB) ? 1:-1;
            });
            tableBody.textContent = "";
            addingData(arr);
        }


        // sort by class
        let sortClass = document.querySelector(".sortClass");
        sortClass.addEventListener("click", sortingClass);
        function sortingClass(){
            arr.sort((a, b)=>{
               return (a.studentClass - b.studentClass);
            });
            tableBody.textContent = "";
            addingData(arr);
        }


        // sort by gender
        let sortGender = document.querySelector(".sortGender");
        sortGender.addEventListener("click", sortingGender);
        function sortingGender(){
            arr.sort((a, b)=>{
                let smallA = a.gender;
                let smallB = b.gender;
                return (smallA > smallB) ? 1:-1;
            })
            tableBody.textContent = "";
            addingData(arr);
        }
});
    