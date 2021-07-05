function showNotes(e) {
    e.preventDefault();
    let index = document.getElementById("outday").value;
    let showHeading = document.getElementById("heading_notes");
    let showDesc = document.getElementById("paragraph");
    let arr = JSON.parse(localStorage.getItem("notes"));
    if (arr == null) {
        showHeading.innerText = "Notes Not Available! Enter First";
        showHeading.style.color = "red";
        showDesc.innerText = "";
    }
    let found = false;
    for ({ day,heading,desc } of arr) {
        if (day == index) {
            showHeading.innerText = heading;
            showHeading.style.color = "green";
            showDesc.innerText = desc;
            found = true;
            break;
        }
    }
    if (!found) {
        showHeading.innerText = "Notes Not Available For The Given Day";
        showHeading.style.color = "red";
        showDesc.innerText = "";
    }
    
}

function saveData(e) {
    e.preventDefault();
    let index = document.getElementById("inday").value;
    let heading = document.getElementById("Heading").value;
    let desc = document.getElementById("Description").value;
    let in_form = document.getElementById("in_form");
    in_form.reset();
    let arr = JSON.parse(localStorage.getItem("notes"));
    if (arr == null) {
        arr = [];
    }
    let obj = {
        day: index,
        heading: heading,
        desc:desc
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].day == index) {
            arr.splice(i, 1);
        }
    }
    arr.push(obj);
    localStorage.setItem("notes",JSON.stringify(arr));
    console.log("in",index,heading,desc)
}