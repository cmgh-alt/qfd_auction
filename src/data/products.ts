export interface Product {
  id: number;
  name: string;
  description: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  lotNumber: string;
}

export interface Category {
  id: string;
  label: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'appliances',
    label: 'Appliances',
    products: [
      {
        id: 1,
        name: 'Commercial Refrigerator',
        description: 'Stainless steel double-door reach-in refrigerator, 49 cu ft capacity. Previously used in restaurant service.',
        condition: 'Good',
        lotNumber: 'A-001',
      },
      {
        id: 2,
        name: 'Industrial Dishwasher',
        description: 'High-capacity conveyor dishwasher, 300 racks/hr throughput. Includes chemical dosing system.',
        condition: 'Good',
        lotNumber: 'A-002',
      },
      {
        id: 3,
        name: 'Commercial Oven Range',
        description: '6-burner commercial gas range with dual convection ovens. Heavy-duty cast iron grates.',
        condition: 'Excellent',
        lotNumber: 'A-003',
      },
      {
        id: 4,
        name: 'Chest Freezer (20 cu ft)',
        description: 'Upright commercial freezer with adjustable shelving and digital temperature display.',
        condition: 'Excellent',
        lotNumber: 'A-004',
      },
      {
        id: 5,
        name: 'Commercial Washer/Dryer Set',
        description: 'Front-load commercial washer (75 lb capacity) and matching gas dryer. Low cycle count.',
        condition: 'Good',
        lotNumber: 'A-005',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    products: [
      {
        id: 6,
        name: 'Milwaukee Tool Cabinet',
        description: '10-drawer professional tool chest, 56" wide, with full ball-bearing slides and keyed lock.',
        condition: 'Excellent',
        lotNumber: 'T-001',
      },
      {
        id: 7,
        name: 'Snap-on Socket Set (250 pc)',
        description: 'Complete metric and SAE socket set in original case. 1/4", 3/8", and 1/2" drives.',
        condition: 'Excellent',
        lotNumber: 'T-002',
      },
      {
        id: 8,
        name: 'Bench Grinder',
        description: '8" double-wheel bench grinder, 3/4 HP motor, with adjustable eye shields and tool rests.',
        condition: 'Good',
        lotNumber: 'T-003',
      },
      {
        id: 9,
        name: 'Hydraulic Floor Jack (3-Ton)',
        description: 'Heavy-duty low-profile floor jack with rapid-rise pump and steel handle.',
        condition: 'Good',
        lotNumber: 'T-004',
      },
      {
        id: 10,
        name: 'Cordless Tool Set (DeWalt)',
        description: '20V MAX cordless combo kit including drill, circular saw, reciprocating saw, and flashlight.',
        condition: 'Excellent',
        lotNumber: 'T-005',
      },
    ],
  },
  {
    id: 'equipment',
    label: 'Equipment',
    products: [
      {
        id: 11,
        name: 'Air Compressor (60 Gal)',
        description: '60-gallon vertical air compressor, 5 HP, 175 PSI max, single-stage cast iron pump.',
        condition: 'Good',
        lotNumber: 'E-001',
      },
      {
        id: 12,
        name: 'MIG Welder',
        description: 'Lincoln Electric 210 MP multi-process welder. MIG, flux-core, stick, and DC TIG capable.',
        condition: 'Excellent',
        lotNumber: 'E-002',
      },
      {
        id: 13,
        name: 'Pressure Washer (4000 PSI)',
        description: 'Gas-powered cold water pressure washer with 50 ft hose, 4 GPM flow rate.',
        condition: 'Good',
        lotNumber: 'E-003',
      },
      {
        id: 14,
        name: 'Generator (12,000W)',
        description: 'Dual-fuel portable generator, 12,000 peak watts, runs on gasoline or propane.',
        condition: 'Good',
        lotNumber: 'E-004',
      },
      {
        id: 15,
        name: 'Plasma Cutter',
        description: 'Hypertherm Powermax45 plasma cutter, cuts up to 5/8" steel. Includes leads and consumables.',
        condition: 'Excellent',
        lotNumber: 'E-005',
      },
    ],
  },
  {
    id: 'machinery',
    label: 'Machinery',
    products: [
      {
        id: 16,
        name: 'Metal Lathe (14" x 40")',
        description: 'South Bend metal lathe with 14" swing, 40" bed, variable speed, and 3-jaw chuck.',
        condition: 'Good',
        lotNumber: 'M-001',
      },
      {
        id: 17,
        name: 'Vertical Milling Machine',
        description: 'Bridgeport J-Head vertical mill, 1 HP, 9" x 42" table, DRO included.',
        condition: 'Fair',
        lotNumber: 'M-002',
      },
      {
        id: 18,
        name: 'CNC Plasma Cutting Table',
        description: '4ft x 8ft CNC plasma table with THC controller, water tray, and software license.',
        condition: 'Good',
        lotNumber: 'M-003',
      },
      {
        id: 19,
        name: 'Hydraulic Press (20-Ton)',
        description: 'H-frame hydraulic shop press with gauge, adjustable working height, and press plates.',
        condition: 'Excellent',
        lotNumber: 'M-004',
      },
      {
        id: 20,
        name: 'Band Saw (Industrial)',
        description: 'DoAll 16" industrial vertical band saw, 1.5 HP, with blade welder and tension guide.',
        condition: 'Good',
        lotNumber: 'M-005',
      },
    ],
  },
  {
    id: 'business-equipment',
    label: 'Business Equipment',
    products: [
      {
        id: 21,
        name: 'Office Workstation Lot (10 Units)',
        description: 'Dell OptiPlex desktops with 24" monitors, keyboards, and mice. Windows 11 Pro installed.',
        condition: 'Good',
        lotNumber: 'B-001',
      },
      {
        id: 22,
        name: 'Commercial Telephone System',
        description: 'Cisco Unified Communications Manager with 24 IP desk phones and voicemail server.',
        condition: 'Good',
        lotNumber: 'B-002',
      },
      {
        id: 23,
        name: 'Laser Printer (High-Volume)',
        description: 'Xerox AltaLink C8135 color multifunction laser printer, 135 ppm, A3 capable.',
        condition: 'Excellent',
        lotNumber: 'B-003',
      },
      {
        id: 24,
        name: 'Point of Sale System',
        description: 'Complete POS setup with terminal, receipt printer, cash drawer, and barcode scanner.',
        condition: 'Good',
        lotNumber: 'B-004',
      },
      {
        id: 25,
        name: 'Server Rack w/ Equipment',
        description: '42U server rack with dual Dell PowerEdge R740 servers, patch panel, and KVM switch.',
        condition: 'Fair',
        lotNumber: 'B-005',
      },
    ],
  },
];
