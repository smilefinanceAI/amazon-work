// js/pixel-tracker.js - Facebook Pixel & Analytics
const FB_PIXEL_ID = '7TEShXts406lDUgqHkVLnXRa1s6nepx5kb9tDtAUFetmTDpqrASG5mjR';

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

fbq('init', FB_PIXEL_ID);
fbq('track', 'PageView');

// Track custom events
function trackEvent(eventName, params = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, params);
    }
    
    // Also track in GA
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
    }
    
    console.log(`📊 Event tracked: ${eventName}`, params);
}

// Track product view
function trackProductView(product) {
    trackEvent('ViewContent', {
        content_name: product.name,
        content_price: product.price,
        content_category: product.category,
        content_ids: [product.asin],
        content_type: 'product'
    });
}

// Track add to cart
function trackAddToCart(product) {
    trackEvent('AddToCart', {
        content_name: product.name,
        content_price: product.price,
        content_category: product.category,
        content_ids: [product.asin],
        currency: 'INR',
        value: parseFloat(product.price)
    });
}

// Track initiate checkout
function trackInitiateCheckout(product) {
    trackEvent('InitiateCheckout', {
        content_name: product.name,
        content_price: product.price,
        content_category: product.category,
        content_ids: [product.asin],
        currency: 'INR',
        value: parseFloat(product.price),
        num_items: 1
    });
}

// Track purchase
function trackPurchase(product, orderId) {
    trackEvent('Purchase', {
        content_name: product.name,
        content_price: product.price,
        content_category: product.category,
        content_ids: [product.asin],
        currency: 'INR',
        value: parseFloat(product.price),
        transaction_id: orderId
    });
}

// Track search
function trackSearch(query, results) {
    trackEvent('Search', {
        search_string: query,
        results_count: results.length
    });
}

// Set up auto-tracking
document.addEventListener('DOMContentLoaded', () => {
    // Track page view with details
    trackEvent('PageView', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 30) {
            trackEvent('TimeOnPage', { seconds: timeSpent });
        }
    });
});

// Make global
window.trackEvent = trackEvent;
window.trackProductView = trackProductView;
window.trackAddToCart = trackAddToCart;
window.trackInitiateCheckout = trackInitiateCheckout;
window.trackPurchase = trackPurchase;
window.trackSearch = trackSearch;
