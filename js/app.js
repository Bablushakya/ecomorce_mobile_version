/**
 * Guilt Free Cravings — Mobile-First E-Commerce App
 * Optimized for quick product discovery, low-friction purchasing, & complete User Profile
 * 
 * Architecture:
 * - Cart state management & variant system
 * - Variant selection bottom sheet
 * - Complete User Profile management (Orders, Addresses, Dietary prefs, Craving points)
 * - Bottom navigation
 * - Buy Now direct checkout flow
 * - Micro-interactions & animations
 */

// =============================================================================
// PRODUCT DATA CATALOGUE
// =============================================================================

const PRODUCTS = {
  p1: {
    id: 'p1',
    name: 'Dry Fruit Sattu Laddoo',
    desc: 'Roasted sattu packed with real dry fruits, desi ghee & iron-rich jaggery.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwEK9WgU2M8R9caHlsZT-mnEmugJMTNDNSN7YP3rxQpMmd2dFAACQdFL9HllVk8cRHqYpo102dkWFajIHNkKq71dFTLNvxPFuPF-XM8j5tG2XzTVPc2WjS3eq0tuuKQJPRBpv9-0sfVVRrupXFcVnEjvaAtb2RWRJlYBOGVZ8H9zAlzcmj3azK8QkS4cLNWNn3YyDMNhTZooRtSLhALT1EXfWQd1QLI0w1ngTT_yswYRzCPfHxiAT_Q',
    variants: [
      { id: 'p1-250', label: '250g', price: 250 },
      { id: 'p1-500', label: '500g', price: 500 },
    ],
    rating: 4.9,
    category: ['Dry Fruit', 'Energy', 'Sattu'],
    tags: ['sattu', 'laddoo', 'dry fruit', 'energy', 'healthy', 'sugar free'],
  },
  p2: {
    id: 'p2',
    name: 'Besan Badam Laddoo',
    desc: 'Slow-roasted besan with almonds, desi ghee & jaggery. Unmistakable aroma.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhV4sxwYhe2gAYghT2ytsnuaCdcqClD1QgwKELJSNK5ldAUk82PmaK1pw1_9szRTFHdZNCCqLuKPJuQYAZRGXlgTxAn28HSJq81EcSOFdNyUHfPKAjqn0hLL3zIz7-vmM3zD0Inhy0HK3Kjej1eHLJZG6_stEbEWe17z0lX4pVZK3Z3PlDCpjJ_iT6qRLov7n3h8J93zindN89-WUXVLmoxS092jMaNlaRhfiA2GbQjyB3bfHONl5uxg',
    variants: [
      { id: 'p2-250', label: '250g', price: 215 },
      { id: 'p2-500', label: '500g', price: 430 },
    ],
    rating: 4.8,
    category: ['Besan', 'Badam'],
    tags: ['besan', 'badam', 'almond', 'laddoo', 'ghee', 'healthy', 'sugar free'],
  },
  p3: {
    id: 'p3',
    name: 'Dates Delight Laddoo',
    desc: 'Dates, crushed nuts, roasted seeds & desi ghee. Natural energy that lasts.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRws8_rbcddZpSb45zpN7m9EyoKOe-sX-8T-W6RiKyc-89_2_cGZWipxTgnEQ7CrLBuVT4BXT86ZKv2nCg9j1fXzDvhjp0KorPnwf_a1iQpK2XLv140OPaenj5znkho8CcRZ_1cNaZpU4pDmsp8uMXlGoyScgQ3OhVy5FNLLUxcZZnesyErMCJY2dYLlnI7PsxPCkJdLqh1ExswgOO16lBGxfK4xOZjeez99NCf7poWSD6hX3shl8P_w',
    variants: [
      { id: 'p3-250', label: '250g', price: 315 },
      { id: 'p3-500', label: '500g', price: 630 },
    ],
    rating: 4.9,
    category: ['Dates', 'Energy'],
    tags: ['dates', 'laddoo', 'energy', 'nuts', 'ghee', 'healthy', 'sugar free'],
  },
  p4: {
    id: 'p4',
    name: 'Sattu Laddoo',
    desc: 'Traditional sattu with desi ghee & jaggery. Natural energy, no shortcuts.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwEK9WgU2M8R9caHlsZT-mnEmugJMTNDNSN7YP3rxQpMmd2dFAACQdFL9HllVk8cRHqYpo102dkWFajIHNkKq71dFTLNvxPFuPF-XM8j5tG2XzTVPc2WjS3eq0tuuKQJPRBpv9-0sfVVRrupXFcVnEjvaAtb2RWRJlYBOGVZ8H9zAlzcmj3azK8QkS4cLNWNn3YyDMNhTZooRtSLhALT1EXfWQd1QLI0w1ngTT_yswYRzCPfHxiAT_Q',
    variants: [
      { id: 'p4-250', label: '250g', price: 165 },
      { id: 'p4-500', label: '500g', price: 330 },
    ],
    rating: 4.7,
    category: ['Energy', 'Sattu'],
    tags: ['sattu', 'laddoo', 'ghee', 'jaggery', 'energy', 'healthy', 'classic'],
  },
  p5: {
    id: 'p5',
    name: 'Dry Fruit Sattu Laddoo (Glass Jar)',
    desc: 'Same great Dry Fruit Sattu Laddoo — now in a beautiful, reusable glass jar.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwEK9WgU2M8R9caHlsZT-mnEmugJMTNDNSN7YP3rxQpMmd2dFAACQdFL9HllVk8cRHqYpo102dkWFajIHNkKq71dFTLNvxPFuPF-XM8j5tG2XzTVPc2WjS3eq0tuuKQJPRBpv9-0sfVVRrupXFcVnEjvaAtb2RWRJlYBOGVZ8H9zAlzcmj3azK8QkS4cLNWNn3YyDMNhTZooRtSLhALT1EXfWQd1QLI0w1ngTT_yswYRzCPfHxiAT_Q',
    variants: [
      { id: 'p5-350', label: '350g Jar', price: 350 },
      { id: 'p5-500', label: '500g Jar', price: 500 },
    ],
    rating: 4.9,
    category: ['Glass Jar', 'Dry Fruit'],
    tags: ['glass jar', 'sattu', 'laddoo', 'dry fruit', 'gifting'],
  },
  p6: {
    id: 'p6',
    name: 'Dates Delight Laddoo (Glass Jar)',
    desc: 'Dates Delight in a premium reusable glass jar. Perfect for gifting.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRws8_rbcddZpSb45zpN7m9EyoKOe-sX-8T-W6RiKyc-89_2_cGZWipxTgnEQ7CrLBuVT4BXT86ZKv2nCg9j1fXzDvhjp0KorPnwf_a1iQpK2XLv140OPaenj5znkho8CcRZ_1cNaZpU4pDmsp8uMXlGoyScgQ3OhVy5FNLLUxcZZnesyErMCJY2dYLlnI7PsxPCkJdLqh1ExswgOO16lBGxfK4xOZjeez99NCf7poWSD6hX3shl8P_w',
    variants: [
      { id: 'p6-350', label: '350g Jar', price: 500 },
      { id: 'p6-700', label: '700g Jar', price: 700 },
    ],
    rating: 4.8,
    category: ['Glass Jar', 'Dates'],
    tags: ['glass jar', 'dates', 'laddoo', 'gifting'],
  },
};

// =============================================================================
// CART STATE
// =============================================================================

/**
 * Cart object — keyed by variant ID
 * Format: { variantId: { id, productId, name, variantLabel, price, qty, img } }
 */
let cart = {};

// =============================================================================
// VARIANT SHEET STATE
// =============================================================================

let activeSheet = {
  productId: null,
  selectedVariant: null,
  qty: 1,
  isBuyNow: false,
};

// =============================================================================
// USER PROFILE STATE (with LocalStorage Sync)
// =============================================================================

const DEFAULT_PROFILE = {
  name: 'Priya Sharma',
  phone: '+91 98765 43210',
  email: 'priya.sharma@example.com',
  city: 'New Delhi',
  memberTier: 'Gold Member',
  points: 350,
  savedAddresses: [
    {
      id: 'addr-1',
      type: 'Home',
      isDefault: true,
      address: 'Flat 402, Sunshine Heights, Greater Kailash-2',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110048',
      phone: '+91 98765 43210'
    },
    {
      id: 'addr-2',
      type: 'Work',
      isDefault: false,
      address: 'Tower B, 5th Floor, Cyber City, Phase 2',
      city: 'Gurugram',
      state: 'Haryana',
      pincode: '122002',
      phone: '+91 98765 43210'
    }
  ],
  pastOrders: [
    {
      id: 'GFC-9042',
      date: 'Today, 2:15 PM',
      status: 'In Transit',
      statusColor: 'amber',
      items: [
        { name: 'Dry Fruit Sattu Laddoo (500g)', qty: 2, price: 500, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwEK9WgU2M8R9caHlsZT-mnEmugJMTNDNSN7YP3rxQpMmd2dFAACQdFL9HllVk8cRHqYpo102dkWFajIHNkKq71dFTLNvxPFuPF-XM8j5tG2XzTVPc2WjS3eq0tuuKQJPRBpv9-0sfVVRrupXFcVnEjvaAtb2RWRJlYBOGVZ8H9zAlzcmj3azK8QkS4cLNWNn3YyDMNhTZooRtSLhALT1EXfWQd1QLI0w1ngTT_yswYRzCPfHxiAT_Q' }
      ],
      total: 1000,
      payment: 'UPI Payment'
    },
    {
      id: 'GFC-8812',
      date: '08 Sep 2026',
      status: 'Delivered',
      statusColor: 'green',
      items: [
        { name: 'Dates Delight Laddoo (500g)', qty: 1, price: 630, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRws8_rbcddZpSb45zpN7m9EyoKOe-sX-8T-W6RiKyc-89_2_cGZWipxTgnEQ7CrLBuVT4BXT86ZKv2nCg9j1fXzDvhjp0KorPnwf_a1iQpK2XLv140OPaenj5znkho8CcRZ_1cNaZpU4pDmsp8uMXlGoyScgQ3OhVy5FNLLUxcZZnesyErMCJY2dYLlnI7PsxPCkJdLqh1ExswgOO16lBGxfK4xOZjeez99NCf7poWSD6hX3shl8P_w' },
        { name: 'Besan Badam Laddoo (250g)', qty: 1, price: 215, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhV4sxwYhe2gAYghT2ytsnuaCdcqClD1QgwKELJSNK5ldAUk82PmaK1pw1_9szRTFHdZNCCqLuKPJuQYAZRGXlgTxAn28HSJq81EcSOFdNyUHfPKAjqn0hLL3zIz7-vmM3zD0Inhy0HK3Kjej1eHLJZG6_stEbEWe17z0lX4pVZK3Z3PlDCpjJ_iT6qRLov7n3h8J93zindN89-WUXVLmoxS092jMaNlaRhfiA2GbQjyB3bfHONl5uxg' }
      ],
      total: 845,
      payment: 'Cash on Delivery'
    }
  ],
  dietaryPreferences: {
    sugarFree: true,
    desiGhee: true,
    jaggeryOnly: true,
    highProtein: true,
    diabeticFriendly: false,
    glutenConscious: false
  },
  notifications: {
    whatsapp: true,
    promotions: false
  }
};

let userProfile = loadUserProfile();

function loadUserProfile() {
  try {
    const saved = localStorage.getItem('gfc_user_profile');
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Error loading profile from localStorage', e);
  }
  return DEFAULT_PROFILE;
}

function saveUserProfile() {
  try {
    localStorage.setItem('gfc_user_profile', JSON.stringify(userProfile));
  } catch (e) {
    console.error('Error saving profile to localStorage', e);
  }
}

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCartUI();
  renderAllProductButtons();
  updateProfileHeaderBadges();
  console.log('Guilt Free Cravings — Mobile App Initialized (Profile Active)');
});

// =============================================================================
// SCROLL & NAVIGATION HELPERS
// =============================================================================

/**
 * Scroll smoothly to the products section
 */
function scrollToProducts() {
  const el = document.getElementById('productsSection');
  if (el) {
    const headerH = document.getElementById('mainHeader')?.offsetHeight || 60;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/**
 * Select a bottom nav item and highlight it
 * @param {string} key - 'home'|'products'|'cart'|'profile'|'account'
 */
function bottomNavSelect(key) {
  document.querySelectorAll('.bnav-btn').forEach(btn => {
    btn.classList.remove('text-brand-amber');
    btn.classList.add('text-brand-muted');
  });
  const target = document.getElementById(`bnav-${key}`);
  if (target) {
    target.classList.remove('text-brand-muted');
    target.classList.add('text-brand-amber');
  }
}

// =============================================================================
// VARIANT BOTTOM SHEET LOGIC
// =============================================================================

/**
 * Open the variant selection bottom sheet for a product
 * @param {string} productId - Key in PRODUCTS object (e.g. 'p1')
 * @param {boolean} isBuyNow - If true, primary CTA will trigger instant checkout
 */
function openVariantSheet(productId, isBuyNow = false) {
  const product = PRODUCTS[productId];
  if (!product) return;

  activeSheet.productId = productId;
  activeSheet.selectedVariant = product.variants[0]; // Default to first variant
  activeSheet.qty = 1;
  activeSheet.isBuyNow = isBuyNow;

  // Populate sheet content
  const imgEl = document.getElementById('sheetProductImg');
  const nameEl = document.getElementById('sheetProductName');
  const descEl = document.getElementById('sheetProductDesc');
  const variantOptsEl = document.getElementById('variantOptions');
  const qtyDisplay = document.getElementById('sheetQtyDisplay');
  const totalPriceEl = document.getElementById('sheetTotalPrice');

  imgEl.src = product.img;
  imgEl.alt = product.name;
  nameEl.textContent = product.name;
  descEl.textContent = product.desc;
  qtyDisplay.textContent = '1';

  // Render variant chips
  variantOptsEl.innerHTML = product.variants.map((v, idx) => `
    <button onclick="selectSheetVariant('${v.id}')"
            id="vchip-${v.id}"
            class="variant-chip flex-1 min-w-[120px] p-3 rounded-2xl border ${idx === 0 ? 'selected bg-brand-dark text-white border-brand-dark' : 'bg-white border-brand-border text-brand-dark'} flex flex-col items-start justify-center transition-all active:scale-95 shadow-sm">
      <span class="text-xs font-bold leading-tight">${v.label}</span>
      <span class="variant-price text-sm font-extrabold mt-0.5 ${idx === 0 ? 'text-brand-gold' : 'text-brand-amber'}">₹${v.price}</span>
    </button>
  `).join('');

  updateSheetPrice();

  // Show bottom sheet
  const sheet = document.getElementById('variantSheet');
  const content = document.getElementById('variantSheetContent');
  sheet.classList.remove('pointer-events-none', 'opacity-0');
  sheet.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  content.classList.add('translate-y-0');
  document.body.style.overflow = 'hidden';
}

/**
 * Select a specific variant inside the bottom sheet
 * @param {string} variantId 
 */
function selectSheetVariant(variantId) {
  const product = PRODUCTS[activeSheet.productId];
  const variant = product.variants.find(v => v.id === variantId);
  if (!variant) return;

  activeSheet.selectedVariant = variant;

  // Update chip styling
  product.variants.forEach(v => {
    const chip = document.getElementById(`vchip-${v.id}`);
    if (chip) {
      if (v.id === variantId) {
        chip.className = 'variant-chip flex-1 min-w-[120px] p-3 rounded-2xl border selected bg-brand-dark text-white border-brand-dark flex flex-col items-start justify-center transition-all active:scale-95 shadow-sm';
        const priceSpan = chip.querySelector('.variant-price');
        if (priceSpan) priceSpan.className = 'variant-price text-sm font-extrabold mt-0.5 text-brand-gold';
      } else {
        chip.className = 'variant-chip flex-1 min-w-[120px] p-3 rounded-2xl border bg-white border-brand-border text-brand-dark flex flex-col items-start justify-center transition-all active:scale-95 shadow-sm';
        const priceSpan = chip.querySelector('.variant-price');
        if (priceSpan) priceSpan.className = 'variant-price text-sm font-extrabold mt-0.5 text-brand-amber';
      }
    }
  });

  updateSheetPrice();
}

/**
 * Change quantity in bottom sheet
 * @param {number} delta - +1 or -1
 */
function changeSheetQty(delta) {
  activeSheet.qty = Math.max(1, Math.min(20, activeSheet.qty + delta));
  document.getElementById('sheetQtyDisplay').textContent = activeSheet.qty;
  updateSheetPrice();
}

/**
 * Recalculate and update the total price displayed in bottom sheet
 */
function updateSheetPrice() {
  if (!activeSheet.selectedVariant) return;
  const total = activeSheet.selectedVariant.price * activeSheet.qty;
  const el = document.getElementById('sheetTotalPrice');
  if (el) el.textContent = `₹${total}`;
}

/**
 * Close the variant bottom sheet
 */
function closeVariantSheet() {
  const sheet = document.getElementById('variantSheet');
  const content = document.getElementById('variantSheetContent');
  if (content) {
    content.classList.remove('translate-y-0');
    content.classList.add('translate-y-full');
  }
  setTimeout(() => {
    if (sheet) {
      sheet.classList.remove('pointer-events-auto', 'opacity-100');
      sheet.classList.add('pointer-events-none', 'opacity-0');
    }
    document.body.style.overflow = '';
  }, 250);
}

/**
 * Confirm addition from variant sheet to cart
 */
function addFromSheet() {
  if (!activeSheet.productId || !activeSheet.selectedVariant) return;
  const product = PRODUCTS[activeSheet.productId];
  const variant = activeSheet.selectedVariant;

  addToCart(
    variant.id,
    product.id,
    product.name,
    variant.label,
    variant.price,
    product.img,
    activeSheet.qty
  );

  // Micro-interaction on sheet Add button
  const addBtn = document.getElementById('sheetAddBtn');
  if (addBtn) {
    const origText = addBtn.innerHTML;
    addBtn.innerHTML = `
      <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
      <span class="text-green-700">Added to Cart!</span>
    `;
    setTimeout(() => {
      closeVariantSheet();
      setTimeout(() => { addBtn.innerHTML = origText; }, 300);
    }, 500);
  } else {
    closeVariantSheet();
  }
}

/**
 * "Buy Now" path from variant sheet — direct to checkout
 */
function buyNowFromSheet() {
  if (!activeSheet.productId || !activeSheet.selectedVariant) return;
  const product = PRODUCTS[activeSheet.productId];
  const variant = activeSheet.selectedVariant;

  // Add the item to cart
  addToCart(
    variant.id,
    product.id,
    product.name,
    variant.label,
    variant.price,
    product.img,
    activeSheet.qty
  );

  closeVariantSheet();

  // Directly open checkout modal after sheet closes
  setTimeout(() => {
    simulateCheckout();
  }, 300);
}

// =============================================================================
// CART MANAGEMENT
// =============================================================================

/**
 * Add an item variant to cart
 * @param {string} variantId - e.g. 'p1-250'
 * @param {string} productId - e.g. 'p1'
 * @param {string} name - Product title
 * @param {string} variantLabel - e.g. '250g'
 * @param {number} price - Single item price
 * @param {string} img - Thumbnail URL
 * @param {number} qty - Quantity to add (default 1)
 */
function addToCart(variantId, productId, name, variantLabel, price, img, qty = 1) {
  if (cart[variantId]) {
    cart[variantId].qty += qty;
  } else {
    cart[variantId] = {
      variantId,
      productId,
      name,
      variantLabel,
      price,
      img,
      qty,
    };
  }

  renderCartUI();
  triggerCartBounce();
  showToast(`Added ${name} (${variantLabel})`);
}

/**
 * Update quantity for an item in cart
 * @param {string} variantId 
 * @param {number} delta - +1 or -1
 */
function updateQty(variantId, delta) {
  if (!cart[variantId]) return;

  cart[variantId].qty += delta;

  if (cart[variantId].qty <= 0) {
    delete cart[variantId];
  }

  renderCartUI();
}

/**
 * Remove an item completely from cart
 * @param {string} variantId 
 */
function removeFromCart(variantId) {
  if (cart[variantId]) {
    delete cart[variantId];
    renderCartUI();
  }
}

/**
 * Render all cart UI elements:
 * - Header count
 * - Bottom nav count badge
 * - Floating sticky purchase bar
 * - Cart drawer item list & totals
 */
function renderCartUI() {
  const summary = getCartSummary();
  const count = summary.count;
  const total = summary.total;

  // 1. Header Cart Count
  const headerCount = document.getElementById('navCartCount');
  if (headerCount) headerCount.textContent = count;

  // 2. Bottom Nav Cart Badge
  const bnavBadge = document.getElementById('bnavCartBadge');
  if (bnavBadge) {
    if (count > 0) {
      bnavBadge.textContent = count;
      bnavBadge.classList.remove('hidden');
    } else {
      bnavBadge.classList.add('hidden');
    }
  }

  // 3. Floating Sticky Bottom Bar
  const floatingBar = document.getElementById('stickyBottomCart');
  const floatingItems = document.getElementById('floatingCartItems');
  const floatingTotal = document.getElementById('floatingCartTotal');
  const floatingBadge = document.getElementById('floatingCartBadge');

  if (floatingBar) {
    if (count > 0) {
      floatingBar.classList.remove('translate-y-40', 'pointer-events-none');
      floatingBar.classList.add('translate-y-0', 'pointer-events-auto');
      if (floatingItems) floatingItems.textContent = `${count} Item${count > 1 ? 's' : ''}`;
      if (floatingTotal) floatingTotal.textContent = `₹${total}`;
      if (floatingBadge) floatingBadge.textContent = count;
    } else {
      floatingBar.classList.remove('translate-y-0', 'pointer-events-auto');
      floatingBar.classList.add('translate-y-40', 'pointer-events-none');
    }
  }

  // 4. Cart Drawer Items
  renderCartDrawerItems(summary);
}

/**
 * Render items in cart drawer
 * @param {{count: number, total: number}} summary 
 */
function renderCartDrawerItems(summary) {
  const listEl = document.getElementById('cartItemList');
  const countBadge = document.getElementById('drawerCartCountBadge');
  const subtotalEl = document.getElementById('drawerSubtotal');
  const grandTotalEl = document.getElementById('drawerGrandTotal');

  if (countBadge) countBadge.textContent = `${summary.count} Item${summary.count > 1 ? 's' : ''}`;
  if (subtotalEl) subtotalEl.textContent = `₹${summary.total}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${summary.total}`;

  if (!listEl) return;

  const items = Object.values(cart);

  if (items.length === 0) {
    listEl.innerHTML = `
      <div class="py-12 text-center text-brand-muted">
        <div class="w-14 h-14 rounded-full bg-brand-cream border border-brand-border flex items-center justify-center mx-auto mb-3 text-brand-muted">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>
        </div>
        <p class="font-serif font-bold text-base text-brand-dark">Your cart is empty</p>
        <p class="text-xs text-brand-muted mt-1">Explore our delicious homemade sweets</p>
        <button onclick="closeCartDrawer(); scrollToProducts();" class="mt-4 px-5 py-2.5 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs shadow active:scale-95 transition-transform">
          Shop Laddoos
        </button>
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map(item => `
    <div class="flex items-center gap-3 p-3 rounded-2xl bg-white border border-brand-border shadow-sm">
      <img src="${item.img}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-brand-border"/>
      <div class="flex-1 min-w-0">
        <h4 class="font-serif font-bold text-xs text-brand-dark leading-snug line-clamp-1">${item.name}</h4>
        <span class="inline-block text-[10px] font-semibold text-brand-amber bg-brand-goldsoft/50 px-2 py-0.5 rounded-full mt-0.5">${item.variantLabel}</span>
        <p class="text-xs font-bold text-brand-dark mt-1">₹${item.price * item.qty}</p>
      </div>
      <!-- Qty stepper -->
      <div class="flex items-center h-8 rounded-xl bg-brand-cream border border-brand-border overflow-hidden flex-shrink-0">
        <button onclick="updateQty('${item.variantId}', -1)" class="w-7 h-full flex items-center justify-center font-bold text-sm text-brand-dark hover:bg-brand-border active:scale-90 transition-transform">−</button>
        <span class="px-2 text-xs font-bold text-brand-dark min-w-[24px] text-center">${item.qty}</span>
        <button onclick="updateQty('${item.variantId}', 1)" class="w-7 h-full flex items-center justify-center font-bold text-sm text-brand-dark hover:bg-brand-border active:scale-90 transition-transform">+</button>
      </div>
    </div>
  `).join('');
}

/**
 * Trigger bounce animation on cart badges
 */
function triggerCartBounce() {
  const badges = [
    document.getElementById('navCartCount'),
    document.getElementById('bnavCartBadge'),
    document.getElementById('floatingCartBadge')
  ];

  badges.forEach(b => {
    if (b) {
      b.classList.remove('cart-bounce');
      void b.offsetWidth; // Trigger reflow
      b.classList.add('cart-bounce');
    }
  });
}

// =============================================================================
// CART DRAWER (Bottom Sheet)
// =============================================================================

/**
 * Open the cart drawer
 */
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartDrawerContent');
  drawer.classList.remove('pointer-events-none', 'opacity-0');
  drawer.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  content.classList.add('translate-y-0');
  document.body.style.overflow = 'hidden';
  bottomNavSelect('cart');
}

/**
 * Close the cart drawer
 */
function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartDrawerContent');
  if (content) {
    content.classList.remove('translate-y-0');
    content.classList.add('translate-y-full');
  }
  setTimeout(() => {
    if (drawer) {
      drawer.classList.remove('pointer-events-auto', 'opacity-100');
      drawer.classList.add('pointer-events-none', 'opacity-0');
    }
    document.body.style.overflow = '';
  }, 250);
}

// =============================================================================
// USER PROFILE SCREEN & MANAGEMENT
// =============================================================================

/**
 * Open the Full User Profile Modal
 */
function openProfile() {
  renderProfileUI();
  const modal = document.getElementById('profileModal');
  const content = document.getElementById('profileContent');
  if (!modal || !content) return;

  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  content.classList.add('translate-y-0');
  document.body.style.overflow = 'hidden';
  bottomNavSelect('profile');
}

/**
 * Close the User Profile Modal
 */
function closeProfile() {
  const modal = document.getElementById('profileModal');
  const content = document.getElementById('profileContent');
  if (content) {
    content.classList.remove('translate-y-0');
    content.classList.add('translate-y-full');
  }
  setTimeout(() => {
    if (modal) {
      modal.classList.remove('pointer-events-auto', 'opacity-100');
      modal.classList.add('pointer-events-none', 'opacity-0');
    }
    document.body.style.overflow = '';
  }, 250);
}

/**
 * Update header avatar initials and info
 */
function updateProfileHeaderBadges() {
  const initials = userProfile.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
  const headerInitials = document.getElementById('headerUserInitials');
  if (headerInitials) headerInitials.textContent = initials;
}

/**
 * Render all User Profile UI sections
 */
function renderProfileUI() {
  updateProfileHeaderBadges();

  // 1. Basic Info
  const nameEl = document.getElementById('profileNameDisplay');
  const phoneEl = document.getElementById('profilePhoneDisplay');
  const emailEl = document.getElementById('profileEmailDisplay');
  const avatarInitialsEl = document.getElementById('profileAvatarInitials');
  const pointsEl = document.getElementById('profilePointsDisplay');
  const ordersCountEl = document.getElementById('profileOrdersCount');
  const addressesCountEl = document.getElementById('profileAddressesCount');

  if (nameEl) nameEl.textContent = userProfile.name;
  if (phoneEl) phoneEl.textContent = userProfile.phone;
  if (emailEl) emailEl.textContent = userProfile.email;
  if (avatarInitialsEl) {
    const initials = userProfile.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
    avatarInitialsEl.textContent = initials;
  }
  if (pointsEl) pointsEl.textContent = `${userProfile.points} pts`;
  if (ordersCountEl) ordersCountEl.textContent = `${userProfile.pastOrders.length}`;
  if (addressesCountEl) addressesCountEl.textContent = `${userProfile.savedAddresses.length}`;

  // 2. Render Past Orders
  renderPastOrdersUI();

  // 3. Render Saved Addresses
  renderAddressesUI();

  // 4. Render Dietary Preferences
  renderDietaryPrefsUI();
}

/**
 * Render Orders list inside Profile
 */
function renderPastOrdersUI() {
  const ordersListEl = document.getElementById('profileOrdersList');
  if (!ordersListEl) return;

  if (userProfile.pastOrders.length === 0) {
    ordersListEl.innerHTML = `
      <div class="py-6 text-center text-brand-muted bg-white rounded-2xl border border-brand-border p-4">
        <p class="text-xs font-semibold">No orders yet</p>
        <p class="text-[10px] mt-0.5">Your freshly made mithai orders will show up here</p>
      </div>
    `;
    return;
  }

  ordersListEl.innerHTML = userProfile.pastOrders.map(order => `
    <div class="order-history-card shadow-sm space-y-2.5">
      <div class="flex items-center justify-between pb-2 border-b border-brand-border">
        <div>
          <span class="text-xs font-bold text-brand-dark">${order.id}</span>
          <p class="text-[10px] text-brand-muted">${order.date}</p>
        </div>
        <span class="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${
          order.statusColor === 'green' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-amber-100 text-amber-800'
        }">
          ${order.status === 'In Transit' ? '🚚 In Transit' : '✅ Delivered'}
        </span>
      </div>

      <div class="space-y-1.5">
        ${order.items.map(item => `
          <div class="flex items-center justify-between text-xs">
            <span class="text-brand-dark font-medium line-clamp-1">${item.qty}x ${item.name}</span>
            <span class="font-bold text-brand-dark flex-shrink-0">₹${item.price * item.qty}</span>
          </div>
        `).join('')}
      </div>

      <div class="pt-2 border-t border-brand-border flex items-center justify-between text-xs">
        <div>
          <span class="text-[10px] text-brand-muted">Total Paid</span>
          <p class="font-extrabold text-brand-dark text-sm">₹${order.total}</p>
        </div>
        <div class="flex gap-2">
          ${order.status === 'In Transit' ? `
            <button onclick="showToast('Tracking: Out for delivery via Bluedart Express (AWB: GFC-89218)')" class="px-3 py-1.5 rounded-xl bg-brand-cream border border-brand-border text-brand-dark font-bold text-[11px] active:scale-95">
              Track
            </button>
          ` : ''}
          <button onclick="reorderPastOrder('${order.id}')" class="px-3 py-1.5 rounded-xl bg-brand-gold text-brand-dark font-bold text-[11px] flex items-center gap-1 shadow-sm active:scale-95">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>
            Reorder
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Reorder a past order in 1-click
 * @param {string} orderId 
 */
function reorderPastOrder(orderId) {
  const order = userProfile.pastOrders.find(o => o.id === orderId);
  if (!order) return;

  // Add all items from this order into cart
  order.items.forEach(item => {
    const fakeVariantId = `reorder-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    cart[fakeVariantId] = {
      variantId: fakeVariantId,
      productId: 'p1',
      name: item.name,
      variantLabel: 'Standard',
      price: item.price,
      img: item.img || PRODUCTS.p1.img,
      qty: item.qty
    };
  });

  renderCartUI();
  closeProfile();
  showToast('Items added to cart from past order!');
  setTimeout(() => {
    openCartDrawer();
  }, 300);
}

/**
 * Render Addresses list inside Profile
 */
function renderAddressesUI() {
  const addrListEl = document.getElementById('profileAddressesList');
  if (!addrListEl) return;

  addrListEl.innerHTML = userProfile.savedAddresses.map(addr => `
    <div class="p-3 bg-white rounded-2xl border border-brand-border shadow-sm flex items-start justify-between gap-3">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-bold text-brand-dark">${addr.type}</span>
          ${addr.isDefault ? '<span class="text-[9px] font-bold text-brand-amber bg-brand-goldsoft px-2 py-0.5 rounded-full">Default</span>' : ''}
        </div>
        <p class="text-xs text-brand-muted leading-relaxed">${addr.address}, ${addr.city}, ${addr.state} - ${addr.pincode}</p>
        <p class="text-[11px] text-brand-muted mt-1">📞 ${addr.phone}</p>
      </div>
      <button onclick="deleteAddress('${addr.id}')" class="text-stone-400 hover:text-red-500 p-1 active:scale-90" aria-label="Delete address">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>
      </button>
    </div>
  `).join('');
}

/**
 * Delete a saved address
 * @param {string} addrId 
 */
function deleteAddress(addrId) {
  userProfile.savedAddresses = userProfile.savedAddresses.filter(a => a.id !== addrId);
  saveUserProfile();
  renderAddressesUI();
  showToast('Address removed');
}

/**
 * Render Dietary Preferences toggles
 */
function renderDietaryPrefsUI() {
  const prefs = userProfile.dietaryPreferences;
  const list = [
    { key: 'sugarFree', label: '🚫 100% No Refined Sugar' },
    { key: 'desiGhee', label: '🫙 Pure Desi Ghee Only' },
    { key: 'jaggeryOnly', label: '🍯 Desi Khand / Jaggery' },
    { key: 'highProtein', label: '⚡ High Protein & Energy' },
    { key: 'diabeticFriendly', label: '🩺 Diabetic Conscious' },
    { key: 'glutenConscious', label: '🌾 Gluten Conscious' },
  ];

  const container = document.getElementById('profileDietaryContainer');
  if (!container) return;

  container.innerHTML = list.map(item => {
    const isActive = !!prefs[item.key];
    return `
      <button onclick="toggleDietaryPref('${item.key}')" 
              class="dietary-chip ${isActive ? 'active' : ''}">
        <span>${item.label}</span>
        ${isActive ? '<svg class="w-3.5 h-3.5 text-brand-brown" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
      </button>
    `;
  }).join('');
}

/**
 * Toggle a dietary preference
 * @param {string} key 
 */
function toggleDietaryPref(key) {
  userProfile.dietaryPreferences[key] = !userProfile.dietaryPreferences[key];
  saveUserProfile();
  renderDietaryPrefsUI();
  showToast('Preferences updated');
}

/**
 * Copy Coupon Code to clipboard
 * @param {string} code 
 */
function copyCouponCode(code) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code);
  }
  showToast(`Coupon ${code} copied to clipboard!`);
}

// =============================================================================
// EDIT PROFILE MODAL
// =============================================================================

function openEditProfile() {
  const modal = document.getElementById('editProfileModal');
  const content = document.getElementById('editProfileContent');
  if (!modal || !content) return;

  document.getElementById('editProfileName').value = userProfile.name;
  document.getElementById('editProfilePhone').value = userProfile.phone;
  document.getElementById('editProfileEmail').value = userProfile.email;
  document.getElementById('editProfileCity').value = userProfile.city;

  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  content.classList.add('translate-y-0');
}

function closeEditProfile() {
  const modal = document.getElementById('editProfileModal');
  const content = document.getElementById('editProfileContent');
  if (content) {
    content.classList.remove('translate-y-0');
    content.classList.add('translate-y-full');
  }
  setTimeout(() => {
    if (modal) {
      modal.classList.remove('pointer-events-auto', 'opacity-100');
      modal.classList.add('pointer-events-none', 'opacity-0');
    }
  }, 250);
}

function saveEditProfile() {
  const name = document.getElementById('editProfileName').value.trim();
  const phone = document.getElementById('editProfilePhone').value.trim();
  const email = document.getElementById('editProfileEmail').value.trim();
  const city = document.getElementById('editProfileCity').value.trim();

  if (!name) {
    showToast('Please enter your name');
    return;
  }

  userProfile.name = name;
  userProfile.phone = phone || userProfile.phone;
  userProfile.email = email || userProfile.email;
  userProfile.city = city || userProfile.city;

  saveUserProfile();
  renderProfileUI();
  closeEditProfile();
  showToast('Profile updated successfully!');
}

// =============================================================================
// ADD NEW ADDRESS MODAL
// =============================================================================

function openAddAddressModal() {
  const modal = document.getElementById('addAddressModal');
  const content = document.getElementById('addAddressContent');
  if (!modal || !content) return;

  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  content.classList.add('translate-y-0');
}

function closeAddAddressModal() {
  const modal = document.getElementById('addAddressModal');
  const content = document.getElementById('addAddressContent');
  if (content) {
    content.classList.remove('translate-y-0');
    content.classList.add('translate-y-full');
  }
  setTimeout(() => {
    if (modal) {
      modal.classList.remove('pointer-events-auto', 'opacity-100');
      modal.classList.add('pointer-events-none', 'opacity-0');
    }
  }, 250);
}

function saveNewAddress() {
  const type = document.getElementById('newAddrType').value || 'Home';
  const address = document.getElementById('newAddrLine').value.trim();
  const city = document.getElementById('newAddrCity').value.trim();
  const state = document.getElementById('newAddrState').value.trim();
  const pincode = document.getElementById('newAddrPin').value.trim();
  const phone = document.getElementById('newAddrPhone').value.trim() || userProfile.phone;

  if (!address || !city || !pincode) {
    showToast('Please fill in required address fields');
    return;
  }

  const newAddr = {
    id: `addr-${Date.now()}`,
    type,
    isDefault: false,
    address,
    city,
    state: state || 'Delhi',
    pincode,
    phone
  };

  userProfile.savedAddresses.push(newAddr);
  saveUserProfile();
  renderAddressesUI();
  closeAddAddressModal();
  showToast('New address saved!');
}

// =============================================================================
// PRODUCT LISTING & FILTERING
// =============================================================================

/**
 * Render dynamic Add buttons for product cards
 */
function renderAllProductButtons() {
  // Card click handlers are set inline in HTML
}

/**
 * Filter products by category tab
 * @param {string} category 
 */
function filterCategory(category) {
  // Update chip active states
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.classList.remove('active', 'bg-brand-dark', 'text-brand-cream');
    chip.classList.add('bg-white', 'text-brand-dark');
  });

  const activeChip = document.getElementById(`cat-${category.toLowerCase().replace(/\s+/g, '')}`);
  if (activeChip) {
    activeChip.classList.add('active', 'bg-brand-dark', 'text-brand-cream');
    activeChip.classList.remove('bg-white', 'text-brand-dark');
  }

  const cards = document.querySelectorAll('.product-grid-card');
  cards.forEach(card => {
    const cats = card.getAttribute('data-category') || '';
    if (category === 'all' || cats.includes(category)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// =============================================================================
// CHECKOUT FLOW (Inline)
// =============================================================================

/**
 * Open the checkout modal
 */
function simulateCheckout() {
  closeCartDrawer();
  
  const summary = getCartSummary();
  if (summary.count === 0) {
    showToast('Your cart is empty');
    return;
  }

  const modal = document.getElementById('checkoutModal');
  const content = document.getElementById('checkoutContent');
  const summaryEl = document.getElementById('checkoutSummary');
  const totalEl = document.getElementById('checkoutTotal');

  // Autofill user profile info into checkout inputs if available
  const nameInput = document.getElementById('checkoutNameInput');
  const phoneInput = document.getElementById('checkoutPhoneInput');
  const emailInput = document.getElementById('checkoutEmailInput');
  const addrInput = document.getElementById('checkoutAddrInput');
  const cityInput = document.getElementById('checkoutCityInput');
  const pinInput = document.getElementById('checkoutPinInput');

  if (nameInput) nameInput.value = userProfile.name;
  if (phoneInput) phoneInput.value = userProfile.phone;
  if (emailInput) emailInput.value = userProfile.email;
  if (userProfile.savedAddresses && userProfile.savedAddresses[0]) {
    const defAddr = userProfile.savedAddresses[0];
    if (addrInput) addrInput.value = defAddr.address;
    if (cityInput) cityInput.value = defAddr.city;
    if (pinInput) pinInput.value = defAddr.pincode;
  }

  if (summaryEl) {
    summaryEl.innerHTML = Object.values(cart).map(item => `
      <div class="flex justify-between items-center text-brand-dark">
        <span class="line-clamp-1">${item.qty}x ${item.name} (${item.variantLabel})</span>
        <span class="font-bold flex-shrink-0">₹${item.price * item.qty}</span>
      </div>
    `).join('') + `
      <div class="flex justify-between items-center text-green-700 pt-1 border-t border-brand-border">
        <span>Delivery (Fresh Home Express)</span>
        <span class="font-bold">FREE</span>
      </div>
    `;
  }

  if (totalEl) totalEl.textContent = `₹${summary.total}`;

  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  content.classList.add('translate-y-0');
  document.body.style.overflow = 'hidden';
}

/**
 * Close the checkout modal
 */
function closeCheckout() {
  const modal = document.getElementById('checkoutModal');
  const content = document.getElementById('checkoutContent');
  if (content) {
    content.classList.remove('translate-y-0');
    content.classList.add('translate-y-full');
  }
  setTimeout(() => {
    if (modal) {
      modal.classList.remove('pointer-events-auto', 'opacity-100');
      modal.classList.add('pointer-events-none', 'opacity-0');
    }
    document.body.style.overflow = '';
  }, 250);
}

/**
 * Finalize and place the order
 */
function placeOrder() {
  const summary = getCartSummary();
  if (summary.count === 0) return;

  const orderNum = `GFC-${Math.floor(1000 + Math.random() * 9000)}`;
  const orderItems = Object.values(cart).map(i => ({
    name: `${i.name} (${i.variantLabel})`,
    qty: i.qty,
    price: i.price,
    img: i.img
  }));

  // Create new order record in User Profile
  const newOrder = {
    id: orderNum,
    date: 'Just now',
    status: 'In Transit',
    statusColor: 'amber',
    items: orderItems,
    total: summary.total,
    payment: 'Cash on Delivery'
  };

  userProfile.pastOrders.unshift(newOrder);
  userProfile.points += 50; // Award 50 points
  saveUserProfile();

  // Clear active cart
  cart = {};
  renderCartUI();
  closeCheckout();

  // Show order success overlay
  const successModal = document.getElementById('orderSuccess');
  if (successModal) {
    successModal.classList.remove('pointer-events-none', 'opacity-0');
    successModal.classList.add('pointer-events-auto', 'opacity-100');
  }
}

/**
 * Dismiss order success overlay
 */
function dismissOrderSuccess() {
  const successModal = document.getElementById('orderSuccess');
  if (successModal) {
    successModal.classList.remove('pointer-events-auto', 'opacity-100');
    successModal.classList.add('pointer-events-none', 'opacity-0');
  }
  document.body.style.overflow = '';
  scrollToProducts();
}

// =============================================================================
// MOBILE SIDE DRAWER (More Menu)
// =============================================================================

function toggleMobileMenu() {
  const overlay = document.getElementById('navDrawer');
  const content = document.getElementById('navDrawerContent');
  if (!overlay || !content) return;

  const isOpen = overlay.classList.contains('opacity-100');

  if (isOpen) {
    content.classList.remove('translate-x-0');
    content.classList.add('-translate-x-full');
    setTimeout(() => {
      overlay.classList.remove('pointer-events-auto', 'opacity-100');
      overlay.classList.add('pointer-events-none', 'opacity-0');
    }, 200);
    document.body.style.overflow = '';
  } else {
    overlay.classList.remove('pointer-events-none', 'opacity-0');
    overlay.classList.add('pointer-events-auto', 'opacity-100');
    content.classList.remove('-translate-x-full');
    content.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
    bottomNavSelect('account');
  }
}

// =============================================================================
// TOAST NOTIFICATION
// =============================================================================

let toastTimeout = null;

/**
 * Show a brief toast notification
 * @param {string} msg - Message to display
 */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  if (toastTimeout) clearTimeout(toastTimeout);
  
  toast.textContent = msg;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2200);
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Format currency (INR)
 */
function formatCurrency(amount) {
  return `₹${amount}`;
}

/**
 * Calculate and return cart totals
 */
function getCartSummary() {
  const keys = Object.keys(cart);
  return {
    count: keys.reduce((acc, k) => acc + cart[k].qty, 0),
    total: keys.reduce((acc, k) => acc + (cart[k].qty * cart[k].price), 0),
  };
}

// =============================================================================
// SCROLL BEHAVIOR — Header shadow on scroll
// =============================================================================

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const header = document.getElementById('mainHeader');
  
  if (header) {
    if (currentScrollY > 10) {
      header.style.boxShadow = '0 2px 12px rgba(38, 22, 16, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  
  lastScrollY = currentScrollY;
}, { passive: true });

// =============================================================================
// KEYBOARD / ESCAPE KEY HANDLING
// =============================================================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVariantSheet();
    closeCartDrawer();
    closeProfile();
    closeEditProfile();
    closeAddAddressModal();
    closeCheckout();
    
    // Close nav drawer
    const navDrawer = document.getElementById('navDrawer');
    if (navDrawer && !navDrawer.classList.contains('pointer-events-none')) {
      toggleMobileMenu();
    }
  }
});

// =============================================================================
// EXPORT FOR TESTING
// =============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cart,
    userProfile,
    addToCart,
    updateQty,
    getCartSummary,
    formatCurrency,
    PRODUCTS,
  };
}
