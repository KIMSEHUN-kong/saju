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

    // 주간 운세
    weekly: {
        title: '📆 이번 주 운세',
        fortunes: [
            {
                main: "이번 주는 새로운 기회가 찾아오는 시기입니다. 그동안 준비해온 것들이 빛을 발할 수 있습니다. 특히 주 초반(월~화)에 중요한 결정을 내리면 좋은 결과로 이어질 가능성이 높습니다.\n\n주 중반(수~목)에는 약간의 정체기가 있을 수 있지만, 걱정하지 마세요. 이 시간은 재충전의 시간입니다. 주 후반(금~일)에는 다시 활기를 되찾아 마무리를 잘 할 수 있습니다.",
                wealth: "이번 주 금전운은 안정적입니다. 주 초반에 예상치 못한 지출이 있을 수 있지만 큰 금액은 아닙니다. 주 후반에 작은 행운이 찾아올 수 있으니 복권이나 이벤트에 참여해보세요.",
                love: "주 초반에는 연인과 소소한 다툼이 있을 수 있습니다. 하지만 주 중반 이후 화해의 기운이 강해지니 먼저 손 내밀어 보세요. 솔로는 주말에 좋은 만남의 기회가 있습니다.",
                health: "주 초반에는 피로감을 느낄 수 있습니다. 무리하지 말고 충분한 휴식을 취하세요. 주 중반부터는 컨디션이 회복되어 활력이 넘칠 것입니다.",
                career: "업무적으로 바쁜 한 주가 될 것입니다. 월요일에 한 주 계획을 세우면 효율적으로 일할 수 있습니다. 수요일에 중요한 미팅이나 발표가 있다면 좋은 결과를 기대해도 좋습니다."
            },
            {
                main: "이번 주는 내면을 돌아보는 시간이 필요합니다. 바쁜 일상 속에서 잠시 멈춰 자신을 돌아보세요. 주 초반에는 조용히 계획을 세우고, 주 중반부터 실행에 옮기면 좋은 결과가 있을 것입니다.\n\n특히 목요일과 금요일에 행운의 기운이 강하니, 중요한 일은 이 시기에 진행하세요.",
                wealth: "재물운이 상승하는 주입니다. 특히 주 후반에 예상치 못한 수입이 생길 수 있습니다. 단, 충동구매는 피하시고 필요한 것에만 지출하세요.",
                love: "이번 주는 소통이 중요합니다. 연인에게 평소 하지 못했던 이야기를 해보세요. 솔로는 SNS나 온라인에서 좋은 인연을 만날 수 있습니다.",
                health: "전반적으로 건강한 한 주입니다. 가벼운 운동을 시작하기 좋은 시기이니, 새로운 운동을 시작해보세요.",
                career: "창의적인 아이디어가 빛나는 주입니다. 새로운 제안이나 기획이 있다면 과감하게 발표해보세요. 상사의 좋은 평가를 받을 수 있습니다."
            }
        ]
    },

    // 월간 운세
    monthly: {
        title: '🗓️ 이번 달 운세',
        fortunes: [
            {
                main: "이번 달은 전체적으로 상승 운세입니다. 월 초(1~10일)에는 새로운 시작의 에너지가 강합니다. 새로운 프로젝트나 계획이 있다면 이 시기에 시작하세요.\n\n월 중순(11~20일)에는 약간의 정체기가 있을 수 있지만, 이는 잠시 숨을 고르는 시간입니다. 조급해하지 마세요.\n\n월 말(21~31일)에는 그동안의 노력이 결실을 맺는 시기입니다. 특히 25일 전후로 좋은 소식이 있을 수 있습니다.",
                wealth: "이번 달 재물운은 중상입니다. 월 초에 투자나 저축을 시작하면 좋은 결과가 있을 것입니다. 월 중순에는 예상치 못한 지출이 있을 수 있으니 대비하세요. 월 말에는 보너스나 부수입의 기회가 있습니다.",
                love: "연애운이 빛나는 달입니다. 월 초에 새로운 만남의 기회가 많습니다. 커플은 월 중순에 여행이나 특별한 데이트를 계획해보세요. 관계가 한층 깊어질 것입니다. 월 말에는 중요한 결정을 내리기 좋은 시기입니다.",
                health: "건강에 유의해야 하는 달입니다. 특히 월 중순에 과로를 피하고 충분한 휴식을 취하세요. 월 초에 건강 검진을 받아보는 것도 좋습니다. 월 말에는 컨디션이 회복됩니다.",
                career: "직장운이 좋은 달입니다. 월 초에 새로운 기회가 찾아올 수 있습니다. 승진이나 이직을 고려 중이라면 월 중순에 움직여보세요. 월 말에는 큰 프로젝트를 마무리하고 성과를 인정받을 수 있습니다."
            },
            {
                main: "이번 달은 변화의 달입니다. 그동안 미뤄왔던 변화를 실행에 옮기기 좋은 시기입니다. 월 초에는 계획을 세우고, 월 중순부터 본격적으로 움직이세요.\n\n특히 15일 전후로 중요한 전환점이 있을 수 있습니다. 두려워하지 말고 새로운 것에 도전하세요.\n\n월 말에는 변화의 결과가 서서히 나타나기 시작합니다. 긍정적인 마음으로 기다리세요.",
                wealth: "재물 흐름에 변화가 있는 달입니다. 월 초에는 지출이 많을 수 있지만, 이는 미래를 위한 투자입니다. 월 중순 이후로 재물운이 상승하기 시작하여 월 말에는 안정을 찾습니다.",
                love: "관계에서 진전이 있는 달입니다. 월 초에 중요한 대화를 나눠보세요. 솔로는 월 중순에 운명적인 만남이 있을 수 있습니다. 월 말에는 관계가 안정되고 깊어집니다.",
                health: "에너지 관리가 중요한 달입니다. 월 초에 새로운 건강 루틴을 시작해보세요. 월 중순에는 무리하지 말고, 월 말에는 활력이 넘칠 것입니다.",
                career: "커리어에 변화의 바람이 부는 달입니다. 새로운 역할이나 책임이 주어질 수 있습니다. 두려워하지 말고 받아들이세요. 이 변화가 성장의 발판이 됩니다."
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

    // 평생 사주 - 동적 생성 (별도 함수에서 처리)
    lifetime: {
        title: '📜 평생 사주 분석',
        dynamic: true // 동적 생성 플래그
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
// 평생 사주 상세 분석 데이터
// ===================================

// 십신 관계
const SIPSIN = {
    비겁: { name: '비겁(比劫)', meaning: '형제, 친구, 경쟁자',
           strong: '독립심이 강하고 주체적입니다. 자기 일은 스스로 처리하며, 경쟁에서 지지 않으려는 성향이 있습니다.',
           weak: '협동심을 기르면 좋습니다. 혼자 하려 하기보다 함께하면 더 큰 성과를 낼 수 있습니다.' },
    식상: { name: '식상(食傷)', meaning: '표현력, 창의력, 자녀',
           strong: '표현력이 뛰어나고 창의적입니다. 예술적 감각이 있으며, 말과 글로 사람들을 사로잡는 능력이 있습니다.',
           weak: '자기 표현을 더 적극적으로 하면 좋습니다. 속마음을 드러내는 연습이 필요합니다.' },
    재성: { name: '재성(財星)', meaning: '재물, 아버지, 현실감각',
           strong: '재물을 다루는 능력이 뛰어납니다. 현실 감각이 좋고, 돈이 되는 일을 잘 찾아냅니다.',
           weak: '재테크에 관심을 가지면 좋습니다. 돈에 대한 감각을 키우면 재물운이 상승합니다.' },
    관성: { name: '관성(官星)', meaning: '직장, 명예, 규율',
           strong: '책임감이 강하고 규율을 중시합니다. 조직에서 인정받고 출세할 가능성이 높습니다.',
           weak: '리더십을 기르면 좋습니다. 자신감을 가지고 앞장서는 연습이 필요합니다.' },
    인성: { name: '인성(印星)', meaning: '학문, 어머니, 지혜',
           strong: '학습 능력이 뛰어나고 지혜롭습니다. 깊이 있는 사고를 하며, 전문 분야에서 두각을 나타냅니다.',
           weak: '공부와 자기계발에 투자하면 좋습니다. 배움을 통해 인생이 풀리는 사주입니다.' }
};

// 지지(월지) 계절별 특성
const SEASON_TRAITS = {
    spring: { // 인묘진 (2,3,4)
        name: '봄',
        trait: '봄에 태어나 새로운 시작과 성장의 기운을 타고났습니다. 창의적이고 진취적이며, 새로운 것을 시작하는 데 두려움이 없습니다.',
        strength: '시작하는 힘, 성장 에너지, 희망적 사고',
        advice: '꾸준함을 기르면 더욱 좋습니다. 시작은 잘하지만 마무리에 신경 쓰세요.'
    },
    summer: { // 사오미 (5,6,7)
        name: '여름',
        trait: '여름에 태어나 열정과 활력의 기운을 타고났습니다. 밝고 활발하며, 사람들의 중심에 서는 것을 좋아합니다.',
        strength: '열정, 리더십, 표현력, 사교성',
        advice: '감정 조절을 배우면 더욱 좋습니다. 때로는 한 발 물러서 상황을 보는 지혜가 필요합니다.'
    },
    autumn: { // 신유술 (8,9,10)
        name: '가을',
        trait: '가을에 태어나 결실과 성취의 기운을 타고났습니다. 실용적이고 현실적이며, 일의 마무리를 잘합니다.',
        strength: '마무리 능력, 실용성, 결단력, 집중력',
        advice: '융통성을 기르면 더욱 좋습니다. 원칙도 중요하지만 상황에 맞는 유연함도 필요합니다.'
    },
    winter: { // 해자축 (11,12,1)
        name: '겨울',
        trait: '겨울에 태어나 깊은 사고와 지혜의 기운을 타고났습니다. 내면이 깊고 신중하며, 생각이 깊습니다.',
        strength: '지혜, 인내심, 깊은 사고, 통찰력',
        advice: '행동력을 기르면 더욱 좋습니다. 생각만 하지 말고 실천으로 옮기는 용기가 필요합니다.'
    }
};

// 대운 시기별 운세
const LIFE_PHASES = {
    youth: { // 0-20세
        name: '유년/청소년기 (0~20세)',
        general: [
            '이 시기는 기초를 다지는 중요한 때입니다. 학업에 충실하고 다양한 경험을 쌓으세요.',
            '부모님의 영향을 많이 받는 시기입니다. 좋은 습관과 가치관을 형성하는 것이 중요합니다.',
            '친구 관계가 인생에 큰 영향을 미칩니다. 좋은 친구를 사귀세요.'
        ]
    },
    earlyAdult: { // 20-35세
        name: '청년기 (20~35세)',
        general: [
            '자신의 정체성을 확립하는 시기입니다. 다양한 도전을 통해 자신이 진정 원하는 것을 찾으세요.',
            '커리어의 기반을 다지는 중요한 시기입니다. 전문성을 키우는 데 집중하세요.',
            '인생의 반려자를 만날 가능성이 높은 시기입니다. 진정한 인연을 찾으세요.'
        ]
    },
    middleAdult: { // 35-50세
        name: '장년기 (35~50세)',
        general: [
            '인생의 황금기입니다. 그동안 쌓아온 실력을 발휘하여 큰 성과를 이룰 수 있습니다.',
            '가정과 일의 균형이 중요한 시기입니다. 어느 한쪽에 치우치지 않도록 주의하세요.',
            '재물 축적의 최적기입니다. 미래를 위한 자산 관리에 신경 쓰세요.'
        ]
    },
    lateAdult: { // 50-65세
        name: '중년기 (50~65세)',
        general: [
            '인생의 지혜가 깊어지는 시기입니다. 경험을 바탕으로 후배들에게 조언자 역할을 할 수 있습니다.',
            '건강 관리가 중요해지는 시기입니다. 규칙적인 운동과 건강검진을 소홀히 하지 마세요.',
            '새로운 취미나 관심사를 찾기 좋은 때입니다. 제2의 인생을 준비하세요.'
        ]
    },
    senior: { // 65세 이후
        name: '노년기 (65세 이후)',
        general: [
            '인생의 완숙기입니다. 그동안 쌓아온 지혜와 경험을 나누며 보람을 느낄 수 있습니다.',
            '가족과 함께하는 시간을 소중히 여기세요. 손주들에게 좋은 추억을 선물하세요.',
            '마음의 평화가 중요한 시기입니다. 명상이나 종교 활동이 도움이 될 수 있습니다.'
        ]
    }
};

// 오행별 건강 주의사항
const ELEMENT_HEALTH = {
    wood: { organ: '간, 담낭, 눈', advice: '간 건강에 유의하세요. 과음을 피하고, 눈의 피로를 줄이세요. 봄철 건강 관리가 중요합니다.' },
    fire: { organ: '심장, 소장, 혀', advice: '심장 건강에 유의하세요. 스트레스 관리가 중요하고, 여름철 더위에 주의하세요.' },
    earth: { organ: '비장, 위장, 입', advice: '소화기 건강에 유의하세요. 규칙적인 식사와 과식 금지가 중요합니다. 환절기에 주의하세요.' },
    metal: { organ: '폐, 대장, 코', advice: '호흡기 건강에 유의하세요. 미세먼지에 주의하고, 가을철 건조함에 대비하세요.' },
    water: { organ: '신장, 방광, 귀', advice: '신장 건강에 유의하세요. 충분한 수분 섭취와 겨울철 보온에 신경 쓰세요.' }
};

// 오행별 적합 직업
const ELEMENT_CAREER = {
    wood: ['교육자', '의사', '한의사', '약사', '작가', '기자', '환경 관련업', '농업', '목재업', '가구업'],
    fire: ['연예인', '방송인', '디자이너', '화가', '조명 관련업', '요리사', 'IT/전자', '에너지 산업'],
    earth: ['공무원', '부동산', '건축가', '농업', '광업', '요식업', '유통업', '중개업'],
    metal: ['금융업', '법조인', '군인', '경찰', '기계공학', '자동차', '귀금속', '철강업'],
    water: ['무역업', '유통업', '수산업', '음료업', '여행업', '운송업', '철학자', '상담사']
};

// 평생 사주 상세 분석 함수
function generateLifetimeReading(saju, energy, data) {
    const ilgan = CHEONGAN[saju.day.gan];
    const ilganInfo = ILGAN_INFO[ilgan];
    const ilganElement = CHEONGAN_ELEMENT[saju.day.gan];

    // 월지로 계절 판단
    const monthJi = saju.month.ji;
    let season;
    if ([2, 3, 4].includes(monthJi)) season = 'spring';
    else if ([5, 6, 7].includes(monthJi)) season = 'summer';
    else if ([8, 9, 10].includes(monthJi)) season = 'autumn';
    else season = 'winter';

    const seasonInfo = SEASON_TRAITS[season];

    // 오행 분석
    const sortedEnergy = Object.entries(energy).sort((a, b) => b[1] - a[1]);
    const strongestElement = sortedEnergy[0][0];
    const weakestElement = sortedEnergy[sortedEnergy.length - 1][0];

    // 나이 계산
    const birthYear = parseInt(data.year);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear + 1; // 한국 나이

    // 현재 인생 단계
    let currentPhase;
    if (age < 20) currentPhase = 'youth';
    else if (age < 35) currentPhase = 'earlyAdult';
    else if (age < 50) currentPhase = 'middleAdult';
    else if (age < 65) currentPhase = 'lateAdult';
    else currentPhase = 'senior';

    // 성별
    const isMale = data.gender === 'male';

    return {
        ilgan, ilganInfo, ilganElement,
        season, seasonInfo,
        strongestElement, weakestElement, sortedEnergy,
        age, currentPhase, isMale, birthYear
    };
}

// 평생 사주 HTML 생성
function renderLifetimeContent(analysis) {
    const { ilgan, ilganInfo, ilganElement, season, seasonInfo,
            strongestElement, weakestElement, sortedEnergy,
            age, currentPhase, isMale, birthYear } = analysis;

    const phaseInfo = LIFE_PHASES[currentPhase];
    const healthInfo = ELEMENT_HEALTH[ilganElement];
    const careerList = ELEMENT_CAREER[strongestElement];

    let html = `
        <h3>🎯 타고난 기질과 성격</h3>
        <p><strong>${ilganInfo.symbol}(${CHEONGAN_HANJA[CHEONGAN.indexOf(ilgan)]})</strong>의 기운을 일간으로 타고났습니다.</p>
        <p>${ilganInfo.personality}</p>
        <p><strong>✅ 강점:</strong> ${ilganInfo.strength}</p>
        <p><strong>⚠️ 보완점:</strong> ${ilganInfo.weakness}</p>

        <h3>🌸 태어난 계절의 기운</h3>
        <p><strong>${seasonInfo.name}</strong>에 태어났습니다.</p>
        <p>${seasonInfo.trait}</p>
        <p><strong>타고난 강점:</strong> ${seasonInfo.strength}</p>
        <p><strong>인생 조언:</strong> ${seasonInfo.advice}</p>

        <h3>⚖️ 오행 에너지 분석</h3>
        <p>당신의 사주에서 <strong>${ELEMENT_EMOJI[strongestElement]} ${ELEMENT_KR[strongestElement]}</strong> 기운이 가장 강합니다.</p>
        <p>${SIPSIN[getSimsinFromElement(strongestElement)].strong}</p>
        <p><strong>${ELEMENT_EMOJI[weakestElement]} ${ELEMENT_KR[weakestElement]}</strong> 기운이 부족합니다.</p>
        <p>${SIPSIN[getSimsinFromElement(weakestElement)].weak}</p>

        <h3>📅 인생 주기별 운세</h3>

        <p><strong>💒 ${LIFE_PHASES.youth.name}</strong></p>
        <p>${LIFE_PHASES.youth.general[birthYear % 3]}</p>

        <p><strong>🧑 ${LIFE_PHASES.earlyAdult.name}</strong></p>
        <p>${LIFE_PHASES.earlyAdult.general[birthYear % 3]}</p>
        <p>이 시기에 ${isMale ? '직업적 기반을 다지고' : '인생의 중요한 선택을 하게 되며'}, 배우자를 만날 가능성이 높습니다. 특히 ${25 + (birthYear % 5)}세~${30 + (birthYear % 5)}세 사이에 중요한 인연이 있을 수 있습니다.</p>

        <p><strong>👨‍💼 ${LIFE_PHASES.middleAdult.name}</strong></p>
        <p>${LIFE_PHASES.middleAdult.general[birthYear % 3]}</p>
        <p>${isMale ? '사회적 성공을 이루는 황금기입니다. 40대 초반에 큰 기회가 찾아옵니다.' : '가정과 커리어 모두에서 성과를 내는 시기입니다. 자녀 교육에 대한 보람을 느낄 수 있습니다.'}</p>

        <p><strong>🧓 ${LIFE_PHASES.lateAdult.name}</strong></p>
        <p>${LIFE_PHASES.lateAdult.general[birthYear % 3]}</p>
        <p>50대 ${isMale ? '중반' : '초반'}에 인생의 전환점이 있을 수 있습니다. 새로운 시작을 두려워하지 마세요.</p>

        <p><strong>👴 ${LIFE_PHASES.senior.name}</strong></p>
        <p>${LIFE_PHASES.senior.general[birthYear % 3]}</p>
        <p>건강을 잘 관리하면 활기찬 노년을 보낼 수 있습니다. 특히 ${ELEMENT_HEALTH[ilganElement].organ} 건강에 신경 쓰세요.</p>
    `;

    return html;
}

// 오행에서 십신 유추 (간략화)
function getSimsinFromElement(element) {
    const mapping = {
        wood: '인성',
        fire: '비겁',
        earth: '식상',
        metal: '재성',
        water: '관성'
    };
    return mapping[element] || '비겁';
}

// 평생 사주 재물운
function renderLifetimeWealth(analysis) {
    const { strongestElement, ilganElement, age, isMale, birthYear } = analysis;
    const peakAge = 40 + (birthYear % 10);

    return `
        <p>당신의 재물운은 <strong>중년 이후에 크게 상승</strong>하는 패턴입니다.</p>

        <p><strong>💰 20~30대:</strong> 기반을 다지는 시기입니다. 이 시기에는 저축과 자기계발에 투자하세요. 급하게 큰 돈을 벌려 하기보다 실력을 쌓는 것이 중요합니다. 무리한 투자나 보증은 피하세요.</p>

        <p><strong>💰 40대:</strong> 재물운이 본격적으로 상승하는 시기입니다. 특히 <strong>${peakAge}세 전후</strong>에 큰 재물 기회가 올 수 있습니다. 이 시기에 부동산이나 사업에서 좋은 성과를 낼 수 있습니다.</p>

        <p><strong>💰 50대 이후:</strong> 안정적인 재물 흐름이 이어집니다. 그동안 모은 자산을 잘 관리하고, 노후 준비에 집중하세요. ${isMale ? '자녀에게 너무 많은 지원을 하기보다 자신의 노후를 먼저 챙기세요.' : '부동산 관련 재물운이 특히 좋습니다.'}</p>

        <p><strong>📊 재테크 적합 분야:</strong> ${ELEMENT_CAREER[strongestElement].slice(0, 3).join(', ')} 관련 분야에서 재물운이 좋습니다.</p>

        <p><strong>⚠️ 주의할 점:</strong> ${strongestElement === 'water' ? '유동적인 재물이 많아 관리에 신경 쓰세요.' : strongestElement === 'fire' ? '충동적인 지출을 조심하세요.' : '안정적인 투자가 당신에게 맞습니다.'}</p>
    `;
}

// 평생 사주 연애/결혼운
function renderLifetimeLove(analysis) {
    const { ilgan, ilganInfo, isMale, birthYear, season } = analysis;
    const marriageAge = isMale ? 28 + (birthYear % 5) : 26 + (birthYear % 5);

    return `
        <p>당신은 <strong>${ilganInfo.symbol}</strong>의 기운을 가진 ${isMale ? '남성' : '여성'}으로, 연애와 결혼에서 다음과 같은 특성이 있습니다.</p>

        <p><strong>💕 연애 스타일:</strong> ${ilgan === '갑' || ilgan === '경' ? '주도적이고 적극적인 연애를 합니다. 상대방을 리드하며, 자신의 사랑을 확실하게 표현합니다.' : ilgan === '을' || ilgan === '신' ? '섬세하고 감성적인 연애를 합니다. 상대방의 마음을 잘 헤아리며, 로맨틱한 분위기를 좋아합니다.' : ilgan === '병' || ilgan === '정' ? '열정적이고 드라마틱한 연애를 합니다. 사랑에 올인하는 타입으로, 깊은 사랑을 추구합니다.' : ilgan === '무' || ilgan === '기' ? '안정적이고 신뢰를 중시하는 연애를 합니다. 한 번 마음을 주면 오래 가며, 책임감 있는 파트너입니다.' : '지적이고 깊이 있는 연애를 합니다. 마음이 통하는 사람을 찾으며, 정신적 교감을 중요시합니다.'}</p>

        <p><strong>💒 결혼 적기:</strong> ${marriageAge}세~${marriageAge + 4}세 사이에 좋은 인연을 만날 가능성이 높습니다. ${season === 'spring' ? '봄' : season === 'summer' ? '여름' : season === 'autumn' ? '가을' : '겨울'}에 좋은 인연이 찾아올 수 있습니다.</p>

        <p><strong>👫 이상적인 배우자상:</strong> ${isMale ? '당신에게는 ' + (ilgan === '갑' || ilgan === '병' || ilgan === '무' || ilgan === '경' || ilgan === '임' ? '부드럽고 내조를 잘하는 배우자가 좋습니다. 당신의 강한 기운을 받쳐줄 수 있는 사람이 궁합이 맞습니다.' : '함께 성장할 수 있는 동반자형 배우자가 좋습니다. 서로의 꿈을 응원하는 관계가 이상적입니다.') : '당신에게는 ' + (ilgan === '을' || ilgan === '정' || ilgan === '기' || ilgan === '신' || ilgan === '계' ? '든든하고 믿음직한 배우자가 좋습니다. 당신을 보호하고 지지해줄 수 있는 사람과 궁합이 맞습니다.' : '존경할 수 있는 배우자가 좋습니다. 능력 있고 사회적으로 인정받는 사람에게 끌립니다.')}</p>

        <p><strong>👨‍👩‍👧‍👦 자녀운:</strong> 자녀복이 있는 사주입니다. ${isMale ? '아들과 인연이 깊으며' : '딸과 인연이 깊으며'}, 자녀로 인한 기쁨이 클 것입니다. 자녀 교육에 있어서는 ${ilganInfo.strength.split(',')[0]}을(를) 살려주는 교육이 좋습니다.</p>

        <p><strong>⚠️ 주의할 점:</strong> ${ilgan === '갑' || ilgan === '경' ? '고집을 부리면 관계가 틀어질 수 있습니다. 배우자의 의견도 존중하세요.' : ilgan === '병' || ilgan === '정' ? '감정 기복으로 인한 다툼에 주의하세요. 화가 날 때는 일단 참고 대화하세요.' : '속마음을 표현하세요. 말하지 않으면 배우자도 모릅니다.'}</p>
    `;
}

// 평생 사주 건강운
function renderLifetimeHealth(analysis) {
    const { ilganElement, sortedEnergy, age } = analysis;
    const healthInfo = ELEMENT_HEALTH[ilganElement];
    const weakElement = sortedEnergy[sortedEnergy.length - 1][0];
    const weakHealthInfo = ELEMENT_HEALTH[weakElement];

    return `
        <p>일간 오행이 <strong>${ELEMENT_KR[ilganElement]}</strong>이므로, <strong>${healthInfo.organ}</strong> 건강에 특히 주의가 필요합니다.</p>

        <p><strong>🏥 주의해야 할 장기:</strong> ${healthInfo.advice}</p>

        <p><strong>⚠️ 부족한 오행(${ELEMENT_KR[weakElement]}) 관련:</strong> ${weakHealthInfo.organ} 건강도 신경 쓰세요. ${weakHealthInfo.advice}</p>

        <p><strong>📅 나이대별 건강 관리:</strong></p>
        <p>• <strong>20~30대:</strong> 기초 체력을 다지는 시기입니다. 규칙적인 운동 습관을 들이세요. 야근, 음주, 흡연을 줄이세요.</p>
        <p>• <strong>40대:</strong> 성인병 검진을 시작하세요. 특히 혈압, 당뇨, 콜레스테롤 관리가 중요합니다.</p>
        <p>• <strong>50대:</strong> ${healthInfo.organ} 검사를 정기적으로 받으세요. 과로를 피하고 충분한 휴식을 취하세요.</p>
        <p>• <strong>60대 이후:</strong> 관절과 뼈 건강에 신경 쓰세요. 가벼운 운동(걷기, 수영)을 꾸준히 하세요.</p>

        <p><strong>🍎 건강에 좋은 음식:</strong> ${ilganElement === 'wood' ? '녹색 채소, 신맛 나는 과일, 간에 좋은 음식' : ilganElement === 'fire' ? '붉은색 과일, 쓴맛 나는 음식, 심장에 좋은 음식' : ilganElement === 'earth' ? '노란색 음식, 단맛 나는 음식, 소화에 좋은 음식' : ilganElement === 'metal' ? '흰색 음식, 매운맛 음식, 폐에 좋은 음식' : '검은색 음식, 짠맛 음식, 신장에 좋은 음식'}</p>

        <p><strong>🏃 추천 운동:</strong> ${ilganElement === 'wood' ? '스트레칭, 요가, 등산' : ilganElement === 'fire' ? '달리기, 에어로빅, 댄스' : ilganElement === 'earth' ? '걷기, 태극권, 필라테스' : ilganElement === 'metal' ? '수영, 호흡 운동, 등산' : '수영, 아쿠아로빅, 명상'}</p>
    `;
}

// 평생 사주 직업/성공운
function renderLifetimeCareer(analysis) {
    const { ilgan, ilganInfo, strongestElement, isMale, birthYear } = analysis;
    const careers = ELEMENT_CAREER[strongestElement];
    const peakCareerAge = 42 + (birthYear % 8);

    return `
        <p>당신의 <strong>${ilganInfo.symbol}</strong> 기운과 <strong>${ELEMENT_KR[strongestElement]}</strong>이 강한 사주를 종합하면, 다음과 같은 직업적 특성이 있습니다.</p>

        <p><strong>💼 적합한 직업군:</strong></p>
        <p>${careers.map(c => `• ${c}`).join('<br>')}</p>

        <p><strong>🎯 직업 선택 기준:</strong> ${ilgan === '갑' || ilgan === '경' ? '권한과 결정권이 있는 자리가 좋습니다. 조직의 리더나 독립적인 사업가가 맞습니다.' : ilgan === '을' || ilgan === '신' ? '창의성을 발휘할 수 있는 일이 좋습니다. 예술, 디자인, 기획 분야가 맞습니다.' : ilgan === '병' || ilgan === '정' ? '사람들과 소통하는 일이 좋습니다. 영업, 마케팅, 교육 분야가 맞습니다.' : ilgan === '무' || ilgan === '기' ? '안정적인 조직에서 전문성을 쌓는 것이 좋습니다. 공무원, 대기업, 전문직이 맞습니다.' : '지식과 정보를 다루는 일이 좋습니다. 연구, 컨설팅, IT 분야가 맞습니다.'}</p>

        <p><strong>📈 커리어 발전 시기:</strong></p>
        <p>• <strong>20대:</strong> 다양한 경험을 쌓고 자신에게 맞는 분야를 찾는 시기</p>
        <p>• <strong>30대:</strong> 전문성을 쌓고 자리를 잡아가는 시기</p>
        <p>• <strong>40대:</strong> 커리어의 정점을 찍는 시기. 특히 <strong>${peakCareerAge}세 전후</strong>에 큰 성과나 승진의 기회가 있습니다.</p>
        <p>• <strong>50대:</strong> 후배를 양성하고 노하우를 전수하는 시기</p>

        <p><strong>💡 성공 조언:</strong> ${isMale ? '인맥 관리가 성공의 열쇠입니다. 특히 ' + (birthYear % 2 === 0 ? '선배' : '동료') + '와의 관계를 잘 유지하세요.' : '실력으로 인정받는 것이 중요합니다. ' + (birthYear % 2 === 0 ? '꾸준함' : '차별화된 전문성') + '이 당신의 무기입니다.'}</p>

        <p><strong>⚠️ 주의할 점:</strong> ${strongestElement === 'wood' ? '한 가지에 집중하세요. 이것저것 손대면 성과가 분산됩니다.' : strongestElement === 'fire' ? '끈기를 길러야 합니다. 시작은 잘하지만 마무리가 약할 수 있습니다.' : strongestElement === 'earth' ? '변화를 두려워하지 마세요. 때로는 새로운 도전이 필요합니다.' : strongestElement === 'metal' ? '융통성을 기르세요. 너무 원칙적이면 기회를 놓칠 수 있습니다.' : '실행력을 기르세요. 생각만 하지 말고 행동으로 옮기세요.'}</p>
    `;
}

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

    // 평생 사주 분석 (lifetime인 경우)
    let lifetimeAnalysis = null;
    if (type === 'lifetime') {
        lifetimeAnalysis = generateLifetimeReading(saju, energy, data);
    }

    // 5. 운세 내용
    renderFortuneContent(fortuneData, seed, lifetimeAnalysis);

    // 6. 세부 운세 아코디언
    renderDetailAccordion(fortuneData, seed, lifetimeAnalysis);

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

function renderFortuneContent(fortuneData, seed, lifetimeAnalysis = null) {
    const container = document.getElementById('fortune-content');

    // 평생 사주는 동적 생성
    if (fortuneData.dynamic && lifetimeAnalysis) {
        container.innerHTML = renderLifetimeContent(lifetimeAnalysis);
        return;
    }

    const fortune = fortuneData.fortunes[seed % fortuneData.fortunes.length];
    container.innerHTML = `<p>${fortune.main.replace(/\n\n/g, '</p><p>')}</p>`;
}

function renderDetailAccordion(fortuneData, seed, lifetimeAnalysis = null) {
    const container = document.getElementById('detail-accordion');

    let details;

    // 평생 사주는 동적 생성
    if (fortuneData.dynamic && lifetimeAnalysis) {
        details = [
            { icon: '💰', title: '평생 재물운', content: renderLifetimeWealth(lifetimeAnalysis) },
            { icon: '❤️', title: '연애·결혼·가정운', content: renderLifetimeLove(lifetimeAnalysis) },
            { icon: '🏥', title: '평생 건강운', content: renderLifetimeHealth(lifetimeAnalysis) },
            { icon: '💼', title: '직업·성공운', content: renderLifetimeCareer(lifetimeAnalysis) }
        ];
    } else {
        const fortune = fortuneData.fortunes[seed % fortuneData.fortunes.length];
        details = [
            { icon: '💰', title: '재물운', content: fortune.wealth },
            { icon: '❤️', title: '연애·인간관계', content: fortune.love },
            { icon: '🏥', title: '건강운', content: fortune.health },
            { icon: '💼', title: '직업·성공운', content: fortune.career }
        ];
    }

    let html = '';
    details.forEach((detail, index) => {
        const isLifetime = fortuneData.dynamic;
        html += `
            <div class="accordion-item${isLifetime ? ' active' : ''}">
                <button class="accordion-header" data-index="${index}">
                    <span>${detail.icon} ${detail.title}</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-body"${isLifetime ? ' style="max-height: 2000px;"' : ''}>
                    <div class="accordion-content">
                        ${isLifetime ? detail.content : `<p>${detail.content}</p>`}
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
        { type: 'weekly', icon: '📆', title: '주간 운세' },
        { type: 'monthly', icon: '🗓️', title: '월간 운세' },
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

    // 알림 신청 버튼
    const ctaSection = document.getElementById('cta-notification');
    const subscribeBtn = document.getElementById('subscribe-btn');

    if (typeof isNotificationSubscribed === 'function' && isNotificationSubscribed()) {
        // 이미 구독 중이면 문구 변경
        if (ctaSection) {
            ctaSection.querySelector('h3').textContent = '알림 설정 완료! ✅';
            ctaSection.querySelector('p').textContent = '매일 아침 운세 알림을 받으실 수 있습니다';
            subscribeBtn.textContent = '알림 해제하기';
            subscribeBtn.addEventListener('click', () => {
                unsubscribeNotification();
                window.location.reload();
            });
        }
    } else {
        subscribeBtn?.addEventListener('click', async () => {
            if (typeof subscribeNotification === 'function') {
                const success = await subscribeNotification();
                if (success) {
                    window.location.reload();
                }
            }
        });
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
