/**
 * 오늘의 사주 - 알림 시스템
 * PWA 로컬 알림 (서버 비용 0원)
 */

const NOTIFICATION_KEY = 'saju_notification';
const LAST_NOTIFY_KEY = 'saju_last_notify';

// 알림 권한 요청
async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('이 브라우저는 알림을 지원하지 않습니다.');
        return false;
    }

    if (Notification.permission === 'granted') {
        return true;
    }

    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }

    alert('알림이 차단되어 있습니다.\n브라우저 설정에서 알림을 허용해주세요.');
    return false;
}

// 알림 구독
async function subscribeNotification() {
    const granted = await requestNotificationPermission();

    if (granted) {
        localStorage.setItem(NOTIFICATION_KEY, 'true');

        // 즉시 테스트 알림
        showNotification('알림 설정 완료! 🎉', '매일 아침 오늘의 운세를 알려드릴게요.');

        alert('알림 설정이 완료되었습니다!\n매일 아침 운세 알림을 받으실 수 있습니다.');
        return true;
    }
    return false;
}

// 알림 해제
function unsubscribeNotification() {
    localStorage.removeItem(NOTIFICATION_KEY);
    alert('알림이 해제되었습니다.');
}

// 알림 표시
function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        const options = {
            body: body,
            icon: '/saju/icon-192.png',
            badge: '/saju/icon-192.png',
            tag: 'saju-daily',
            requireInteraction: true,
            actions: [
                { action: 'open', title: '운세 보기' }
            ]
        };

        // Service Worker 통해 알림 (백그라운드 지원)
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification(title, options);
            });
        } else {
            // 일반 알림
            new Notification(title, options);
        }
    }
}

// 오늘 알림 체크 (하루에 한 번만)
function checkDailyNotification() {
    const isSubscribed = localStorage.getItem(NOTIFICATION_KEY);
    if (!isSubscribed) return;

    const today = new Date().toDateString();
    const lastNotify = localStorage.getItem(LAST_NOTIFY_KEY);

    // 오늘 이미 알림 받았으면 스킵
    if (lastNotify === today) return;

    const now = new Date();
    const hour = now.getHours();

    // 아침 6시 ~ 밤 10시 사이에만 알림
    if (hour >= 6 && hour <= 22) {
        showNotification(
            '🌅 오늘의 운세가 도착했어요!',
            '오늘 하루는 어떤 기운이 흐를까요? 지금 확인해보세요.'
        );
        localStorage.setItem(LAST_NOTIFY_KEY, today);
    }
}

// 알림 구독 상태 확인
function isNotificationSubscribed() {
    return localStorage.getItem(NOTIFICATION_KEY) === 'true';
}

// Service Worker 등록
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/saju/sw.js')
            .then((registration) => {
                console.log('Service Worker 등록 성공:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker 등록 실패:', error);
            });
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    // Service Worker 등록
    registerServiceWorker();

    // 매일 알림 체크
    checkDailyNotification();

    // 5분마다 체크 (탭이 열려있을 때)
    setInterval(checkDailyNotification, 5 * 60 * 1000);
});
