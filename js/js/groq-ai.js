// js/groq-ai.js - AI Powered Search & Recommendations
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// AI Search using Groq
async function aiSearch(query) {
    const prompt = `
        You are a product recommendation AI. User searched: "${query}"
        
        Based on this search, recommend 5 products from this list:
        ${JSON.stringify(Object.values(productsDatabase).map(p => ({ name: p.name, category: p.category, price: p.price })))}
        
        Return ONLY JSON array of product names that best match the search.
        Format: ["product1", "product2", ...]
    `;
    
    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.3,
                max_tokens: 500
            })
        });
        
        const data = await response.json();
        const recommendations = JSON.parse(data.choices[0].message.content);
        
        // Find products matching recommendations
        const results = [];
        for (const recName of recommendations) {
            for (const [key, product] of Object.entries(productsDatabase)) {
                if (product.name.toLowerCase().includes(recName.toLowerCase()) ||
                    recName.toLowerCase().includes(product.name.toLowerCase())) {
                    results.push({ key, ...product });
                    break;
                }
            }
        }
        
        return results;
    } catch (error) {
        console.error('AI Search Error:', error);
        return fallbackSearch(query);
    }
}

// Fallback search
function fallbackSearch(query) {
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

// AI Product Description Generator
async function generateProductDescription(productName) {
    const prompt = `Write a compelling 2-line product description for ${productName} that encourages purchase. Make it exciting and highlight key benefits.`;
    
    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 100
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        return `Best deal on ${productName}! Limited time offer. Shop now!`;
    }
}

// Smart recommendations based on user behavior
function getSmartRecommendations() {
    const clicks = JSON.parse(localStorage.getItem('amazon_clicks') || '[]');
    
    // Get last viewed category
    const lastClick = clicks[clicks.length - 1];
    if (lastClick) {
        // Find similar products
        const similar = [];
        for (const [key, product] of Object.entries(productsDatabase)) {
            if (product.category === lastClick.product_category && 
                product.name !== lastClick.product_name) {
                similar.push({ key, ...product });
            }
        }
        return similar.slice(0, 4);
    }
    
    // Default: return best sellers
    return Object.entries(productsDatabase)
        .map(([key, product]) => ({ key, ...product }))
        .slice(0, 4);
}

// Price drop alert
function checkPriceDrops() {
    const savedPrices = JSON.parse(localStorage.getItem('saved_prices') || '{}');
    const drops = [];
    
    for (const [key, product] of Object.entries(productsDatabase)) {
        if (savedPrices[key] && savedPrices[key] > parseInt(product.price)) {
            drops.push({
                product: product,
                oldPrice: savedPrices[key],
                newPrice: product.price,
                saving: savedPrices[key] - parseInt(product.price)
            });
        }
        savedPrices[key] = parseInt(product.price);
    }
    
    localStorage.setItem('saved_prices', JSON.stringify(savedPrices));
    
    if (drops.length > 0) {
        showPriceDropAlert(drops);
    }
}

// Show price drop alert
function showPriceDropAlert(drops) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'price-drop-alert';
    alertDiv.innerHTML = `
        <span>📉 Price Drop Alert!</span>
        ${drops.map(d => `${d.product.name}: ₹${d.saving} off`).join(' • ')}
        <button onclick="this.parentElement.remove()">×</button>
    `;
    document.body.prepend(alertDiv);
    
    setTimeout(() => alertDiv.remove(), 10000);
}

// Check prices every hour
setInterval(checkPriceDrops, 60 * 60 * 1000);

// Make global
window.aiSearch = aiSearch;
window.generateProductDescription = generateProductDescription;
window.getSmartRecommendations = getSmartRecommendations;
window.checkPriceDrops = checkPriceDrops;
