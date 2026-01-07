// ===== 100 Color Patterns Data ===== 
// Data extracted from uploaded images
const colorPatterns = [
    // Pattern 1-20
    { no: 1, name: 'No.1 Pattern', a: '#A50044', b: '#004D98', c: '#004D98' },
    { no: 2, name: 'No.2 Pattern', a: '#D6B87C', b: '#FFFFFF', c: '#D6B87C' },
    { no: 3, name: 'No.3 Pattern', a: '#E41B23', b: '#003DA5', c: '#003DA5' },
    { no: 4, name: 'No.4 Pattern', a: '#0055A4', b: '#FFFFFF', c: '#0055A4' },
    { no: 5, name: 'No.5 Pattern', a: '#8E1A1A', b: '#F6A500', c: '#8E1A1A' },
    { no: 6, name: 'No.6 Pattern', a: '#E6C200', b: '#000000', c: '#000000' },
    { no: 7, name: 'No.7 Pattern', a: '#000000', b: '#FFFFFF', c: '#000000' },
    { no: 8, name: 'No.8 Pattern', a: '#0033A0', b: '#000000', c: '#000000' },
    { no: 9, name: 'No.9 Pattern', a: '#FB090B', b: '#000000', c: '#000000' },
    { no: 10, name: 'No.10 Pattern', a: '#009F3D', b: '#FFFFFF', c: '#009F3D' },
    { no: 11, name: 'No.11 Pattern', a: '#482E92', b: '#FFFFFF', c: '#482E92' },
    { no: 12, name: 'No.12 Pattern', a: '#6CABDD', b: '#FFFFFF', c: '#6CABDD' },
    { no: 13, name: 'No.13 Pattern', a: '#EF0107', b: '#FFFFFF', c: '#EF0107' },
    { no: 14, name: 'No.14 Pattern', a: '#8A1538', b: '#FFFFFF', c: '#8A1538' },
    { no: 15, name: 'No.15 Pattern', a: '#670E36', b: '#95BFE5', c: '#670E36' },
    { no: 16, name: 'No.16 Pattern', a: '#1B3A85', b: '#C8102E', c: '#1B3A85' },
    { no: 17, name: 'No.17 Pattern', a: '#C8102E', b: '#FFFFFF', c: '#C8102E' },
    { no: 18, name: 'No.18 Pattern', a: '#00205B', b: '#F8E500', c: '#00205B' },
    { no: 19, name: 'No.19 Pattern', a: '#004170', b: '#DA1A32', c: '#DA1A32' },
    { no: 20, name: 'No.20 Pattern', a: '#0033A0', b: '#FFCC00', c: '#0033A0' },
    // Pattern 21-40
    { no: 21, name: 'No.21 Pattern', a: '#E6C200', b: '#009739', c: '#009739' },
    { no: 22, name: 'No.22 Pattern', a: '#F36C21', b: '#FFFFFF', c: '#F36C21' },
    { no: 23, name: 'No.23 Pattern', a: '#AA151B', b: '#F1BF00', c: '#AA151B' },
    { no: 24, name: 'No.24 Pattern', a: '#0D254C', b: '#FFFFFF', c: '#0D254C' },
    { no: 25, name: 'No.25 Pattern', a: '#000000', b: '#B0A55F', c: '#B0A55F' },
    { no: 26, name: 'No.26 Pattern', a: '#009B3A', b: '#FCD116', c: '#009B3A' },
    { no: 27, name: 'No.27 Pattern', a: '#CF0A2C', b: '#006847', c: '#006847' },
    { no: 28, name: 'No.28 Pattern', a: '#75AADB', b: '#000000', c: '#75AADB' },
    { no: 29, name: 'No.29 Pattern', a: '#2D6CDF', b: '#003897', c: '#003897' },
    { no: 30, name: 'No.30 Pattern', a: '#F77F00', b: '#009E60', c: '#009E60' },
    { no: 31, name: 'No.31 Pattern', a: '#EF2B2D', b: '#00205B', c: '#00205B' },
    { no: 32, name: 'No.32 Pattern', a: '#0066B3', b: '#A89968', c: '#A89968' },
    { no: 33, name: 'No.33 Pattern', a: '#0B1C2D', b: '#C8A24A', c: '#C8A24A' },
    { no: 34, name: 'No.34 Pattern', a: '#000000', b: '#C0C0C0', c: '#C0C0C0' },
    { no: 35, name: 'No.35 Pattern', a: '#006847', b: '#CE1126', c: '#CE1126' },
    { no: 36, name: 'No.36 Pattern', a: '#007342', b: '#A89968', c: '#A89968' },
    { no: 37, name: 'No.37 Pattern', a: '#D7000F', b: '#000000', c: '#D7000F' },
    { no: 38, name: 'No.38 Pattern', a: '#F56900', b: '#00407B', c: '#00407B' },
    { no: 39, name: 'No.39 Pattern', a: '#5A2D82', b: '#C9A14A', c: '#C9A14A' },
    { no: 40, name: 'No.40 Pattern', a: '#6DB6E6', b: '#00101d', c: '#00101d' },
    // Pattern 41-60
    { no: 41, name: 'No.41 Pattern', a: '#E6007E', b: '#1A2B4C', c: '#1A2B4C' },
    { no: 42, name: 'No.42 Pattern', a: '#1A2B4C', b: '#EA6000', c: '#EA6000' },
    { no: 43, name: 'No.43 Pattern', a: '#800080', b: '#000000', c: '#000000' },
    { no: 44, name: 'No.44 Pattern', a: '#D6001C', b: '#C9A23F', c: '#C9A23F' },
    { no: 45, name: 'No.45 Pattern', a: '#F6C400', b: '#005BAC', c: '#005BAC' },
    { no: 46, name: 'No.46 Pattern', a: '#0099D9', b: '#E6007E', c: '#E6007E' },
    { no: 47, name: 'No.47 Pattern', a: '#8F0019', b: '#000000', c: '#000000' },
    { no: 48, name: 'No.48 Pattern', a: '#007A3D', b: '#005BAC', c: '#005BAC' },
    { no: 49, name: 'No.49 Pattern', a: '#130a3f', b: '#B5B5B6', c: '#B5B5B6' },
    { no: 50, name: 'No.50 Pattern', a: '#00008c', b: '#00a2b1', c: '#00a2b1' },
    { no: 51, name: 'No.51 Pattern', a: '#4EB2E6', b: '#0B2A4A', c: '#0B2A4A' },
    { no: 52, name: 'No.52 Pattern', a: '#007A33', b: '#F57C00', c: '#F57C00' },
    { no: 53, name: 'No.53 Pattern', a: '#2E9B57', b: '#155C2C', c: '#155C2C' },
    { no: 54, name: 'No.54 Pattern', a: '#00C1D4', b: '#FFFFFF', c: '#00C1D4' },
    { no: 55, name: 'No.55 Pattern', a: '#FF69B4', b: '#FFFFFF', c: '#FF69B4' },
    { no: 56, name: 'No.56 Pattern', a: '#9AE348', b: '#192533', c: '#192533' },
    { no: 57, name: 'No.57 Pattern', a: '#192533', b: '#FFFFFF', c: '#192533' },
    { no: 58, name: 'No.58 Pattern', a: '#0B2A4A', b: '#4EB2E6', c: '#4EB2E6' },
    { no: 59, name: 'No.59 Pattern', a: '#6B1F2A', b: '#1C1F2A', c: '#6B1F2A' },
    { no: 60, name: 'No.60 Pattern', a: '#AB0520', b: '#002147', c: '#002147' },
    // Pattern 61-80
    { no: 61, name: 'No.61 Pattern', a: '#0B2A4A', b: '#4EB2E6', c: '#0B2A4A' },
    { no: 62, name: 'No.62 Pattern', a: '#AB0520', b: '#002147', c: '#AB0520' },
    { no: 63, name: 'No.63 Pattern', a: '#002147', b: '#AB0520', c: '#002147' },
    { no: 64, name: 'No.64 Pattern', a: '#CBA990', b: '#FFFFFF', c: '#CBA990' },
    { no: 65, name: 'No.65 Pattern', a: '#F2808F', b: '#FFFFFF', c: '#F2808F' },
    { no: 66, name: 'No.66 Pattern', a: '#8B4513', b: '#FFFFFF', c: '#8B4513' },
    { no: 67, name: 'No.67 Pattern', a: '#F7B5CD', b: '#FFFFFF', c: '#231F20' },
    { no: 68, name: 'No.68 Pattern', a: '#F6C400', b: '#FFFFFF', c: '#F6C400' },
    { no: 69, name: 'No.69 Pattern', a: '#5A2D82', b: '#192533', c: '#192533' },
    { no: 70, name: 'No.70 Pattern', a: '#7790ED', b: '#1A2B4C', c: '#1A2B4C' },
    { no: 71, name: 'No.71 Pattern', a: '#EA6000', b: '#1A2B4C', c: '#1A2B4C' },
    { no: 72, name: 'No.72 Pattern', a: '#A89968', b: '#007342', c: '#007342' },
    { no: 73, name: 'No.73 Pattern', a: '#A89968', b: '#C8102E', c: '#C8102E' },
    { no: 74, name: 'No.74 Pattern', a: '#E6007E', b: '#A89968', c: '#A89968' },
    { no: 75, name: 'No.75 Pattern', a: '#E6007E', b: '#0099D9', c: '#0099D9' },
    { no: 76, name: 'No.76 Pattern', a: '#005BAC', b: '#007A3D', c: '#007A3D' },
    { no: 77, name: 'No.77 Pattern', a: '#E6007E', b: '#FFFFFF', c: '#E6007E' },
    { no: 78, name: 'No.78 Pattern', a: '#B8D2C5', b: '#FFFFFF', c: '#B8D2C5' },
    { no: 79, name: 'No.79 Pattern', a: '#8DAAB8', b: '#FFFFFF', c: '#8DAAB8' },
    { no: 80, name: 'No.80 Pattern', a: '#8DAAB8', b: '#192533', c: '#192533' },
    // Pattern 81-100
    { no: 81, name: 'No.81 Pattern', a: '#009395', b: '#FFFFFF', c: '#009395' },
    { no: 82, name: 'No.82 Pattern', a: '#009395', b: '#192533', c: '#192533' },
    { no: 83, name: 'No.83 Pattern', a: '#F6C400', b: '#192533', c: '#192533' },
    { no: 84, name: 'No.84 Pattern', a: '#0055B4', b: '#C8102E', c: '#C8102E' },
    { no: 85, name: 'No.85 Pattern', a: '#192533', b: '#0055B4', c: '#0055B4' },
    { no: 86, name: 'No.86 Pattern', a: '#F6C400', b: '#B5B5B6', c: '#B5B5B6' },
    { no: 87, name: 'No.87 Pattern', a: '#007342', b: '#192533', c: '#192533' },
    { no: 88, name: 'No.88 Pattern', a: '#0055B4', b: '#B5B5B6', c: '#B5B5B6' },
    { no: 89, name: 'No.89 Pattern', a: '#9AE348', b: '#FFFFFF', c: '#9AE348' },
    { no: 90, name: 'No.90 Pattern', a: '#C8102E', b: '#B5B5B6', c: '#B5B5B6' },
    { no: 91, name: 'No.91 Pattern', a: '#F36C21', b: '#B5B5B6', c: '#B5B5B6' },
    { no: 92, name: 'No.92 Pattern', a: '#6B1F2A', b: '#A89968', c: '#A89968' },
    { no: 93, name: 'No.93 Pattern', a: '#192533', b: '#FFFFFF', c: '#192533' },
    { no: 94, name: 'No.94 Pattern', a: '#6B1F2A', b: '#192533', c: '#192533' },
    { no: 95, name: 'No.95 Pattern', a: '#B5B5B6', b: '#192533', c: '#192533' },
    { no: 96, name: 'No.96 Pattern', a: '#B5B5B6', b: '#A89968', c: '#A89968' },
    { no: 97, name: 'No.97 Pattern', a: '#B5B5B6', b: '#FFFFFF', c: '#B5B5B6' },
    { no: 98, name: 'No.98 Pattern', a: '#8F0019', b: '#192533', c: '#192533' },
    { no: 99, name: 'No.99 Pattern', a: '#A89968', b: '#192533', c: '#192533' },
    { no: 100, name: 'No.100 Pattern', a: '#0055B4', b: '#192533', c: '#192533' }
];

// ===== DOM Elements =====
const patternSelect = document.getElementById('patternSelect');
const colorBoxA = document.getElementById('colorBoxA');
const colorBoxB = document.getElementById('colorBoxB');
const colorBoxC = document.getElementById('colorBoxC');
const colorCodeA = document.getElementById('colorCodeA');
const colorCodeB = document.getElementById('colorCodeB');
const colorCodeC = document.getElementById('colorCodeC');

// Preview elements (website preview layout)
const previewUpperBlock = document.getElementById('previewUpperBlock');
const previewLowerBlock = document.getElementById('previewLowerBlock');

let currentPattern = 1;

// ===== Initialization =====
function init() {
    populatePatternSelect();
    loadPattern(1);
    attachEventListeners();
}

// ===== Populate Pattern Select =====
function populatePatternSelect() {
    colorPatterns.forEach(pattern => {
        const option = document.createElement('option');
        option.value = pattern.no;
        option.textContent = `No.${pattern.no}`;
        patternSelect.appendChild(option);
    });
}

// ===== Load Pattern =====
function loadPattern(patternNo) {
    const pattern = colorPatterns.find(p => p.no === patternNo);
    if (!pattern) return;

    currentPattern = patternNo;
    patternSelect.value = patternNo;

    // Update color boxes and codes
    colorBoxA.style.backgroundColor = pattern.a;
    colorBoxB.style.backgroundColor = pattern.b;
    colorBoxC.style.backgroundColor = pattern.c;

    colorCodeA.textContent = pattern.a.toUpperCase();
    colorCodeB.textContent = pattern.b.toUpperCase();
    colorCodeC.textContent = pattern.c.toUpperCase();

    // Update preview
    updatePreview(pattern.a, pattern.b, pattern.c);

    // Update selected card in gallery
    updateSelectedCard(patternNo);

    // Save to localStorage
    localStorage.setItem('sakachimPlusSelectedPattern', patternNo);
}

// ===== Update Preview =====
function updatePreview(hexA, hexB, hexC) {
    // Update CSS variables
    document.documentElement.style.setProperty('--color-a', hexA);
    document.documentElement.style.setProperty('--color-b', hexB);
    document.documentElement.style.setProperty('--color-c', hexC);

    // Update website preview elements
    if (previewUpperBlock) {
        previewUpperBlock.style.background = `linear-gradient(90deg, ${hexA} 0%, ${hexB} 100%)`;
    }

    if (previewLowerBlock) {
        previewLowerBlock.style.backgroundColor = hexC;
    }
}

// ===== Event Listeners =====
function attachEventListeners() {
    patternSelect.addEventListener('change', (e) => {
        const patternNo = parseInt(e.target.value);
        loadPattern(patternNo);
    });
}

// ===== Generate Palette Gallery =====
function generatePaletteGallery() {
    const gallery = document.getElementById('paletteGallery');
    if (!gallery) return;

    colorPatterns.forEach(pattern => {
        const card = document.createElement('div');
        card.className = 'palette-card';
        card.dataset.patternNo = pattern.no;

        // Card header
        const header = document.createElement('div');
        header.className = 'palette-card-header';

        const number = document.createElement('div');
        number.className = 'palette-card-number';
        number.textContent = `No.${pattern.no}`;

        header.appendChild(number);

        // Color boxes
        const colorsDiv = document.createElement('div');
        colorsDiv.className = 'palette-card-colors';

        const colorBoxA = document.createElement('div');
        colorBoxA.className = 'palette-color-box';
        colorBoxA.style.backgroundColor = pattern.a;
        colorBoxA.textContent = 'A';

        const colorBoxB = document.createElement('div');
        colorBoxB.className = 'palette-color-box';
        colorBoxB.style.backgroundColor = pattern.b;
        colorBoxB.textContent = 'B';

        const colorBoxC = document.createElement('div');
        colorBoxC.className = 'palette-color-box';
        colorBoxC.style.backgroundColor = pattern.c;
        colorBoxC.textContent = 'C';

        colorsDiv.appendChild(colorBoxA);
        colorsDiv.appendChild(colorBoxB);
        colorsDiv.appendChild(colorBoxC);

        // Color codes
        const codesDiv = document.createElement('div');
        codesDiv.className = 'palette-card-codes';

        const codeA = document.createElement('div');
        codeA.className = 'palette-code-item';
        codeA.innerHTML = `<span class="palette-code-label">A</span><span class="palette-code-value">${pattern.a.toUpperCase()}</span>`;

        const codeB = document.createElement('div');
        codeB.className = 'palette-code-item';
        codeB.innerHTML = `<span class="palette-code-label">B</span><span class="palette-code-value">${pattern.b.toUpperCase()}</span>`;

        const codeC = document.createElement('div');
        codeC.className = 'palette-code-item';
        codeC.innerHTML = `<span class="palette-code-label">C</span><span class="palette-code-value">${pattern.c.toUpperCase()}</span>`;

        codesDiv.appendChild(codeA);
        codesDiv.appendChild(codeB);
        codesDiv.appendChild(codeC);

        // Assemble card
        card.appendChild(header);
        card.appendChild(colorsDiv);
        card.appendChild(codesDiv);

        // Add click event
        card.addEventListener('click', () => {
            loadPattern(pattern.no);
            updateSelectedCard(pattern.no);
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        gallery.appendChild(card);
    });
}

// ===== Update Selected Card =====
function updateSelectedCard(patternNo) {
    const cards = document.querySelectorAll('.palette-card');
    cards.forEach(card => {
        if (parseInt(card.dataset.patternNo) === patternNo) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

// ===== Load from localStorage =====
function loadFromLocalStorage() {
    const saved = localStorage.getItem('sakachimPlusSelectedPattern');
    if (saved) {
        const patternNo = parseInt(saved);
        if (patternNo >= 1 && patternNo <= 100) {
            loadPattern(patternNo);
            updateSelectedCard(patternNo);
            return;
        }
    }
    loadPattern(1);
    updateSelectedCard(1);
}

// ===== Initialize App =====
window.addEventListener('DOMContentLoaded', () => {
    init();
    generatePaletteGallery();
    loadFromLocalStorage();
});
