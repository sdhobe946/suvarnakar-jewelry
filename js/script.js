// =============================================
//  CONFIGURATION
// =============================================

const CONFIG = {
  // Your Google Sheet ID (get from: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/)
  SHEET_ID: '1oSAqGAqMD1vX_khpbDo9qR00qyQ4j860TaIunIU3c',
  SHEET_NAME: 'Sheet1',     // The tab name inside the spreadsheet
  
  // OWNER INFORMATION
  OWNER_NAME: 'Abhishekh Chakotkar',
  OWNER_EMAIL: '',
  
  // SHOP DETAILS
  SHOP_NAME: 'सुवर्णकार अलंकार केंद्र',
  SHOP_ADDRESS: 'Risod, Maharashtra',
  SHOP_CITY: 'Risod, Maharashtra',
  
  // CONTACT DETAILS
  PHONE_PRIMARY: '9511825911',
  PHONE_SECONDARY: '7083857641',
  SHOP_EMAIL: '',
  
  // SHOP DESCRIPTION
  SHOP_DESC: 'Premium jewelry store offering exquisite gold jewelry designs',
  SHOP_HOURS: '10:00 AM - 8:00 PM',
};

// Demo data used when no Sheet is connected
const DEMO_DATA = [
  // MAN - RING
  { category:'product', subcategory:'man-ring', name:'Gold Ring for Men',    name_mr:'पुरुषांसाठी सोन्याची अंगठी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'man-ring', name:'Designer Gold Ring',       name_mr:'डिজायनर सोन्याची अंगठी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // MAN - BRASLET
  { category:'product', subcategory:'man-bracelet', name:'Gold Bracelet',    name_mr:'सोन्याची बांगडी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'man-bracelet', name:'Traditional Bracelet',       name_mr:'परंपरागत बांगडी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // MAN - KAD
  { category:'product', subcategory:'man-kad', name:'Gold Kad',    name_mr:'सोन्याचा कड',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'man-kad', name:'Punjabi Kad',       name_mr:'पंजाबी कड',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // MAN - NECK CHAIN
  { category:'product', subcategory:'man-neck-chain', name:'Gold Neck Chain',    name_mr:'सोन्याची गळ्याची साखळी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'man-neck-chain', name:'Long Neck Chain',       name_mr:'लांब साखळी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // MAN - EAR CHAIN
  { category:'product', subcategory:'man-ear-chain', name:'Gold Ear Chain',    name_mr:'कानाची साखळी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'man-ear-chain', name:'Stylish Ear Chain',       name_mr:'स्टाइलिश कानाची साखळी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // MAN - JENST BALI
  { category:'product', subcategory:'man-bali', name:'Gold Bali',    name_mr:'सोन्याचा बली',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'man-bali', name:'Traditional Bali',       name_mr:'परंपरागत बली',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - RING
  { category:'product', subcategory:'women-ring', name:'Gold Ring for Women',    name_mr:'महिलांसाठी सोन्याची अंगठी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-ring', name:'Designer Women Ring',       name_mr:'डिजायनर महिला अंगठी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - BRACELET
  { category:'product', subcategory:'women-bracelet', name:'Gold Bracelet for Women',    name_mr:'महिलांसाठी सोन्याची बांगडी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-bracelet', name:'Traditional Bracelet',       name_mr:'परंपरागत बांगडी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - KAD
  { category:'product', subcategory:'women-kad', name:'Gold Kad for Women',    name_mr:'महिलांसाठी सोन्याचा कड',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-kad', name:'Elegant Kad',       name_mr:'शोभेशाली कड',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - NECK CHAIN
  { category:'product', subcategory:'women-neck-chain', name:'Gold Neck Chain for Women',    name_mr:'महिलांसाठी गळ्याची साखळी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-neck-chain', name:'Stylish Neck Chain',       name_mr:'स्टाइलिश गळ्याची साखळी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - EAR CHAIN
  { category:'product', subcategory:'women-ear-chain', name:'Gold Ear Chain for Women',    name_mr:'महिलांसाठी कानाची साखळी',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-ear-chain', name:'Designer Ear Chain',       name_mr:'डिजायनर कानाची साखळी',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - SHORT KANATLE PATTE
  { category:'product', subcategory:'women-short-kanatle', name:'Short Kanatle Patte',    name_mr:'लहान कणते पत्ते',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-short-kanatle', name:'Elegant Short Patte',       name_mr:'शोभेशाली लहान पत्ते',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - ZUMBER
  { category:'product', subcategory:'women-zumber', name:'Gold Zumber',    name_mr:'सोन्याचा झुंबर',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-zumber', name:'Designer Zumber',       name_mr:'डिजायनर झुंबर',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WOMEN - LONG KANATLE PATTE
  { category:'product', subcategory:'women-long-kanatle', name:'Long Kanatle Patte',    name_mr:'लांब कणते पत्ते',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'product', subcategory:'women-long-kanatle', name:'Traditional Long Patte',       name_mr:'परंपरागत लांब पत्ते',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - NECKLACE
  { category:'partyware', subcategory:'partyware-necklace', name:'Party Necklace',    name_mr:'पार्टी हार',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-necklace', name:'Designer Party Necklace',       name_mr:'डिजायनर पार्टी हार',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - RANIHAR
  { category:'partyware', subcategory:'partyware-ranihar', name:'Ranihar',    name_mr:'रानीहार',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-ranihar', name:'Elegant Ranihar',       name_mr:'शोभेशाली रानीहार',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - POHAHAR
  { category:'partyware', subcategory:'partyware-pohahar', name:'Pohahar',    name_mr:'पोहार',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-pohahar', name:'Traditional Pohahar',       name_mr:'परंपरागत पोहार',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - CHAUKAR
  { category:'partyware', subcategory:'partyware-chaukar', name:'Chaukar',    name_mr:'चौकर',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-chaukar', name:'Designer Chaukar',       name_mr:'डिजायनर चौकर',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - LONG MANGALSUTRA
  { category:'partyware', subcategory:'partyware-long-mangalsutra', name:'Long Mangalsutra',    name_mr:'लांब मंगळसूत्र',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-long-mangalsutra', name:'Traditional Long Mangalsutra',       name_mr:'परंपरागत लांब मंगळसूत्र',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - SHORT MANGALSUTRA
  { category:'partyware', subcategory:'partyware-short-mangalsutra', name:'Short Mangalsutra',    name_mr:'लहान मंगळसूत्र',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-short-mangalsutra', name:'Elegant Short Mangalsutra',       name_mr:'शोभेशाली लहान मंगळसूत्र',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - BANGLES
  { category:'partyware', subcategory:'partyware-bangles', name:'Party Bangles',    name_mr:'पार्टी बांगड्या',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-bangles', name:'Designer Party Bangles',       name_mr:'डिजायनर पार्टी बांगड्या',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // PARTY WARE - KALI PATTI POTH
  { category:'partyware', subcategory:'partyware-kali-patti', name:'Kali Patti Poth',    name_mr:'काळी पट्टी पोत',         price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  { category:'partyware', subcategory:'partyware-kali-patti', name:'Traditional Kali Patti Poth',       name_mr:'परंपरागत काळी पट्टी पोत',        price:'Call for Price', image_url:'', badge:'1GM Gold',  phone:'' },
  
  // WEDDING - NECKLACE
  { category:'wedding', subcategory:'wedding-necklace', name:'Bridal Necklace',    name_mr:'लग्नाचा हार',         price:'',               image_url:'', badge:'',  phone:'' },
  { category:'wedding', subcategory:'wedding-necklace', name:'Elegant Wedding Necklace',       name_mr:'शोभेशाली लग्नाचा हार',        price:'', image_url:'', badge:'',  phone:'' },
  
  // WEDDING - SHORT POTH
  { category:'wedding', subcategory:'wedding-short-poth', name:'Short Poth',    name_mr:'लहान पोत',         price:'',               image_url:'', badge:'',  phone:'' },
  { category:'wedding', subcategory:'wedding-short-poth', name:'Designer Short Poth',       name_mr:'डिजायनर लहान पोत',        price:'', image_url:'', badge:'',  phone:'' },
  
  // WEDDING - PURN COMBO SET
  { category:'wedding', subcategory:'wedding-combo-set', name:'Purn Combo Set',    name_mr:'संपूर्ण कॉम्बो सेट',         price:'',               image_url:'', badge:'',  phone:'' },
  { category:'wedding', subcategory:'wedding-combo-set', name:'Complete Bridal Combo',       name_mr:'संपूर्ण लग्नाचा कॉम्बो',        price:'', image_url:'', badge:'',  phone:'' },
  
  // WEDDING - COUPLE RING
  { category:'wedding', subcategory:'wedding-couple-ring', name:'Couple Ring',    name_mr:'जोडी अंगठी',         price:'',               image_url:'', badge:'',  phone:'' },
  { category:'wedding', subcategory:'wedding-couple-ring', name:'Designer Couple Ring',       name_mr:'डिजायनर जोडी अंगठी',        price:'', image_url:'', badge:'',  phone:'' },
  
  // WEDDING - BALI PATTA BRAND POTH
  { category:'wedding', subcategory:'wedding-bali-patta', name:'Bali Patta Brand Poth',    name_mr:'बली पट्टा ब्रांड पोत',         price:'',               image_url:'', badge:'',  phone:'' },
  { category:'wedding', subcategory:'wedding-bali-patta', name:'Premium Bali Patta Poth',       name_mr:'प्रीमियम बली पट्टा ब्रांड पोत',        price:'', image_url:'', badge:'',  phone:'' },
];

const WEDDING_ICONS = ['👰','💍','📿','✨','💎','🌸','⭐','🎀','👑','🌺'];
const PRODUCT_ICONS = ['💎','💍','📿','✨','⭐','🌸','👑','🎀'];

// =============================================
//  CATEGORY SYSTEM
// =============================================
const CATEGORIES = [
  { 
    id: 'product', 
    name: 'Featured Jewellery Collection', 
    name_mr: 'दैनंदिन संग्रह', 
    icon: '💎', 
    color: '#D4AF37',
    hasSubcategories: true,
    subcategories: [
      { id: 'product-man', name: 'For Men', name_mr: 'पुरुषांसाठी', icon: '👨' },
      { id: 'product-women', name: 'For Women', name_mr: 'महिलांसाठी', icon: '👩' }
    ]
  },
  { 
    id: 'wedding', 
    name: 'Wedding Special Collection', 
    name_mr: 'लग्नसोहळा संग्रह', 
    icon: '👰', 
    color: '#FFE97A',
    hasSubcategories: true,
    subcategories: [
      { id: 'wedding-all', name: 'All Wedding Items', name_mr: 'सर्व लग्न वस्तु', icon: '👰' }
    ]
  },
  { 
    id: 'partyware', 
    name: 'Party Ware Collection', 
    name_mr: 'पार्टी संग्रह', 
    icon: '✨', 
    color: '#FFD700',
    hasSubcategories: true,
    subcategories: [
      { id: 'partyware-all', name: 'All Party Items', name_mr: 'सर्व पार्टी वस्तु', icon: '✨' }
    ]
  }
];

// Man subcategories
const MAN_SUBCAT = [
  { id: 'man-ring', name: 'Ring', name_mr: 'अंगठी' },
  { id: 'man-bracelet', name: 'Bracelet', name_mr: 'बांगडी' },
  { id: 'man-kad', name: 'Kad', name_mr: 'कड' },
  { id: 'man-neck-chain', name: 'Neck Chain', name_mr: 'गळ्याची साखळी' },
  { id: 'man-ear-chain', name: 'Ear Chain', name_mr: 'कानाची साखळी' },
  { id: 'man-bali', name: 'Jenst Bali', name_mr: 'बली' }
];

// Women subcategories
const WOMEN_SUBCAT = [
  { id: 'women-ring', name: 'Women Ring', name_mr: 'महिलांसाठी अंगठी' },
  { id: 'women-bracelet', name: 'Bracelet', name_mr: 'बांगडी' },
  { id: 'women-kad', name: 'Kad', name_mr: 'कड' },
  { id: 'women-neck-chain', name: 'Neck Chain', name_mr: 'गळ्याची साखळी' },
  { id: 'women-ear-chain', name: 'Ear Chain', name_mr: 'कानाची साखळी' },
  { id: 'women-short-kanatle', name: 'Short Kanatle Patte', name_mr: 'लहान कणते पत्ते' },
  { id: 'women-zumber', name: 'Zumber', name_mr: 'झुंबर' },
  { id: 'women-long-kanatle', name: 'Long Kanatle Patte', name_mr: 'लांब कणते पत्ते' }
];

// Party Ware subcategories
const PARTYWARE_SUBCAT = [
  { id: 'partyware-necklace', name: 'Necklace', name_mr: 'हार' },
  { id: 'partyware-ranihar', name: 'Ranihar', name_mr: 'रानीहार' },
  { id: 'partyware-pohahar', name: 'Pohahar', name_mr: 'पोहार' },
  { id: 'partyware-chaukar', name: 'Chaukar', name_mr: 'चौकर' },
  { id: 'partyware-long-mangalsutra', name: 'Long Mangalsutra', name_mr: 'लांब मंगळसूत्र' },
  { id: 'partyware-short-mangalsutra', name: 'Short Mangalsutra', name_mr: 'लहान मंगळसूत्र' },
  { id: 'partyware-bangles', name: 'Bangles', name_mr: 'बांगड्या' },
  { id: 'partyware-kali-patti', name: 'Kali Patti Poth', name_mr: 'काळी पट्टी पोत' }
];

// Wedding subcategories
const WEDDING_SUBCAT = [
  { id: 'wedding-necklace', name: 'Necklace', name_mr: 'हार' },
  { id: 'wedding-short-poth', name: 'Short Poth', name_mr: 'लहान पोत' },
  { id: 'wedding-combo-set', name: 'Purn Combo Set', name_mr: 'संपूर्ण कॉम्बो सेट' },
  { id: 'wedding-couple-ring', name: 'Couple Ring', name_mr: 'जोडी अंगठी' },
  { id: 'wedding-bali-patta', name: 'Bali Patta Brand Poth', name_mr: 'बली पट्टा ब्रांड पोत' }
];

let currentCategory = null;
let currentSubcategory = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// =============================================
//  GENDER SELECT MODAL
// =============================================
function openGenderSelectModal() {
  document.getElementById('genderSelectModal').classList.add('open');
}

function closeGenderSelectModal() {
  document.getElementById('genderSelectModal').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize owner mode on page load
  initializeOwnerMode();
  
  // Gender modal background click
  const genderModal = document.getElementById('genderSelectModal');
  if (genderModal) {
    genderModal.addEventListener('click', (e) => {
      if (e.target === genderModal) closeGenderSelectModal();
    });
  }
  
  // Subcategory modal background click
  const subcatModal = document.getElementById('subcategorySelectModal');
  if (subcatModal) {
    subcatModal.addEventListener('click', (e) => {
      if (e.target === subcatModal) {
        subcatModal.classList.remove('open');
      }
    });
  }
  
  // Keyboard shortcut for owner: Ctrl+Shift+A
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      showOwnerAccessModal();
    }
  });
});

function selectGender(gender) {
  if (gender === 'man') {
    currentSubcategory = 'product-man';
    renderGenderSubcategories(MAN_SUBCAT);
  } else {
    currentSubcategory = 'product-women';
    renderGenderSubcategories(WOMEN_SUBCAT);
  }
  
  document.getElementById('genderSelectModal').classList.remove('open');
  document.getElementById('subcategorySelectModal').classList.add('open');
}

function renderGenderSubcategories(subcats) {
  const container = document.getElementById('subcategoryList');
  const title = document.getElementById('subcategoryTitle');
  
  const genderName = currentSubcategory === 'product-man' ? 'For Men' : 'For Women';
  title.textContent = genderName;
  
  const html = subcats.map(subcat => `
    <div class="subcat-card" onclick="goToSubcategory('${subcat.id}')">
      <div class="subcat-name">${subcat.name}</div>
      <div class="subcat-name-mr">${subcat.name_mr}</div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function goToSubcategory(subcategoryId) {
  console.log('🔗 goToSubcategory (Featured) called with ID:', subcategoryId);
  currentCategory = CATEGORIES.find(c => c.id === 'product');
  currentSubcategory = subcategoryId;
  
  console.log('✅ Set currentCategory:', currentCategory.id);
  console.log('✅ Set currentSubcategory:', currentSubcategory);
  
  // Hide modals and show category view
  document.getElementById('genderSelectModal').classList.remove('open');
  document.getElementById('subcategorySelectModal').classList.remove('open');
  document.getElementById('products').style.display = 'none';
  document.getElementById('categoryViewSection').style.display = 'block';
  document.getElementById('cartSection').style.display = 'none';
  
  // Update title
  const subcat = [...MAN_SUBCAT, ...WOMEN_SUBCAT].find(s => s.id === subcategoryId);
  if (subcat) {
    document.getElementById('categoryTitle').textContent = subcat.name + ' - ' + subcat.name_mr;
  }
  
  renderCategoryView();
  setTimeout(() => {
    document.getElementById('categoryViewSection').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// =============================================
//  CART FUNCTIONS
// =============================================
function addToCart(productName, category) {
  const product = currentData.find(p => p.name === productName && p.category === category);
  if (!product) return;
  
  const existingItem = cart.find(item => item.name === productName && item.category === category);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  alert(`✅ ${product.name} added to cart!`);
  updateCartCount();
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  saveCart();
  renderCart();
  updateCartCount();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.length;
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.innerHTML = `🛒 Cart (${count})`;
  }
}

function renderCart() {
  const container = document.getElementById('cartContainer');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><p>Your cart is empty</p></div>';
    return;
  }
  
  let html = '<div class="cart-items">';
  cart.forEach(item => {
    html += `
      <div class="cart-item">
        <div class="cart-item-name">${item.name}</div>
        ${item.name_mr ? `<div class="cart-item-name-mr">${item.name_mr}</div>` : ''}
        <div class="cart-item-price">${item.price || 'Call for Price'}</div>
        <div class="cart-item-qty">Qty: ${item.quantity}</div>
        <button class="btn-remove-cart" onclick="removeFromCart('${item.name}')">Remove</button>
      </div>
    `;
  });
  html += '</div>';
  html += `
    <div class="cart-actions">
      <p>Total items: ${cart.length}</p>
      <button class="btn-checkout" onclick="checkout()">📞 Order via WhatsApp</button>
    </div>
  `;
  
  container.innerHTML = html;
}

function checkout() {
  if (cart.length === 0) {
    alert('Cart is empty!');
    return;
  }
  
  let message = `नमस्कार, मला खालील दागिने हवेत:\n\n`;
  cart.forEach(item => {
    message += `- ${item.name} (${item.name_mr || ''}) x${item.quantity}\n`;
  });
  message += `\nमुझे कीमत और अन्य विवरण के लिए संपर्क करें।`;
  
  const phone = CONFIG.PHONE_PRIMARY;
  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/91${phone}?text=${encodedMsg}`, '_blank');
}

function toggleCart() {
  const cartSection = document.getElementById('cartSection');
  if (cartSection.style.display === 'none') {
    cartSection.style.display = 'block';
    renderCart();
    cartSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    cartSection.style.display = 'none';
  }
}

// =============================================
//  CATEGORY NAVIGATION
// =============================================
function goToCategory(categoryId) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  if (!category) return;
  
  currentCategory = category;
  
  // If category has subcategories
  if (category.hasSubcategories) {
    if (categoryId === 'product') {
      // Featured Jewellery Collection - show gender selection
      openGenderSelectModal();
      return;
    } else if (categoryId === 'partyware') {
      // Party Ware Collection - show subcategories directly
      renderPartyWareSubcategories();
      document.getElementById('subcategorySelectModal').classList.add('open');
      return;
    } else if (categoryId === 'wedding') {
      // Wedding Collection - show wedding subcategories
      renderWeddingSubcategories();
      document.getElementById('subcategorySelectModal').classList.add('open');
      return;
    }
  }
  
  currentSubcategory = null;
  renderCategoryView();
  
  // Show category view section and hide products section
  document.getElementById('products').style.display = 'none';
  document.getElementById('categoryViewSection').style.display = 'block';
  document.getElementById('cartSection').style.display = 'none';
  
  // Update category title
  document.getElementById('categoryTitle').textContent = category.name;
  
  // Scroll to category section
  setTimeout(() => {
    document.getElementById('categoryViewSection').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function renderPartyWareSubcategories() {
  const container = document.getElementById('subcategoryList');
  const title = document.getElementById('subcategoryTitle');
  
  title.textContent = 'Party Ware Collection';
  
  const html = PARTYWARE_SUBCAT.map(subcat => `
    <div class="subcat-card" onclick="goToPartyWareSubcategory('${subcat.id}')">
      <div class="subcat-name">${subcat.name}</div>
      <div class="subcat-name-mr">${subcat.name_mr}</div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function goToPartyWareSubcategory(subcategoryId) {
  console.log('🔗 goToPartyWareSubcategory called with ID:', subcategoryId);
  currentCategory = CATEGORIES.find(c => c.id === 'partyware');
  currentSubcategory = subcategoryId;
  
  console.log('✅ Set currentCategory:', currentCategory.id);
  console.log('✅ Set currentSubcategory:', currentSubcategory);
  
  // Hide modals and show category view
  document.getElementById('subcategorySelectModal').classList.remove('open');
  document.getElementById('products').style.display = 'none';
  document.getElementById('categoryViewSection').style.display = 'block';
  document.getElementById('cartSection').style.display = 'none';
  
  // Update category title
  const subcat = PARTYWARE_SUBCAT.find(s => s.id === subcategoryId);
  if (subcat) {
    document.getElementById('categoryTitle').textContent = subcat.name + ' - ' + subcat.name_mr;
  }
  
  renderCategoryView();
  setTimeout(() => {
    document.getElementById('categoryViewSection').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function renderWeddingSubcategories() {
  const container = document.getElementById('subcategoryList');
  const title = document.getElementById('subcategoryTitle');
  
  title.textContent = 'Wedding Collection';
  
  const html = WEDDING_SUBCAT.map(subcat => `
    <div class="subcat-card" onclick="goToWeddingSubcategory('${subcat.id}')">
      <div class="subcat-name">${subcat.name}</div>
      <div class="subcat-name-mr">${subcat.name_mr}</div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function goToWeddingSubcategory(subcategoryId) {
  console.log('🔗 goToWeddingSubcategory called with ID:', subcategoryId);
  currentCategory = CATEGORIES.find(c => c.id === 'wedding');
  currentSubcategory = subcategoryId;
  
  console.log('✅ Set currentCategory:', currentCategory.id);
  console.log('✅ Set currentSubcategory:', currentSubcategory);
  
  // Hide modals and show category view
  document.getElementById('subcategorySelectModal').classList.remove('open');
  document.getElementById('products').style.display = 'none';
  document.getElementById('categoryViewSection').style.display = 'block';
  document.getElementById('cartSection').style.display = 'none';
  
  // Update category title
  const subcat = WEDDING_SUBCAT.find(s => s.id === subcategoryId);
  if (subcat) {
    document.getElementById('categoryTitle').textContent = subcat.name + ' - ' + subcat.name_mr;
  }
  
  renderCategoryView();
  setTimeout(() => {
    document.getElementById('categoryViewSection').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function goBackToHome() {
  currentCategory = null;
  currentSubcategory = null;
  renderCategories();
  
  // Show products section and hide category view
  document.getElementById('products').style.display = 'block';
  document.getElementById('categoryViewSection').style.display = 'none';
  document.getElementById('cartSection').style.display = 'none';
  
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function renderCategoryView() {
  if (!currentCategory) return;
  
  // DEBUG: Log current state
  console.log('=== RENDER CATEGORY VIEW ===');
  console.log('currentCategory:', currentCategory.id);
  console.log('currentSubcategory:', currentSubcategory);
  console.log('Total items in currentData:', currentData.length);
  console.log('All currentData:', currentData);
  
  // When showing Featured Collection with subcategory, filter by subcategory ID
  let products = [];
  let icon = '💎';
  
  if (currentCategory.id === 'product' && currentSubcategory) {
    // Filter products by the specific subcategory ID (man-ring, women-zumber, etc)
    products = currentData.filter(p => p.category === 'product' && p.subcategory === currentSubcategory);
    console.log('Featured filter - looking for category=product, subcategory=' + currentSubcategory);
    console.log('Found:', products.length, 'products');
    icon = PRODUCT_ICONS[0];
  } else if (currentCategory.id === 'wedding' && currentSubcategory) {
    // For wedding, show items for the specific subcategory
    products = currentData.filter(p => p.category === 'wedding' && p.subcategory === currentSubcategory);
    console.log('Wedding filter - looking for category=wedding, subcategory=' + currentSubcategory);
    console.log('Found:', products.length, 'products');
    icon = WEDDING_ICONS[0];
  } else if (currentCategory.id === 'partyware' && currentSubcategory) {
    // For partyware, show items for the specific subcategory
    products = currentData.filter(p => p.category === 'partyware' && p.subcategory === currentSubcategory);
    console.log('PartyWare filter - looking for category=partyware, subcategory=' + currentSubcategory);
    console.log('Found:', products.length, 'products');
    icon = '✨';
  } else {
    // Fallback (shouldn't happen now)
    products = currentData.filter(p => p.category === currentCategory.id);
    console.log('Fallback filter - looking for category=' + currentCategory.id);
    console.log('Found:', products.length, 'products');
  }
  
  const container = document.getElementById('categoryProductsContainer');
  
  if (products.length === 0) {
    const categoryName = currentCategory.id === 'wedding' ? 'Wedding Collection' : currentCategory.id === 'partyware' ? 'Party Ware Collection' : 'Featured Collection';
    console.warn('⚠️ NO PRODUCTS FOUND FOR:', categoryName, 'Subcategory:', currentSubcategory);
    container.innerHTML = `
      <div class="error-state">
        <div class="error-icon">${currentCategory.icon}</div>
        <h3>No Products Found</h3>
        <p>Check back soon for new items in ${categoryName}.</p>
      </div>
    `;
    return;
  }
  
  const cards = products.map((p, i) => {
    const phone = p.phone || CONFIG.PHONE_PRIMARY;
    const badge = p.badge || (currentCategory.id === 'wedding' || currentCategory.id === 'partyware') ? '' : '1GM Gold';
    const price = p.price || 'Call for Price';
    const productIcon = currentCategory.id === 'product' ? PRODUCT_ICONS[i % PRODUCT_ICONS.length] : currentCategory.id === 'wedding' ? WEDDING_ICONS[i % WEDDING_ICONS.length] : '✨';
    
    let imgHTML = '';
    if (p.image_url && p.image_url.startsWith('http')) {
      imgHTML = `<img src="${p.image_url}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
                 <div class="category-product-placeholder" style="display:none">${productIcon}<span>${p.name_mr || p.name}</span></div>`;
    } else {
      imgHTML = `<div class="category-product-placeholder">${productIcon}<span>${p.name_mr || p.name}</span></div>`;
    }
    
    return `
      <div class="category-product-card">
        <div class="category-product-img">${imgHTML}</div>
        ${badge ? `<span class="category-product-badge">${badge}</span>` : ''}
        <div class="category-product-info">
          <div class="category-product-name">${p.name}</div>
          ${p.name_mr ? `<div class="category-product-name-mr">${p.name_mr}</div>` : ''}
          <div class="category-product-price">${price}</div>
          <div class="category-product-actions">
            <button class="btn-view-product" onclick="openProductModal('${p.name}', '${currentCategory.id}')">👁️ View</button>
            <button class="btn-add-cart" onclick="addToCart('${p.name}', '${currentCategory.id}')">🛒 Add Order</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  container.innerHTML = `
    <div class="category-products-grid">${cards}</div>
  `;
}

// =============================================
//  RENDER CATEGORIES (HOME PAGE)
// =============================================
function renderCategories() {
  const productContainer = document.getElementById('products-container');
  const weddingContainer = document.getElementById('wedding-container');
  
  const categoryCards = CATEGORIES.map(cat => {
    const productCount = currentData.filter(p => p.category === cat.id).length;
    return `
      <div class="category-card reveal" onclick="goToCategory('${cat.id}')" style="cursor: pointer;">
        <div class="category-icon">${cat.icon}</div>
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${productCount} products</div>
        <div class="category-arrow">→</div>
      </div>
    `;
  }).join('');
  
  productContainer.innerHTML = `
    <div class="categories-grid">
      ${categoryCards}
    </div>
  `;
  
  weddingContainer.innerHTML = '';
  
  // Re-observe reveal elements
  if (productContainer) {
    productContainer.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }
}

// =============================================
//  GOOGLE SHEETS FETCH
// =============================================
function buildSheetURL(sheetId) {
  // Uses the public Google Sheets JSON export (no API key needed for public sheets)
  const name = encodeURIComponent(CONFIG.SHEET_NAME);
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${name}`;
}

function parseGVizResponse(raw) {
  // Google returns: google.visualization.Query.setResponse({...})
  const json = raw.replace(/^[^(]+\(/, '').replace(/\);?\s*$/, '');
  const data = JSON.parse(json);
  const cols = data.table.cols.map(c => c.label.trim().toLowerCase());
  return data.table.rows.map(row => {
    const obj = {};
    cols.forEach((col, i) => {
      obj[col] = row.c[i] ? (row.c[i].v !== null ? String(row.c[i].v).trim() : '') : '';
    });
    return obj;
  }).filter(r => r.category); // remove empty rows
}

async function fetchSheetData(sheetId) {
  const url = buildSheetURL(sheetId);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const raw = await res.text();
  return parseGVizResponse(raw);
}

// =============================================
//  RENDER PRODUCTS SLIDER
// =============================================
let swiperInstance = null;

function makeImageHTML(item, icons, fallbackIdx) {
  if (item.image_url && item.image_url.startsWith('http')) {
    return `<img src="${item.image_url}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
            <div class="product-placeholder" style="display:none">${icons[fallbackIdx % icons.length]}<span>${item.name_mr || item.name}</span></div>`;
  }
  return `<div class="product-placeholder">${icons[fallbackIdx % icons.length]}<span>${item.name_mr || item.name}</span></div>`;
}

function renderProducts(items) {
  const products = items.filter(i => i.category === 'product');
  const container = document.getElementById('products-container');

  if (products.length === 0) {
    container.innerHTML = `<div class="error-state"><div class="error-icon">🔍</div><h3>No Products Found</h3><p>Add rows with <code>category = product</code> in your Google Sheet.</p></div>`;
    return;
  }

  const slides = products.map((p, i) => {
    const phone = p.phone || CONFIG.PHONE_PRIMARY;
    const badge = p.badge || '1GM Gold';
    const price = p.price || 'Call for Price';
    return `
      <div class="swiper-slide">
        <div class="product-card" onclick="openProductModal('${p.name}', 'product')" style="cursor: pointer;">
          <div class="product-img-wrap">
            ${makeImageHTML(p, PRODUCT_ICONS, i)}
            <span class="product-badge">${badge}</span>
          </div>
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            ${p.name_mr ? `<div class="product-name-mr">${p.name_mr}</div>` : ''}
            <div class="product-price">${price}</div>
            <a href="tel:${phone}" class="btn-call" onclick="event.stopPropagation();">📞 Call for Price</a>
          </div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">${slides}</div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>`;

  if (swiperInstance) { swiperInstance.destroy(true, true); swiperInstance = null; }

  swiperInstance = new Swiper('.mySwiper', {
    slidesPerView: 1, spaceBetween: 24, loop: products.length > 3,
    autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });
}

// =============================================
//  RENDER WEDDING GRID
// =============================================
function renderWedding(items) {
  const wedding = items.filter(i => i.category === 'wedding');
  const container = document.getElementById('wedding-container');

  if (wedding.length === 0) {
    container.innerHTML = `<div class="error-state"><div class="error-icon">💍</div><h3>No Wedding Items Found</h3><p>Add rows with <code>category = wedding</code> in your Google Sheet.</p></div>`;
    return;
  }

  const cards = wedding.map((w, i) => {
    const icon = WEDDING_ICONS[i % WEDDING_ICONS.length];
    const imgHTML = (w.image_url && w.image_url.startsWith('http'))
      ? `<img src="${w.image_url}" alt="${w.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
         <div class="wedding-placeholder" style="display:none">${icon}<span>${w.name_mr || w.name}</span></div>`
      : `<div class="wedding-placeholder">${icon}<span>${w.name_mr || w.name}</span></div>`;

    return `
      <div class="wedding-item reveal" onclick="openProductModal('${w.name}', 'wedding')" style="cursor: pointer;">
        ${imgHTML}
        <div class="wedding-overlay"><div class="wedding-label">${w.name}</div></div>
        <div class="wedding-gold-border"></div>
      </div>`;
  }).join('');

  container.innerHTML = `<div class="wedding-grid">${cards}</div>`;

  // re-observe new reveal elements
  container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// =============================================
//  MAIN LOAD FUNCTION
// =============================================
async function loadData(sheetId, isFirstLoad = false) {
  setStatus('loading', 'Loading…');

  document.getElementById('products-container').innerHTML =
    `<div class="loading-state"><div class="spinner"></div><p>दागिने लोड होत आहेत...</p></div>`;

  try {
    const data = await fetchSheetData(sheetId);
    if (!data || data.length === 0) throw new Error('Empty sheet');

    CONFIG.SHEET_ID = sheetId;
    localStorage.setItem('sheetId', sheetId);
    currentData = data;
    
    // Save to localStorage
    saveLocalData();

    renderCategories();
    setStatus('connected', 'Sheet Connected');

    if (!isFirstLoad) closeModal();
  } catch (err) {
    console.warn('Sheet error:', err.message);
    setStatus('disconnected', 'Connect Sheet');

    // Show error with helpful message
    const errHTML = `
      <div class="error-state">
        <div class="error-icon">⚠️</div>
        <h3>Could not load Sheet</h3>
        <p>Make sure your Sheet ID is correct and the sheet is set to <strong>"Anyone with the link → Viewer"</strong>.<br/><br/>Showing demo data below.</p>
      </div>`;

    // Fall back to demo data after showing error briefly
    setTimeout(() => {
      currentData = DEMO_DATA;
      renderCategories();
    }, 1500);

    document.getElementById('products-container').innerHTML = errHTML;
  }
}

function loadDemoData() {
  currentData = DEMO_DATA;
  saveLocalData();
  renderCategories();
  setStatus('disconnected', 'Connect Sheet');
}

// =============================================
//  STATUS BADGE
// =============================================
function setStatus(state, text) {
  const el = document.getElementById('sheet-status');
  el.className = state;
  document.getElementById('status-text').textContent = text;
}

// =============================================
//  MODAL
// =============================================
function openModal() {
  document.getElementById('setupModal').classList.add('open');
  document.getElementById('modalSheetId').value = CONFIG.SHEET_ID || '';
}
function closeModal() {
  document.getElementById('setupModal').classList.remove('open');
}
function loadFromModal() {
  const id = document.getElementById('modalSheetId').value.trim();
  if (!id) { alert('Please enter a Sheet ID.'); return; }
  loadData(id);
}
document.getElementById('setupModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// =============================================
//  PRODUCT DETAIL MODAL
// =============================================
function openProductModal(productName, category) {
  // Find product in currentData
  const product = currentData.find(p => p.name === productName && p.category === category);
  
  if (!product) {
    alert('Product not found!');
    return;
  }
  
  const name = product.name;
  const nameMr = product.name_mr || '';
  const price = product.price || 'Call for Price';
  const badge = product.badge || '1GM Gold';
  const phone = product.phone || CONFIG.PHONE_PRIMARY;
  const imageUrl = product.image_url;
  
  // Populate modal
  document.getElementById('productDetailName').textContent = name;
  document.getElementById('productDetailNameMr').textContent = nameMr;
  document.getElementById('productDetailPrice').textContent = price;
  document.getElementById('productDetailBadge').textContent = badge;
  
  // Handle image
  const productImg = document.getElementById('productDetailImg');
  const productPlaceholder = document.getElementById('productDetailPlaceholder');
  
  if (imageUrl && imageUrl.startsWith('http')) {
    productImg.src = imageUrl;
    productImg.style.display = 'block';
    productPlaceholder.style.display = 'none';
  } else {
    productImg.style.display = 'none';
    const iconIndex = currentData.indexOf(product);
    const icon = PRODUCT_ICONS[iconIndex % PRODUCT_ICONS.length];
    productPlaceholder.innerHTML = `${icon}<span>${nameMr || name}</span>`;
    productPlaceholder.style.display = 'flex';
  }
  
  // Set contact links
  document.getElementById('productDetailCall').href = `tel:${phone}`;
  document.getElementById('productDetailWhatsapp').href = `https://wa.me/${phone}?text=नमस्कार%2C%20मला%20${encodeURIComponent(name)}%20बद्दल%20माहिती%20हवी%20आहे.`;
  
  // Open modal
  document.getElementById('productModal').classList.add('open');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
}

document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeProductModal();
});

// =============================================
//  DARK MODE
// =============================================
const darkToggle = document.getElementById('darkToggle');
function applyDark(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  darkToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}
const saved = localStorage.getItem('darkMode');
if (saved === '1') applyDark(true);
else if (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches) applyDark(true);
darkToggle.addEventListener('click', () => applyDark(!document.body.classList.contains('dark-mode')));

// =============================================
//  HAMBURGER
// =============================================
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }

// =============================================
//  SCROLL REVEAL
// =============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger highlight cards
new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.highlight-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 120);
      });
    }
  });
}, { threshold: 0.1 }).observe(document.querySelector('.highlights-grid'));

// ===== BACK TO TOP =====
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 400));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// =============================================
//  ADMIN AUTHENTICATION & PANEL
// =============================================
const ADMIN_PASSWORD = 'admin123'; // Simple password - change for production
let adminData = JSON.parse(localStorage.getItem('adminProducts')) || null;
let isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === '1';
let currentData = DEMO_DATA; // Default to demo

function openAdminLogin() {
  document.getElementById('adminLoginModal').classList.add('open');
  document.getElementById('adminPassword').value = '';
  document.getElementById('adminPassword').focus();
}

function closeAdminLogin() {
  document.getElementById('adminLoginModal').classList.remove('open');
}

function verifyAdminPassword() {
  const password = document.getElementById('adminPassword').value;
  if (password === ADMIN_PASSWORD) {
    isAdminLoggedIn = true;
    localStorage.setItem('adminLoggedIn', '1');
    updateOwnerUIState();
    closeAdminLogin();
    openAdminPanel();
  } else {
    alert('❌ Invalid password!');
    document.getElementById('adminPassword').value = '';
  }
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  localStorage.setItem('adminLoggedIn', '0');
  document.getElementById('adminPanel').classList.remove('open');
  updateOwnerUIState();
}

function initializeOwnerMode() {
  // Check if admin was previously logged in
  if (isAdminLoggedIn) {
    updateOwnerUIState();
  }
}

function updateOwnerUIState() {
  const adminBtn = document.getElementById('adminDoorBtn');
  const ownerIndicator = document.getElementById('ownerIndicator');
  
  if (isAdminLoggedIn) {
    // Show admin button and indicator when logged in
    if (adminBtn) adminBtn.classList.add('visible');
    if (ownerIndicator) ownerIndicator.style.display = 'inline-block';
  } else {
    // Hide admin button when logged out
    if (adminBtn) adminBtn.classList.remove('visible');
    if (ownerIndicator) ownerIndicator.style.display = 'none';
  }
}

function showOwnerAccessModal() {
  // If already logged in, just show the admin panel
  if (isAdminLoggedIn) {
    openAdminPanel();
    return;
  }
  
  // Otherwise show the login modal (same as admin button)
  openAdminLogin();
}

function openAdminPanel() {
  document.getElementById('adminPanel').classList.add('open');
  loadAdminSheetStatus();
  renderAdminProducts();
  renderAdminWedding();
  renderAdminPartyware();
  loadAdminSettings();
}

function switchAdminTab(tab) {
  // Hide all tabs
  document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(el => el.classList.remove('active'));
  
  // Show selected tab
  const tabId = 'admin' + tab.charAt(0).toUpperCase() + tab.slice(1);
  const tabElement = document.getElementById(tabId);
  if (tabElement) {
    tabElement.classList.add('active');
  }
  document.querySelector(`[onclick="switchAdminTab('${tab}')"]`).classList.add('active');
}

function renderAdminProducts() {
  const products = currentData.filter(i => i.category === 'product');
  const container = document.getElementById('adminProductsList');
  
  if (products.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">No products yet. Click "Add Featured Product" to get started.</p>';
    return;
  }
  
  const html = products.map((p, i) => `
    <div class="admin-product-card">
      <div class="admin-product-name">${p.name}</div>
      ${p.name_mr ? `<div class="admin-product-name-mr">${p.name_mr}</div>` : ''}
      ${p.subcategory ? `<div style="font-size: 0.8rem; color: var(--gold); margin: 4px 0;">${getCategoryName(p.subcategory)}</div>` : ''}
      <div class="admin-product-price">${p.price || 'Call for Price'}</div>
      <div class="admin-product-badge" style="font-size: 0.8rem; color: var(--gold); margin: 8px 0;">${p.badge || '1GM Gold'}</div>
      <div class="admin-product-actions">
        <button class="btn-edit-product" onclick="editProduct('${p.name}', 'product')">✏️ Edit</button>
        <button class="btn-delete-product" onclick="deleteProduct('${p.name}', 'product')">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function renderAdminWedding() {
  const wedding = currentData.filter(i => i.category === 'wedding');
  const container = document.getElementById('adminWeddingList');
  
  if (wedding.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">No wedding items yet. Click "Add Wedding Item" to get started.</p>';
    return;
  }
  
  const html = wedding.map((w, i) => `
    <div class="admin-product-card">
      <div class="admin-product-name">${w.name}</div>
      ${w.name_mr ? `<div class="admin-product-name-mr">${w.name_mr}</div>` : ''}
      ${w.subcategory ? `<div style="font-size: 0.8rem; color: var(--gold); margin: 4px 0;">${getCategoryName(w.subcategory)}</div>` : ''}
      <div class="admin-product-actions">
        <button class="btn-edit-product" onclick="editProduct('${w.name}', 'wedding')">✏️ Edit</button>
        <button class="btn-delete-product" onclick="deleteProduct('${w.name}', 'wedding')">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function renderAdminPartyware() {
  const partyware = currentData.filter(i => i.category === 'partyware');
  const container = document.getElementById('adminPartywaveList');
  
  if (partyware.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">No party ware items yet. Click "Add Party Ware Item" to get started.</p>';
    return;
  }
  
  const html = partyware.map((p, i) => `
    <div class="admin-product-card">
      <div class="admin-product-name">${p.name}</div>
      ${p.name_mr ? `<div class="admin-product-name-mr">${p.name_mr}</div>` : ''}
      ${p.subcategory ? `<div style="font-size: 0.8rem; color: var(--gold); margin: 4px 0;">${getCategoryName(p.subcategory)}</div>` : ''}
      <div class="admin-product-actions">
        <button class="btn-edit-product" onclick="editProduct('${p.name}', 'partyware')">✏️ Edit</button>
        <button class="btn-delete-product" onclick="deleteProduct('${p.name}', 'partyware')">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function getCategoryName(categoryId) {
  let allCategories = [...MAN_SUBCAT, ...WOMEN_SUBCAT, ...WEDDING_SUBCAT, ...PARTYWARE_SUBCAT];
  const cat = allCategories.find(c => c.id === categoryId);
  return cat ? cat.name : categoryId;
}

function showDebugProductsData() {
  const allProducts = currentData;
  
  if (allProducts.length === 0) {
    alert('📦 No products found in the database.\n\nClick "Add Product" button to add your first item.');
    return;
  }
  
  // Group products by category
  const grouped = {};
  allProducts.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });
  
  let debugInfo = '🐛 DATABASE DEBUG INFO\n\n';
  debugInfo += `Total Products: ${allProducts.length}\n\n`;
  
  Object.keys(grouped).forEach(cat => {
    debugInfo += `📂 ${cat.toUpperCase()} (${grouped[cat].length} items)\n`;
    grouped[cat].forEach((p, i) => {
      debugInfo += `  ${i+1}. ${p.name}\n`;
      debugInfo += `     Subcategory: ${p.subcategory || 'N/A'}\n`;
      debugInfo += `     Price: ${p.price || 'Not Set'}\n`;
    });
    debugInfo += '\n';
  });
  
  // Copy to clipboard and show
  console.log('Full Product Data:', allProducts);
  alert(debugInfo + '\n✅ Full data also printed to browser console (F12 > Console tab)');
}

function openAddCategoryModal(category) {
  document.getElementById('productEditId').value = '';
  document.getElementById('productEditCategory').value = category;
  document.getElementById('productEditSubcategory').value = '';
  
  let title = 'Add New Product';
  if (category === 'wedding') {
    title = 'Add Wedding Item';
  } else if (category === 'partyware') {
    title = 'Add Party Ware Item';
  }
  document.getElementById('productModalTitle').textContent = title;
  
  document.getElementById('productEditName').value = '';
  document.getElementById('productEditNameMr').value = '';
  document.getElementById('productEditPrice').value = '';
  document.getElementById('productEditBadge').value = category === 'product' ? '1GM Gold' : '';
  document.getElementById('productEditImage').value = '';
  document.getElementById('productEditPhone').value = '';
  
  updateProductSubcategories();
  document.getElementById('addProductModal').classList.add('open');
}

function updateProductSubcategories() {
  const category = document.getElementById('productEditCategory').value;
  const subcatSelect = document.getElementById('productEditSubcategory');
  subcatSelect.innerHTML = '<option value="">Select Subcategory</option>';
  
  let categories = [];
  
  if (category === 'product') {
    categories = MAN_SUBCAT.concat(WOMEN_SUBCAT).map(s => ({
      id: s.id,
      name: s.name
    }));
  } else if (category === 'wedding') {
    categories = WEDDING_SUBCAT.map(s => ({
      id: s.id,
      name: s.name
    }));
  } else if (category === 'partyware') {
    categories = PARTYWARE_SUBCAT.map(s => ({
      id: s.id,
      name: s.name
    }));
  }
  
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = cat.name;
    subcatSelect.appendChild(option);
  });
}

// Keep old functions for backward compatibility
function openAddProductModal() {
  openAddCategoryModal('product');
}

function openAddWeddingModal() {
  openAddCategoryModal('wedding');
}

function editProduct(productName, category) {
  const product = currentData.find(i => i.name === productName && i.category === category);
  if (!product) return;
  
  let title = 'Edit Product';
  if (category === 'wedding') {
    title = 'Edit Wedding Item';
  } else if (category === 'partyware') {
    title = 'Edit Party Ware Item';
  }

  document.getElementById('productEditId').value = productName;
  document.getElementById('productEditCategory').value = category;
  document.getElementById('productModalTitle').textContent = title;
  document.getElementById('productEditName').value = product.name;
  document.getElementById('productEditNameMr').value = product.name_mr || '';
  document.getElementById('productEditPrice').value = product.price || '';
  document.getElementById('productEditBadge').value = product.badge || (category === 'product' ? '1GM Gold' : '');
  document.getElementById('productEditImage').value = product.image_url || '';
  document.getElementById('productEditPhone').value = product.phone || '';
  
  updateProductSubcategories();
  document.getElementById('productEditSubcategory').value = product.subcategory || '';
  
  document.getElementById('addProductModal').classList.add('open');
}

function saveProductEdit() {
  const oldName = document.getElementById('productEditId').value;
  const category = document.getElementById('productEditCategory').value;
  const subcategory = document.getElementById('productEditSubcategory').value;
  const name = document.getElementById('productEditName').value;
  const nameMr = document.getElementById('productEditNameMr').value;
  const price = document.getElementById('productEditPrice').value;
  const badge = document.getElementById('productEditBadge').value;
  const imageUrl = document.getElementById('productEditImage').value;
  const phone = document.getElementById('productEditPhone').value;
  
  if (!name) {
    alert('Product name is required!');
    return;
  }
  
  if (!subcategory) {
    alert('Please select a subcategory!');
    return;
  }
  
  const productData = { category, subcategory, name, name_mr: nameMr, price, badge, image_url: imageUrl, phone };
  
  if (oldName) {
    // Edit existing - find by old name
    const itemIndex = currentData.findIndex(i => i.name === oldName && i.category === category);
    if (itemIndex !== -1) {
      currentData[itemIndex] = productData;
      console.log('✏️ Product updated:', name, 'in', category);
    }
  } else {
    // Add new
    currentData.push(productData);
    console.log('✅ Product added:', name, 'in', category, 'under', subcategory);
  }
  
  // Save to localStorage
  saveLocalData();
  
  console.log('💾 Saved to localStorage. Total products:', currentData.length);
  
  renderCategories();
  renderAdminProducts();
  renderAdminWedding();
  renderAdminPartyware();
  
  closeAddProductModal();
  alert(`✅ Product "${name}" saved successfully!\n\nCategory: ${category}\nSubcategory: ${getCategoryName(subcategory)}\n\nTotal products: ${currentData.length}`);
}

function deleteProduct(productName, category) {
  if (confirm('Are you sure you want to delete this product?')) {
    const itemIndex = currentData.findIndex(i => i.name === productName && i.category === category);
    if (itemIndex !== -1) {
      currentData.splice(itemIndex, 1);
    }
    
    // Save to localStorage
    saveLocalData();
    
    renderCategories();
    renderAdminProducts();
    renderAdminWedding();
    renderAdminPartyware();
  }
}

function deleteWedding(index) {
  deleteProduct(index, 'wedding');
}

function closeAddProductModal() {
  document.getElementById('addProductModal').classList.remove('open');
}

function loadAdminSettings() {
  // Load from localStorage if available, otherwise use CONFIG defaults
  const settings = JSON.parse(localStorage.getItem('shopSettings')) || {};
  
  // Owner Information
  document.getElementById('settingOwnerName').value = settings.ownerName || CONFIG.OWNER_NAME;
  document.getElementById('settingOwnerEmail').value = settings.ownerEmail || CONFIG.OWNER_EMAIL;
  
  // Shop Details
  document.getElementById('settingShopName').value = settings.shopName || CONFIG.SHOP_NAME;
  document.getElementById('settingShopAddress').value = settings.shopAddress || CONFIG.SHOP_ADDRESS;
  document.getElementById('settingShopCity').value = settings.shopCity || CONFIG.SHOP_CITY;
  
  // Contact Details
  document.getElementById('settingPhonePrimary').value = settings.phonePrimary || CONFIG.PHONE_PRIMARY;
  document.getElementById('settingPhoneSecondary').value = settings.phoneSecondary || CONFIG.PHONE_SECONDARY;
  document.getElementById('settingShopEmail').value = settings.shopEmail || CONFIG.SHOP_EMAIL;
  
  // Shop Description
  document.getElementById('settingShopDesc').value = settings.shopDesc || CONFIG.SHOP_DESC;
  document.getElementById('settingShopHours').value = settings.shopHours || CONFIG.SHOP_HOURS;
}

function saveSettings() {
  // Gather all settings from form inputs
  const settings = {
    // Owner Information
    ownerName: document.getElementById('settingOwnerName').value,
    ownerEmail: document.getElementById('settingOwnerEmail').value,
    
    // Shop Details
    shopName: document.getElementById('settingShopName').value,
    shopAddress: document.getElementById('settingShopAddress').value,
    shopCity: document.getElementById('settingShopCity').value,
    
    // Contact Details
    phonePrimary: document.getElementById('settingPhonePrimary').value,
    phoneSecondary: document.getElementById('settingPhoneSecondary').value,
    shopEmail: document.getElementById('settingShopEmail').value,
    
    // Shop Description
    shopDesc: document.getElementById('settingShopDesc').value,
    shopHours: document.getElementById('settingShopHours').value,
  };
  
  // Validate required fields
  if (!settings.phonePrimary) {
    alert('⚠️ Please enter primary phone number');
    return;
  }
  
  // Update CONFIG for current session
  CONFIG.OWNER_NAME = settings.ownerName;
  CONFIG.OWNER_EMAIL = settings.ownerEmail;
  CONFIG.SHOP_NAME = settings.shopName;
  CONFIG.SHOP_ADDRESS = settings.shopAddress;
  CONFIG.SHOP_CITY = settings.shopCity;
  CONFIG.PHONE_PRIMARY = settings.phonePrimary;
  CONFIG.PHONE_SECONDARY = settings.phoneSecondary;
  CONFIG.SHOP_EMAIL = settings.shopEmail;
  CONFIG.SHOP_DESC = settings.shopDesc;
  CONFIG.SHOP_HOURS = settings.shopHours;
  
  // Save to localStorage for persistence
  localStorage.setItem('shopSettings', JSON.stringify(settings));
  
  // Update website display with new settings
  updateWebsiteDisplay();
  
  alert('✅ Shop settings saved successfully!');
}

// Update website display with CONFIG values
function updateWebsiteDisplay() {
  // Update Contact Section
  const ownerName = document.getElementById('contactOwnerName');
  if (ownerName) ownerName.textContent = CONFIG.OWNER_NAME;
  
  const contactLocation = document.getElementById('contactShopLocation');
  if (contactLocation) {
    const city = CONFIG.SHOP_CITY || CONFIG.SHOP_ADDRESS || 'Risod';
    contactLocation.textContent = '📍 ' + city;
  }
  
  // Update Contact Phone Numbers
  const contactPhones = document.getElementById('contactPhones');
  if (contactPhones) {
    contactPhones.innerHTML = `
      <a href="tel:${CONFIG.PHONE_PRIMARY}" class="btn-phone">📞 <span>+91 ${CONFIG.PHONE_PRIMARY}</span></a>
      <a href="tel:${CONFIG.PHONE_SECONDARY}" class="btn-phone">📞 <span>+91 ${CONFIG.PHONE_SECONDARY}</span></a>
    `;
  }
  
  // Update WhatsApp Numbers
  const contactWhatsapp = document.getElementById('contactWhatsapp');
  if (contactWhatsapp) {
    const msg = 'नमस्कार, मला दागिन्यांबद्दल माहिती हवी आहे.';
    const encodedMsg = encodeURIComponent(msg);
    contactWhatsapp.innerHTML = `
      <a href="https://wa.me/91${CONFIG.PHONE_PRIMARY}?text=${encodedMsg}" target="_blank" rel="noopener" class="btn-whatsapp">💬 <span>+91 ${CONFIG.PHONE_PRIMARY}</span></a>
      <a href="https://wa.me/91${CONFIG.PHONE_SECONDARY}?text=${encodedMsg}" target="_blank" rel="noopener" class="btn-whatsapp">💬 <span>+91 ${CONFIG.PHONE_SECONDARY}</span></a>
    `;
  }
  
  // Update Footer Shop Name
  const footerBrand = document.getElementById('footerShopName');
  if (footerBrand) footerBrand.textContent = CONFIG.SHOP_NAME;
  
  // Update Footer Copy
  const footerCopy = document.getElementById('footerCopy');
  if (footerCopy) {
    const year = new Date().getFullYear();
    const city = CONFIG.SHOP_CITY || 'Risod';
    footerCopy.innerHTML = `© ${year} ${CONFIG.SHOP_NAME}, ${city}. All rights reserved.<br/>Owner: ${CONFIG.OWNER_NAME}`;
  }
}

// =============================================
//  ADMIN GOOGLE SHEET FUNCTIONS
// =============================================
function loadAdminSheetStatus() {
  const sheetId = localStorage.getItem('sheetId') || CONFIG.SHEET_ID;
  const statusEl = document.getElementById('sheetStatus');
  
  if (sheetId) {
    document.getElementById('adminSheetId').value = sheetId;
    statusEl.innerHTML = `✅ <strong>Connected</strong><br/>Sheet ID: ${sheetId.substring(0, 20)}...`;
    statusEl.style.color = '#22c55e';
  } else {
    document.getElementById('adminSheetId').value = '';
    statusEl.innerHTML = '❌ Not connected';
    statusEl.style.color = 'var(--text-muted)';
  }
}

function connectAdminSheet() {
  const sheetId = document.getElementById('adminSheetId').value.trim();
  
  if (!sheetId) {
    alert('❌ Please enter a Sheet ID');
    return;
  }
  
  if (confirm('This will replace all current data with data from the Google Sheet. Continue?')) {
    loadData(sheetId, false);
    setTimeout(() => {
      loadAdminSheetStatus();
      renderAdminProducts();
      renderAdminWedding();
      alert('✅ Sheet connected successfully!');
    }, 1500);
  }
}

function refreshFromSheet() {
  const sheetId = localStorage.getItem('sheetId') || CONFIG.SHEET_ID;
  
  if (!sheetId) {
    alert('❌ No sheet connected. Please connect a sheet first.');
    return;
  }
  
  if (confirm('This will reload all data from your Google Sheet. Continue?')) {
    const statusEl = document.getElementById('sheetStatus');
    statusEl.innerHTML = '⏳ Loading...';
    
    loadData(sheetId, false);
    setTimeout(() => {
      loadAdminSheetStatus();
      renderAdminProducts();
      renderAdminWedding();
      alert('✅ Data refreshed successfully!');
    }, 1500);
  }
}

// =============================================
//  EXPORT & SHEET SYNC FUNCTIONS
// =============================================
function exportProductsForSheet() {
  if (currentData.length === 0) {
    alert('No products to export!');
    return;
  }
  
  // Create CSV format
  let csv = 'category,name,name_mr,price,image_url,badge,phone\n';
  
  currentData.forEach(item => {
    const row = [
      item.category || '',
      '"' + (item.name || '').replace(/"/g, '""') + '"',
      '"' + (item.name_mr || '').replace(/"/g, '""') + '"',
      '"' + (item.price || '').replace(/"/g, '""') + '"',
      item.image_url || '',
      item.badge || '',
      item.phone || CONFIG.PHONE_PRIMARY
    ];
    csv += row.join(',') + '\n';
  });
  
  // Download CSV
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'products_export.csv';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
  
  alert('✅ Products exported! You can now paste the data into your Google Sheet.');
}

function showAppsScriptSetup() {
  const setup = `
📋 GOOGLE APPS SCRIPT SETUP (Advanced)

To automatically sync admin-added products to your Google Sheet:

1. Open your Google Sheet
2. Click "Extensions" → "Apps Script"
3. Copy and paste this code:

---
const SHEET_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/useTrigger';

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add products to sheet
  data.forEach(item => {
    sheet.appendRow([
      item.category,
      item.name,
      item.name_mr,
      item.price,
      item.image_url,
      item.badge,
      item.phone
    ]);
  });
  
  return ContentService.createTextOutput('OK');
}
---

4. Click "Deploy" → "New deployment" (gear icon)
5. Choose type: "Web app"
6. Execute as: Your email
7. Who has access: "Anyone"
8. Copy the deployment URL
9. Save the Web App URL in your admin settings

For now, use the "Download Products as CSV" button to export and paste into your sheet manually.
  `;
  
  alert(setup);
}

function showAppsScriptInfo() {
  const info = `
📌 CURRENT SETUP:

✅ Admin Panel → localStorage (Products saved locally)
✅ Google Sheet → Read data from your sheet
✅ Product Modal → Shows product information to customers
✅ Persistence → Data saved across browser sessions

❌ Automatic Google Sheet Write (requires Apps Script)

FOR NOW:
1. Add products in Admin panel ✓
2. They save to your website ✓
3. Use "Download Products as CSV" to backup/export
4. Share the CSV with your team

FUTURE:
Set up Google Apps Script for automatic sync.
  `;
  
  alert(info);
}

document.getElementById('adminLoginModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeAdminLogin();
});

document.getElementById('addProductModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeAddProductModal();
});

// Allow Enter key to submit admin password
document.addEventListener('DOMContentLoaded', () => {
  const adminPasswordInput = document.getElementById('adminPassword');
  if (adminPasswordInput) {
    adminPasswordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') verifyAdminPassword();
    });
  }
});

// =============================================
//  LOCAL STORAGE FUNCTIONS
// =============================================
function saveLocalData() {
  localStorage.setItem('adminProductData', JSON.stringify(currentData));
}

function loadLocalData() {
  const saved = localStorage.getItem('adminProductData');
  if (saved) {
    try {
      currentData = JSON.parse(saved);
      return true;
    } catch (e) {
      console.error('Error loading local data:', e);
      return false;
    }
  }
  return false;
}

// =============================================
//  INIT — load saved sheet or show demo + modal
// =============================================
(function init() {
  // Load shop settings from localStorage and update CONFIG
  const settings = JSON.parse(localStorage.getItem('shopSettings')) || {};
  if (settings.phonePrimary) CONFIG.PHONE_PRIMARY = settings.phonePrimary;
  if (settings.phoneSecondary) CONFIG.PHONE_SECONDARY = settings.phoneSecondary;
  if (settings.ownerName) CONFIG.OWNER_NAME = settings.ownerName;
  if (settings.shopName) CONFIG.SHOP_NAME = settings.shopName;
  if (settings.shopEmail) CONFIG.SHOP_EMAIL = settings.shopEmail;
  if (settings.shopDesc) CONFIG.SHOP_DESC = settings.shopDesc;
  if (settings.shopAddress) CONFIG.SHOP_ADDRESS = settings.shopAddress;
  if (settings.shopCity) CONFIG.SHOP_CITY = settings.shopCity;
  
  // Update website display with loaded settings
  updateWebsiteDisplay();
  
  // First check if there's local data from admin edits
  if (loadLocalData()) {
    renderCategories();
    setStatus('connected', 'Local Data');
    updateCartCount();
    return;
  }
  
  // Otherwise try to load from saved sheet
  const savedId = localStorage.getItem('sheetId');
  if (savedId) {
    loadData(savedId, true);
  } else {
    loadDemoData();
    // Show modal after a short delay so the page renders first
    setTimeout(() => openModal(), 1200);
  }
  
  updateCartCount();
})();
