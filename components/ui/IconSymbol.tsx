// This file is a fallback for using MaterialIcons on Android and web.

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface MaterialIconsMapping {
  provider: 'material';
  name: React.ComponentProps<typeof MaterialIcons>['name'];
}
interface IoniconsMapping {
  provider: 'ionicons';
  name: React.ComponentProps<typeof Ionicons>['name'];
}

interface MaterialCommunityIconsMapping {
  provider: 'materialcommunity';
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

type IconMapping = MaterialIconsMapping | IoniconsMapping | MaterialCommunityIconsMapping;

// // Define the supported icon providers.
// type IconProvider = 'ionicons' | 'materialcommunity';

// // Define the mapping type.
// type IconMapping = {
//   provider: IconProvider;
//   name: string;
// };

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING: Record<string, IconMapping> = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.

  'house.fill': { provider: 'material', name: 'home' },
  'paperplane.fill': { provider: 'material', name: 'send' },
  'chevron.left.forwardslash.chevron.right': { provider: 'material', name: 'code' },
  'chevron.right': { provider: 'material', name: 'chevron-right' },

  // Add your Ionicons icon mapping.
  'people-circle': { provider: 'ionicons', name: 'people-circle' },
  'people-circle-outline': { provider: 'ionicons', name: 'people-circle-outline' },

  // Add your MaterialCommunityIcons icon mapping.
  'home-circle': { provider: 'materialcommunity', name: 'home-circle' },
  'home-circle-outline': { provider: 'materialcommunity', name: 'home-circle-outline' },
};

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  const mapping = MAPPING[name];

  switch (mapping.provider) {
    case 'material':
      return (
        <MaterialIcons
          color={color}
          size={size}
          name={mapping.name}
          style={style}
        />
      );
    case 'ionicons':
      return (
        <Ionicons
          color={color}
          size={size}
          name={mapping.name}
          style={style}
        />
      );
    case 'materialcommunity':
      return (
        <MaterialCommunityIcons
          color={color}
          size={size}
          name={mapping.name}
          style={style}
        />
      );
    default:
      return null;
  }
}