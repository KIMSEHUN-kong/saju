/**
 * 오늘의 사주 - 공통 JavaScript
 * 만세력 계산 및 유틸리티 함수
 */

// ===================================
// 천간/지지 데이터
// ===================================

const CHEONGAN = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const CHEONGAN_HANJA = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

const JIJI = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const JIJI_HANJA = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 오행 매핑
const CHEONGAN_ELEMENT = ['wood', 'wood', 'fire', 'fire', 'earth', 'earth', 'metal', 'metal', 'water', 'water'];
const JIJI_ELEMENT = ['water', 'earth', 'wood', 'wood', 'earth', 'fire', 'fire', 'earth', 'metal', 'metal', 'earth', 'water'];

const ELEMENT_KR = {
    wood: '목(木)',
    fire: '화(火)',
    earth: '토(土)',
    metal: '금(金)',
    water: '수(水)'
};

const ELEMENT_NAME = {
    wood: '목',
    fire: '화',
    earth: '토',
    metal: '금',
    water: '수'
};

const ELEMENT_EMOJI = {
    wood: '🌳',
    fire: '🔥',
    earth: '🏔️',
    metal: '⚔️',
    water: '💧'
};

// ===================================
// 일간별 성격/특성
// ===================================

const ILGAN_INFO = {
    '갑': {
        symbol: '큰 나무',
        nature: '양목(陽木)',
        personality: '곧고 정직하며 리더십이 강합니다. 한번 결정하면 끝까지 밀고 나가는 추진력이 있으며, 정의감이 강하고 불의를 참지 못합니다.',
        strength: '리더십, 추진력, 정직함',
        weakness: '고집, 융통성 부족'
    },
    '을': {
        symbol: '화초',
        nature: '음목(陰木)',
        personality: '유연하고 적응력이 뛰어나며 예술적 감각이 있습니다. 부드러움 속에 강한 의지가 있고, 어떤 환경에서도 잘 적응합니다.',
        strength: '적응력, 유연함, 예술적 감각',
        weakness: '우유부단, 의존적 경향'
    },
    '병': {
        symbol: '태양',
        nature: '양화(陽火)',
        personality: '밝고 활발하며 열정적입니다. 주변을 밝게 비추는 따뜻한 마음을 가졌으며, 리더십과 추진력이 강합니다.',
        strength: '열정, 밝은 성격, 영향력',
        weakness: '급한 성격, 지속력 부족'
    },
    '정': {
        symbol: '촛불',
        nature: '음화(陰火)',
        personality: '섬세하고 따뜻하며 배려심이 깊습니다. 조용하지만 내면에 강한 불꽃을 품고 있으며, 한 번 마음 먹으면 끝까지 갑니다.',
        strength: '섬세함, 배려심, 집중력',
        weakness: '소심함, 걱정이 많음'
    },
    '무': {
        symbol: '큰 산',
        nature: '양토(陽土)',
        personality: '믿음직스럽고 안정적이며 포용력이 있습니다. 변함없는 신뢰를 주는 존재이며, 주변 사람들의 버팀목 역할을 합니다.',
        strength: '안정감, 신뢰성, 포용력',
        weakness: '변화에 느림, 고집'
    },
    '기': {
        symbol: '논밭',
        nature: '음토(陰土)',
        personality: '성실하고 꼼꼼하며 실용적입니다. 작은 것도 소중히 여기며, 차근차근 목표를 이뤄나가는 힘이 있습니다.',
        strength: '성실함, 꼼꼼함, 실용성',
        weakness: '소극적, 욕심 부림'
    },
    '경': {
        symbol: '바위',
        nature: '양금(陽金)',
        personality: '강직하고 결단력 있으며 원칙을 중시합니다. 의리와 정의를 소중히 여기며, 한번 한 약속은 반드시 지킵니다.',
        strength: '결단력, 의리, 원칙',
        weakness: '융통성 부족, 무뚝뚝함'
    },
    '신': {
        symbol: '보석',
        nature: '음금(陰金)',
        personality: '예민하고 섬세하며 완벽을 추구합니다. 아름다움과 조화를 사랑하며, 뛰어난 심미안을 가지고 있습니다.',
        strength: '섬세함, 심미안, 완벽주의',
        weakness: '예민함, 비판적'
    },
    '임': {
        symbol: '큰 바다',
        nature: '양수(陽水)',
        personality: '포용력 있고 지혜로우며 깊은 사고를 합니다. 큰 그림을 보는 눈이 있으며, 다양한 경험을 통해 성장합니다.',
        strength: '지혜, 포용력, 적응력',
        weakness: '변덕, 깊이 없음'
    },
    '계': {
        symbol: '시냇물',
        nature: '음수(陰水)',
        personality: '영리하고 적응력이 뛰어나며 창의적입니다. 어떤 상황에서도 길을 찾아내며, 직관력이 뛰어납니다.',
        strength: '창의력, 직관력, 영리함',
        weakness: '불안함, 감정 기복'
    }
};

// ===================================
// 사주 계산 함수
// ===================================

function calculateSaju(year, month, day, hour) {
    // 연주 천간 계산 (갑자년 기준)
    let yearGanIndex = (year - 4) % 10;
    if (yearGanIndex < 0) yearGanIndex += 10;

    let yearJiIndex = (year - 4) % 12;
    if (yearJiIndex < 0) yearJiIndex += 12;

    // 월주 계산
    const monthGanBase = ((year - 4) % 5) * 2;
    let monthGanIndex = (monthGanBase + month - 1) % 10;
    if (monthGanIndex < 0) monthGanIndex += 10;

    const monthJiIndex = (month + 1) % 12;

    // 일주 계산 (1900년 1월 1일 기준 - 경자일)
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));

    // 1900년 1월 1일은 경자일 (천간 6번째 = 경, 지지 0번째 = 자)
    let dayGanIndex = (6 + diffDays) % 10;
    if (dayGanIndex < 0) dayGanIndex += 10;

    let dayJiIndex = (0 + diffDays) % 12;
    if (dayJiIndex < 0) dayJiIndex += 12;

    // 시주 계산
    let hourJiIndex;
    if (hour === -1) {
        // 시간 모름일 경우 자시로 계산
        hourJiIndex = 0;
    } else {
        hourJiIndex = hour;
    }

    const hourGanBase = (dayGanIndex % 5) * 2;
    let hourGanIndex = (hourGanBase + hourJiIndex) % 10;

    return {
        year: { gan: yearGanIndex, ji: yearJiIndex },
        month: { gan: monthGanIndex, ji: monthJiIndex },
        day: { gan: dayGanIndex, ji: dayJiIndex },
        hour: { gan: hourGanIndex, ji: hourJiIndex }
    };
}

// ===================================
// 오행 에너지 계산
// ===================================

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

// ===================================
// 유틸리티 함수
// ===================================

function getElementClass(element) {
    return 'element-' + element;
}

function formatBirthInfo(data) {
    const hourText = data.hour === '-1' ? '시간 미상' : JIJI[parseInt(data.hour)] + '시';
    const calendarText = data.calendar === 'lunar' ? '음력' : '양력';
    const genderText = data.gender === 'male' ? '남성' : '여성';

    return `${calendarText} ${data.year}년 ${data.month}월 ${data.day}일 ${hourText} (${genderText})`;
}

// ===================================
// 공유 기능
// ===================================

function shareKakao() {
    if (navigator.share) {
        navigator.share({
            title: '오늘의 사주 - 나의 운세',
            text: '나의 사주팔자 운세를 확인해보세요!',
            url: window.location.origin
        });
    } else {
        alert('카카오톡 공유는 모바일에서 더 잘 작동합니다.\n링크 복사를 이용해주세요.');
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.origin)
        .then(() => alert('링크가 복사되었습니다!'))
        .catch(() => alert('링크 복사에 실패했습니다.'));
}
