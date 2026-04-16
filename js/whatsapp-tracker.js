// js/whatsapp-tracker.js - WhatsApp Integration
const WHATSAPP_API_KEY = '7TEShXts406lDUgqHkVLnXRa1s6nepx5kb9tDtAUFetmTDpqrASG5mjR';
const STORE_ID = 'smileai24-21';

// Track abandoned cart
function trackAbandonedCart(productKey, productName, price) {
    const abandoned = JSON.parse(localStorage.getItem('abandoned_carts') || '[]');
    abandoned.push({
        product_key: productKey,
        product_name: productName,
        price: price,
        time: new Date().toISOString(),
        store_id: STORE_ID
    });
    localStorage.setItem('abandoned_carts', JSON.stringify(abandoned.slice(-100)));
    
    // Send to server
    sendAbandonedCartToServer(productKey, productName, price);
}

// Send to server for WhatsApp automation
async function sendAbandonedCartToServer(productKey, productName, price) {
    try {
        const response = await fetch('/api/webhook.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'abandoned_cart',
                product_key: productKey,
                product_name: productName,
                price: price,
                store_id: STORE_ID
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Failed to send to server:', error);
    }
}

// Send WhatsApp message
function sendWhatsAppMessage(phoneNumber, message) {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Track
    trackWhatsAppMessage(phoneNumber, message);
}

// Track WhatsApp messages
function trackWhatsAppMessage(phoneNumber, message) {
    const messages = JSON.parse(localStorage.getItem('whatsapp_messages') || '[]');
    messages.push({
        phone: phoneNumber,
        message_preview: message.substring(0, 50),
        time: new Date().toISOString()
    });
    localStorage.setItem('whatsapp_messages', JSON.stringify(messages.slice(-200)));
}

// Generate WhatsApp deal message
function generateDealMessage(product) {
    return `
🛍️ *HOT DEAL ALERT!* 🔥

*${product.name}*
💰 Price: ₹${parseInt(product.price).toLocaleString()}
⭐ Rating: ${product.rating}/5
✅ Free Shipping
🔒 100% Secure

👇 BUY NOW:
${getAmazonLink(product.key)}

*Limited time offer!* ⏰
    `.trim();
}

// Schedule daily deals on WhatsApp
function scheduleDailyDeal() {
    const allProducts = Object.values(productsDatabase);
    const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
    
    const message = generateDealMessage(randomProduct);
    
    // Store for sending
    localStorage.setItem('daily_deal', JSON.stringify({
        product: randomProduct,
        message: message,
        date: new Date().toDateString()
    }));
    
    console.log('📅 Daily deal scheduled:', randomProduct.name);
}

// Auto reminder for abandoned cart
function setupAutoReminder() {
    const abandoned = JSON.parse(localStorage.getItem('abandoned_carts') || '[]');
    const recentAbandoned = abandoned.filter(a => {
        const hoursAgo = (new Date() - new Date(a.time)) / (1000 * 60 * 60);
        return hoursAgo < 24 && !a.reminded;
    });
    
    recentAbandoned.forEach(cart => {
        const phone = prompt(`You didn't complete purchase of ${cart.product_name}! Enter WhatsApp number for special discount:`, '91');
        if (phone) {
            const discountMessage = `🎉 *SPECIAL DISCOUNT!* 🎉\n\nYou left ${cart.product_name} in cart.\n\n💰 Get ₹500 off on your purchase!\n\n👇 Buy now:\n${getAmazonLink(cart.product_key)}\n\n*Valid for next 1 hour!*`;
            sendWhatsAppMessage(phone, discountMessage);
            
            // Mark as reminded
            cart.reminded = true;
            localStorage.setItem('abandoned_carts', JSON.stringify(abandoned));
        }
    });
}

// Run reminder every 5 minutes
setInterval(setupAutoReminder, 5 * 60 * 1000);

// Make global
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.trackAbandonedCart = trackAbandonedCart;
window.generateDealMessage = generateDealMessage;
window.scheduleDailyDeal = scheduleDailyDeal;
