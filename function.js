let title = document.getElementById("title");
let text = document.getElementById("text");
let languages = document.getElementById("languages");
let poem_poet_name = document.getElementById("poem-poet-name");

let sidebar = document.getElementById("sidebar");

let poet_list = document.getElementById("poet-list");
let poet_profile = document.getElementById("poet-profile");

let poet_name = document.getElementById("poet-name");
let poet_photo = document.getElementById("poet-photo");
let poet_bio = document.getElementById("poet-bio");
let poem_list = document.getElementById("poem-list");

let background = document.getElementById("background");

let background_index = -1;

let backgrounds = [
"https://i.imgur.com/9mv2XGt.gif",
"https://media.discordapp.net/attachments/1041716359354134650/1044485586704138260/05E17250-DEB8-4214-93E6-BB376A453496.jpg",
"https://media.discordapp.net/attachments/1041716359354134650/1044485587148742687/A0579B03-8FFF-450C-9BA9-DADB54DE9218.jpg",
"https://media.discordapp.net/attachments/1041716359354134650/1044485587551391794/DF39B78B-B7FA-482B-9446-12CD5DB0457F.jpg",
"https://media.discordapp.net/attachments/1041716359354134650/1044485587853377536/1DEB5674-F5E0-4B96-952F-42EAAB056869.jpg",
"https://media.discordapp.net/attachments/1041716359354134650/1044485588188930128/AF52E050-EA9D-4CE3-A882-798044BBCE37.jpg"
]

function ChangeBackground() {
	if (background_index < backgrounds.length - 1) background_index++;
	else background_index = 0;
	
	background.style.backgroundImage = `url(${backgrounds[background_index]})`;
}

//ChangeBackground()

function LoadPoets() {
    for (let i = 0; i < poets.length; i++) {
        let poet = poets[i];

        let poet_button = document.createElement("button");
        poet_button.classList.add("poet-button");
        poet_button.addEventListener("click", (e) => {
            poet_list.style.display = "none";
            poet_profile.style.display = "inline";
            poet_name.innerHTML = poet.name;
            poet_photo.src = poet.photo;
            poet_bio.innerHTML = poet.bio;
            GeneratePoems(poet);
            LoadContent(poet.poems[0], 0, poet);
        });
        poet_button.innerHTML = `
            <img class="menu-poet-photo" src="${poet.photo}">
            <p>${poet.name}</p>
            <p id="poem-count">${poet.poems.length}</p>
        `;
        poet_list.appendChild(poet_button);
    }
}

LoadPoets();

function ShowMenu() {
    poet_profile.style.display = "none";
    poet_list.style.display = "inline";
}

function SidebarToggle() {
	if (sidebar.classList.contains("opened")) {
		sidebar.classList.remove("opened");
		sidebar.classList.add("closed");
	}
	else {
		sidebar.classList.remove("closed");
		sidebar.classList.add("opened");
	}
}

let selected_poet;
let selected_poem;

function LoadContent(poem, index, poet) {
    languages.innerHTML = "";
    LoadPoem(poem, index, poet);
    LoadButtons(poem, poet);
}

function LoadPoem(poem, index, poet) {
    title.innerHTML = poem.titles[index];
    text.innerHTML = poem.texts[index];
    poem_poet_name.innerHTML = "– " + poet.name;
    if (poem.languages[index] == "qr") {
        title.style.fontFamily = "Noto Nastaliq Urdu";
        text.style.fontFamily = "Noto Nastaliq Urdu";
    }
    else {
        title.style.fontFamily = "Noto Naskh Arabic";
        text.style.fontFamily = "Noto Naskh Arabic";
    }
    ChangeBackground();
}

function LoadButtons(poem, poet) {
    for (let i = 0; i < poem.languages.length; i++) {
        let lang_btn = document.createElement("button");
        lang_btn.classList.add("lang-button");
        lang_btn.addEventListener("click", () => {
            LoadPoem(poem, i, poet);
        })
        lang_btn.innerHTML = poem.languages[i];
        languages.appendChild(lang_btn);
    }
}

let fonts = [
    ["Arial", "Time New Roman"],
    ["Noto Naskh Arabic", "Noto Nastaliq Urdu"]
]

function FontPicker() {

}

function GeneratePoems(poet) {
    poem_list.innerHTML = "";
    for (let i = 0; i < poet.poems.length; i++) {
        let poem = poet.poems[i];
        let poem_button = document.createElement("button");
        poem_button.classList.add("poem-button");
        poem_button.addEventListener("click", (e) => {
            LoadContent(poem, 0, poet);
        });
        poem_button.innerHTML = `
        <p>${poem.titles[0]}</p>
        ${TranslatedTitleCheck(poem)}`;
        poem_list.appendChild(poem_button);
        poem_list.appendChild(document.createElement("hr"))
    }
}

function TranslatedTitleCheck(poem) {
    for (let i = 0; i < poem.languages.length; i++) {
        if (i > 0 && poem.languages[i] == "en") return `<p>${poem.titles[i]}</p>`;
        if (i == poem.languages.length - 1) return ``;
    }
}
