/**
 * Gulf Free Cravings - Main Application JavaScript
 * Handles cart management, UI interactions, and e-commerce functionality
 */

// =============================================================================
// CART DATA STATE & MANAGEMENT
// =============================================================================

// Cart Data State (Empty cart by default)
let cart = {};

let activeModalItem = null;

// =============================================================================
// INITIALIZATION
// =============================================================================

/**
 * Initialize UI on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  renderCartUI();
  renderProductCardButtons();
  console.log('Gulf Free Cravings - App Initialized');
});

// =============================================================================
// NAVIGATION & MENU FUNCTIONS
// =============================================================================

/**
 * Toggle mobile navigation drawer
 */
function toggleMobileMenu() {
  const drawer = document.getElementById('navDrawer');
  const content = document.getElementById('navDrawerContent');
  
  if (drawer.classList.contains('pointer-events-none')) {
    drawer.classList.remove('pointer-events-none', 'opacity-0');
    content.classList.remove('-translate-x-full');
  } else {
    drawer.classList.add('pointer-events-none', 'opacity-0');
    content.classList.add('-translate-x-full');
  }
}

// =============================================================================
// PRODUCT FILTERING & CATEGORY NAVIGATION
// =============================================================================

/**
 * Filter products by category
 * @param {string} cat - Category name to filter by
 */
function filterCategory(cat) {
  // Update active state on category pills
  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.getAttribute('data-category') === cat) {
      btn.className = 'cat-pill px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap bg-brand-dark text-brand-goldsoft shadow-sm';
    } else {
      btn.className = 'cat-pill px-4 py-2 rounded-full text-xs font-semibold transition whitespace-nowrap bg-white text-brand-dark border border-brand-border';
    }
  });

  // Show/hide products based on category
  const items = document.querySelectorAll('.product-item');
  items.forEach(item => {
    const itemCats = item.getAttribute('data-category');
    if (cat === 'All' || itemCats.includes(cat)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// =============================================================================
// WISHLIST FUNCTIONALITY
// =============================================================================

/**
 * Toggle wishlist heart micro-interaction
 * @param {HTMLElement} btn - Button element clicked
 */
function toggleWishlist(btn) {
  const svg = btn.querySelector('svg');
  
  if (svg.getAttribute('fill') === 'currentColor') {
    // Remove from wishlist
    svg.setAttribute('fill', 'none');
    btn.classList.remove('text-red-600');
    btn.classList.add('text-brand-dark');
    showToast('Removed from favourites');
  } else {
    // Add to wishlist
    svg.setAttribute('fill', 'currentColor');
    btn.classList.add('text-red-600');
    btn.classList.remove('text-brand-dark');
    showToast('Saved to your favourites ❤️');
  }
}

// =============================================================================
// CART MANAGEMENT FUNCTIONS
// =============================================================================

/**
 * Add item to cart from homepage card
 * @param {string} id - Product ID
 * @param {string} name - Product name
 * @param {number} price - Product price
 * @param {string} img - Product image URL
 */
function addToCart(id, name, price, img) {
  if (!cart[id]) {
    cart[id] = { id, name, price, qty: 1, img };
  } else {
    cart[id].qty += 1;
  }
  
  renderCartUI();
  renderProductCardButtons();
  showToast(`Added ${name} to cart`);
}

/**
 * Update quantity of item in cart
 * @param {string} id - Product ID
 * @param {number} delta - Change in quantity (+1 or -1)
 */
function updateQty(id, delta) {
  if (!cart[id]) return;
  
  cart[id].qty += delta;
  
  if (cart[id].qty <= 0) {
    delete cart[id];
  }
  
  renderCartUI();
  renderProductCardButtons();
}

// =============================================================================
// UI RENDERING FUNCTIONS
// =============================================================================

/**
 * Render product card buttons (Add or Quantity controls)
 */
function renderProductCardButtons() {
  const allProductIds = ['p1', 'p2', 'p3', 'p4'];
  
  allProductIds.forEach(id => {
    const container = document.getElementById(`btn-container-${id}`);
    if (!container) return;

    if (cart[id] && cart[id].qty > 0) {
      // Replace [+ Add] with active [- QTY +] control
      container.innerHTML = `
        <div class="flex items-center h-7 rounded-lg bg-brand-dark text-white border border-brand-dark overflow-hidden shadow-sm">
          <button onclick="event.stopPropagation(); updateQty('${id}', -1)" class="w-6 h-full flex items-center justify-center font-bold text-xs hover:bg-stone-700 active:scale-90 transition">
            −
          </button>
          <span class="px-2 text-xs font-bold text-brand-gold">${cart[id].qty}</span>
          <button onclick="event.stopPropagation(); updateQty('${id}', 1)" class="w-6 h-full flex items-center justify-center font-bold text-xs hover:bg-stone-700 active:scale-90 transition">
            +
          </button>
        </div>
      `;
    } else {
      // Default [+ Add] state
      const defaultData = {
        'p1': { name: 'Dry Fruit Sattu Laddoo 250g', price: 250, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwEK9WgU2M8R9caHlsZT-mnEmugJMTNDNSN7YP3rxQpMmd2dFAACQdFL9HllVk8cRHqYpo102dkWFajIHNkKq71dFTLNvxPFuPF-XM8j5tG2XzTVPc2WjS3eq0tuuKQJPRBpv9-0sfVVRrupXFcVnEjvaAtb2RWRJlYBOGVZ8H9zAlzcmj3azK8QkS4cLNWNn3YyDMNhTZooRtSLhALT1EXfWQd1QLI0w1ngTT_yswYRzCPfHxiAT_Q' },
        'p2': { name: 'Besan Badam Laddoo 250g', price: 215, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhV4sxwYhe2gAYghT2ytsnuaCdcqClD1QgwKELJSNK5ldAUk82PmaK1pw1_9szRTFHdZNCCqLuKPJuQYAZRGXlgTxAn28HSJq81EcSOFdNyUHfPKAjqn0hLL3zIz7-vmM3zD0Inhy0HK3Kjej1eHLJZG6_stEbEWe17z0lX4pVZK3Z3PlDCpjJ_iT6qRLov7n3h8J93zindN89-WUXVLmoxS092jMaNlaRhfiA2GbQjyB3bfHONl5uxg' },
        'p3': { name: 'Dates Delight Laddoo 250g', price: 315, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRws8_rbcddZpSb45zpN7m9EyoKOe-sX-8T-W6RiKyc-89_2_cGZWipxTgnEQ7CrLBuVT4BXT86ZKv2nCg9j1fXzDvhjp0KorPnwf_a1iQpK2XLv140OPaenj5znkho8CcRZ_1cNaZpU4pDmsp8uMXlGoyScgQ3OhVy5FNLLUxcZZnesyErMCJY2dYLlnI7PsxPCkJdLqh1ExswgOO16lBGxfK4xOZjeez99NCf7poWSD6hX3shl8P_w' },
        'p4': { name: 'Sattu Laddoo 250g', price: 165, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwEK9WgU2M8R9caHlsZT-mnEmugJMTNDNSN7YP3rxQpMmd2dFAACQdFL9HllVk8cRHqYpo102dkWFajIHNkKq71dFTLNvxPFuPF-XM8j5tG2XzTVPc2WjS3eq0tuuKQJPRBpv9-0sfVVRrupXFcVnEjvaAtb2RWRJlYBOGVZ8H9zAlzcmj3azK8QkS4cLNWNn3YyDMNhTZooRtSLhALT1EXfWQd1QLI0w1ngTT_yswYRzCPfHxiAT_Q' }
      }[id];

      container.innerHTML = `
        <button onclick="event.stopPropagation(); addToCart('${id}', '${defaultData.name}', ${defaultData.price}, '${defaultData.img}')" class="h-7 px-3 rounded-lg bg-brand-goldsoft text-brand-brown font-bold text-xs hover:bg-brand-gold hover:text-brand-dark active:scale-95 transition flex items-center gap-1 border border-brand-border">
          <span>+</span> Add
        </button>
      `;
    }
  });
}

/**
 * Render global cart status (Navbar, Floating Bottom Bar, Drawer)
 */
function renderCartUI() {
  const keys = Object.keys(cart);
  const totalCount = keys.reduce((acc, k) => acc + cart[k].qty, 0);
  const totalPrice = keys.reduce((acc, k) => acc + (cart[k].qty * cart[k].price), 0);

  // 1. Update navbar cart badge
  const navCount = document.getElementById('navCartCount');
  if (navCount) navCount.innerText = totalCount;

  // 2. Update floating bottom bar
  const stickyBar = document.getElementById('stickyBottomCart');
  if (stickyBar) {
    if (totalCount > 0) {
      stickyBar.classList.remove('translate-y-24');
      document.getElementById('floatingCartBadge').innerText = totalCount;
      document.getElementById('floatingCartItems').innerText = `${totalCount} Item${totalCount > 1 ? 's' : ''}`;
      document.getElementById('floatingCartTotal').innerText = `₹${totalPrice}`;
    } else {
      stickyBar.classList.add('translate-y-24');
    }
  }

  // 3. Update cart drawer contents
  const drawerList = document.getElementById('cartItemList');
  const drawerCountBadge = document.getElementById('drawerCartCountBadge');
  const drawerSubtotal = document.getElementById('drawerSubtotal');
  const drawerGrandTotal = document.getElementById('drawerGrandTotal');

  if (drawerCountBadge) drawerCountBadge.innerText = `${totalCount} Item${totalCount > 1 ? 's' : ''}`;
  if (drawerSubtotal) drawerSubtotal.innerText = `₹${totalPrice}`;
  if (drawerGrandTotal) drawerGrandTotal.innerText = `₹${totalPrice}`;

  if (drawerList) {
    if (totalCount === 0) {
      // Empty cart state
      drawerList.innerHTML = `
        <div class="py-12 text-center text-stone-400">
          <svg class="w-12 h-12 mx-auto text-stone-300 mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
          <p class="text-sm font-semibold text-brand-dark">Your cart is feeling light!</p>
          <p class="text-xs text-stone-500 mt-1">Pick some fresh ladoos and wholesome bites.</p>
          <button onclick="closeCartDrawer(); document.getElementById('sweetsSection').scrollIntoView({behavior:'smooth'});" class="mt-4 px-4 py-2 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs">
            Explore Fresh Sweets
          </button>
        </div>
      `;
    } else {
      // Render cart items
      drawerList.innerHTML = keys.map(id => {
        const item = cart[id];
        return `
          <div class="flex items-center justify-between p-2.5 rounded-xl border border-brand-border bg-stone-50">
            <div class="flex items-center gap-2.5">
              <img src="${item.img}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover border border-stone-200 flex-shrink-0" />
              <div>
                <h4 class="font-serif font-bold text-xs text-brand-dark line-clamp-1">${item.name}</h4>
                <span class="text-[11px] font-bold text-brand-brown">₹${item.price} each</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="flex items-center h-7 rounded-lg bg-white border border-brand-border shadow-xs">
                <button onclick="updateQty('${id}', -1)" class="w-6 h-full flex items-center justify-center font-bold text-xs text-brand-dark active:scale-90">
                  −
                </button>
                <span class="px-2 text-xs font-bold text-brand-dark">${item.qty}</span>
                <button onclick="updateQty('${id}', 1)" class="w-6 h-full flex items-center justify-center font-bold text-xs text-brand-dark active:scale-90">
                  +
                </button>
              </div>
              <span class="text-xs font-bold text-brand-dark w-12 text-right">₹${item.price * item.qty}</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// =============================================================================
// QUICK VIEW MODAL FUNCTIONS
// =============================================================================

/**
 * Open quick view modal for product details
 */
function openQuickView(title, rating, price, pack, img, desc, ingredients, id) {
  activeModalItem = { id, title, price: parseInt(price.replace('₹', '')), img };
  
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalRating').innerText = `★ ${rating}`;
  document.getElementById('modalPrice').innerText = price;
  document.getElementById('modalPack').innerHTML = pack;
  document.getElementById('modalImage').src = img;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('modalIngredients').innerText = ingredients;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  modal.classList.remove('pointer-events-none', 'opacity-0');
  content.classList.remove('translate-y-full');
}

/**
 * Close quick view modal
 */
function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  modal.classList.add('pointer-events-none', 'opacity-0');
  content.classList.add('translate-y-full');
}

/**
 * Add item to cart from modal
 */
function addFromModal() {
  if (activeModalItem) {
    addToCart(activeModalItem.id, activeModalItem.title, activeModalItem.price, activeModalItem.img);
    closeQuickView();
  }
}

// =============================================================================
// CART DRAWER FUNCTIONS
// =============================================================================

/**
 * Open cart drawer
 */
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartDrawerContent');
  renderCartUI();
  drawer.classList.remove('pointer-events-none', 'opacity-0');
  content.classList.remove('translate-y-full');
}

/**
 * Close cart drawer
 */
function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartDrawerContent');
  drawer.classList.add('pointer-events-none', 'opacity-0');
  content.classList.add('translate-y-full');
}

// =============================================================================
// TOAST NOTIFICATIONS
// =============================================================================

/**
 * Show toast notification message
 * @param {string} msg - Message to display
 */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  
  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2200);
}

// =============================================================================
// CHECKOUT FUNCTIONS
// =============================================================================

/**
 * Simulate checkout process (placeholder for payment integration)
 */
function simulateCheckout() {
  closeCartDrawer();
  showToast('Redirecting to Secure Payment Checkout...');
  
  // TODO: Integrate with actual payment gateway
  // Example: Razorpay, Stripe, or PayPal
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Format currency (INR)
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
  return `₹${amount}`;
}

/**
 * Calculate cart totals
 * @returns {Object} Cart summary with count and total
 */
function getCartSummary() {
  const keys = Object.keys(cart);
  return {
    count: keys.reduce((acc, k) => acc + cart[k].qty, 0),
    total: keys.reduce((acc, k) => acc + (cart[k].qty * cart[k].price), 0)
  };
}

// =============================================================================
// EXPORT FOR TESTING (Node.js environment)
// =============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cart,
    addToCart,
    updateQty,
    getCartSummary,
    formatCurrency
  };
}
