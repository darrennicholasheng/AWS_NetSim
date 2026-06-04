        const quizBank = [
            {
                q: "Perusahaan Anda memiliki arsitektur web tiga lapis (three-tier architecture) di AWS. Di bagian manakah Amazon RDS (Database) dan EC2 Instances untuk backend aplikasi sebaiknya diletakkan demi alasan keamanan optimal?",
                exp: "Komponen backend dan database sensitif wajib diletakkan di private subnet agar terisolasi sepenuhnya dari akses luar internet langsung.",
                options: [
                    { t: "A. Public Subnet, karena database harus bisa menerima pembaruan (patching) langsung dari internet.", c: false },
                    { t: "B. Private Subnet, agar terisolasi dari akses internet langsung and hanya bisa dihubungi oleh lapisan di atasnya.", c: true },
                    { t: "C. Internet Gateway, karena komponen ini bertindak sebagai jembatan enkripsi database.", c: false },
                    { t: "D. Edge Location, agar data hasil kueri database dapat di-cache dekat dengan pengguna global.", c: false }
                ]
            },
            {
                q: "Saat mengonfigurasi tabel rute (Route Table) untuk sebuah Public Subnet di dalam Amazon VPC, baris entri aturan manakah yang wajib ada agar subnet tersebut dapat berkomunikasi dua arah dengan internet publik?",
                exp: "Public subnet didefinisikan secara mutlak oleh adanya rute tujuan luar internet (0.0.0.0/0) yang diarahkan menuju Internet Gateway (IGW).",
                options: [
                    { t: "A. 10.0.0.0/16 mengarah ke local", c: false },
                    { t: "B. 0.0.0.0/0 mengarah ke NAT Gateway", c: false },
                    { t: "C. 0.0.0.0/0 mengarah ke Internet Gateway", c: true },
                    { t: "D. 127.0.0.1/32 mengarah ke Virtual Private Gateway", c: false }
                ]
            },
            {
                q: "Sebuah startup ingin memastikan bahwa server backend mereka di Private Subnet tetap bisa mengunduh library kode dan pembaruan perangkat lunak dari internet, tetapi dilarang keras menerima koneksi masuk (inbound) dari pihak luar di internet. Komponen VPC apa yang harus dipasang di Public Subnet untuk memfacilitasi kebutuhan ini?",
                exp: "NAT Gateway memberikan akses keluar (outbound-only) bagi private subnet untuk patching dan mengunduh library, seraya memblokir koneksi inbound liar.",
                options: [
                    { t: "A. Internet Gateway", c: false },
                    { t: "B. NAT Gateway", c: true },
                    { t: "C. Security Group dengan aturan Stateless", c: false },
                    { t: "D. AWS Route 53 Geolocation", c: false }
                ]
            },
            {
                q: "Manakah pernyataan berikut yang mendefinisikan dengan tepat perbedaan mendasar antara sifat Stateful pada Security Group dan Stateless pada Network Access Control List (NACL)?",
                exp: "Security Group bersifat Stateful (otomatis meloloskan trafik balik), sedangkan NACL bersifat Stateless sehingga aturan inbound dan outbound wajib ditulis eksplisit satu per satu.",
                options: [
                    { t: "A. Security Group otomatis mengizinkan trafik keluar balasan jika trafik masuknya diizinkan, sedangkan NACL memerlukan aturan keluar (outbound) yang ditulis secara eksplisit.", c: true },
                    { t: "B. Security Group memeriksa paket data di tingkat subnet, sedangkan NACL memeriksa paket data langsung di dalam sistem operasi EC2.", c: false },
                    { t: "C. Security Group mendukung aturan Allow dan Deny, sedangkan NACL hanya mendukung aturan Allow.", c: false },
                    { t: "D. Jika suatu trafik diblokir oleh Security Group, NACL otomatis akan ikut membuka blokir tersebut demi ketersediaan jaringan.", c: false }
                ]
            },
            {
                q: "Anda ingin mendaftarkan nama domain baru tokoku-online.com dan mengarahkan trafik pengguna ke infrastruktur AWS yang Anda miliki. Layanan AWS manakah yang menyediakan fitur registrasi domain sekaligus manajemen resolusi DNS tersebut?",
                exp: "Amazon Route 53 adalah layanan DNS terkelola yang menangani fungsi komprehensif mulai dari registrasi nama domain baru hingga manajemen kueri records.",
                options: [
                    { t: "A. Amazon CloudFront", c: false },
                    { t: "B. AWS Direct Connect", c: false },
                    { t: "C. Amazon VPC Wizard", c: false },
                    { t: "D. AWS Route 53", c: true }
                ]
            },
            {
                q: "Perusahaan game online meluncurkan server baru di dua Region AWS: Singapura dan Virginia. Mereka ingin memastikan pemain asal Indonesia otomatis diarahkan ke server Singapura, sedangkan pemain asal Amerika diarahkan ke Virginia untuk meminimalkan waktu tunggu jaringan (round-trip time). Kebijakan routing Route 53 mana yang paling tepat?",
                exp: "Margarahkan trafik untuk meminimalkan latensi atau waktu tunggu jaringan (round-trip time) merupakan fungsi utama dari Latency-based Routing Policy.",
                options: [
                    { t: "A. Simple Routing Policy", c: false },
                    { t: "B. Latency-based Routing Policy", c: true },
                    { t: "C. Failover Routing Policy", c: false },
                    { t: "D. Weighted Routing Policy", c: false }
                ]
            },
            {
                q: "Anda ingin mengonfigurasi strategi Disaster Recovery (pemulihan bencana) Active-Passive. Jika aplikasi web utama Anda di Region Jakarta mengalami kegagalan, Route 53 harus otomatis mengalihkan pengguna ke situs cadangan statis di Amazon S3 Region Tokyo. Kebijakan routing apa yang mendukung skenario ini?",
                exp: "Failover Routing Policy digunakan khusus dalam skenario pemulihan Active-Passive yang dipadukan secara otomatis dengan Route 53 Health Checks.",
                options: [
                    { t: "A. Geoproximity Routing Policy", c: false },
                    { t: "B. Failover Routing Policy", c: true },
                    { t: "C. Multi-value Answer Routing Policy", c: false },
                    { t: "D. Weighted Routing Policy dengan bobot 50:50", c: false }
                ]
            },
            {
                q: "Di manakah Amazon CloudFront menyimpan salinan sementara (cache) dari aset website seperti file gambar, video, and dokumen HTML agar dapat diakses dengan latensi sangat rendah oleh pengguna di seluruh dunia?",
                exp: "Tempat penampungan sementara (cache data) global CDN Amazon CloudFront dinamakan Edge Location.",
                options: [
                    { t: "A. Availability Zones", c: false },
                    { t: "B. Edge Locations", c: true },
                    { t: "C. Private Subnets", c: false },
                    { t: "D. Origin Servers", c: false }
                ]
            },
            {
                q: "Anda baru saja memperbarui file logo perusahaan logo.png di Amazon S3 bucket yang bertindak as Origin untuk Amazon CloudFront. Namun, pelanggan melaporkan bahwa mereka masih melihat logo lama saat accessing website. Langkah apa yang harus Anda lakukan untuk memaksa CloudFront memperbarui file tersebut di seluruh dunia secara instan?",
                exp: "Cache Invalidation digunakan untuk menghapus paksa salinan data lama di seluruh Edge Location sebelum batas waktu TTL asli habis.",
                options: [
                    { t: "A. Menghapus Internet Gateway dan membuat yang baru.", c: false },
                    { t: "B. Melakukan proses Cache Invalidation untuk path file tersebut di CloudFront Distribution.", c: true },
                    { t: "C. Mengubah kebijakan routing Route 53 dari Simple ke Latency-based.", c: false },
                    { t: "D. Menurutkan batas kapasitas alokasi IP di CIDR block VPC.", c: false }
                ]
            },
            {
                q: "Mengapa mengintegrasikan Amazon CloudFront di garda terdepan Amazon VPC dianggap sebagai praktik arsitektur terbaik (best practice) dari sisi keamanan dan efisiensi?",
                exp: "Sinergi CloudFront di depan VPC bertindak sebagai perisai perimeter luar (DDoS protection via AWS Shield) sehingga serangan diredam di Edge Location sebelum sempat membebani bandwidth server origin dalam VPC.",
                options: [
                    { t: "A. Karena CloudFront otomatis memindahkan database dari private subnet ke edge location.", c: false },
                    { t: "B. Karena CloudFront menghapus kebutuhan akan Security Group dan NACL di tingkat VPC.", c: false },
                    { t: "C. Karena serangan DDoS dapat diredam di perimeter luar (Edge Locations) melalui AWS Shield sebelum sempat masuk membebani bandwidth dan server di dalam VPC.", c: true },
                    { t: "D. Karena CloudFront memaksa semua server backend di dalam VPC menggunakan alamat IP publik.", c: false }
                ]
            }
        ];

        let isQuizLocked = false;
        let currentScenario = 'normal';
        let currentQuestionIndex = 0;
        let correctAnswersCount = 0;
        let userSelectedAnswers = []; 

        function scrollToContent() {
            const targetElement = document.getElementById('main-home-content');
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; 
                let start = null;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const progressPercentage = Math.min(progress / duration, 1);
                    
                    const easeInOutCubic = progressPercentage < 0.5 
                        ? 4 * progressPercentage * progressPercentage * progressPercentage 
                        : 1 - Math.pow(-2 * progressPercentage + 2, 3) / 2;

                    window.scrollTo(0, startPosition + distance * easeInOutCubic);

                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }
                
                window.requestAnimationFrame(step);
            }
        }

        function openMenu() {
            document.getElementById('navOverlay').classList.add('open');
        }

        function closeMenu() {
            document.getElementById('navOverlay').classList.remove('open');
        }

        function selectMenu(tabId) {
            if (isQuizLocked) {
                alert("❌ Navigasi Terkunci! Selesaikan quiz Anda terlebih dahulu.");
                return;
            }
            closeMenu();
            switchTab(tabId);
        }

        function switchTab(tabId) {
            document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
            document.getElementById(`page-${tabId}`).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'instant' }); 

            if(tabId === 'home') renderLeaderboard();
            if(tabId === 'estimator') calculateCloudCosts();
            
            if(tabId === 'simulator') {
                setTimeout(updateSimPaths, 150);
            }
        }

        function setScenario(scen) {
            currentScenario = scen;
            document.querySelectorAll('.condition-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`cond-${scen}`).classList.add('active');
        }

        function updateSimPaths() {
            const svg = document.getElementById('sim-svg-overlay');
            if (!svg || window.getComputedStyle(svg).display === 'none') return;
            
            const rect = svg.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            const getNodeCenter = (id) => {
                const el = document.getElementById(id);
                if (!el) return {x: 0, y: 0};
                const elRect = el.getBoundingClientRect();
                return {
                    x: elRect.left - rect.left + elRect.width / 2,
                    y: elRect.top - rect.top + elRect.height / 2
                };
            };

            const user = getNodeCenter('node-user');
            const r53 = getNodeCenter('node-r53');
            const cf = getNodeCenter('node-cf');
            const vpc = getNodeCenter('node-vpc');

            document.getElementById('path-user-r53').setAttribute('d', `M ${user.x} ${user.y} L ${r53.x} ${r53.y}`);
            document.getElementById('path-r53-cf').setAttribute('d', `M ${r53.x} ${r53.y} L ${cf.x} ${cf.y}`);
            document.getElementById('path-cf-vpc').setAttribute('d', `M ${cf.x} ${cf.y} L ${vpc.x} ${vpc.y}`);
        }

        function runSimulation() {
            const log = document.getElementById('sim-log');
            
            document.querySelectorAll('.sim-node').forEach(n => n.className = 'sim-node');
            
            const p1 = document.getElementById('path-user-r53');
            const p2 = document.getElementById('path-r53-cf');
            const p3 = document.getElementById('path-cf-vpc');
            
            p1.className.baseVal = 'sim-path';
            p2.className.baseVal = 'sim-path';
            p3.className.baseVal = 'sim-path';
            
            p1.setAttribute('marker-end', 'url(#arrow-dark)');
            p2.setAttribute('marker-end', 'url(#arrow-dark)');
            p3.setAttribute('marker-end', 'url(#arrow-dark)');

            log.innerHTML = "[Proses] Menginisiasi transmisi paket data...<br>";

            setTimeout(() => {
                document.getElementById('node-user').classList.add('active-ok');
                log.innerHTML += "[Tahap 1] Client Browser melempar request DNS resolution...<br>";
                
                p1.className.baseVal = 'sim-path active-route';
                p1.setAttribute('marker-end', 'url(#arrow-blue)');
            }, 400);

            setTimeout(() => {
                document.getElementById('node-r53').classList.add('active-ok');
                log.innerHTML += "[Tahap 2] Amazon Route 53 memetakan nama domain ke IP CloudFront CDN!<br>";
                
                p1.className.baseVal = 'sim-path active-success';
                p1.setAttribute('marker-end', 'url(#arrow-success)');
                
                p2.className.baseVal = 'sim-path active-route';
                p2.setAttribute('marker-end', 'url(#arrow-blue)');
            }, 1200);

            setTimeout(() => {
                const cfNode = document.getElementById('node-cf');
                
                p2.className.baseVal = 'sim-path active-success';
                p2.setAttribute('marker-end', 'url(#arrow-success)');

                if (currentScenario === 'cdn-fail') {
                    cfNode.classList.add('active-warn'); 
                    log.innerHTML += "[Tahap 3] <span style='color:var(--warning)'>[Cache Miss] CloudFront CDN meneruskan request langsung ke VPC Origin...</span><br>";
                    
                    p3.className.baseVal = 'sim-path active-route';
                    p3.setAttribute('marker-end', 'url(#arrow-blue)');
                } else {
                    cfNode.classList.add('active-ok');
                    log.innerHTML += "[Tahap 3] [Cache Hit] CloudFront menyuplai data instan dari Edge Cache!<br>";
                    
                    p3.className.baseVal = 'sim-path active-success';
                    p3.setAttribute('marker-end', 'url(#arrow-success)');
                }
            }, 2000);

            setTimeout(() => {
                const vpcNode = document.getElementById('node-vpc');
                if (currentScenario === 'vpc-down') {
                    vpcNode.classList.add('active-fail');
                    log.innerHTML += "<span style='color:var(--error);'>[Tahap 4] [ERROR 502] Server Origin Jaringan VPC Down / Bad Gateway!</span>";
                    
                    if (currentScenario === 'cdn-fail') {
                        p3.className.baseVal = 'sim-path active-fail';
                        p3.setAttribute('marker-end', 'url(#arrow-fail)');
                    }
                } else if (currentScenario === 'cdn-fail') {
                    vpcNode.classList.add('active-ok');
                    log.innerHTML += "<span style='color:var(--success);'>[Tahap 4] [BERHASIL] VPC server merespon Dynamic Request secara aman!</span>";
                    
                    p3.className.baseVal = 'sim-path active-success';
                    p3.setAttribute('marker-end', 'url(#arrow-success)');
                } else {
                    vpcNode.classList.add('active-ok');
                    log.innerHTML += "<span style='color:var(--success);'>[Tahap 4] [BERHASIL] Alur paket selesai sepenuhnya melalui Edge Cache & VPC Standby.</span>";
                }
            }, 2800);
        }

        function calculateCloudCosts() {
            const natQty = parseFloat(document.getElementById('cost-nat-qty').value) || 0;
            const natData = parseFloat(document.getElementById('cost-nat-data').value) || 0;
            const r53Zones = parseFloat(document.getElementById('cost-r53-zones').value) || 0;
            const r53Queries = parseFloat(document.getElementById('cost-r53-queries').value) || 0;
            const cfDataOut = parseFloat(document.getElementById('cost-cf-dataout').value) || 0;

            const vpcCost = (natQty * 32.40) + (natData * 0.045);
            const r53Cost = (r53Zones * 0.50) + (r53Queries * 0.40);
            const cfCost = cfDataOut * 0.114;
            const totalCost = vpcCost + r53Cost + cfCost;

            document.getElementById('breakdown-vpc').innerText = `$${vpcCost.toFixed(2)}`;
            document.getElementById('breakdown-r53').innerText = `$${r53Cost.toFixed(2)}`;
            document.getElementById('breakdown-cf').innerText = `$${cfCost.toFixed(2)}`;
            document.getElementById('grand-total-price').innerText = `$${totalCost.toFixed(2)}`;
        }

        function startLockedQuiz() {
            const nameInput = document.getElementById('user-name').value.trim();
            if(!nameInput) {
                alert("Silakan masukkan nama!");
                return;
            }
            
            isQuizLocked = true;
            currentQuestionIndex = 0;
            correctAnswersCount = 0;
            userSelectedAnswers = [];
            
            document.getElementById('quiz-intro-screen').style.display = 'none';
            document.getElementById('quiz-play-screen').style.display = 'block';
            document.getElementById('quiz-meta-panel').style.display = 'flex';
            document.getElementById('quiz-progress-bar-container').style.display = 'block';
            
            showQuestion();
        }

        function showQuestion() {
            const currentQuestion = quizBank[currentQuestionIndex];
            document.getElementById('quiz-progress-text').innerText = `Soal ${currentQuestionIndex + 1} dari 10`;
            document.getElementById('quiz-score-running').innerText = `Jawaban Benar: ${correctAnswersCount}`;
            
            const progressPercent = ((currentQuestionIndex) / quizBank.length) * 100;
            document.getElementById('quiz-progress-fill').style.width = `${progressPercent}%`;
            document.getElementById('question-text').innerText = currentQuestion.q;
            
            const optionsContainer = document.getElementById('quiz-options-container');
            optionsContainer.innerHTML = '';
            
            currentQuestion.options.forEach(opt => {
                const optDiv = document.createElement('div');
                optDiv.className = 'quiz-option';
                optDiv.innerText = opt.t;
                optDiv.onclick = () => handleAnswerSubmission(opt);
                optionsContainer.appendChild(optDiv);
            });
        }

        function handleAnswerSubmission(selectedOption) {
            userSelectedAnswers.push(selectedOption);
            if(selectedOption.c) correctAnswersCount++;
            currentQuestionIndex++;
            
            if(currentQuestionIndex < quizBank.length) {
                showQuestion();
            } else {
                finishQuizProcedure();
            }
        }

        function finishQuizProcedure() {
            const nameInput = document.getElementById('user-name').value.trim();
            const finalScore = correctAnswersCount * 10;
            
            document.getElementById('quiz-play-screen').style.display = 'none';
            document.getElementById('quiz-meta-panel').style.display = 'none';
            document.getElementById('quiz-progress-bar-container').style.display = 'none';
            document.getElementById('quiz-result-screen').style.display = 'block';
            
            document.getElementById('result-score-text').innerText = `Skor Akhir: ${finalScore} / 100`;
            document.getElementById('result-status-title').innerText = finalScore >= 70 ? "🎉 Selamat, Anda Lulus!" : "📚 Tetap Semangat!";
            document.getElementById('result-summary-text').innerText = `${correctAnswersCount} Benar dari 10 Soal.`;
            
            const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            let leaderboardData = JSON.parse(localStorage.getItem('netsim_scores')) || [];
            leaderboardData.push({ name: nameInput, userScore: finalScore, time: timestamp });
            localStorage.setItem('netsim_scores', JSON.stringify(leaderboardData));
        }

        function showReviewScreen() {
            document.getElementById('quiz-result-screen').style.display = 'none';
            const reviewContainer = document.getElementById('review-list-container');
            reviewContainer.innerHTML = '';

            quizBank.forEach((item, index) => {
                const userAns = userSelectedAnswers[index];
                const rightAns = item.options.find(o => o.c);
                const itemDiv = document.createElement('div');
                itemDiv.className = 'review-item';

                let answerStatusHTML = userAns.c 
                    ? `<div class="review-ans correct-match">🟢 <b>Jawaban Anda Benar:</b> ${userAns.t}</div>`
                    : `<div class="review-ans wrong-match">🔴 <b>Jawaban Anda:</b> ${userAns.t}</div><div class="review-ans correct-match">🟢 <b>Kunci Jawaban Tepat:</b> ${rightAns.t}</div>`;

                itemDiv.innerHTML = `<div class="review-q">Soal ${index + 1}. ${item.q}</div>${answerStatusHTML}<div class="review-explanation"><b>💡 Penjelasan Arsitektur:</b> ${item.exp}</div>`;
                reviewContainer.appendChild(itemDiv);
            });

            document.getElementById('quiz-review-screen').style.display = 'block';
        }

        function resetQuizState() {
            isQuizLocked = false;
            document.getElementById('user-name').value = '';
            document.getElementById('quiz-result-screen').style.display = 'none';
            document.getElementById('quiz-review-screen').style.display = 'none';
            document.getElementById('quiz-intro-screen').style.display = 'block';
            switchTab('home');
        }

        function renderLeaderboard() {
            const tbody = document.getElementById('leaderboard-body');
            tbody.innerHTML = '';
            let leaderboardData = JSON.parse(localStorage.getItem('netsim_scores')) || [];
            if(leaderboardData.length === 0) {
                tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding: 20px;">No quiz scores recorded yet.</td></tr>`;
                return;
            }
            leaderboardData.sort((a, b) => b.userScore - a.userScore).forEach(data => {
                tbody.innerHTML += `<tr><td><strong>${data.name}</strong></td><td style="color:var(--aws-orange); font-weight:bold;">${data.userScore} Points</td><td style="color:var(--text-muted);">${data.time}</td></tr>`;
            });
        }

        window.onload = function() {
            if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
            window.scrollTo({ top: 0 });
            switchTab('home');
            
            window.addEventListener('resize', updateSimPaths);
        };