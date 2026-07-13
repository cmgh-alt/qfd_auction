export interface Product {
    id: number;
    name: string;
    description: string;
    condition: 'Excellent' | 'Good' | 'Fair';
    price?: string;
    lotNumber: string;
    imagePaths?: string[];
    thumbnailPaths?: string[];
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
import sofabed1_thumb from '../assets/compressed/SofaBed1_compressed_compressed.jpg';
import sofabed2_thumb from '../assets/compressed/SofaBed2_compressed_compressed.jpg';
import sofabed3_thumb from '../assets/compressed/SofaBed3_compressed_compressed.jpg';

import kebabmachine1 from '../assets/KebabMachine.jpg';
import kebabmachine2 from '../assets/KebabMachine2.jpg';
import kebabmachine3 from '../assets/KebabMachine3.jpg';
import kebabmachine1_thumb from '../assets/compressed/KebabMachine_compressed_compressed.jpg';
import kebabmachine2_thumb from '../assets/compressed/KebabMachine2_compressed_compressed.jpg';
import kebabmachine3_thumb from '../assets/compressed/KebabMachine3_compressed_compressed.jpg';

import loadingdock1 from '../assets/LoadingDockAndSeal1.jpg';
import loadingdock2 from '../assets/LoadingDockAndSeal2.jpg';
import loadingdock1_thumb from '../assets/compressed/LoadingDockAndSeal1_compressed_compressed.jpg';
import loadingdock2_thumb from '../assets/compressed/LoadingDockAndSeal2_compressed_compressed.jpg';

import mattress1 from '../assets/Mattress1.jpg';
import mattress2 from '../assets/Mattress2.jpg';
import mattress1_thumb from '../assets/compressed/Mattress1_compressed_compressed.jpg';
import mattress2_thumb from '../assets/compressed/Mattress2_compressed_compressed.jpg';

import wallunit from '../assets/WallUnit.jpg';
import wallunit2 from '../assets/WallUnit2.jpg';
import wallunit_thumb from '../assets/compressed/WallUnit_compressed_compressed.jpg';
import wallunit2_thumb from '../assets/compressed/WallUnit2_compressed_compressed.jpg';

import mattress_suspension from '../assets/MattressSuspension.jpg';
import mattress_suspension_thumb from '../assets/compressed/MattressSuspension_compressed_compressed.jpg';

import tp from '../assets/ToiletPaper.jpg';
import tp2 from '../assets/ToiletPaper2.jpg';
import tp_thumb from '../assets/compressed/ToiletPaper_compressed_compressed.jpg';
import tp2_thumb from '../assets/compressed/ToiletPaper2_compressed_compressed.jpg';

import th1 from '../assets/thermal.jpg';
import th2 from '../assets/thermal2.jpg';
import th3 from '../assets/thermal3.jpg';
import th1_thumb from '../assets/compressed/thermal_compressed_compressed.jpg';
import th2_thumb from '../assets/compressed/thermal2_compressed_compressed.jpg';
import th3_thumb from '../assets/compressed/thermal3_compressed_compressed.jpg';

import serverrack1 from '../assets/ServerRack1.jpg';
import serverrack2 from '../assets/ServerRack2.jpg';
import serverrack1_thumb from '../assets/compressed/ServerRack1_compressed_compressed.jpg';
import serverrack2_thumb from '../assets/compressed/ServerRack2_compressed_compressed.jpg';

import blackfiber1 from '../assets/BlackFIberOpticShielding1.jpg';
import blackfiber2 from '../assets/BlackFiberOpticSheilding2.jpg';
import blackfiber1_thumb from '../assets/compressed/BlackFIberOpticShielding1_compressed_compressed.jpg';
import blackfiber2_thumb from '../assets/compressed/BlackFiberOpticSheilding2_compressed_compressed.jpg';

import yellowfiber1 from '../assets/YellowFiberOpticBundles.jpg';
import yellowfiber2 from '../assets/YellowFiberObtic2000_1.jpg';
import yellowfiber3 from '../assets/YellowFiberObtic2000_2.jpg';
import yellowfiber4 from '../assets/YellowFiberObtic2000_3.jpg';
import yellowfiber1_thumb from '../assets/compressed/YellowFiberOpticBundles_compressed_compressed.jpg';
import yellowfiber2_thumb from '../assets/compressed/YellowFiberObtic2000_1_compressed_compressed.jpg';
import yellowfiber3_thumb from '../assets/compressed/YellowFiberObtic2000_2_compressed_compressed.jpg';
import yellowfiber4_thumb from '../assets/compressed/YellowFiberObtic2000_3_compressed_compressed.jpg';

import ethernet1 from '../assets/EthernetSwitchAssembly1.jpg';
import ethernet2 from '../assets/EthernetSwitchAssembly2.jpg';
import ethernet3 from '../assets/EthernetSwitchAssembly3.jpg';
import ethernet4 from '../assets/EthernetSwitchAssembly4.jpg';
import ethernet1_thumb from '../assets/compressed/EthernetSwitchAssembly1_compressed_compressed.jpg';
import ethernet2_thumb from '../assets/compressed/EthernetSwitchAssembly2_compressed_compressed.jpg';
import ethernet3_thumb from '../assets/compressed/EthernetSwitchAssembly3_compressed_compressed.jpg';
import ethernet4_thumb from '../assets/compressed/EthernetSwitchAssembly4_compressed_compressed.jpg';

import forklift1 from '../assets/ElectricForkliftBattery1.jpg';
import forklift2 from '../assets/ElectricForkliftBattery2.jpg';
import forklift3 from '../assets/ElectricForkliftBattery3.jpg';
import forklift1_thumb from '../assets/compressed/ElectricForkliftBattery1_compressed_compressed.jpg';
import forklift2_thumb from '../assets/compressed/ElectricForkliftBattery2_compressed_compressed.jpg';
import forklift3_thumb from '../assets/compressed/ElectricForkliftBattery3_compressed_compressed.jpg';

export const categories: Category[] = [
  {
    id: 'appliances',
    label: 'Appliances',
    products: [
      
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    products: [
      
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
        thumbnailPaths: [kebabmachine1_thumb, kebabmachine2_thumb, kebabmachine3_thumb],
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
        thumbnailPaths: [sofabed1_thumb, sofabed2_thumb, sofabed3_thumb],
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
        thumbnailPaths: [mattress1_thumb],
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
        thumbnailPaths: [mattress2_thumb],
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
        thumbnailPaths: [wallunit_thumb, wallunit2_thumb],
        lotNumber: 'F-002',
      },
      {
        id: 18,
        name: 'Mattress Suspension',
        description: 'Bedgear Independent Suspension',
        condition: 'Fair',
        isSold: false,
        imagePaths: [mattress_suspension],
        thumbnailPaths: [mattress_suspension_thumb],
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
        description: 'Docking guard and seal that effectively guards against high wind, outside rain, snow, heat, cold, brids, mice & other pests.',
        condition: 'Good',
        isSold: false,
        price: '$100',
        lotNumber: 'B-001',
        imagePaths: [loadingdock1, loadingdock2],
        thumbnailPaths: [loadingdock1_thumb, loadingdock2_thumb],
      },
      {
        id: 25,
        name: 'Server Rack w/ Equipment',
        description: '42U server rack with APW half-height enclosure and Cisco Catalyst 2950 switch.',
        condition: 'Fair',
        lotNumber: 'B-005',
        imagePaths: [serverrack1, serverrack2],
        thumbnailPaths: [serverrack1_thumb, serverrack2_thumb],
      },
      {
        id: 26,
        name: 'Black Fiber Optic Shielding',
        description: 'Industrial fiber optic cable shielding and protective conduit.',
        condition: 'Good',
        lotNumber: 'B-006',
        imagePaths: [blackfiber1, blackfiber2],
        thumbnailPaths: [blackfiber1_thumb, blackfiber2_thumb],
      },
      {
        id: 27,
        name: 'Yellow Fiber Optic Bundles',
        description: 'High-capacity fiber optic cable bundles with 2000-strand capacity.',
        condition: 'Excellent',
        lotNumber: 'B-007',
        imagePaths: [yellowfiber1, yellowfiber2, yellowfiber3, yellowfiber4],
        thumbnailPaths: [yellowfiber1_thumb, yellowfiber2_thumb, yellowfiber3_thumb, yellowfiber4_thumb],
      },
      {
        id: 28,
        name: 'Ethernet Switch Assembly',
        description: 'Network switch assembly with mounting brackets and cable management.',
        condition: 'Good',
        lotNumber: 'B-008',
        imagePaths: [ethernet1, ethernet2, ethernet3, ethernet4],
        thumbnailPaths: [ethernet1_thumb, ethernet2_thumb, ethernet3_thumb, ethernet4_thumb],
      },
      {
        id: 29,
        name: 'Electric Forklift Battery',
        description: 'Industrial electric forklift battery pack, 48V capacity.',
        condition: 'Good',
        lotNumber: 'B-009',
        imagePaths: [forklift1, forklift2, forklift3],
        thumbnailPaths: [forklift1_thumb, forklift2_thumb, forklift3_thumb],
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
        thumbnailPaths: [tp_thumb, tp2_thumb],
      },
      {
        id: 6,
        name: 'Thermal Label',
        description: 'thermal label desc',
        condition: 'Excellent',
        lotNumber: 'MISC-002',
        imagePaths: [th1, th2, th3],
        thumbnailPaths: [th1_thumb, th2_thumb, th3_thumb],
        quantity: 100,
        isSold: false,
      },
    ],
  },
];
