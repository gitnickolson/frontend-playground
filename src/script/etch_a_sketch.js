function initializePage(rows, columns) {
    const gameContainer = document.createElement("div");
    const totalCells = rows * columns;

    styleDocumentBody();
    styleGameContainer(gameContainer, columns);
    createContainerGrid(gameContainer, totalCells);
    addGoBackButton();
    addResetButton(gameContainer);
    addHeading();
    addScrollingTextBox()

    document.body.appendChild(gameContainer);
}

function createContainerGrid(gameContainer, totalCells) {
    for (let number = 0; number < totalCells; number++) {
        const item = document.createElement("div");
        item.classList.add("grid-item");

        item.style.backgroundColor = "white";
        item.style.border = "1px solid #e0e0e0";
        item.style.transition = "background-color 0.2s ease";

        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });

        gameContainer.appendChild(item);
    }
}

function addGoBackButton() {
    const backButton = document.createElement("button");
    backButton.innerText = "Go back";
    backButton.onclick = function () {
        window.location.href = '../index.html';
    }

    positionBackButton(backButton)

    document.body.appendChild(backButton);
}

function positionBackButton(backButton) {
    backButton.style.position = "fixed";
    backButton.style.bottom = "20px";
    backButton.style.left = "20px";
    backButton.style.fontSize = "18px";
    backButton.style.padding = "16px 24px";
}

function addResetButton(gameContainer) {
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset board";
    resetButton.onclick = function () {
        resetBoard(gameContainer);
    }

    positionResetButton(resetButton);
    addResetButtonTransform(resetButton)


    gameContainer.appendChild(resetButton)
}

function positionResetButton(resetButton) {
    resetButton.style.position = "absolute";
    resetButton.style.bottom = "0";
    resetButton.style.left = "-25%";
}

function addResetButtonTransform(resetButton) {
    resetButton.addEventListener("mouseenter", () => {
        resetButton.style.transform = "scale(1.2)";
    });

    resetButton.addEventListener("mouseleave", () => {
        resetButton.style.transform = "scale(1)";
    });
}

function resetBoard(gameContainer) {
    const gridItems = gameContainer.querySelectorAll(".grid-item")
    gridItems.forEach(item => item.style.backgroundColor = "white");
}

function styleDocumentBody() {
    const body = document.body;
    body.style.margin = "0";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.backgroundColor = "#B0C4DE";
    body.style.background = "linear-gradient(135deg, #B0C4DE, #ADD8E6)";
    body.style.fontFamily = "Arial, sans-serif";
}

function styleGameContainer(gameContainer, columns) {
    gameContainer.style.display = "grid";
    gameContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gameContainer.style.gap = "2px";
    gameContainer.style.width = "70vw";
    gameContainer.style.maxWidth = "700px";
    gameContainer.style.aspectRatio = "1";
    gameContainer.style.border = "5px solid #9c6bf8";
    gameContainer.style.backgroundColor = "white";
    gameContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 1)";
    gameContainer.style.position = "fixed";
    gameContainer.style.top = "50%";
    gameContainer.style.right = "20px";
    gameContainer.style.transform = "translateY(-50%)";
}

function addHeading() {
    const heading = document.createElement("h1");
    heading.innerText = "Etch a Sketch";

    heading.style.fontFamily = "'Pacifico', sans-serif";
    heading.style.fontSize = "50px";

    heading.style.position = "fixed";
    heading.style.top = "20px";
    heading.style.left = "20px";

    heading.style.backgroundColor = "white";
    heading.style.border = "3px solid #9c6bf8";
    heading.style.borderRadius = "15px";
    heading.style.padding = "10px 20px";

    heading.style.color = "#9c6bf8";
    heading.style.textShadow = "2px 2px 10px rgba(0, 0, 0, 0.4)";
    heading.style.fontWeight = "bold";
    heading.style.letterSpacing = "2px";

    heading.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";

    document.body.appendChild(heading);
}

function addScrollingTextBox() {
    const scrollingBox = document.createElement("div");

    scrollingBox.style.position = "absolute";
    scrollingBox.style.top = "175px";
    scrollingBox.style.left = "20px";
    scrollingBox.style.width = "42vw";
    scrollingBox.style.maxWidth = "700px";
    scrollingBox.style.height = "200px";
    scrollingBox.style.backgroundColor = "white";
    scrollingBox.style.border = "3px solid #9c6bf8";
    scrollingBox.style.borderRadius = "15px";
    scrollingBox.style.padding = "20px";
    scrollingBox.style.overflow = "hidden";

    const scrollText = document.createElement("div");
    scrollText.innerText = "Welcome to my Etch-a-Sketch Game! Enjoy drawing and have fun! The goal is to create beautiful sketches with just your mouse! " + scrollString()
    scrollText.style.fontFamily = "Arial, sans-serif";
    scrollText.style.fontSize = "18px";
    scrollText.style.color = "#9c6bf8";
    scrollText.style.whiteSpace = "normal";
    scrollText.style.lineHeight = "1.5";

    scrollText.style.animation = "scroll-text 530s linear";
    scrollingBox.appendChild(scrollText);

    document.body.appendChild(scrollingBox);
    initializeKeyframes()
}

function initializeKeyframes() {
    const style = document.createElement("style");
    style.innerHTML = `
  @keyframes scroll-text {
    from {
      transform: translateY(4.3%); 
    }
    to {
      transform: translateY(-100%); 
    }
  }
`;
    document.head.appendChild(style);
}

function scrollString() {
    return `
    
    
    
    
    
    
    
    
    
    
    
    
    Raccoons are great animals!
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Lore incoming in...
    
    
    
    3
    
    
    
    
    
    
    
    2
    
    
    
    
    
    
    
    1
    
    
    
    
    
    
    
    In the kingdom of Lothric, a knight named Nick Nickolson stood as the realm’s greatest warrior. 
Stronger than any other knight, Nick wasn’t just skilled with the sword. He was also a brilliant programmer, 
a master of code and technology in an age where such things didn’t exist. While the knights wielded steel, 
Nick wielded Ironbyte, a massive sword charged with digital energy—a fusion of ancient steel and advanced programming.

Lothric’s peace shattered when the Quantum Sigil, a long-forgotten artifact, was unearthed deep beneath the castle. 
It was said to have the power to collapse and merge entire dimensions, warping reality itself. 
As the Sigil stirred, a new enemy emerged: Meta Knight, a corrupted warrior who had merged with the Sigil’s power. 
But Meta Knight wasn’t alone. He was accompanied by creatures and horrors from other realms—beings that defied logic and broke the laws of physics. 
Reality itself began to glitch, and the world twisted into something unrecognizable.

Nick, who had been investigating these anomalies, soon discovered that Meta Knight’s influence was spreading. 
It wasn’t just Lothric that was in danger—dimensions were colliding. Nick’s investigation led him to a new, unstable reality: 
a place that seemed to bleed with fragments of other worlds—parts of distant, futuristic cities, 
ruins of an apocalyptic wasteland, and strange, twisted landscapes that seemed pulled from nightmares. 
This world felt like it was falling apart at the seams, much like the post-apocalyptic Earth seen in stories of machine rebellions.

There, Nick encountered A2, a rogue android from a world far beyond, one where humanity had been all but wiped out, 
and the remnants of their civilization were now ruled by emotionless machines. 
A2, with her sword drawn and her cold gaze fixed on the horizon, sensed the distortion in the world. 
"This is the end of humanity’s story,” she said, her voice haunted, almost resigned.

Nick nodded, understanding. He wasn’t just fighting for Lothric anymore—he was fighting for the survival of all worlds.

Suddenly, the skies above them split open. From the sky descended a colossal, grotesque figure—a giant mech whose form resembled 
an unsettling hybrid of organic and mechanical parts. It was a being born from the minds of twisted realities, 
a creature resembling the terrifying Evas from another realm, towering above them in a way that defied reason.

At its core, Meta Knight stood, his form now a mix of knightly armor and shifting code. 
His weapon was the Galactic Blade, a weapon that could rewrite reality with every swing. 
"You’re too late, Nick Nickolson," Meta Knight’s voice echoed. "All worlds will become one. Your time has passed."

But Nick didn’t flinch. His mind raced, analyzing the situation. This wasn’t just a battle of strength. 
The Sigil’s power was the key. If he could sever Meta Knight’s connection to the Sigil, he could stop him and restore balance.

With A2’s help, Nick faced the monstrous mech and its corrupted master. 
As Meta Knight unleashed waves of energy, Nick fought back using both his Ironbyte and his ability to manipulate code. 
Every strike of his sword sent shockwaves of digital power through the world, hacking the very fabric of reality itself.

As the battle raged, a sudden realization hit Nick. He wasn’t just facing Meta Knight. 
The Sigil was distorting the very concept of time and space—allowing beings from countless realms to merge and clash. 
He needed to act fast.

Nick accessed the Sigil’s core, hidden deep within the beast’s Eva-like mech. 
It was a battle of wits as much as strength—he had to bypass firewalls, decode corrupted systems, and find the vulnerability within the Sigil’s programming. 
As he typed furiously, the world around him began to glitch more violently, as if reality itself was collapsing.

A final surge of energy blasted from Meta Knight’s Galactic Blade, but Nick, in a last-ditch effort, severed the Sigil’s connection just in time. 
The monstrous mech collapsed as the Sigil’s power shattered, unraveling the twisted dimensions Meta Knight had been forcing together. 
With one mighty strike of Ironbyte, Nick cleaved through the last remnants of Meta Knight’s form, sending him into oblivion.

The sky returned to normal. The twisted worlds began to heal, and the dimensions slowly pulled back into place. 
A2, standing amidst the ruins, looked at Nick with a quiet nod, as if acknowledging his victory. 
"You’ve saved them all. Even if it doesn’t feel like enough.”

Nick sheathed his sword, his eyes scanning the horizon where other worlds—still scarred—faded away into nothingness. 
"The fight’s never over," he replied, his voice determined. "But today, we’ve won."

And so, Nick Nickolson, the most powerful knight and the savior of countless realities, returned to Lothric Castle, 
knowing that no matter the threats to come—whether they came from other worlds, twisted machines, or corrupted knights—he would always be ready to fight for the future.









I hope you didn't invest your precious time in reading that.
I'm sorry if you did.





`;

}

const rows = 10;
const columns = 10;
initializePage(rows, columns);
