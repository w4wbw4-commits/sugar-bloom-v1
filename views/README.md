# Sugar Bloom — Salla Theme

## File Structure

```
dist-salla/
├── theme.json              ← Root (required by Salla importer)
├── schema.json             ← Merchant customization fields
├── assets/
│   ├── css/style.css       ← All theme styles + CSS variables
│   └── js/app.js           ← Mobile menu + Salla event listeners
└── views/
    ├── layouts/
    │   └── master.twig     ← Base layout (RTL, asset helpers)
    ├── pages/
    │   ├── index.twig      ← Homepage (hero, products, categories)
    │   └── product.twig    ← Product detail page
    └── components/
        ├── navbar.twig     ← Header with cart/wishlist/account
        ├── footer.twig     ← Footer with payment methods
        ├── announcement-bar.twig
        └── product-card.twig
```

## Salla Variables Used

| Variable | Usage |
|---|---|
| `{{ cart.count }}` | Cart badge count |
| `{{ currency }}` | Currency display |
| `{{ product.name }}` | Product title |
| `{{ product.price }}` | Product price |
| `{{ link('wishlist') }}` | Wishlist page |
| `{{ link('customer.login') }}` | Login page |
| `{{ link('customer.account') }}` | Account page |
| `{{ asset('...') }}` | Asset path helper |
| `{% for product in products %}` | Product loops |
| `{{ store.name }}` | Store name |

## Installation

1. ZIP the `dist-salla/` folder contents
2. Upload via Salla Partners → Themes → Import
3. Customize colors and texts from the Salla dashboard
