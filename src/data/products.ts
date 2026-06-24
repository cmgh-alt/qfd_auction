export interface Product {
    id: number;
    name: string;
    description: string;
    condition: 'Excellent' | 'Good' | 'Fair';
    price?: string;
    lotNumber: string;
    imagePaths?: string[];
    isSold?: boolean;
    quantity?: number,
}

export interface Category {
    id: string;
    label: string;
    products: Product[];
}

import sofabed1 from '../assets/SofaBed1.jpg';
import sofabed2 from '../assets/SofaBed2.jpg';
import sofabed3 from '../assets/SofaBed3.jpg';

import kebabmachine1 from '../assets/KebabMachine.jpg';
import kebabmachine2 from '../assets/KebabMachine2.jpg';
import kebabmachine3 from '../assets/KebabMachine3.jpg';

import mattress1 from '../assets/Mattress1.jpg';
import mattress2 from '../assets/Mattress2.jpg';

import wallunit from '../assets/WallUnit.jpg';
import wallunit2 from '../assets/WallUnit2.jpg';

import mattress_suspension from '../assets/MattressSuspension.jpg';

import tp from '../assets/ToiletPaper.jpg';
import tp2 from '../assets/ToiletPaper2.jpg';

import th1 from '../assets/thermal.jpg';
import th2 from '../assets/thermal2.jpg';
import th3 from '../assets/thermal3.jpg';

export const categories: Category[] = [
  {
    id: 'appliances',
    label: 'Appliances',
    products: [
      {
        id: 2,
        name: 'Industrial Dishwasher',
        description: 'High-capacity conveyor dishwasher, 300 racks/hr throughput. Includes chemical dosing system.',
        condition: 'Good',
        lotNumber: 'A-002',
        isSold: true,
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
    label: 'Restauraunt Equipment and Supplies',
    products: [
      {
        id: 11,
        name: 'Kebab Machine',
        description: 'Kebab Machine desc.',
        condition: 'Good',
        lotNumber: 'E-001',
        imagePaths: [kebabmachine1, kebabmachine2, kebabmachine3],
      },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture',
    products: [
      {
        id: 1,
        name: 'Sofa Bed',
        description: 'Grey ( put dimensions here ) sofa-bed',
        condition: 'Good',
        lotNumber: 'A-001',
        price: '$100',
        isSold: false,
        imagePaths: [sofabed1, sofabed2, sofabed3],
      },
      {
        id: 2,
        name: 'Brand1 Mattress',
        description: 'Matress 1',
        condition: 'Excellent',
        lotNumber: 'F-002',
        price: '$100',
        quantity: 2,
        imagePaths: [mattress1],
        isSold: false,
      },
      {
        id: 3,
        name: 'Brand2 Mattress',
        description: 'Mattress 2',
        condition: 'Excellent',
        lotNumber: 'F-003',
        price: '$100',
        quantity: 2,
        imagePaths: [mattress2],
        isSold: false,
      },
      {
        id: 17,
        name: '4-Piece Wall Unit',
        description: 'Ethan Allen 4-Piece Wall Unit',
        condition: 'Fair',
        isSold: false,
        price: '$100',
        imagePaths: [wallunit, wallunit2],
        lotNumber: 'F-002',
      },
      {
        id: 18,
        name: 'Mattress Suspension',
        description: 'Bedgear Independent Suspension',
        condition: 'Fair',
        isSold: false,
        imagePaths: [mattress_suspension],
        price: '$100',
        lotNumber: 'F-002',
      },
    ],
  },
  {
    id: 'Industrial',
    label: 'Industrial',
    products: [
      {
        id: 21,
        name: 'Loading Dock and Seal',
        description: 'Docking guard and seel that effectively guards against high wind, outside rain, snow, heat, cold, brids, mice & other pests.',
        condition: 'Good',
        isSold: false,
        price: '$100',
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
  {
    id: 'misc',
    label: 'Office and Janitorial Supplies',
    products: [
      {
        id: 6,
        name: 'Bath Tissue (Royalty Premier)',
        description: '96 rolls, 500 sheets (2 ply)',
        condition: 'Excellent',
        lotNumber: 'MISC-001',
        quantity: 3,
        isSold: false,
        imagePaths: [tp, tp2],
      },
      {
        id: 6,
        name: 'Thermal Label',
        description: 'thermal label desc',
        condition: 'Excellent',
        lotNumber: 'MISC-002',
        imagePaths: [th1, th2, th3],
        quantity: 100,
        isSold: false,
      },
    ],
  },
];
