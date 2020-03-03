document.getElementById("section_error").style.display = "none";
document.getElementById("section_2").style.display = "none";
document.getElementById("section_3").style.display = "none";
document.getElementById("section_4").style.display = "none";

var terminal = document.getElementById("terminal__");
var skills_btn = document.getElementById("skills");
var projects_btn = document.getElementById("projects");
var about_btn = document.getElementById("about");
var educations_btn = document.getElementById("educations");

function skills() {
    document.getElementById("section_4").style.display = "none";
    document.getElementById("section_2").style.display = "block";
    document.getElementById("section_1").style.display = "none";
    document.getElementById("section_error").style.display = "none";
    document.getElementById("section_3").style.display = "none";
    terminal.value = "cd ~/skills";

};

function about() {
    document.getElementById("section_4").style.display = "none";
    document.getElementById("section_1").style.display = "block";
    document.getElementById("section_2").style.display = "none";
    document.getElementById("section_error").style.display = "none";
    document.getElementById("section_3").style.display = "none";
    terminal.value = "cd ~/about";
};

function error() {
    document.getElementById("section_4").style.display = "none";
    document.getElementById("section_1").style.display = "none";
    document.getElementById("section_2").style.display = "none";
    document.getElementById("section_error").style.display = "flex";
    document.getElementById("section_3").style.display = "none";

}

function projects() {
    document.getElementById("section_4").style.display = "none";
    document.getElementById("section_3").style.display = "block";
    document.getElementById("section_1").style.display = "none";
    document.getElementById("section_2").style.display = "none";
    document.getElementById("section_error").style.display = "none";
    terminal.value = "cd ~/projects";
}
function educations(){
    document.getElementById("section_4").style.display = "block";
    document.getElementById("section_1").style.display = "none";
    document.getElementById("section_2").style.display = "none";
    document.getElementById("section_3").style.display = "none";
    document.getElementById("section_error").style.display = "none";
    terminal.value = "cd ~/educations";
}

terminal.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        if (terminal.value.includes("skills")) {
            skills();
        } else if (terminal.value.includes("about")) {
            about();
        } else if (terminal.value.includes("projects")) {
            projects();
        } else if (terminal.value.includes("educations")) {
            educations();
        }else {
            error();
        }

    }
});
skills_btn.addEventListener('click', function (e) {
    skills();
});
projects_btn.addEventListener('click', function (e) {
    projects();
});
educations_btn.addEventListener('click', function (e) {
    educations();
});
about_btn.addEventListener('click', function (e) {
    about();
});