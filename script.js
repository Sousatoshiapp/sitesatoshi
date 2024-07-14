
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
</head>
<body>
    <div id="canvas-container"></div>
    
    <nav>
        <ul>
            <li><a href="quem-somos.html">Quem Somos</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#whitepaper">Whitepaper</a></li>
            <li><a href="Satoshi_Pitch_Deck/aviso-privacidade.html">Aviso de Privacidade</a></li>
        </ul>
    </nav>
    
    <div class="container">
        <header>
            <img src="imagens/satoshi_logo.png" alt="Satoshi Logo" class="logo" style="margin-top: 100px;">
            <h1>Revolucione seus investimentos</h1>
            <button class="button" id="waitlist-button">Entre na fila de espera ⏳</button>
            <div class="mockup-container">
                <img src="imagens/mockup.png" alt="Satoshi App Mockup" class="mockup-image" style="width: 50%; height: auto;">
            </div>
        </header>
        
        <section id="about">
            <h2>Quem Somos 🤔</h2>
            <p>Somos uma empresa inovadora focada em revolucionar o mundo dos investimentos através da gamificação e tecnologia de ponta.</p>
        </section>
        
        <section id="features">
            <h2>Recursos Incríveis ✨</h2>
            <div class="features">
                <div class="feature">
                    <h3>🎮 Simulador Realista</h3>
                    <p>Pratique suas estratégias em um ambiente de mercado hiper-realista.</p>
                </div>
                <div class="feature">
                    <h3>🏆 Torneios Emocionantes</h3>
                    <p>Compita com outros traders e ganhe prêmios incríveis.</p>
                </div>
                <div class="feature">
                    <h3>🧠 Aprendizado Gamificado</h3>
                    <p>Aprenda enquanto se diverte com nosso sistema de gamificação único.</p>
                </div>
            </div>
        </section>
        
        <section id="blog">
            <h2>Blog 📚</h2>
            <p>Confira nossos últimos artigos sobre investimentos, tecnologia e muito mais.</p>
            <div class="blog-posts">
                <div class="blog-post">
                    <h3>Introdução à Gamificação nos Investimentos</h3>
                    <p>Descubra como a gamificação está revolucionando a maneira como as pessoas aprendem sobre investimentos.</p>
                    <a href="#">Leia mais</a>
                </div>
                <div class="blog-post">
                    <h3>5 Dicas para Iniciantes no Mercado de Ações</h3>
                    <p>Confira estas dicas essenciais antes de fazer seu primeiro investimento em ações.</p>
                    <a href="#">Leia mais</a>
                </div>
                <div class="blog-post">
                    <h3>O Futuro das Criptomoedas</h3>
                    <p>Analise as tendências e previsões para o mercado de criptomoedas nos próximos anos.</p>
                    <a href="#">Leia mais</a>
                </div>
            </div>
        </section>
        
        <section id="contact">
            <h2>Contato 📞</h2>
            <p>Entre em contato conosco para mais informações:</p>
            <p><a href="mailto:ola@sousatoshi.com" style="color: #00ff00;">📧 ola@sousatoshi.com</a></p>
        </section>
        
        <section id="whitepaper">
            <h2>Whitepaper 📄</h2>
            <p>Leia nosso whitepaper para entender melhor nossa tecnologia e visão.</p>
            <a href="#" class="button">Download Whitepaper 📥</a>
        </section>
    </div>
    
    <div id="signup-modal">
        <form id="signup-form">
            <h2>Entre na fila de espera 🎟️</h2>
            <input type="text" id="name" placeholder="Nome 😎" required>
            <input type="email" id="email" placeholder="Email 📧" required>
            <select id="investor" required>
                <option value="">Já investe? 🤑</option>
                <option value="yes">Sim 👍</option>
                <option value="no">Não 👎</option>
            </select>
            <div id="investment-types" style="display: none;">
                <p>Escolha suas opções de investimento: 💼</p>
                <label><input type="checkbox" name="investment" value="acoes"> Ações 📈</label>
                <label><input type="checkbox" name="investment" value="fundos"> Fundos 🏦</label>
                <label><input type="checkbox" name="investment" value="renda-fixa"> Renda Fixa 💰</label>
                <label><input type="checkbox" name="investment" value="poupanca"> Poupança 🐖</label>
                <label><input type="checkbox" name="investment" value="criptomoedas"> Criptomoedas 🪙</label>
            </div>
            <button type="submit" disabled>Enviar 🚀</button>
        </form>
    </div>

    <footer>
        <div class="social-icons">
            <a href="#" target="_blank">📱 Instagram</a>
            <a href="#" target="_blank">🐦 Twitter</a>
            <a href="#" target="_blank">📘 Facebook</a>
            <a href="#" target="_blank">🎥 TikTok</a>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Three.js background
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            for (let i = 0; i < 10000; i++) {
                vertices.push(THREE.MathUtils.randFloatSpread(2000));
                vertices.push(THREE.MathUtils.randFloatSpread(2000));
                vertices.push(THREE.MathUtils.randFloatSpread(2000));
            }
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x39FF14, size: 2 }));
            scene.add(particles);

            camera.position.z = 1000;

            function animate() {
                requestAnimationFrame(animate);
                particles.rotation.x += 0.0001;
                particles.rotation.y += 0.0001;
                renderer.render(scene, camera);
            }
            animate();

            // Resize handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            // Modal and form handling
            const waitlistButton = document.getElementById('waitlist-button');
            const signupModal = document.getElementById('signup-modal');
            const signupForm = document.getElementById('signup-form');
            const investorSelect = document.getElementById('investor');
            const investmentTypes = document.getElementById('investment-types');
            const submitButton = signupForm.querySelector('button[type="submit"]');
            const inputs = signupForm.querySelectorAll('input, select');
            const investmentCheckboxes = signupForm.querySelectorAll('input[type="checkbox"]');

            waitlistButton.addEventListener('click', () => {
                signupModal.style.display = 'flex';
            });

            signupModal.addEventListener('click', (e) => {
                if (e.target === signupModal) {
                    signupModal.style.display = 'none';
                }
            });

            function validateForm() {
                let isValid = true;
                inputs.forEach(input => {
                    if (input.required && !input.value) {
                        isValid = false;
                    }
                });

                if (investorSelect.value === 'yes') {
                    let checkedInvestments = 0;
                    investmentCheckboxes.forEach(checkbox => {
                        if (checkbox.checked) {
                            checkedInvestments++;
                        }
                    });
                    if (checkedInvestments === 0) {
                        isValid = false;
                    }
                }

                if (isValid) {
                    submitButton.disabled = false;
                    submitButton.classList.add('active');
                } else {
                    submitButton.disabled = true;
                    submitButton.classList.remove('active');
                }
            }

            inputs.forEach(input => {
                input.addEventListener('input', validateForm);
            });

            investmentCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', validateForm);
            });

            investorSelect.addEventListener('change', () => {
                if (investorSelect.value === 'yes') {
                    investmentTypes.style.display = 'block';
                } else {
                    investmentTypes.style.display = 'none';
                }
                validateForm();
            });

            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (!submitButton.disabled) {
                    // Aqui você pode adicionar a lógica para enviar os dados do formulário
                    const formData = {
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        isInvestor: investorSelect.value === 'yes',
                        investmentTypes: []
                    };
                    if (formData.isInvestor) {
                        investmentCheckboxes.forEach(checkbox => {
                            if (checkbox.checked) {
                                formData.investmentTypes.push(checkbox.value);
                            }
                        });
                    }
                    console.log('Dados do formulário:', formData);
                    // Aqui você enviaria os dados para seu servidor
                    // Por exemplo, usando fetch:
                    // fetch('/api/waitlist', {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    //     body: JSON.stringify(formData),
                    // })
                    // .then(response => response.json())
                    // .then(data => {
                    //     console.log('Success:', data);
                    //     signupModal.style.display = 'none';
                    // })
                    // .catch((error) => {
                    //     console.error('Error:', error);
                    // });

                    // Por enquanto, vamos apenas fechar o modal
                    signupModal.style.display = 'none';
                    alert('Obrigado por se inscrever na fila de espera! 🎉');
                }
            });
        });
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="js/script.js"></script>
</body>
