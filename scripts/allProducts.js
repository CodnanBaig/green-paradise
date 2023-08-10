//!global variables

let products=[
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hyde-planter_gallery_medium_all_all_01.jpg?v=1686850328",
        "id": 1,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Hyde",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_money-tree_gallery_small_all_all_03_fed0e22b-7fb3-424c-8801-046f087f590d.jpg?v=1686850547",
        "id": 2,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Money Tree",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_grant-planter_gallery_medium_all_all_01.jpg?v=1686850366",
        "id": 3,
        "price": 259,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Grant",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hyde-planter_gallery_medium_all_all_01.jpg?v=1686850328",
        "id": 4,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Hyde",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_money-tree_gallery_small_all_all_03_fed0e22b-7fb3-424c-8801-046f087f590d.jpg?v=1686850547",
        "id": 5,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Money Tree",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_medium-fiddle-leaf-fig_Momma-Pots_Mustard_Variant.jpg?v=1689972692",
        "id": 6,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Fiddle Leaf",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_medium-snake-plant_Momma-Pots_Antique-Teal_Variant_e8924cc6-fefc-46c6-ab81-df6439823d1c.jpg?v=1690439273",
        "id": 7,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Snake Plant",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hyde-planter_gallery_medium_all_all_01.jpg?v=1686850328",
        "id": 8,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Hyde",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_money-tree_gallery_small_all_all_03_fed0e22b-7fb3-424c-8801-046f087f590d.jpg?v=1686850547",
        "id": 9,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Money Tree",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_grant-planter_gallery_medium_all_all_01.jpg?v=1686850366",
        "id": 10,
        "price": 259,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Grant",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_medium-fiddle-leaf-fig_Momma-Pots_Mustard_Variant.jpg?v=1689972692",
        "id": 11,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Fiddle Leaf",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_medium-snake-plant_Momma-Pots_Antique-Teal_Variant_e8924cc6-fefc-46c6-ab81-df6439823d1c.jpg?v=1690439273",
        "id": 12,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Snake Plant",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-cream_gloss-trio2.jpg?v=1681836393",
        "id": 13,
        "price": 259,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Cream Gloss",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hardy-houseplants-duo_hyde_cream.jpg?v=1672212474",
        "id": 14,
        "price": 559,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Hardy",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_living-room-duo_variant_black.jpg?v=1672216374",
        "id": 15,
        "price": 659,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Living Room",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-cream_gloss-trio2.jpg?v=1681836393",
        "id": 16,
        "price": 259,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Cream Gloss",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hardy-houseplants-duo_hyde_cream.jpg?v=1672212474",
        "id": 17,
        "price": 559,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Hardy",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_living-room-duo_variant_black.jpg?v=1672216374",
        "id": 18,
        "price": 659,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Living Room",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Philodendron-Xanadu_Medium_Hyde_Cream.jpg?v=1687885294",
        "id": 19,
        "price": 259,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Philodendron",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Moonshine_Medium_Hyde_Cream_Variant.jpg?v=1686664154",
        "id": 20,
        "price": 159,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Snake Moonshine",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-cream_gloss-trio2.jpg?v=1681836393",
        "id": 21,
        "price": 259,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Cream Gloss",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hardy-houseplants-duo_hyde_cream.jpg?v=1672212474",
        "id": 22,
        "price": 559,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Hardy",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_living-room-duo_variant_black.jpg?v=1672216374",
        "id": 23,
        "price": 659,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Living Room",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Philodendron-Xanadu_Medium_Hyde_Cream.jpg?v=1687885294",
        "id": 24,
        "price": 259,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Philodendron",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Moonshine_Medium_Hyde_Cream_Variant.jpg?v=1686664154",
        "id": 26,
        "price": 159,
        "category": "Easy-Care",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
        "name": "Snake Moonshine",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_coral.jpg?v=1680539003",
        "id": 27,
        "price": 659,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "White Gloss",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_pink.jpg?v=1680539203",
        "id": 28,
        "price": 359,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Anthurium",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_pink.jpg?v=1680539579",
        "id": 29,
        "price": 659,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Bromeliad",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_coral.jpg?v=1680539003",
        "id": 30,
        "price": 659,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "White Gloss",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_pink.jpg?v=1680539203",
        "id": 31,
        "price": 359,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Anthurium",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_pink.jpg?v=1680539579",
        "id": 32,
        "price": 659,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Bromeliad",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_white.jpg?v=1681923981",
        "id": 33,
        "price": 159,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Orchid",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-piedmont-orchid_pink.jpg?v=1680546299",
        "id": 34,
        "price": 359,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Piedmont",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_coral.jpg?v=1680539003",
        "id": 35,
        "price": 659,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "White Gloss",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-anthurium_pink.jpg?v=1680539203",
        "id": 36,
        "price": 359,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Anthurium",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-bromeliad_pink.jpg?v=1680539579",
        "id": 37,
        "price": 659,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Bromeliad",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_white.jpg?v=1681923981",
        "id": 38,
        "price": 159,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Orchid",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-piedmont-orchid_pink.jpg?v=1680546299",
        "id": 39,
        "price": 359,
        "category": "Flowering",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
        "name": "Piedmont",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_kokedama-plant_variant_all_01.jpg?v=1571677621",
        "id": 40,
        "price": 459,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Kokedama",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Hanging-Ric-Rac_variant.jpg?v=1661446470",
        "id": 41,
        "price": 259,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Ric Rac",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Palm-Tree_growpot.jpg?v=1684507189",
        "id": 42,
        "price": 459,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Palm",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-fiddle-leaf-fig_variant_large_grow-pot_none.jpg?v=1646839381",
        "id": 43,
        "price": 259,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Leaf Fig",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Queen-Anne-Lace-Burnt-Orange_variant.jpg?v=1661874527",
        "id": 44,
        "price": 359,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Queen Anne",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_kokedama-plant_variant_all_01.jpg?v=1571677621",
        "id": 45,
        "price": 459,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Kokedama",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Hanging-Ric-Rac_variant.jpg?v=1661446470",
        "id": 46,
        "price": 259,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Ric Rac",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Palm-Tree_growpot.jpg?v=1684507189",
        "id": 47,
        "price": 459,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Palm",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-fiddle-leaf-fig_variant_large_grow-pot_none.jpg?v=1646839381",
        "id": 48,
        "price": 259,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Leaf Fig",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Queen-Anne-Lace-Burnt-Orange_variant.jpg?v=1661874527",
        "id": 49,
        "price": 359,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Queen Anne",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Palm-Tree_growpot.jpg?v=1684507189",
        "id": 50,
        "price": 459,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Palm",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    }
]
// {
//     "products": 
// }
//! importing 

//!rest
// document.querySelector('.logo').addEventListener('click',()=>{
//     location.href='./index.html'
// })
//!fetching data
let pagenumber=1
let fetchData=async()=>{
    try {
        // let result=await fetch(`https://shy-ruby-chimpanzee-sari.cyclic.app/products?_limit=6&_page=${pagenumber}`)
        // let data=await result.json()
        products=data
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()
//!appending data
let displayData=(data)=>{
    console.log(data)
    data.forEach((item)=>{
        let img=document.createElement('img')
        img.src=item.img
        let name=document.createElement('p')
        name.textContent=item.name
        let price=document.createElement('p')
        price.textContent='$'+item.price
        let div=document.createElement('div')
        div.setAttribute('class','carditem')
        let div2= document.createElement('div')
        div2.setAttribute('class', 'cardtext')
        div2.append(name,price)
        div.append(img,div2)
        div.addEventListener('click',()=>{
           localStorage.setItem('id',item.id)
           localStorage.setItem('description',item.description)
           localStorage.setItem('image',item.img)
           localStorage.setItem('price',item.price)
           localStorage.setItem('title',item.name)
           location.href='productDetails.html'
        })
        document.querySelector('#mainitems').append(div)
    })
}
displayData(products)
document.querySelector('#viewmorebutton').addEventListener('click',()=>{
    ++pagenumber
    if(pagenumber==3) document.querySelector('#viewmore').style.display='none'
    fetchData(pagenumber)
})
document.querySelector('#sortbtn').addEventListener('click',async()=>{
     document.querySelector('#mainitems').innerHTML=''
     let sortValue=document.querySelector('#sortbtn').value
     try {
        // let result=await fetch(`https://shy-ruby-chimpanzee-sari.cyclic.app/products?_limit=6&_page=${pagenumber}`)
        // let data=await result.json()
        let data= products
        if(sortValue=='asc'){
            data.sort((a,b)=>{
                return a.price-b.price
            })
        }else if(sortValue=='desc'){
            data.sort((a,b)=>{
                return b.price-a.price
            })
        }  
        displayData(data)
    } catch (error) {
        console.log(error)
    }
})