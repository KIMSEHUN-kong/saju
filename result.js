/**
 * 오늘의 사주 - 결과 페이지 JavaScript
 */

// ===================================
// 운세 문구 데이터
// ===================================

const FORTUNE_DATA = {
    // 오늘의 운세
    today: {
        title: '🌅 오늘의 운세',
        fortunes: [
            {
                main: "오늘은 새로운 시작의 기운이 강하게 흐르는 날입니다. 그동안 망설였던 일이 있다면 오늘 첫 발을 내딛어 보세요. 특히 오전 시간대에 좋은 기운이 집중되어 있으니, 중요한 일은 오전에 처리하시면 좋겠습니다.\n\n사람들과의 관계에서도 긍정적인 에너지가 흐릅니다. 평소 연락하지 못했던 지인에게 안부 인사를 건네보세요. 작은 관심이 큰 인연으로 발전할 수 있습니다.",
                wealth: "재물운이 좋은 하루입니다. 다만 충동 구매는 피하시고, 꼭 필요한 것에만 지출하세요. 작은 이득을 탐하다 큰 것을 놓칠 수 있으니 넓은 시야로 판단하시기 바랍니다.",
                love: "싱글이라면 오늘 새로운 인연을 만날 가능성이 있습니다. 평소와 다른 장소에서 좋은 만남이 기다리고 있을 수 있어요. 커플이라면 상대방의 작은 말과 행동에 귀 기울여 주세요.",
                health: "전반적으로 컨디션이 좋은 날입니다. 단, 과식은 피하시고 규칙적인 식사를 유지하세요. 가벼운 산책으로 기운을 충전하면 더욱 좋습니다.",
                career: "직장에서 인정받을 수 있는 날입니다. 자신의 의견을 적극적으로 표현해보세요. 다만 너무 앞서나가기보다는 팀과의 조화를 중시하면 더 좋은 결과를 얻을 수 있습니다."
            },
            {
                main: "오늘은 내면의 목소리에 귀 기울여야 하는 날입니다. 주변의 의견보다 자신의 직감을 따르면 좋은 결과가 있을 것입니다. 복잡한 일일수록 단순하게 생각하세요.\n\n조용한 시간을 갖고 자신을 돌아보는 것도 좋습니다. 명상이나 일기 쓰기 등 마음을 정리하는 시간이 큰 도움이 됩니다.",
                wealth: "금전적으로 안정적인 하루입니다. 큰 변동은 없지만 작은 절약이 쌓여 큰 복이 됩니다. 불필요한 구독 서비스가 있다면 오늘 정리해보세요.",
                love: "연인과 깊은 대화를 나누기 좋은 날입니다. 평소 하지 못했던 이야기를 솔직하게 나눠보세요. 솔로라면 자기 자신을 사랑하는 시간을 가져보세요.",
                health: "피로가 쌓여있을 수 있습니다. 무리하지 말고 충분한 휴식을 취하세요. 따뜻한 차 한 잔이 심신 안정에 도움이 됩니다.",
                career: "맡은 업무를 묵묵히 수행하면 좋은 평가를 받을 수 있습니다. 새로운 프로젝트보다는 기존 업무를 마무리하는 데 집중하세요."
            },
            {
                main: "활발한 에너지가 넘치는 하루입니다. 적극적으로 움직이면 좋은 기회를 잡을 수 있습니다. 특히 오후 시간대에 행운이 따르니 중요한 약속은 오후에 잡으세요.\n\n새로운 사람을 만나거나 새로운 것을 배우기에 좋은 날입니다. 호기심을 가지고 세상을 바라보세요.",
                wealth: "예상치 못한 곳에서 작은 수입이 생길 수 있습니다. 하지만 투자나 큰 금융 결정은 오늘 피하시는 것이 좋겠습니다. 차분히 정보를 모으세요.",
                love: "매력이 빛나는 날입니다. 자신감 있는 모습이 상대방에게 좋은 인상을 줍니다. 데이트가 있다면 평소와 다른 새로운 장소를 방문해보세요.",
                health: "에너지가 넘치지만 과도한 운동은 피하세요. 적당한 운동과 충분한 수분 섭취가 중요합니다.",
                career: "창의적인 아이디어가 떠오르는 날입니다. 브레인스토밍이나 기획 업무에 좋은 시간입니다. 동료들과 의견을 나누며 시너지를 만들어보세요."
            }
        ]
    },

    // 주간/월간 운세
    weekly: {
        title: '📅 주간·월간 운세',
        fortunes: [
            {
                main: "이번 주는 새로운 기회가 찾아오는 시기입니다. 그동안 준비해온 것들이 빛을 발할 수 있습니다. 특히 주 초반에 중요한 결정을 내리면 좋은 결과로 이어질 가능성이 높습니다.\n\n이번 달 전체적으로 보면, 상반기는 활발한 활동의 시기이고, 하반기는 그 결실을 거두는 시기입니다. 조급해하지 말고 꾸준히 나아가세요.",
                wealth: "금전적으로 안정적인 흐름이 이어집니다. 주 중반에 작은 지출이 있을 수 있지만 걱정할 수준은 아닙니다. 월 말에 좋은 재물 기회가 올 수 있으니 대비하세요.",
                love: "관계에서 진전이 있을 수 있는 시기입니다. 솔직한 마음 표현이 관계 발전의 열쇠가 됩니다. 주말에는 소중한 사람과 특별한 시간을 보내보세요.",
                health: "면역력에 신경 써야 하는 시기입니다. 규칙적인 생활과 충분한 수면이 중요합니다. 주 중반 이후로 컨디션이 좋아질 것입니다.",
                career: "업무적으로 바쁜 한 주가 될 것입니다. 우선순위를 정하고 하나씩 처리해 나가세요. 이번 달 안에 큰 성과를 낼 수 있는 기회가 있습니다."
            }
        ]
    },

    // 2026년 운세
    year2026: {
        title: '✨ 2026년 운세',
        fortunes: [
            {
                main: "2026년 병오년(丙午年)은 당신에게 큰 변화와 성장의 해가 될 것입니다. 상반기에는 새로운 도전의 기회가 찾아오고, 하반기에는 그 노력의 결실을 맺게 됩니다.\n\n특히 봄(3~5월)에는 새로운 시작에 좋은 시기이고, 가을(9~11월)에는 수확의 기쁨을 누릴 수 있습니다. 올해는 적극적으로 움직일수록 좋은 결과가 따릅니다.\n\n다만 여름(6~8월)에는 건강에 유의하시고, 겨울(12~2월)에는 재정 관리에 신경 쓰세요.",
                wealth: "2026년 재물운은 전반적으로 상승세입니다. 특히 상반기에 투자나 재테크를 시작하면 좋은 결과를 얻을 수 있습니다. 다만 가을 이후에는 보수적인 재정 운용이 필요합니다. 연말에 큰 지출이 예상되니 미리 준비하세요.",
                love: "연애운이 빛나는 해입니다. 솔로라면 봄에 운명적인 만남이 있을 수 있습니다. 커플이라면 관계가 한 단계 발전하는 해가 될 것입니다. 결혼을 고려 중이라면 올해가 좋은 시기입니다.",
                health: "건강운은 하반기에 주의가 필요합니다. 특히 여름철 과로를 피하고, 규칙적인 운동 습관을 들이세요. 정기 검진을 받는 것도 좋습니다.",
                career: "직업운이 크게 상승하는 해입니다. 승진이나 이직의 기회가 찾아올 수 있습니다. 자기계발에 투자한 것이 빛을 발하게 됩니다. 새로운 프로젝트에 적극적으로 참여하세요."
            }
        ]
    },

    // 평생 사주
    lifetime: {
        title: '📜 평생 사주 분석',
        fortunes: [
            {
                main: "당신의 사주를 분석해보면, 타고난 기운이 조화롭게 구성되어 있습니다. 특히 일간(日干)의 기운이 강하여 주체적이고 독립적인 성향을 보입니다.\n\n인생 전반부(20~40세)에는 자신을 찾아가는 시기로, 다양한 경험을 통해 성장하게 됩니다. 중반부(40~60세)에는 그동안 쌓은 실력을 바탕으로 성과를 이루는 시기입니다. 후반부(60세 이후)에는 안정과 여유를 누리며 지혜를 나누는 시기가 됩니다.\n\n당신의 삶에서 가장 중요한 것은 '균형'입니다. 일과 삶, 관계와 개인 시간의 균형을 잘 유지하면 더욱 풍요로운 인생을 살 수 있습니다.",
                wealth: "재물복은 중년 이후에 크게 들어옵니다. 젊은 시절의 노력과 투자가 40대 이후 큰 열매를 맺게 됩니다. 특히 부동산이나 안정적인 자산에서 좋은 결과를 얻을 수 있습니다. 급하게 부를 쫓기보다 꾸준히 쌓아가는 것이 당신에게 맞는 방식입니다.",
                love: "인연운이 좋은 사주입니다. 진실된 마음으로 다가가면 좋은 인연을 만날 수 있습니다. 결혼 후에는 가정의 기둥 역할을 하게 되며, 배우자와 함께 성장하는 관계를 만들어 갈 수 있습니다. 자녀운도 좋아 화목한 가정을 이룰 복이 있습니다.",
                health: "기본적으로 건강한 체질이지만, 중년 이후 간과 위장 건강에 신경 써야 합니다. 과음을 피하고 규칙적인 식생활을 유지하세요. 60대 이후에는 관절 건강에도 주의가 필요합니다.",
                career: "다재다능하여 어떤 분야에서도 성과를 낼 수 있는 사주입니다. 특히 사람을 상대하는 일이나 창의적인 분야에서 두각을 나타낼 수 있습니다. 30대 중반에 인생의 방향이 정해지고, 40대에 자리를 잡게 됩니다."
            }
        ]
    },

    // 행운 가이드
    luck: {
        title: '🍀 행운 가이드',
        fortunes: [
            {
                main: "오늘 당신에게 필요한 것은 '용기'입니다. 새로운 것을 시도하는 데 두려워하지 마세요. 작은 용기가 큰 변화를 만들 수 있습니다.\n\n하루를 시작하기 전, 잠시 눈을 감고 오늘 하루를 상상해보세요. 긍정적인 마음으로 시작하면 좋은 에너지가 따라옵니다.",
                wealth: "오늘은 지갑을 열기보다 닫는 것이 좋습니다. 꼭 필요한 것이 아니라면 구매를 내일로 미루세요. 작은 절약이 큰 복이 됩니다.",
                love: "먼저 다가가면 좋은 반응을 얻을 수 있습니다. 부끄러워하지 말고 마음을 표현해보세요.",
                health: "충분한 수면이 오늘의 행운을 결정합니다. 일찍 잠자리에 들어보세요.",
                career: "맡은 일에 집중하면 좋은 결과가 따릅니다. 주변의 평가보다 자신의 만족을 위해 일하세요."
            }
        ]
    }
};

// 행운 데이터
const LUCKY_COLORS = [
    { name: '베이지', hex: '#D4B896' },
    { name: '하늘색', hex: '#87CEEB' },
    { name: '연두색', hex: '#90EE90' },
    { name: '분홍색', hex: '#FFB6C1' },
    { name: '노란색', hex: '#FFD700' },
    { name: '보라색', hex: '#DDA0DD' },
    { name: '민트색', hex: '#98FF98' },
    { name: '살구색', hex: '#FBCEB1' }
];

const LUCKY_DIRECTIONS = ['동쪽', '서쪽', '남쪽', '북쪽', '동북쪽', '동남쪽', '서북쪽', '서남쪽'];

// ===================================
// 결과 페이지 렌더링
// ===================================

// 공유 모드 여부
let isSharedView = false;

document.addEventListener('DOMContentLoaded', () => {
    // URL 파라미터에서 데이터 확인 (공유 링크용)
    const urlParams = new URLSearchParams(window.location.search);
    let data;

    if (urlParams.has('s')) {
        // 공유 링크에서 데이터 복호화
        try {
            const decoded = atob(urlParams.get('s'));
            data = JSON.parse(decoded);
            isSharedView = true; // 공유 모드 활성화
            // ⚠️ 공유 링크에서는 sessionStorage에 저장하지 않음!
        } catch (e) {
            window.location.href = 'index.html';
            return;
        }
    } else {
        // sessionStorage에서 데이터 가져오기
        const sajuDataStr = sessionStorage.getItem('sajuData');
        if (!sajuDataStr) {
            window.location.href = 'index.html';
            return;
        }
        data = JSON.parse(sajuDataStr);
    }

    const type = data.type || 'today';

    // 사주 계산
    const saju = calculateSaju(
        parseInt(data.year),
        parseInt(data.month),
        parseInt(data.day),
        parseInt(data.hour)
    );
    const energy = calculateElementEnergy(saju);
    const seed = parseInt(data.year) + parseInt(data.month) + parseInt(data.day) + (parseInt(data.hour) || 0);

    // 페이지 타이틀 설정
    const fortuneData = FORTUNE_DATA[type] || FORTUNE_DATA.today;
    document.getElementById('result-title').textContent = fortuneData.title;
    document.getElementById('fortune-title').textContent = fortuneData.title;

    // 1. 생년월일 정보 (공유 모드에서는 숨김)
    if (isSharedView) {
        document.getElementById('birth-info').textContent = '공유된 운세 결과입니다';
        document.getElementById('birth-info').style.color = '#D4AF37';
    } else {
        document.getElementById('birth-info').textContent = formatBirthInfo(data);
    }

    // 2. 사주 테이블 렌더링
    renderSajuTable(saju);

    // 3. 일간 요약
    renderIlganSummary(saju);

    // 4. 오행 에너지 그래프
    renderEnergyChart(energy);

    // 5. 운세 내용
    renderFortuneContent(fortuneData, seed);

    // 6. 세부 운세 아코디언
    renderDetailAccordion(fortuneData, seed);

    // 7. 행운 가이드
    renderLuckItems(seed);

    // 8. 다른 운세 메뉴
    renderMoreMenu(type);

    // 이벤트 리스너
    setupEventListeners();

    // 에너지 바 애니메이션
    setTimeout(() => {
        document.querySelectorAll('.energy-fill').forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = width + '%';
        });
    }, 300);
});

// ===================================
// 렌더링 함수들
// ===================================

function renderSajuTable(saju) {
    const cheonganRow = document.getElementById('cheongan-row');
    const jijiRow = document.getElementById('jiji-row');

    const pillars = [
        { key: 'hour', label: '시' },
        { key: 'day', label: '일' },
        { key: 'month', label: '월' },
        { key: 'year', label: '년' }
    ];

    let cheonganHTML = '';
    let jijiHTML = '';

    pillars.forEach(pillar => {
        const ganIdx = saju[pillar.key].gan;
        const jiIdx = saju[pillar.key].ji;
        const ganElement = CHEONGAN_ELEMENT[ganIdx];
        const jiElement = JIJI_ELEMENT[jiIdx];

        cheonganHTML += `<div class="saju-cell ${getElementClass(ganElement)}">${CHEONGAN_HANJA[ganIdx]}</div>`;
        jijiHTML += `<div class="saju-cell ${getElementClass(jiElement)}">${JIJI_HANJA[jiIdx]}</div>`;
    });

    cheonganRow.innerHTML = cheonganHTML;
    jijiRow.innerHTML = jijiHTML;
}

function renderIlganSummary(saju) {
    const ilgan = CHEONGAN[saju.day.gan];
    const info = ILGAN_INFO[ilgan];

    document.getElementById('ilgan-summary').innerHTML = `
        <h3>${info.symbol}(${CHEONGAN_HANJA[saju.day.gan]})의 기운을 타고났습니다</h3>
        <p>${info.personality}</p>
    `;
}

function renderEnergyChart(energy) {
    const container = document.getElementById('energy-chart');
    const sorted = Object.entries(energy).sort((a, b) => b[1] - a[1]);

    let html = '';
    sorted.forEach(([element, value]) => {
        html += `
            <div class="energy-bar">
                <div class="energy-label">
                    <span class="name">${ELEMENT_EMOJI[element]} ${ELEMENT_KR[element]}</span>
                    <span class="percent">${Math.round(value)}%</span>
                </div>
                <div class="energy-track">
                    <div class="energy-fill ${element}" data-width="${value}" style="width: 0%"></div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // 에너지 요약
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];
    document.getElementById('energy-summary').innerHTML = `
        ${ELEMENT_EMOJI[strongest[0]]} <strong>${ELEMENT_NAME[strongest[0]]}</strong>의 기운이 가장 강하고,
        ${ELEMENT_EMOJI[weakest[0]]} <strong>${ELEMENT_NAME[weakest[0]]}</strong>의 기운을 보완하면 더욱 좋습니다.
    `;
}

function renderFortuneContent(fortuneData, seed) {
    const container = document.getElementById('fortune-content');
    const fortune = fortuneData.fortunes[seed % fortuneData.fortunes.length];

    container.innerHTML = `<p>${fortune.main.replace(/\n\n/g, '</p><p>')}</p>`;
}

function renderDetailAccordion(fortuneData, seed) {
    const container = document.getElementById('detail-accordion');
    const fortune = fortuneData.fortunes[seed % fortuneData.fortunes.length];

    const details = [
        { icon: '💰', title: '재물운', content: fortune.wealth },
        { icon: '❤️', title: '연애·인간관계', content: fortune.love },
        { icon: '🏥', title: '건강운', content: fortune.health },
        { icon: '💼', title: '직업·성공운', content: fortune.career }
    ];

    let html = '';
    details.forEach((detail, index) => {
        html += `
            <div class="accordion-item">
                <button class="accordion-header" data-index="${index}">
                    <span>${detail.icon} ${detail.title}</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-body">
                    <div class="accordion-content">
                        <p>${detail.content}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderLuckItems(seed) {
    const container = document.getElementById('luck-items');
    const today = new Date();
    const todaySeed = seed + today.getDate() + today.getMonth();

    const colorIdx = todaySeed % LUCKY_COLORS.length;
    const color = LUCKY_COLORS[colorIdx];
    const numbers = [(todaySeed % 9) + 1, ((todaySeed * 3) % 12) + 1];
    const direction = LUCKY_DIRECTIONS[todaySeed % LUCKY_DIRECTIONS.length];

    container.innerHTML = `
        <div class="luck-item">
            <div class="luck-icon">🎨</div>
            <div class="luck-label">행운의 컬러</div>
            <div class="luck-value" style="color: ${color.hex}">${color.name}</div>
        </div>
        <div class="luck-item">
            <div class="luck-icon">🔢</div>
            <div class="luck-label">행운의 숫자</div>
            <div class="luck-value">${numbers.join(', ')}</div>
        </div>
        <div class="luck-item">
            <div class="luck-icon">🧭</div>
            <div class="luck-label">행운의 방향</div>
            <div class="luck-value">${direction}</div>
        </div>
    `;
}

function renderMoreMenu(currentType) {
    const container = document.getElementById('more-menu');
    const menus = [
        { type: 'today', icon: '🌅', title: '오늘의 운세' },
        { type: 'weekly', icon: '📅', title: '주간·월간' },
        { type: 'year2026', icon: '✨', title: '2026년 운세' },
        { type: 'lifetime', icon: '📜', title: '평생 사주' },
        { type: 'luck', icon: '🍀', title: '행운 가이드' }
    ];

    let html = '';
    menus.forEach(menu => {
        if (menu.type !== currentType) {
            // 공유 모드면 input.html로, 아니면 바로 결과로
            const href = isSharedView ? `input.html?type=${menu.type}` : '#';
            html += `
                <a href="${href}" class="more-item" data-type="${menu.type}">
                    <span>${menu.icon}</span>
                    <span>${menu.title}</span>
                </a>
            `;
        }
    });

    container.innerHTML = html;

    // 공유 모드가 아닐 때만 바로 결과로 이동
    if (!isSharedView) {
        container.querySelectorAll('.more-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const newType = item.dataset.type;
                const sajuData = JSON.parse(sessionStorage.getItem('sajuData'));
                sajuData.type = newType;
                sessionStorage.setItem('sajuData', JSON.stringify(sajuData));
                window.location.href = 'loading.html';
            });
        });
    }
}

function setupEventListeners() {
    // 아코디언
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });

    // 공유 모드 처리
    if (isSharedView) {
        // 공유 버튼 숨기고 "나도 보기" 버튼으로 변경
        const headerShare = document.getElementById('header-share');
        if (headerShare) {
            headerShare.textContent = '나도 보기';
            headerShare.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // 결과 링크 복사 버튼을 "나도 운세 보기"로 변경
        const copyBtn = document.getElementById('copy-result');
        if (copyBtn) {
            copyBtn.innerHTML = '<span>✨</span> 나도 운세 보기';
            copyBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // 공유 섹션 문구 변경
        const shareSection = document.querySelector('.share-section > p');
        if (shareSection) {
            shareSection.textContent = '나도 내 운세를 확인해보세요!';
        }
    } else {
        // 결과 링크 복사 버튼
        document.getElementById('copy-result')?.addEventListener('click', copyResultLink);
        document.getElementById('header-share')?.addEventListener('click', copyResultLink);
    }
}

// 결과 링크 생성 및 복사
function copyResultLink() {
    const sajuData = JSON.parse(sessionStorage.getItem('sajuData'));

    // 데이터를 base64로 인코딩 (생년월일 직접 노출 방지)
    const encoded = btoa(JSON.stringify(sajuData));
    const shareUrl = `${window.location.origin}${window.location.pathname}?s=${encoded}`;

    // 클립보드에 복사
    navigator.clipboard.writeText(shareUrl)
        .then(() => {
            alert('결과 링크가 복사되었습니다!\n친구에게 공유해보세요 🎉');
        })
        .catch(() => {
            // fallback
            const textarea = document.createElement('textarea');
            textarea.value = shareUrl;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('결과 링크가 복사되었습니다!\n친구에게 공유해보세요 🎉');
        });
}
