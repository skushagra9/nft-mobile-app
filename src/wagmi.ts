import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sei,
  seiTestnet,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Filament Web-App',
  projectId: 'a6a36fb7d48ef6daf3b987126183a32a',
  chains: [
    sepolia
  ], 
  ssr: true,
});