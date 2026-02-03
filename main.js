
// Web Component: 운세 결과 카드
class FortuneResult extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const year = this.getAttribute('year');
    const month = this.getAttribute('month');
    const day = this.getAttribute('day');
    const hour = this.getAttribute('hour');

    const fortune = this.getFortune(year, month, day, hour);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid #c9b7a2;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          margin-top: 2rem;
        }
        h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #5a3e2b;
          margin-bottom: 1rem;
          border-bottom: 2px solid #c9b7a2;
          padding-bottom: 0.5rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.8;
        }
      </style>
      <div>
        <h3>당신의 사주팔자 운세</h3>
        <p>${fortune}</p>
      </div>
    `;
  }

  getFortune(year, month, day, hour) {
    if (!year || !month || !day || !hour) {
        return "생년월일시를 모두 입력해주세요.";
    }

    const fortunes = [
        "오늘은 새로운 시작에 좋은 날입니다. 망설이지 말고 도전하세요.",
        "뜻밖의 행운이 찾아올 수 있습니다. 주변을 잘 살펴보세요.",
        "인간관계에서 좋은 소식이 있을 것입니다. 먼저 다가가 보세요.",
        "금전운이 좋은 날입니다. 신중하게 투자하면 좋은 결과를 얻을 수 있습니다.",
        "건강에 유의해야 할 시기입니다. 충분한 휴식을 취하세요.",
        "학업이나 직장에서 성과를 낼 수 있습니다. 집중력을 발휘하세요.",
        "예상치 못한 어려움에 부딪힐 수 있지만, 지혜롭게 해결할 수 있습니다.",
        "여행을 떠나기에 좋은 날입니다. 새로운 경험이 당신을 성장시킬 것입니다.",
        "오래된 친구에게서 반가운 연락이 올 수 있습니다.",
        "창의적인 아이디어가 샘솟는 날입니다. 메모하는 습관을 들이세요."
    ];

    const index = (parseInt(year) + parseInt(month) + parseInt(day) + parseInt(hour)) % fortunes.length;
    return fortunes[index];
  }
}

customElements.define('fortune-result', FortuneResult);


document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const resultSection = document.getElementById('result');
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');
    const hourInput = document.getElementById('hour');

    submitBtn.addEventListener('click', () => {
        const year = yearInput.value;
        const month = monthInput.value;
        const day = dayInput.value;
        const hour = hourInput.value;

        // 기존 결과 삭제
        while (resultSection.firstChild) {
            resultSection.removeChild(resultSection.firstChild);
        }

        // 새로운 결과 생성
        const fortuneResultElement = document.createElement('fortune-result');
        fortuneResultElement.setAttribute('year', year);
        fortuneResultElement.setAttribute('month', month);
        fortuneResultElement.setAttribute('day', day);
        fortuneResultElement.setAttribute('hour', hour);

        resultSection.appendChild(fortuneResultElement);
    });
});
