// Amazon Affiliate Auto Link System
// Store ID: smileai24-21

const AMAZON_AFFILIATE_ID = 'smileai24-21';
const AMAZON_BASE_URL = 'https://www.amazon.in';

// 🔥 ऑटोमेटिक प्रोडक्ट डेटाबेस
// यहाँ सिर्फ एक बार प्रोडक्ट ASIN डालना है - बाकी ऑटोमेटिक होगा!

const productsDatabase = {
    // 📱 Mobiles
    'iphone-15': { asin: 'B0CHWNPS5R', name: 'Apple iPhone 15', price: '₹71,999', category: 'mobiles' },
    'iphone-15-pro': { asin: 'B0CHX2F5QS', name: 'Apple iPhone 15 Pro', price: '₹1,29,900', category: 'mobiles' },
    'samsung-s24': { asin: 'B0CNL6TG8K', name: 'Samsung Galaxy S24', price: '₹79,999', category: 'mobiles' },
    'oneplus-12': { asin: 'B0CQHGRL9Q', name: 'OnePlus 12', price: '₹64,999', category: 'mobiles' },
    'pixel-8': { asin: 'B0CGY1NVDK', name: 'Google Pixel 8', price: '₹69,999', category: 'mobiles' },
    
    // 💻 Laptops
    'macbook-air-m2': { asin: 'B0B3C2R8K5', name: 'MacBook Air M2', price: '₹1,09,900', category: 'laptops' },
    'dell-xps-13': { asin: 'B0B3J2Q7C8', name: 'Dell XPS 13', price: '₹1,49,990', category: 'laptops' },
    'hp-pavilion': { asin: 'B0B4J3L2F9', name: 'HP Pavilion 15', price: '₹59,990', category: 'laptops' },
    'lenovo-legion': { asin: 'B0B5J4M3G0', name: 'Lenovo Legion 5', price: '₹1,19,990', category: 'laptops' },
    'asus-rog': { asin: 'B0B6K5N4H1', name: 'ASUS ROG Strix', price: '₹1,39,990', category: 'laptops' },
    
    // 🎧 Headphones
    'airpods-pro-2': { asin: 'B0BDJ3Q9R2', name: 'Apple AirPods Pro 2', price: '₹24,999', category: 'headphones' },
    'sony-1000xm5': { asin: 'B0B3J2X8F4', name: 'Sony WH-1000XM5', price: '₹29,990', category: 'headphones' },
    'boat-rockerz-450': { asin: 'B07HR8N4G7', name: 'boAt Rockerz 450', price: '₹1,799', category: 'headphones' },
    'samsung-buds2': { asin: 'B09HT3L7Z6', name: 'Samsung Galaxy Buds2', price: '₹8,990', category: 'headphones' },
    'jbl-tune-760': { asin: 'B09C4N5K8V', name: 'JBL Tune 760NC', price: '₹6,999', category: 'headphones' },
    
    // ⌚ Smartwatches
    'apple-watch-9': { asin: 'B0CHWTPBYK', name: 'Apple Watch Series 9', price: '₹41,900', category: 'smartwatches' },
    'samsung-watch-6': { asin: 'B0C8H3R7G4', name: 'Samsung Galaxy Watch 6', price: '₹29,999', category: 'smartwatches' },
    'boat-xtend': { asin: 'B09B4M5R6H7', name: 'boAt Xtend Smartwatch', price: '₹2,499', category: 'smartwatches' },
    'fastrack-revoltt': { asin: 'B09D5N6S7I8', name: 'Fastrack Revoltt', price: '₹3,495', category: 'smartwatches' },
    'noise-colorfit': { asin: 'B09E6O7T8J9', name: 'Noise ColorFit Pro', price: '₹2,999', category: 'smartwatches' },
    
    // 👕 Fashion
    'nike-shoes': { asin: 'B08H2J3K4L5', name: 'Nike Running Shoes', price: '₹3,999', category: 'fashion' },
    'allen-solly-shirt': { asin: 'B08F3G4H5I6', name: 'Allen Solly Shirt', price: '₹1,499', category: 'fashion' },
    'puma-t-shirt': { asin: 'B08G4H5I6J7', name: 'Puma T-Shirt Pack', price: '₹1,299', category: 'fashion' },
    'fastrack-watch': { asin: 'B08E2F3G4H5', name: 'Fastrack Watch', price: '₹2,495', category: 'fashion' },
    'levis-jeans': { asin: 'B08D1E2F3G4', name: "Levi's Jeans", price: '₹2,299', category: 'fashion' },
    
    // 🏠 Home & Kitchen
    'prestige-cooker': { asin: 'B08C3D4E5F6', name: 'Prestige Cooker', price: '₹2,299', category: 'home' },
    'bajaj-mixer': { asin: 'B08B2C3D4E5', name: 'Bajaj Mixer Grinder', price: '₹3,499', category: 'home' },
    'philips-iron': { asin: 'B08A1B2C3D4', name: 'Philips Iron', price: '₹1,499', category: 'home' },
    'milton-water-bottle': { asin: 'B07Z8Y9X0W1', name: 'Milton Water Bottle', price: '₹299', category: 'home' },
    'solimo-bed-sheet': { asin: 'B07Y8X9W0V1', name: 'Solimo Bed Sheet', price: '₹699', category: 'home' },
    
    // 💄 Beauty
    'mamaearth-facewash': { asin: 'B07X8Y9Z0A1', name: 'Mamaearth Face Wash', price: '₹299', category: 'beauty' },
    'lakme-cc-cream': { asin: 'B07W8X9Y0Z1', name: 'Lakme CC Cream', price: '₹249', category: 'beauty' },
    'maybelline-mascara': { asin: 'B07V8W9X0Y1', name: 'Maybelline Mascara', price: '₹399', category: 'beauty' },
    'nyx-lipstick': { asin: 'B07U8V9W0X1', name: 'NYX Lipstick', price: '₹599', category: 'beauty' },
    'plum-body-oil': { asin: 'B07T8U9V0W1', name: 'Plum Body Oil', price: '₹449', category: 'beauty' }
};

// 🚀 ऑटोमेटिक रीडायरेक्ट फंक्शन
function goToProduct(productKey) {
    const product = productsDatabase[productKey];
    if (!product) {
        console.error('Product not found:', productKey);
        alert('Product not found!');
        return;
    }
    
    // Amazon direct product link with affiliate ID
    const amazonLink = `${AMAZON_BASE_URL}/dp/${product.asin}?tag=${AMAZON_AFFILIATE_ID}`;
    
    // Track click for analytics
    trackProductClick(productKey, product.name, product.price);
    
    // Direct redirect to Amazon product page
    window.open(amazonLink, '_blank');
    
    return false;
}

// 🎯 सर्च के जरिए ऑटोमेटिक रीडायरेक्ट
function searchAndGo() {
    const query = document.getElementById('searchInput')?.value.toLowerCase();
    if (!query) {
        alert('Please search for a product!');
        return;
    }
    
    // Auto-find matching product
    let matchedProduct = null;
    let matchedKey = null;
    
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.name.toLowerCase().includes(query) || 
            key.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)) {
            matchedProduct = product;
            matchedKey = key;
            break;
        }
    }
    
    if (matchedProduct) {
        const amazonLink = `${AMAZON_BASE_URL}/dp/${matchedProduct.asin}?tag=${AMAZON_AFFILIATE_ID}`;
        trackProductClick(matchedKey, matchedProduct.name, matchedProduct.price);
        window.open(amazonLink, '_blank');
    } else {
        // Fallback: Amazon search with affiliate link
        const searchLink = `${AMAZON_BASE_URL}/s?k=${encodeURIComponent(query)}&tag=${AMAZON_AFFILIATE_ID}`;
        window.open(searchLink, '_blank');
    }
}

// 📊 ट्रैकिंग फंक्शन
function trackProductClick(productKey, productName, price) {
    const clicks = JSON.parse(localStorage.getItem('amazon_product_clicks') || '[]');
    clicks.push({
        product_key: productKey,
        product_name: productName,
        price: price,
        time: new Date().toISOString(),
        affiliate_id: AMAZON_AFFILIATE_ID
    });
    localStorage.setItem('amazon_product_clicks', JSON.stringify(clicks.slice(-500)));
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_click', {
            'event_category': 'amazon_affiliate',
            'event_label': productName,
            'value': parseFloat(price.replace(/[^0-9]/g, ''))
        });
    }
    
    console.log(`✅ Redirected to: ${productName}`);
}

// 📈 एनालिटिक्स देखने के लिए
function showProductAnalytics() {
    const clicks = JSON.parse(localStorage.getItem('amazon_product_clicks') || '[]');
    
    console.log('=== 📊 Amazon Affiliate Analytics ===');
    console.log(`🖱️ Total Product Clicks: ${clicks.length}`);
    
    const productStats = {};
    clicks.forEach(c => {
        if (!productStats[c.product_name]) {
            productStats[c.product_name] = { clicks: 0, totalValue: 0 };
        }
        productStats[c.product_name].clicks++;
        productStats[c.product_name].totalValue += parseFloat(c.price.replace(/[^0-9]/g, ''));
    });
    
    console.log('\n🏆 Top Products:');
    Object.entries(productStats).sort((a,b) => b[1].clicks - a[1].clicks).slice(0,10).forEach(([name, stats]) => {
        console.log(`  ${name}: ${stats.clicks} clicks`);
    });
    
    // Estimated earnings (assuming 5% avg commission, 10% conversion)
    const estimatedOrders = Math.floor(clicks.length * 0.1);
    const estimatedEarnings = estimatedOrders * 150;
    console.log(`\n💰 Estimated Earnings: ₹${estimatedEarnings.toLocaleString()}`);
    
    return { clicks: clicks.length, estimatedEarnings };
}

// 🗑️ क्लियर एनालिटिक्स
function clearProductAnalytics() {
    localStorage.removeItem('amazon_product_clicks');
    console.log('🗑️ Analytics cleared');
}

// Make functions global
window.goToProduct = goToProduct;
window.searchAndGo = searchAndGo;
window.showProductAnalytics = showProductAnalytics;
window.clearProductAnalytics = clearProductAnalytics;
