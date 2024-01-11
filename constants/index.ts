// NAVIGATION
export const NAV_LINKS = [
    { 
        href: '/', 
        key: 'products', 
        label: 'Products', 
        children: [
            { 
                title: 'Travel API', 
                key: 'travel_api', 
                description: 'Description', 
                bgColor: 'bg-indigo-50', 
                to: '/',
            },
            { 
                title: 'Travel links', 
                key: 'travel_links', 
                description: 'Description',  
                bgColor: 'bg-blue-100', 
                to: '/' 
            },
            { 
                title: 'Travel Switch', 
                key: 'travel_switch', 
                description: 'Description', 
                bgColor: 'bg-orange-10',  
                to: '/' 
            },
        ]
    },
    { 
        href: '/', 
        key: 'resources', 
        label: 'Resources', 
        children: []
    },
    { href: '/', key: 'use_cases', label: 'Use cases' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact', label: 'Contact' },
  ];
  
  // TRUSTED BY SECTION
  export const PARTNERS = [
    {
        alt: 'nuitee', 
        url: '/partners/nuitee.svg', 
        width: 100, 
    },
    {
        alt: 'skyscanner', 
        url: '/partners/skyscanner.svg',
        width: 150, 
    },
    {
        alt: 'agoda', 
        url: '/partners/agoda.svg',
        width: 100, 
    },
    {
        alt: 'webbeds', 
        url: '/partners/webbeds.svg',
        width: 100, 
    },
    {
        alt: 'hilton', 
        url: '/partners/hilton.svg',
        width: 100, 
    },
    {
        alt: 'getaroom', 
        url: '/partners/getaroom.svg',
        width: 100, 
    },
    {
        alt: 'priceline', 
        url: '/partners/priceline.svg',
        width: 150, 
    },
    {
        alt: 'partners', 
        url: '/partners/hotelbeds.svg',
        width: 150, 
    },
    
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Inventory',
      icon: '/inventory_icon.svg',
      description:
        'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    },
    {
      title: 'Connections',
      icon: '/connections_icon.svg',
      description:
        "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f",
    },
    {
      title: 'Bookings',
      icon: '/bookings_icon.svg',
      description:
        'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    },
    {
      title: 'Analytics',
      icon: '/analytics_icon.svg',
      description:
        'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f',
    },
  ];

  // SWITCH_APPS SECTION
  export const SWITCH_APPS = [
    {
      title: 'Monitoring',
      url: '/monitoring.svg',
      items: [
        {
            title: 'Logging',
            description: 'Search and download logs in batch or individual mode from your transactions in the TravelgateX Marketplace.'
        },
        {
            title: 'Statistics',
            description: 'Monitor and evaluate the performance of each of your connections and accesses with Stats on a minute-by-minute basis.'
        },
        {
            title: 'Alerts',
            description: 'Detect potential anomalies in real-time and get an immediate notification to react on time and avoid impact on your business.'
        },
      ]
    },
    {
      title: 'Smart Traffic',
      url: '/monitoring.svg',
      items: [
        {
            title: 'Speed',
            description: 'Search and download logs in batch or individual mode from your transactions in the TravelgateX Marketplace.'
        },
        {
            title: 'Traffic Optimizer',
            description: 'Search and download logs in batch or individual mode from your transactions in the TravelgateX Marketplace.'
        },
      ]
    },
    {
      title: 'Business Intelligence',
      url: '/monitoring.svg',
      items: [
        {
            title: 'Insights',
            description: 'Search and download logs in batch or individual mode from your transactions in the TravelgateX Marketplace.'
        },
      ]
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Product',
      links: [
        'Log in',
        'Pricing',
        'Use Cases',
      ],
    },
    {
      title: 'Solutions',
      links: ['Travel API', 'Payment links', 'Switch'],
    },
    {
      title: 'Solutions',
      links: ['Travel API', 'Payment links', 'Switch'],
    },
    {
      title: 'Support',
      links: ['FAQ', 'Integrations'],
    },
    {
      title: 'Company',
      links: ['About us', 'Contact us'],
    },
  ];