// ==========================================
// FACEBOOK PIXEL TRACKER - META PIXEL
// Pixel ID: 936808722459419
// Page ID: 1150038008192049
// ==========================================

const META_PIXEL_ID = '936808722459419';
const FACEBOOK_PAGE_ID = '1150038008192049';

// Initialize Facebook Pixel
!function(f,b,e,v,n,t,s) {
    if(f.fbq)return;
    n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', META_PIXEL_ID);
fbq('track', 'PageView');

// Custom tracking functions
function trackEvent(eventName, params = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, params);
        console.log(`📊 Event tracked: ${eventName}`, params);
    }
}

function trackProductView(productName, productPrice) {
    trackEvent('ViewContent', {
        content_name: productName,
        content_price: productPrice,
        currency: 'INR'
    });
}

function trackAddToCart(productName, productPrice) {
    trackEvent('AddToCart', {
        content_name: productName,
        content_price: productPrice,
        currency: 'INR'
    });
}

function trackInitiateCheckout(productName, productPrice) {
    trackEvent('InitiateCheckout', {
        content_name: productName,
        content_price: productPrice,
        currency: 'INR'
    });
}

function trackPurchase(productName, productPrice, orderId) {
    trackEvent('Purchase', {
        content_name: productName,
        content_price: productPrice,
        currency: 'INR',
        transaction_id: orderId
    });
}

function trackSearch(searchQuery, resultsCount) {
    trackEvent('Search', {
        search_string: searchQuery,
        results_count: resultsCount
    });
}

// Track time on page
let startTime = Date.now();
window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (timeSpent > 30) {
        trackEvent('TimeOnPage', { seconds: timeSpent });
    }
});

console.log(`✅ Meta Pixel Initialized: ${META_PIXEL_ID}`);
console.log(`📘 Facebook Page ID: ${FACEBOOK_PAGE_ID}`);
