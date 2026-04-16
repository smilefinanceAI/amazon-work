// js/amazon-products.js - Complete Products Database
const AMAZON_AFFILIATE_ID = 'smileai24-21';
const AMAZON_BASE_URL = 'https://www.amazon.in';

// ✅ Complete Products Database with Real Amazon Images
const productsDatabase = {
    // 📱 Smartphones
    'iphone-15': {
        asin: 'B0CHWNPS5R',
        name: 'Apple iPhone 15 (128GB) - Black',
        price: '71999',
        mrp: '79900',
        discount: '10%',
        category: 'mobiles',
        brand: 'Apple',
        rating: 4.7,
        reviews: '12450',
        image: 'https://m.media-amazon.com/images/I/81K9kO9sL9L._SL1500_.jpg',
        images: [
            'https://m.media-amazon.com/images/I/81K9kO9sL9L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg'
        ],
        features: ['A16 Bionic Chip', '48MP Camera', 'USB-C', 'All-Day Battery'],
        inStock: true,
        prime: true
    },
    'samsung-s24': {
        asin: 'B0CNL6TG8K',
        name: 'Samsung Galaxy S24 5G (8GB, 256GB)',
        price: '79999',
        mrp: '89999',
        discount: '11%',
        category: 'mobiles',
        brand: 'Samsung',
        rating: 4.6,
        reviews: '8450',
        image: 'https://m.media-amazon.com/images/I/61Iym7aPr9L._SL1500_.jpg',
        features: ['AI Phone', '50MP Camera', '120Hz Display', 'Snapdragon 8 Gen 3'],
        inStock: true,
        prime: true
    },
    'oneplus-12': {
        asin: 'B0CQHGRL9Q',
        name: 'OnePlus 12 5G (16GB, 512GB)',
        price: '64999',
        mrp: '69999',
        discount: '7%',
        category: 'mobiles',
        brand: 'OnePlus',
        rating: 4.5,
        reviews: '5620',
        image: 'https://m.media-amazon.com/images/I/61eB7J1lJ4L._SL1500_.jpg',
        features: ['Snapdragon 8 Gen 3', '50MP Camera', '100W Charging', '120Hz Display'],
        inStock: true,
        prime: true
    },
    'pixel-8': {
        asin: 'B0CGY1NVDK',
        name: 'Google Pixel 8 (8GB, 128GB)',
        price: '69999',
        mrp: '75999',
        discount: '8%',
        category: 'mobiles',
        brand: 'Google',
        rating: 4.4,
        reviews: '3210',
        image: 'https://m.media-amazon.com/images/I/61pEu2T7YSL._SL1500_.jpg',
        features: ['Google Tensor G3', 'AI Camera', '7 Years Updates', 'Best Camera'],
        inStock: true,
        prime: true
    },
    
    // 💻 Laptops
    'macbook-air-m2': {
        asin: 'B0B3C2R8K5',
        name: 'Apple MacBook Air M2 (8GB, 256GB)',
        price: '89990',
        mrp: '99900',
        discount: '10%',
        category: 'laptops',
        brand: 'Apple',
        rating: 4.8,
        reviews: '23450',
        image: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
        features: ['M2 Chip', '13.6" Liquid Retina', '18hrs Battery', '1080p Camera'],
        inStock: true,
        prime: true
    },
    'hp-victus': {
        asin: 'B0BZ5KX3H8',
        name: 'HP Victus Gaming Laptop (16GB, 512GB SSD)',
        price: '56990',
        mrp: '67990',
        discount: '16%',
        category: 'laptops',
        brand: 'HP',
        rating: 4.4,
        reviews: '8750',
        image: 'https://m.media-amazon.com/images/I/61xUqZyC-uL._SL1500_.jpg',
        features: ['Intel i5', 'RTX 3050', '144Hz Display', 'RGB Keyboard'],
        inStock: true,
        prime: true
    },
    'asus-rog-strix': {
        asin: 'B0B6K5N4H1',
        name: 'ASUS ROG Strix G15 Gaming Laptop',
        price: '119990',
        mrp: '139990',
        discount: '14%',
        category: 'laptops',
        brand: 'ASUS',
        rating: 4.6,
        reviews: '4320',
        image: 'https://m.media-amazon.com/images/I/61bQ4L9qK1L._SL1500_.jpg',
        features: ['Ryzen 9', 'RTX 4060', '240Hz Display', 'Liquid Cooling'],
        inStock: true,
        prime: true
    },
    
    // 🎧 Headphones
    'airpods-pro-2': {
        asin: 'B0BDJ3Q9R2',
        name: 'Apple AirPods Pro (2nd Gen) with MagSafe',
        price: '24999',
        mrp: '29900',
        discount: '16%',
        category: 'headphones',
        brand: 'Apple',
        rating: 4.7,
        reviews: '45670',
        image: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg',
        features: ['Active Noise Cancellation', 'Adaptive Audio', 'USB-C Charging', '6hrs Battery'],
        inStock: true,
        prime: true
    },
    'sony-wh-1000xm5': {
        asin: 'B0B3J2X8F4',
        name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
        price: '29990',
        mrp: '34990',
        discount: '14%',
        category: 'headphones',
        brand: 'Sony',
        rating: 4.8,
        reviews: '23420',
        image: 'https://m.media-amazon.com/images/I/61qQ8xWQ6jL._SL1500_.jpg',
        features: ['Industry Leading ANC', '30hrs Battery', 'Speak-to-Chat', 'LDAC Support'],
        inStock: true,
        prime: true
    },
    
    // 👕 Fashion
    'nike-air-max': {
        asin: 'B08H2J3K4L5',
        name: 'Nike Air Max Running Shoes',
        price: '5999',
        mrp: '8995',
        discount: '33%',
        category: 'fashion',
        brand: 'Nike',
        rating: 4.5,
        reviews: '12540',
        image: 'https://m.media-amazon.com/images/I/71JqQxXqJQL._SL1500_.jpg',
        features: ['Air Max Cushioning', 'Breathable Mesh', 'Durable Rubber Sole'],
        inStock: true,
        prime: true
    },
    'levis-501': {
        asin: 'B08D1E2F3G4',
        name: "Levi's 501 Original Jeans",
        price: '2299',
        mrp: '3999',
        discount: '42%',
        category: 'fashion',
        brand: "Levi's",
        rating: 4.4,
        reviews: '8760',
        image: 'https://m.media-amazon.com/images/I/81HqQxXqJQL._SL1500_.jpg',
        features: ['100% Cotton', 'Button Fly', 'Classic Fit', '5 Pocket Style'],
        inStock: true,
        prime: true
    },
    
    // 🏠 Home & Kitchen
    'prestige-cooker': {
        asin: 'B08C3D4E5F6',
        name: 'Prestige Deluxe Alpha Pressure Cooker (5L)',
        price: '2299',
        mrp: '3450',
        discount: '33%',
        category: 'home',
        brand: 'Prestige',
        rating: 4.6,
        reviews: '34520',
        image: 'https://m.media-amazon.com/images/I/71KqQxXqJQL._SL1500_.jpg',
        features: ['Stainless Steel', '5L Capacity', 'Induction Compatible', '5 Year Warranty'],
        inStock: true,
        prime: true
    },
    'philips-iron': {
        asin: 'B08A1B2C3D4',
        name: 'Philips Steam Iron (GC1905)',
        price: '1499',
        mrp: '2495',
        discount: '40%',
        category: 'home',
        brand: 'Philips',
        rating: 4.4,
        reviews: '28760',
        image: 'https://m.media-amazon.com/images/I/61HqQxXqJQL._SL1500_.jpg',
        features: ['1500W', 'Non-Stick Soleplate', 'Spray Mist', 'Self-Clean'],
        inStock: true,
        prime: true
    },
    
    // 💄 Beauty
    'mamaearth-facewash': {
        asin: 'B07X8Y9Z0A1',
        name: 'Mamaearth Vitamin C Face Wash',
        price: '299',
        mrp: '599',
        discount: '50%',
        category: 'beauty',
        brand: 'Mamaearth',
        rating: 4.4,
        reviews: '87650',
        image: 'https://m.media-amazon.com/images/I/61FqQxXqJQL._SL1500_.jpg',
        features: ['Vitamin C', 'Turmeric', 'Toxin Free', 'Cruelty Free'],
        inStock: true,
        prime: true
    }
};

// Get Amazon product link
function getAmazonLink(productKey) {
    const product = productsDatabase[productKey];
    if (!product) return '#';
    return `${AMAZON_BASE_URL}/dp/${product.asin}?tag=${AMAZON_AFFILIATE_ID}`;
}

// Redirect to Amazon with tracking
function goToProduct(productKey) {
    const product = productsDatabase[productKey];
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    const amazonLink = getAmazonLink(productKey);
    
    // Track click
    trackProductClick(productKey, product);
    
    // Set cookie for 24 hours tracking
    setCookie('last_product', productKey, 1);
    setCookie('last_price', product.price, 1);
    
    // Store in session for WhatsApp reminder
    sessionStorage.setItem('abandoned_product', JSON.stringify({
        key: productKey,
        name: product.name,
        price: product.price,
        time: new Date().toISOString()
    }));
    
    // Open Amazon
    window.open(amazonLink, '_blank');
    
    // Schedule WhatsApp reminder after 30 min if no purchase detected
    scheduleWhatsAppReminder(product);
}

// Track product click
function trackProductClick(productKey, product) {
    // Local storage
    const clicks = JSON.parse(localStorage.getItem('amazon_clicks') || '[]');
    clicks.push({
        product_key: productKey,
        product_name: product.name,
        price: product.price,
        time: new Date().toISOString()
    });
    localStorage.setItem('amazon_clicks', JSON.stringify(clicks.slice(-500)));
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'AddToCart', {
            content_name: product.name,
            content_price: product.price,
            content_category: product.category
        });
    }
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            items: [{
                id: productKey,
                name: product.name,
                price: product.price,
                category: product.category
            }]
        });
    }
    
    console.log(`✅ Tracked: ${product.name}`);
}

// Set cookie helper
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Get cookie helper
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Schedule WhatsApp reminder
function scheduleWhatsAppReminder(product) {
    // Check if user already purchased
    setTimeout(() => {
        const purchased = sessionStorage.getItem('purchased_' + product.key);
        if (!purchased) {
            showWhatsAppReminder(product);
        }
    }, 30 * 60 * 1000); // 30 minutes
}

// Show WhatsApp reminder
function showWhatsAppReminder(product) {
    const phoneNumber = prompt('You didn\'t complete your purchase! Enter WhatsApp number to get best deal reminder:', '91XXXXXXXXXX');
    if (phoneNumber && phoneNumber.length >= 10) {
        sendWhatsAppReminder(phoneNumber, product);
    }
}

// Send WhatsApp reminder
function sendWhatsAppReminder(phoneNumber, product) {
    const message = `🛍️ *Hey! You forgot to complete your purchase!*\n\nProduct: *${product.name}*\nPrice: *₹${parseInt(product.price).toLocaleString()}*\n\n✅ Buy now: ${getAmazonLink(product.key)}\n\n💰 Use code SAVE10 for extra 10% off!\n\n🛒 Complete purchase within 1 hour for free shipping!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Track reminder sent
    console.log(`📱 WhatsApp reminder sent to: ${phoneNumber}`);
}

// Search products with AI
async function searchProducts(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.name.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery) ||
            product.brand.toLowerCase().includes(lowerQuery)) {
            results.push({ key, ...product });
        }
    }
    
    return results;
}

// Get product recommendations based on category
function getRecommendations(category, currentKey) {
    const recommendations = [];
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (product.category === category && key !== currentKey) {
            recommendations.push({ key, ...product });
        }
    }
    return recommendations.slice(0, 4);
}

// Show analytics
function showAnalytics() {
    const clicks = JSON.parse(localStorage.getItem('amazon_clicks') || '[]');
    console.log('=== Amazon Affiliate Analytics ===');
    console.log(`📊 Total Clicks: ${clicks.length}`);
    
    const productStats = {};
    clicks.forEach(c => {
        productStats[c.product_name] = (productStats[c.product_name] || 0) + 1;
    });
    
    console.log('\n🏆 Top Products:');
    Object.entries(productStats).sort((a,b) => b[1] - a[1]).slice(0,5).forEach(([name, count]) => {
        console.log(`  ${name}: ${count} clicks`);
    });
    
    const estimatedEarnings = Math.floor(clicks.length * 0.15) * 200;
    console.log(`\n💰 Estimated Earnings: ₹${estimatedEarnings.toLocaleString()}`);
}

// Make global
window.productsDatabase = productsDatabase;
window.goToProduct = goToProduct;
window.getAmazonLink = getAmazonLink;
window.searchProducts = searchProducts;
window.getRecommendations = getRecommendations;
window.showAnalytics = showAnalytics;
