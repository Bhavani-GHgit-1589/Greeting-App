document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');
    const greetingDisplay = document.getElementById('greetingDisplay');
    const animationContainer = document.getElementById('animation-container');

    greetBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (!name) {
            nameInput.classList.add('shake');
            setTimeout(() => nameInput.classList.remove('shake'), 400);
            return;
        }

        // Display Greeting
        greetingDisplay.textContent = `Hello, ${name}!`;
        greetingDisplay.classList.remove('show');
        void greetingDisplay.offsetWidth; // Trigger reflow
        greetingDisplay.classList.add('show');

        // Trigger Random Animation
        triggerRandomAnimation();
    });

    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            greetBtn.click();
        }
    });

    function triggerRandomAnimation() {
        // Clear previous animations
        animationContainer.innerHTML = '';

        const animations = ['confetti', 'popper', 'burst'];
        const randomChoice = animations[Math.floor(Math.random() * animations.length)];

        switch (randomChoice) {
            case 'confetti':
                runConfetti();
                break;
            case 'popper':
                runPartyPopper();
                break;
            case 'burst':
                runGlowingBurst();
                break;
        }
    }

    function runConfetti() {
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 8 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `-20px`;
            particle.style.opacity = '1';
            particle.style.animation = `confetti-fall ${Math.random() * 2 + 2}s linear forwards`;
            particle.style.borderRadius = i % 2 === 0 ? '50%' : '0%';

            animationContainer.appendChild(particle);
        }
    }

    function runPartyPopper() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 300 + 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.animation = `popper ${Math.random() * 0.5 + 0.8}s cubic-bezier(0.12, 0, 0.39, 0) forwards`;

            animationContainer.appendChild(particle);
        }
    }

    function runGlowingBurst() {
        const burst = document.createElement('div');
        burst.className = 'particle';
        burst.style.width = '200px';
        burst.style.height = '200px';
        burst.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(99,102,241,0.3) 40%, transparent 70%)';
        burst.style.left = 'calc(50% - 100px)';
        burst.style.top = 'calc(50% - 100px)';
        burst.style.animation = 'burst 1s ease-out forwards';
        burst.style.boxShadow = '0 0 50px 20px rgba(99, 102, 241, 0.5)';

        animationContainer.appendChild(burst);

        // Add some smaller sparkles around
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'particle';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.backgroundColor = 'white';
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 150 + 50;
            const left = (window.innerWidth / 2) + Math.cos(angle) * dist;
            const top = (window.innerHeight / 2) + Math.sin(angle) * dist;

            sparkle.style.left = `${left}px`;
            sparkle.style.top = `${top}px`;
            sparkle.style.boxShadow = '0 0 10px 2px white';
            sparkle.style.opacity = '1';
            sparkle.style.animation = `burst 0.5s ease-out forwards`;
            sparkle.style.animationDelay = `${Math.random() * 0.5}s`;

            animationContainer.appendChild(sparkle);
        }
    }
});
