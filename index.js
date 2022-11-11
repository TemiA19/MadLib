const storySection = document.querySelector('#completed-story');
const madlibsForm = document.querySelector('#madlibs-form');

const submitMadLibs = (event) => {
    event.preventDefault(); 
    madlibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form); 

    const story = `<h3>Your Completed Story: </h3> <p>Fall, also known as <span class="inserted-text">${userSubmission.noun_1}
    </span>, is one of the <span class="inserted-text">${userSubmission.number}
    </span> seasons of the year. In the United States, fall takes place from <span class="inserted-text">${userSubmission.month_1}</span> to 
    <span class="inserted-text">${userSubmission.month_2}</span>. Two holidays that happen during fall are <span class="inserted-text">${userSubmission.noun_2}</span>, 
    where people dress up in <span class="inserted-text">${userSubmission.adjective}</span> costumes and “<span class="inserted-text">${userSubmission.noun_3}</span> Day”, 
    a time to give thanks. This is also harvest time, when <span class="inserted-text">${userSubmission.plural_noun_1}</span> and 
    <span class="inserted-text">${userSubmission.plural_noun_2}</span> are <span class="inserted-text">${userSubmission.verb_ed}</span> for us to eat fresh or bake into 
    <span class="inserted-text">${userSubmission.plural_noun_3}</span>.</p> `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>`
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madlibsForm.reset();
    madlibsForm.classList.remove('hide');
}