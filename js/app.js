/**
 * Guilt Free Cravings — Mobile-First E-Commerce App
 * Optimized for quick product discovery and low-friction purchasing
 * 
 * Architecture:
 * - Cart state management
 * - Variant selection bottom sheet
 * - Search overlay with instant results
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
 * Cart object — keyed by variant ID (not product ID)
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
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCartUI();
  renderAllProductButtons();
  console.log('Guilt Free Cravings — Mobile App Initialized');
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
 * @param {string} key - 'home'|'products'|'search'|'cart'|'account'
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
// MOBILE NAVIGATION DRAWER
// =============================================================================

function toggleMobileMenu() {
  const drawer = document.getElementById('navDrawer');
  const content = document.getElementById('navDrawerContent');
  
  if (drawer.classList.contains('pointer-events-none')) {
    drawer.classList.remove('pointer-events-none', 'opacity-0');
    drawer.classList.add('pointer-events-auto', 'opacity-100');
    content.classList.remove('-translate-x-full');
  } else {
    drawer.classList.add('pointer-events-none', 'opacity-0');
    drawer.classList.remove('pointer-events-auto', 'opacity-100');
    content.classList.add('-translate-x-full');
  }
}

// =============================================================================
// CATEGORY FILTER
// =============================================================================

/**
 * Filter products grid by category
 * @param {string} cat - Category name, or 'All'
 */
function filterCategory(cat) {
  // Update pill active state
  document.querySelectorAll('.cat-pill').forEach(btn => {
    const isCurrent = btn.getAttribute('data-category') === cat;
    if (isCurrent) {
      btn.className = 'cat-pill flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap bg-brand-dark text-brand-goldsoft shadow-sm';
    } else {
      btn.className = 'cat-pill flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition whitespace-nowrap bg-white text-brand-dark border border-brand-border';
    }
  });

  // Show/hide product cards
  document.querySelectorAll('.product-item').forEach(item => {
    const cats = item.getAttribute('data-category') || '';
    if (cat === 'All' || cats.includes(cat)) {
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
    } else {
      item.style.display = 'none';
    }
  });
}

// =============================================================================
// WISHLIST
// =============================================================================

/**
 * Toggle wishlist heart micro-interaction
 */
function toggleWishlist(btn) {
  const svg = btn.querySelector('svg');
  const isActive = svg.getAttribute('fill') === 'currentColor';
  
  if (isActive) {
    svg.setAttribute('fill', 'none');
    btn.classList.remove('text-red-600');
    btn.classList.add('text-brand-dark');
    showToast('Removed from favourites');
  } else {
    svg.setAttribute('fill', 'currentColor');
    btn.classList.add('text-red-600');
    btn.classList.remove('text-brand-dark');
    showToast('Saved to your favourites ❤️');
  }
}

// =============================================================================
// CART MANAGEMENT
// =============================================================================

/**
 * Add item to cart (by variant)
 * @param {string} variantId - e.g. 'p1-250'
 * @param {string} productId - e.g. 'p1'
 * @param {string} name - Full display name including variant
 * @param {number} price - Price for one unit
 * @param {string} img - Product image URL
 * @param {number} qty - Quantity to add (default 1)
 */
function addToCart(variantId, productId, name, price, img, qty = 1) {
  if (cart[variantId]) {
    cart[variantId].qty += qty;
  } else {
    cart[variantId] = { variantId, productId, name, price, qty, img };
  }
  
  renderCartUI();
  renderAllProductButtons();
  showCartAddedFeedback(variantId);
  showToast(`Added to cart ✓`);
}

/**
 * Update quantity of a cart item
 * @param {string} variantId - Variant ID
 * @param {number} delta - +1 or -1
 */
function updateQty(variantId, delta) {
  if (!cart[variantId]) return;
  
  cart[variantId].qty += delta;
  
  if (cart[variantId].qty <= 0) {
    delete cart[variantId];
  }
  
  renderCartUI();
  renderAllProductButtons();
}

/**
 * Remove a specific item from cart
 * @param {string} variantId 
 */
function removeFromCart(variantId) {
  delete cart[variantId];
  renderCartUI();
  renderAllProductButtons();
  showToast('Item removed from cart');
}

/**
 * Show micro-animation on the Add button after adding
 * @param {string} variantId 
 */
function showCartAddedFeedback(variantId) {
  // Find the product's primary button container
  const productId = variantId.split('-')[0];
  const container = document.getElementById(`btn-container-${productId}`);
  if (!container) return;

  const btn = container.querySelector('button');
  if (!btn) return;

  const original = btn.innerHTML;
  btn.innerHTML = `<span class="text-green-600">✓</span> Added`;
  btn.classList.add('bg-green-50', 'border-green-200', 'text-green-700');
  btn.classList.remove('bg-brand-gold', 'text-brand-dark');
  
  setTimeout(() => {
    renderAllProductButtons();
  }, 800);
}

// =============================================================================
// VARIANT SHEET (Bottom Sheet)
// =============================================================================

/**
 * Open variant selection bottom sheet for a product
 * @param {string} productId - e.g. 'p1'
 */
function openVariantSheet(productId) {
  const product = PRODUCTS[productId];
  if (!product) return;

  // Reset state
  activeSheet.productId = productId;
  activeSheet.qty = 1;
  activeSheet.isBuyNow = false;
  // Default to first variant
  activeSheet.selectedVariant = product.variants[0];

  // Populate sheet UI
  document.getElementById('sheetProductImg').src = product.img;
  document.getElementById('sheetProductImg').alt = product.name;
  document.getElementById('sheetProductName').textContent = product.name;
  document.getElementById('sheetProductDesc').textContent = product.desc;
  document.getElementById('sheetQtyDisplay').textContent = 1;
  updateSheetTotal();

  // Render variant options
  const optContainer = document.getElementById('variantOptions');
  optContainer.innerHTML = product.variants.map((v, i) => `
    <button 
      data-variant-id="${v.id}"
      onclick="selectVariant('${v.id}')"
      class="variant-opt-btn flex-shrink-0 px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all active:scale-95 ${i === 0 ? 'border-brand-amber bg-brand-goldsoft text-brand-brown' : 'border-brand-border bg-white text-brand-dark'}"
    >
      ${v.label}
      <span class="block text-xs font-normal opacity-70 mt-0.5">₹${v.price}</span>
    </button>
  `).join('');

  // Show sheet
  const overlay = document.getElementById('variantSheet');
  const content = document.getElementById('variantSheetContent');
  overlay.classList.remove('pointer-events-none', 'opacity-0');
  overlay.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

/**
 * Close variant selection bottom sheet
 */
function closeVariantSheet() {
  const overlay = document.getElementById('variantSheet');
  const content = document.getElementById('variantSheetContent');
  overlay.classList.add('pointer-events-none', 'opacity-0');
  overlay.classList.remove('pointer-events-auto', 'opacity-100');
  content.classList.add('translate-y-full');
  document.body.style.overflow = '';
}

/**
 * Select a variant in the bottom sheet
 * @param {string} variantId 
 */
function selectVariant(variantId) {
  const product = PRODUCTS[activeSheet.productId];
  if (!product) return;

  activeSheet.selectedVariant = product.variants.find(v => v.id === variantId);
  
  // Update button styles
  document.querySelectorAll('.variant-opt-btn').forEach(btn => {
    if (btn.getAttribute('data-variant-id') === variantId) {
      btn.className = 'variant-opt-btn flex-shrink-0 px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all active:scale-95 border-brand-amber bg-brand-goldsoft text-brand-brown';
    } else {
      btn.className = 'variant-opt-btn flex-shrink-0 px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all active:scale-95 border-brand-border bg-white text-brand-dark';
    }
  });
  
  updateSheetTotal();
}

/**
 * Change quantity within variant sheet
 * @param {number} delta - +1 or -1
 */
function changeSheetQty(delta) {
  activeSheet.qty = Math.max(1, Math.min(10, activeSheet.qty + delta));
  document.getElementById('sheetQtyDisplay').textContent = activeSheet.qty;
  updateSheetTotal();
}

/**
 * Update total price display in variant sheet
 */
function updateSheetTotal() {
  if (!activeSheet.selectedVariant) return;
  const total = activeSheet.selectedVariant.price * activeSheet.qty;
  document.getElementById('sheetTotalPrice').textContent = `₹${total}`;
}

/**
 * Add to cart from variant sheet
 */
function addFromSheet() {
  if (!activeSheet.selectedVariant) return;
  
  const product = PRODUCTS[activeSheet.productId];
  const variant = activeSheet.selectedVariant;
  const name = `${product.name} ${variant.label}`;
  
  addToCart(variant.id, activeSheet.productId, name, variant.price, product.img, activeSheet.qty);
  closeVariantSheet();
}

/**
 * Buy Now from variant sheet — adds to cart then opens checkout
 */
function buyNowFromSheet() {
  if (!activeSheet.selectedVariant) return;
  
  const product = PRODUCTS[activeSheet.productId];
  const variant = activeSheet.selectedVariant;
  const name = `${product.name} ${variant.label}`;
  
  // Clear cart, add just this item, then go to checkout
  addToCart(variant.id, activeSheet.productId, name, variant.price, product.img, activeSheet.qty);
  closeVariantSheet();
  
  // Brief delay then open checkout
  setTimeout(() => {
    openCheckout();
  }, 250);
}

// =============================================================================
// PRODUCT CARD BUTTONS RENDERING
// =============================================================================

/**
 * Render all product card Add buttons / quantity selectors
 */
function renderAllProductButtons() {
  Object.keys(PRODUCTS).forEach(productId => {
    renderProductButton(productId);
  });
}

/**
 * Render the add/qty button for a specific product card
 * @param {string} productId 
 */
function renderProductButton(productId) {
  const container = document.getElementById(`btn-container-${productId}`);
  if (!container) return;

  const product = PRODUCTS[productId];
  
  // Find all cart items for this product
  const productCartItems = Object.values(cart).filter(item => item.productId === productId);
  const totalQty = productCartItems.reduce((sum, item) => sum + item.qty, 0);
  
  if (totalQty > 0) {
    // Show quantity stepper
    container.innerHTML = `
      <div class="flex items-center justify-between h-9 rounded-xl bg-brand-dark text-white border border-brand-dark overflow-hidden shadow-sm w-full">
        <button onclick="event.stopPropagation(); decrementProductQty('${productId}')" 
                class="w-9 h-full flex items-center justify-center font-bold text-sm hover:bg-stone-700 active:scale-90 transition-transform flex-shrink-0">
          −
        </button>
        <span class="text-xs font-bold text-brand-gold flex-1 text-center">${totalQty}</span>
        <button onclick="event.stopPropagation(); openVariantSheet('${productId}')" 
                class="w-9 h-full flex items-center justify-center font-bold text-sm hover:bg-stone-700 active:scale-90 transition-transform flex-shrink-0">
          +
        </button>
      </div>
    `;
  } else {
    // Default Add button
    container.innerHTML = `
      <button onclick="event.stopPropagation(); openVariantSheet('${productId}')" 
              class="w-full h-9 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-sm">
        <span class="text-base leading-none">+</span> Add
      </button>
    `;
  }
}

/**
 * Decrement the qty of the cheapest/first variant of a product from the card
 * @param {string} productId 
 */
function decrementProductQty(productId) {
  const productCartItems = Object.values(cart).filter(item => item.productId === productId);
  if (productCartItems.length === 0) return;
  
  // Remove 1 from the first variant found
  const target = productCartItems[0];
  updateQty(target.variantId, -1);
}

// =============================================================================
// CART RENDERING
// =============================================================================

/**
 * Re-render all cart-related UI: nav badge, floating bar, drawer contents
 */
function renderCartUI() {
  const cartKeys = Object.keys(cart);
  const totalCount = cartKeys.reduce((acc, k) => acc + cart[k].qty, 0);
  const totalPrice = cartKeys.reduce((acc, k) => acc + (cart[k].qty * cart[k].price), 0);

  // 1. Top nav cart count
  const navCount = document.getElementById('navCartCount');
  if (navCount) navCount.textContent = totalCount;

  // 2. Bottom nav cart badge
  const bnavBadge = document.getElementById('bnavCartBadge');
  if (bnavBadge) {
    bnavBadge.textContent = totalCount;
    if (totalCount > 0) {
      bnavBadge.classList.remove('hidden');
      bnavBadge.classList.add('flex');
    } else {
      bnavBadge.classList.add('hidden');
      bnavBadge.classList.remove('flex');
    }
  }

  // 3. Floating sticky bar
  const stickyBar = document.getElementById('stickyBottomCart');
  if (stickyBar) {
    if (totalCount > 0) {
      stickyBar.classList.remove('translate-y-40');
      stickyBar.classList.add('translate-y-0');
      stickyBar.classList.remove('pointer-events-none');
      const badge = document.getElementById('floatingCartBadge');
      const items = document.getElementById('floatingCartItems');
      const total = document.getElementById('floatingCartTotal');
      if (badge) badge.textContent = totalCount;
      if (items) items.textContent = `${totalCount} Item${totalCount > 1 ? 's' : ''}`;
      if (total) total.textContent = `₹${totalPrice}`;
    } else {
      stickyBar.classList.add('translate-y-40');
      stickyBar.classList.remove('translate-y-0');
      stickyBar.classList.add('pointer-events-none');
    }
  }

  // 4. Cart drawer list
  const drawerList = document.getElementById('cartItemList');
  const drawerCountBadge = document.getElementById('drawerCartCountBadge');
  const drawerSubtotal = document.getElementById('drawerSubtotal');
  const drawerGrandTotal = document.getElementById('drawerGrandTotal');

  if (drawerCountBadge) drawerCountBadge.textContent = `${totalCount} Item${totalCount !== 1 ? 's' : ''}`;
  if (drawerSubtotal) drawerSubtotal.textContent = `₹${totalPrice}`;
  if (drawerGrandTotal) drawerGrandTotal.textContent = `₹${totalPrice}`;

  if (drawerList) {
    if (totalCount === 0) {
      drawerList.innerHTML = `
        <div class="py-10 text-center text-stone-400">
          <div class="w-14 h-14 mx-auto rounded-full bg-stone-100 flex items-center justify-center mb-3">
            <svg class="w-7 h-7 text-stone-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
          </div>
          <p class="text-sm font-semibold text-brand-dark">Your cart is feeling light!</p>
          <p class="text-xs text-stone-500 mt-1">Pick some fresh laddoos and wholesome bites.</p>
          <button onclick="closeCartDrawer(); scrollToProducts();" class="mt-4 px-5 py-2.5 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs active:scale-95 transition-transform">
            Explore Fresh Laddoos
          </button>
        </div>
      `;
    } else {
      drawerList.innerHTML = cartKeys.map(variantId => {
        const item = cart[variantId];
        return `
          <div class="flex items-center justify-between p-3 rounded-2xl border border-brand-border bg-stone-50">
            <div class="flex items-center gap-2.5 flex-1 min-w-0">
              <img src="${item.img}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover border border-stone-200 flex-shrink-0" />
              <div class="min-w-0 flex-1">
                <h4 class="font-serif font-bold text-xs text-brand-dark line-clamp-2">${item.name}</h4>
                <span class="text-[11px] font-bold text-brand-brown mt-0.5 block">₹${item.price} each</span>
              </div>
            </div>

            <div class="flex flex-col items-end gap-1.5 flex-shrink-0 ml-2">
              <div class="flex items-center h-8 rounded-xl bg-white border border-brand-border shadow-sm">
                <button onclick="updateQty('${variantId}', -1)" class="w-8 h-full flex items-center justify-center font-bold text-xs text-brand-dark active:scale-90 transition-transform">−</button>
                <span class="px-2 text-xs font-bold text-brand-dark min-w-[24px] text-center">${item.qty}</span>
                <button onclick="updateQty('${variantId}', 1)" class="w-8 h-full flex items-center justify-center font-bold text-xs text-brand-dark active:scale-90 transition-transform">+</button>
              </div>
              <span class="text-xs font-bold text-brand-dark">₹${item.price * item.qty}</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 5. Update checkout summary if checkout is open
  updateCheckoutSummary();
}

// =============================================================================
// CART DRAWER
// =============================================================================

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartDrawerContent');
  renderCartUI();
  drawer.classList.remove('pointer-events-none', 'opacity-0');
  drawer.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartDrawerContent');
  drawer.classList.add('pointer-events-none', 'opacity-0');
  drawer.classList.remove('pointer-events-auto', 'opacity-100');
  content.classList.add('translate-y-full');
  document.body.style.overflow = '';
}

// =============================================================================
// CHECKOUT
// =============================================================================

/**
 * Open checkout modal with order summary
 */
function openCheckout() {
  closeCartDrawer();
  updateCheckoutSummary();
  
  const modal = document.getElementById('checkoutModal');
  const content = document.getElementById('checkoutContent');
  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  content.classList.remove('translate-y-full');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const modal = document.getElementById('checkoutModal');
  const content = document.getElementById('checkoutContent');
  modal.classList.add('pointer-events-none', 'opacity-0');
  modal.classList.remove('pointer-events-auto', 'opacity-100');
  content.classList.add('translate-y-full');
  document.body.style.overflow = '';
}

/**
 * Update checkout modal order summary
 */
function updateCheckoutSummary() {
  const summaryEl = document.getElementById('checkoutSummary');
  const totalEl = document.getElementById('checkoutTotal');
  if (!summaryEl || !totalEl) return;

  const keys = Object.keys(cart);
  const totalPrice = keys.reduce((acc, k) => acc + (cart[k].qty * cart[k].price), 0);

  if (keys.length === 0) {
    summaryEl.innerHTML = '<p class="text-brand-muted">No items in cart.</p>';
    totalEl.textContent = '₹0';
    return;
  }

  summaryEl.innerHTML = keys.map(k => {
    const item = cart[k];
    return `
      <div class="flex justify-between">
        <span class="text-brand-dark font-medium">${item.name} × ${item.qty}</span>
        <span class="font-bold text-brand-dark">₹${item.price * item.qty}</span>
      </div>
    `;
  }).join('');

  totalEl.textContent = `₹${totalPrice}`;
}

/**
 * Simulate checkout from cart drawer (legacy path — now opens checkout modal)
 */
function simulateCheckout() {
  closeCartDrawer();
  setTimeout(openCheckout, 200);
}

/**
 * Place order from checkout modal
 */
function placeOrder() {
  // Clear cart
  cart = {};
  
  // Close checkout
  closeCheckout();
  
  // Show success
  const successOverlay = document.getElementById('orderSuccess');
  if (successOverlay) {
    successOverlay.classList.remove('pointer-events-none', 'opacity-0');
    successOverlay.classList.add('pointer-events-auto', 'opacity-100');
  }
  
  // Re-render UI
  renderCartUI();
  renderAllProductButtons();
}

/**
 * Dismiss order success overlay
 */
function dismissOrderSuccess() {
  const overlay = document.getElementById('orderSuccess');
  if (overlay) {
    overlay.classList.add('pointer-events-none', 'opacity-0');
    overlay.classList.remove('pointer-events-auto', 'opacity-100');
  }
  document.body.style.overflow = '';
  scrollToProducts();
}

// =============================================================================
// SEARCH
// =============================================================================

/**
 * Open search overlay
 */
function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.remove('pointer-events-none', 'opacity-0');
  overlay.classList.add('pointer-events-auto', 'opacity-100');
  document.body.style.overflow = 'hidden';
  
  // Focus input on next frame
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    if (input) input.focus();
  }, 150);
}

/**
 * Close search overlay
 */
function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.add('pointer-events-none', 'opacity-0');
  overlay.classList.remove('pointer-events-auto', 'opacity-100');
  document.body.style.overflow = '';
  
  // Clear input
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('searchClearBtn').classList.add('hidden');
}

/**
 * Clear search input
 */
function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = '';
    input.focus();
  }
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('searchClearBtn').classList.add('hidden');
}

/**
 * Trigger a search for a keyword (from suggestion chips)
 * @param {string} term
 */
function doSearch(term) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = term;
    handleSearch(term);
  }
}

/**
 * Handle live search input
 * @param {string} query 
 */
function handleSearch(query) {
  const resultsEl = document.getElementById('searchResults');
  const clearBtn = document.getElementById('searchClearBtn');
  
  if (!query || query.trim().length < 1) {
    resultsEl.classList.add('hidden');
    clearBtn.classList.add('hidden');
    return;
  }
  
  clearBtn.classList.remove('hidden');
  
  const q = query.toLowerCase().trim();
  
  // Search across product names, descriptions, tags
  const matches = Object.values(PRODUCTS).filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some(tag => tag.includes(q)) ||
      p.category.some(cat => cat.toLowerCase().includes(q))
    );
  });
  
  if (matches.length === 0) {
    resultsEl.innerHTML = `
      <div class="py-4 text-center text-brand-muted">
        <p class="text-sm">No products found for "<strong>${query}</strong>"</p>
        <p class="text-xs mt-1">Try: laddoo, sattu, dates, besan</p>
      </div>
    `;
  } else {
    resultsEl.innerHTML = matches.map(p => `
      <button onclick="closeSearch(); setTimeout(scrollToProducts, 200);" 
              class="w-full flex items-center gap-3 p-2.5 rounded-xl bg-white border border-brand-border hover:bg-brand-cream transition active:scale-98">
        <img src="${p.img}" alt="${p.name}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-brand-border">
        <div class="flex-1 text-left min-w-0">
          <p class="text-xs font-bold text-brand-dark line-clamp-1">${highlightText(p.name, q)}</p>
          <p class="text-[10px] text-brand-muted mt-0.5">From ₹${Math.min(...p.variants.map(v => v.price))}</p>
        </div>
        <button onclick="event.stopPropagation(); closeSearch(); setTimeout(() => openVariantSheet('${p.id}'), 250);" 
                class="flex-shrink-0 h-8 px-3 rounded-xl bg-brand-gold text-brand-dark font-bold text-[11px] active:scale-90 transition-transform">
          Add
        </button>
      </button>
    `).join('');
  }
  
  resultsEl.classList.remove('hidden');
}

/**
 * Highlight matching text in a string
 */
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="bg-brand-goldsoft text-brand-brown rounded px-0.5">$1</mark>');
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
// LEGACY COMPATIBILITY (Keep old function names that may be referenced in HTML)
// =============================================================================

// Old addToCart(id, name, price, img) API — kept for backward compat
// Now wraps new variant-based system
function addToCartLegacy(productId, name, price, img) {
  const variantId = `${productId}-legacy`;
  addToCart(variantId, productId, name, price, img, 1);
}

// =============================================================================
// SCROLL BEHAVIOR — Header transparency on scroll
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
    closeSearch();
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
    addToCart,
    updateQty,
    getCartSummary,
    formatCurrency,
    PRODUCTS,
  };
}
