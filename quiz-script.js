const questions = [
    {
        question: "Apa rumus Hukum II Newton?",
        options: ["F = m / a", "F = m × a", "F = a / m", "F = m + a"],
        correct: 1, // Index of correct answer
        explanation: "Hukum II Newton menyatakan bahwa Gaya (F) adalah hasil kali Massa (m) dengan Percepatan (a), sehingga rumusnya adalah F = m × a."
    },
    {
        question: "Satuan Internasional (SI) untuk Usaha adalah...",
        options: ["Newton", "Watt", "Joule", "Pascal"],
        correct: 2,
        explanation: "Satuan usaha dalam SI adalah Joule (J), sedangkan Watt adalah satuan daya, Newton untuk gaya, dan Pascal untuk tekanan."
    },
    {
        question: "Mobil bergerak dengan kecepatan tetap (konstan). Ini adalah contoh...",
        options: ["GLBB Dipercepat", "Gerak Parabola", "GLB (Gerak Lurus Beraturan)", "Gerak Melingkar"],
        correct: 2,
        explanation: "Gerak dengan kecepatan konstan disebut Gerak Lurus Beraturan (GLB). Percepatannya adalah nol."
    },
    {
        question: "Energi yang dimiliki benda karena KETINGGIAN-nya disebut...",
        options: ["Energi Kinetik", "Energi Potensial", "Energi Nuklir", "Energi Kalor"],
        correct: 1,
        explanation: "Energi Potensial Gravitasi (EP) adalah energi yang dimiliki benda karena posisinya atau ketinggiannya. EP = m × g × h."
    },
    {
        question: "Jika aksi = 10 N, maka reaksi = ...",
        options: ["10 N searah", "10 N berlawanan arah", "20 N berlawanan", "Nol"],
        correct: 1,
        explanation: "Hukum III Newton menyatakan bahwa untuk setiap aksi selalu ada reaksi yang sama besar dan berlawanan arah."
    }
];

let currentQuestion = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the result page mode or quiz mode
    // We will use the same HTML file, but toggle visibility based on state

    // Initial Render
    loadQuestion(0);

    // Bind event listeners
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

function loadQuestion(index) {
    if (index >= questions.length) {
        showResults();
        return;
    }

    const q = questions[index];
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('question-number').textContent = `Soal ${index + 1}`;

    // Update Progress
    const progress = ((index) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${progress}%`;

    // Render Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.textContent = opt;
        btn.onclick = () => selectOption(i, btn);
        optionsContainer.appendChild(btn);
    });

    // Disable Next Button until selection
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.pointerEvents = 'none';
    nextBtn.style.opacity = '0.5';
    nextBtn.textContent = index === questions.length - 1 ? 'Selesai' : 'Lanjut';
}

function selectOption(selectedIndex, btnElement) {
    // Remove selected class from all
    const allBtns = document.getElementById('options-container').children;
    for (let btn of allBtns) {
        btn.classList.remove('selected');
        // Reset to default - remove inline styles
        btn.style.borderColor = '';
        btn.style.background = '';
    }

    // Add selected class to clicked button
    btnElement.classList.add('selected');

    // Store answer
    userAnswers[currentQuestion] = selectedIndex;

    // Enable Next Button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.pointerEvents = 'auto';
    nextBtn.style.opacity = '1';
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion(currentQuestion);
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    let score = 0;
    const resultDetails = document.getElementById('result-details');
    resultDetails.innerHTML = '';

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        if (isCorrect) score++;

        const item = document.createElement('div');
        item.className = 'result-item card';
        item.style.padding = '1rem';
        item.style.marginBottom = '1rem';
        item.style.borderLeft = isCorrect ? '4px solid var(--success)' : '4px solid var(--error)';

        const statusIcon = isCorrect ?
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-success"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>' :
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-error"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle><line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"></line><line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"></line></svg>';

        item.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <h4 style="margin: 0;">Soal ${index + 1}</h4>
                ${statusIcon}
            </div>
            <p style="margin-bottom: 0.5rem; color: var(--text-main);">${q.question}</p>
            <p style="font-size: 0.9rem; color: ${isCorrect ? 'var(--success)' : 'var(--error)'};">
                Jawabanmu: ${q.options[userAnswer]}
            </p>
            ${!isCorrect ? `<p style="font-size: 0.9rem; color: var(--success);">Jawaban Benar: ${q.options[q.correct]}</p>` : ''}
            <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: 8px; font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-muted);">
                💡 ${q.explanation}
            </div>
        `;
        resultDetails.appendChild(item);
    });

    // Score Display
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('score-text').textContent = `Kamu menjawab ${score} dari ${questions.length} soal dengan benar!`;

    // Change Icon based on score
    const resultIcon = document.getElementById('result-icon');
    if (percentage === 100) {
        resultIcon.innerHTML = `
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>`;
    } else if (percentage >= 60) {
        resultIcon.innerHTML = `
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>`;
    } else {
        resultIcon.innerHTML = `
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>`;
    }
}
