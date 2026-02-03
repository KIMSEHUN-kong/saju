// 천간 (10개)
const CHEONGAN = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const CHEONGAN_HANJA = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 지지 (12개)
const JIJI = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const JIJI_HANJA = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 오행 매핑
const CHEONGAN_ELEMENT = ['wood', 'wood', 'fire', 'fire', 'earth', 'earth', 'metal', 'metal', 'water', 'water'];
const JIJI_ELEMENT = ['water', 'earth', 'wood', 'wood', 'earth', 'fire', 'fire', 'earth', 'metal', 'metal', 'earth', 'water'];

// 오행 한글
const ELEMENT_KR = { wood: '목(木)', fire: '화(火)', earth: '토(土)', metal: '금(金)', water: '수(水)' };
const ELEMENT_EMOJI = { wood: '🌳', fire: '🔥', earth: '🏔️', metal: '⚔️', water: '💧' };

// 일간별 성격/특성
const ILGAN_DESC = {
    '갑': { char: '큰 나무', desc: '곧고 정직하며 리더십이 강한 성격입니다. 한번 결정하면 끝까지 밀고 나가는 추진력을 가졌습니다.' },
    '을': { char: '화초', desc: '유연하고 적응력이 뛰어나며 예술적 감각이 있습니다. 부드러움 속에 강한 의지가 있습니다.' },
    '병': { char: '태양', desc: '밝고 활발하며 열정적입니다. 주변을 밝게 비추는 따뜻한 마음을 가졌습니다.' },
    '정': { char: '촛불', desc: '섬세하고 따뜻하며 배려심이 깊습니다. 조용하지만 내면에 강한 불꽃을 품고 있습니다.' },
    '무': { char: '큰 산', desc: '믿음직스럽고 안정적이며 포용력이 있습니다. 변함없는 신뢰를 주는 존재입니다.' },
    '기': { char: '논밭', desc: '성실하고 꼼꼼하며 실용적입니다. 작은 것도 소중히 여기는 마음이 있습니다.' },
    '경': { char: '바위', desc: '강직하고 결단력 있으며 원칙을 중시합니다. 의리와 정의를 소중히 여깁니다.' },
    '신': { char: '보석', desc: '예민하고 섬세하며 완벽을 추구합니다. 아름다움과 조화를 사랑합니다.' },
    '임': { char: '큰 바다', desc: '포용력 있고 지혜로우며 깊은 사고를 합니다. 큰 그림을 보는 눈이 있습니다.' },
    '계': { char: '시냇물', desc: '영리하고 적응력이 뛰어나며 창의적입니다. 어떤 상황에서도 길을 찾아냅니다.' }
};

// 재물운 문구
const WEALTH_FORTUNES = [
    "평생 먹을 복을 타고난 사주입니다. 특히 40대 이후에 큰 재물운이 들어올 기운이 있습니다. 다만 젊은 시절에는 지출 관리가 중요합니다. 충동적인 소비보다는 계획적인 저축을 통해 미래를 준비하시면 좋겠습니다.",
    "돈을 벌어들이는 재주가 뛰어난 사주입니다. 특히 사람을 통해 재물이 들어오는 기운이 강합니다. 인맥을 소중히 하고, 좋은 관계를 유지하면 자연스럽게 재물운도 따라옵니다.",
    "안정적인 재물운을 가진 사주입니다. 한 번에 큰 돈보다는 꾸준히 쌓이는 복이 있습니다. 부동산이나 장기 투자에서 좋은 결과를 얻을 수 있으니, 조급해하지 마시고 천천히 자산을 늘려가세요.",
    "특별한 재능이 돈이 되는 사주입니다. 남들과 다른 분야에서 전문성을 키우면 그것이 곧 재물로 연결됩니다. 자기계발에 투자하는 것이 가장 좋은 재테크입니다.",
    "귀인을 통해 재물이 들어오는 사주입니다. 주변 사람들의 도움으로 좋은 기회를 얻게 됩니다. 평소 베풀며 살면 그 복이 배로 돌아옵니다."
];

// 연애운 문구
const LOVE_FORTUNES = [
    "진실된 인연을 만나면 오래도록 함께할 사주입니다. 첫눈에 반하는 인연보다는 서서히 깊어지는 관계에서 행복을 찾을 수 있습니다. 올해 하반기에 좋은 만남의 기회가 있으니 마음을 열어두세요.",
    "사람을 끌어당기는 매력이 있는 사주입니다. 다만 너무 많은 인연 중에서 진짜를 찾는 안목이 필요합니다. 외모보다는 마음을 보시고, 조건보다는 성품을 보시면 좋은 인연을 만날 수 있습니다.",
    "한번 마음을 주면 깊이 사랑하는 사주입니다. 상대방도 그 진심을 느끼고 감동받습니다. 다만 너무 올인하기보다는 자신만의 시간도 소중히 하시면 더욱 건강한 관계를 유지할 수 있습니다.",
    "운명적인 만남을 경험할 사주입니다. 예상치 못한 곳에서, 예상치 못한 시기에 인연이 찾아올 수 있습니다. 일상의 작은 만남도 소홀히 하지 마세요.",
    "따뜻한 가정을 이룰 복이 있는 사주입니다. 연인에서 부부로, 그리고 좋은 부모로 성장해가는 과정에서 큰 행복을 느낄 수 있습니다. 가족과 함께하는 시간을 소중히 여기세요."
];

// 직업운 문구
const CAREER_FORTUNES = [
    "리더의 자리에 오를 사주입니다. 관리직이나 경영 분야에서 능력을 발휘할 수 있습니다. 사람을 이끄는 일에 적성이 있으니, 작은 팀부터 시작해서 점점 더 큰 조직을 이끌어 보세요.",
    "전문가로서 인정받을 사주입니다. 한 분야를 깊이 파고드는 것이 성공의 열쇠입니다. 의료, 법률, 기술 등 전문직에서 빛을 발할 수 있습니다.",
    "창의적인 분야에서 두각을 나타낼 사주입니다. 예술, 디자인, 콘텐츠 제작 등의 분야에서 재능을 펼칠 수 있습니다. 남들의 시선보다 자신의 감각을 믿으세요.",
    "사람을 상대하는 일에서 성공할 사주입니다. 영업, 서비스, 교육 분야에서 좋은 성과를 낼 수 있습니다. 당신의 따뜻한 성품이 고객과 학생들의 마음을 움직입니다.",
    "안정적인 직장에서 꾸준히 성장할 사주입니다. 급격한 변화보다는 한 곳에서 실력을 쌓아가는 것이 좋습니다. 공무원, 대기업, 공공기관 등에서 오래도록 인정받을 수 있습니다."
];

// 오늘의 조언 문구
const DAILY_ADVICES = [
    "오늘은 말을 아끼고 남의 말을 경청하면 큰 이득이 생깁니다. 상대방의 이야기 속에 중요한 정보가 숨어 있을 수 있습니다.",
    "오늘은 새로운 도전을 시작하기 좋은 날입니다. 미루던 일이 있다면 지금 바로 시작해보세요. 첫 발걸음이 가장 중요합니다.",
    "오늘은 주변 사람들에게 먼저 연락해보세요. 오랜만에 인사를 건네면 뜻밖의 좋은 소식을 들을 수 있습니다.",
    "오늘은 건강에 신경 쓰는 것이 좋습니다. 가벼운 산책이나 스트레칭으로 몸과 마음의 균형을 맞추세요.",
    "오늘은 감사하는 마음을 표현하기 좋은 날입니다. 평소 고마웠던 분께 진심을 전해보세요. 좋은 기운이 돌아옵니다.",
    "오늘은 중요한 결정을 내리기보다는 정보를 모으는 데 집중하세요. 충분히 고민한 후에 결정해도 늦지 않습니다.",
    "오늘은 자기 자신을 위한 시간을 가져보세요. 좋아하는 음악을 듣거나, 맛있는 것을 먹으며 재충전하세요.",
    "오늘은 작은 친절이 큰 복으로 돌아오는 날입니다. 주변에 도움이 필요한 사람이 있다면 망설이지 말고 손을 내밀어보세요."
];

// 행운의 색상
const LUCKY_COLORS = [
    { name: '베이지', hex: '#F5F5DC', desc: '안정감을 줍니다' },
    { name: '하늘색', hex: '#87CEEB', desc: '평화로운 기운을 줍니다' },
    { name: '연두색', hex: '#90EE90', desc: '새로운 시작의 기운을 줍니다' },
    { name: '분홍색', hex: '#FFB6C1', desc: '사랑의 기운을 높여줍니다' },
    { name: '노란색', hex: '#FFD700', desc: '재물운을 높여줍니다' },
    { name: '보라색', hex: '#DDA0DD', desc: '창의력을 높여줍니다' },
    { name: '흰색', hex: '#FFFFFF', desc: '정화의 기운을 줍니다' },
    { name: '남색', hex: '#000080', desc: '지혜를 높여줍니다' }
];

// 행운의 방향
const LUCKY_DIRECTIONS = ['동쪽', '서쪽', '남쪽', '북쪽', '동북쪽', '동남쪽', '서북쪽', '서남쪽'];

// 사주 계산 함수
function calculateSaju(year, month, day, hour) {
    // 연주 천간 계산 (1984년이 갑자년 기준)
    const yearGanIndex = (year - 4) % 10;
    const yearJiIndex = (year - 4) % 12;

    // 월주 계산 (간단한 근사치)
    const monthGanIndex = ((year - 4) % 5 * 2 + month - 1) % 10;
    const monthJiIndex = (month + 1) % 12;

    // 일주 계산 (간단한 근사치 - 실제로는 만세력 필요)
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    const dayGanIndex = (diffDays + 10) % 10;
    const dayJiIndex = (diffDays + 10) % 12;

    // 시주 계산
    const hourJiIndex = Math.floor((hour + 1) / 2) % 12;
    const hourGanIndex = (dayGanIndex % 5 * 2 + hourJiIndex) % 10;

    return {
        year: { gan: yearGanIndex, ji: yearJiIndex },
        month: { gan: monthGanIndex, ji: monthJiIndex },
        day: { gan: dayGanIndex, ji: dayJiIndex },
        hour: { gan: hourGanIndex, ji: hourJiIndex }
    };
}

// 오행 에너지 계산
function calculateElementEnergy(saju) {
    const energy = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };

    // 각 기둥의 천간과 지지 오행 계산
    const pillars = ['year', 'month', 'day', 'hour'];
    pillars.forEach(pillar => {
        energy[CHEONGAN_ELEMENT[saju[pillar].gan]] += 12.5;
        energy[JIJI_ELEMENT[saju[pillar].ji]] += 12.5;
    });

    return energy;
}

// 사주 기둥 HTML 생성
function createPillarHTML(title, ganIndex, jiIndex) {
    const ganElement = CHEONGAN_ELEMENT[ganIndex];
    const jiElement = JIJI_ELEMENT[jiIndex];

    return `
        <div class="pillar">
            <div class="pillar-title">${title}</div>
            <div class="pillar-char ${ganElement}">${CHEONGAN_HANJA[ganIndex]}</div>
            <div class="pillar-meaning">${CHEONGAN[ganIndex]} (${ELEMENT_KR[ganElement].split('(')[0]})</div>
            <div class="pillar-char ${jiElement}">${JIJI_HANJA[jiIndex]}</div>
            <div class="pillar-meaning">${JIJI[jiIndex]} (${ELEMENT_KR[jiElement].split('(')[0]})</div>
        </div>
    `;
}

// 에너지 바 HTML 생성
function createEnergyBarHTML(element, value) {
    const kr = ELEMENT_KR[element];
    const emoji = ELEMENT_EMOJI[element];

    return `
        <div class="energy-bar-item">
            <div class="energy-bar-label">
                <span>${emoji} ${kr}</span>
                <span>${Math.round(value)}%</span>
            </div>
            <div class="energy-bar-track">
                <div class="energy-bar-fill ${element}" style="width: 0%"></div>
            </div>
        </div>
    `;
}

// 행운 가이드 HTML 생성
function createLuckGuideHTML(seed) {
    const colorIndex = seed % LUCKY_COLORS.length;
    const color = LUCKY_COLORS[colorIndex];
    const numbers = [(seed % 9) + 1, ((seed * 3) % 12) + 1];
    const direction = LUCKY_DIRECTIONS[seed % LUCKY_DIRECTIONS.length];

    return `
        <div class="luck-item">
            <div class="luck-icon">🎨</div>
            <div class="luck-label">행운의 컬러</div>
            <div class="luck-value" style="color: ${color.hex}; text-shadow: 0 0 5px rgba(0,0,0,0.3);">${color.name}</div>
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

// 메인 앱 로직
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const retryBtn = document.getElementById('retry-btn');
    const inputSection = document.getElementById('input-section');
    const resultSection = document.getElementById('result-section');
    const themeToggle = document.getElementById('theme-toggle');
    const copyLinkBtn = document.getElementById('copy-link');
    const shareKakaoBtn = document.getElementById('share-kakao');

    // 테마 초기화
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 테마 토글
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 사주 보기 버튼
    submitBtn.addEventListener('click', () => {
        const year = parseInt(document.getElementById('year').value);
        const month = parseInt(document.getElementById('month').value);
        const day = parseInt(document.getElementById('day').value);
        const hour = parseInt(document.getElementById('hour').value);

        // 유효성 검사
        if (!year || !month || !day || isNaN(hour)) {
            alert('생년월일시를 모두 입력해주세요.');
            return;
        }

        if (year < 1900 || year > 2030) {
            alert('태어난 해를 1900~2030 사이로 입력해주세요.');
            return;
        }

        if (month < 1 || month > 12) {
            alert('월은 1~12 사이로 입력해주세요.');
            return;
        }

        if (day < 1 || day > 31) {
            alert('일은 1~31 사이로 입력해주세요.');
            return;
        }

        if (hour < 0 || hour > 23) {
            alert('시는 0~23 사이로 입력해주세요.');
            return;
        }

        // 사주 계산
        const saju = calculateSaju(year, month, day, hour);
        const energy = calculateElementEnergy(saju);
        const seed = year + month + day + hour;
        const ilgan = CHEONGAN[saju.day.gan];

        // 1. 사주 원국 카드 생성
        const pillarContainer = document.getElementById('pillar-container');
        pillarContainer.innerHTML =
            createPillarHTML('시주(時柱)', saju.hour.gan, saju.hour.ji) +
            createPillarHTML('일주(日柱)', saju.day.gan, saju.day.ji) +
            createPillarHTML('월주(月柱)', saju.month.gan, saju.month.ji) +
            createPillarHTML('연주(年柱)', saju.year.gan, saju.year.ji);

        // 한 줄 요약
        const ilganInfo = ILGAN_DESC[ilgan];
        document.getElementById('one-line-summary').innerHTML =
            `당신은 <strong>${ilganInfo.char}(${CHEONGAN_HANJA[saju.day.gan]})</strong>의 기운을 타고났습니다.<br>${ilganInfo.desc}`;

        // 2. 오행 에너지 바
        const energyBars = document.getElementById('energy-bars');
        energyBars.innerHTML = Object.entries(energy)
            .sort((a, b) => b[1] - a[1])
            .map(([element, value]) => createEnergyBarHTML(element, value))
            .join('');

        // 에너지 설명
        const sortedEnergy = Object.entries(energy).sort((a, b) => b[1] - a[1]);
        const strongest = sortedEnergy[0];
        const weakest = sortedEnergy[sortedEnergy.length - 1];
        document.getElementById('energy-description').innerHTML =
            `${ELEMENT_EMOJI[strongest[0]]} <strong>${ELEMENT_KR[strongest[0]]}</strong> 에너지가 가장 강하고, ` +
            `${ELEMENT_EMOJI[weakest[0]]} <strong>${ELEMENT_KR[weakest[0]]}</strong> 에너지를 보완하면 더욱 좋습니다.`;

        // 3. 핵심 운세
        document.getElementById('wealth-content').textContent = WEALTH_FORTUNES[seed % WEALTH_FORTUNES.length];
        document.getElementById('love-content').textContent = LOVE_FORTUNES[seed % LOVE_FORTUNES.length];
        document.getElementById('career-content').textContent = CAREER_FORTUNES[seed % CAREER_FORTUNES.length];

        // 4. 행운 가이드
        document.getElementById('luck-grid').innerHTML = createLuckGuideHTML(seed);

        const today = new Date();
        const todaySeed = seed + today.getDate() + today.getMonth();
        document.getElementById('daily-advice').innerHTML =
            `<p><strong>💫 오늘의 조언:</strong><br>${DAILY_ADVICES[todaySeed % DAILY_ADVICES.length]}</p>`;

        // 화면 전환
        inputSection.style.display = 'none';
        resultSection.style.display = 'block';

        // 에너지 바 애니메이션
        setTimeout(() => {
            document.querySelectorAll('.energy-bar-fill').forEach((bar, index) => {
                const value = Object.entries(energy).sort((a, b) => b[1] - a[1])[index][1];
                bar.style.width = `${value}%`;
            });
        }, 300);

        // 스크롤 상단으로
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 아코디언 기능
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });

    // 다시 보기 버튼
    retryBtn.addEventListener('click', () => {
        resultSection.style.display = 'none';
        inputSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 링크 복사
    copyLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('링크가 복사되었습니다!'))
            .catch(() => alert('링크 복사에 실패했습니다.'));
    });

    // 카카오톡 공유 (실제 구현시 카카오 SDK 필요)
    shareKakaoBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: '사주팔자 운세',
                text: '나의 사주팔자 운세를 확인해보세요!',
                url: window.location.href
            });
        } else {
            alert('카카오톡 공유 기능은 모바일에서 더 잘 작동합니다.\n링크 복사 버튼을 이용해주세요!');
        }
    });
});
