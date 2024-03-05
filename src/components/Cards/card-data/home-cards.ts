import { CardProps } from '../Card';

const homeCards: CardProps[] = [

  {
    href: '/get-started',
    lightSVG: '/img/icons/station/station.svg',
    darkSVG: '/img/icons/dark/station.svg',
    header: 'Download Station',
    summary: "Download Station",
  },
  {
    href: '/upgrade',
    lightSVG: '/img/icons/migration.svg',
    darkSVG: '/img/icons/dark/migration.svg',
    header: 'Upgrade Station',
    summary: 'Upgrade your existing wallets',
  },
  {
    href: '/get-started',
    lightSVG: '/img/icons/station/wallet.svg',
    darkSVG: '/img/icons/dark/wallet.svg',
    header: 'Create a wallet',
    summary: 'Create and manage a wallet',
  },
  {
    href: 'https://station.money/',
    lightSVG: '/img/icons/Terrad.svg',
    darkSVG: '/img/icons/dark/Terrad.svg',
    header: 'Station Dashboard',
    summary:
      'Visit the Station Web App',
  },
  {
    href: '/settings',
    lightSVG: '/img/icons/swap-1.svg',
    darkSVG: '/img/icons/dark/swap-1.svg',
    header: 'Switch networks',
    summary: 'Switch between the mainnet, testnet, or LocalTerra.',
  },
  {
    href: '/settings',
    lightSVG: '/img/icons/testnet.svg',
    darkSVG: '/img/icons/dark/testnet.svg',
    header: 'Testnet',
    summary: 'Receive test Luna to carry out transactions on the testnet.',
  },
  {
    href: '/stake',
    lightSVG: '/img/icons/core/staking.svg',
    darkSVG: '/img/icons/dark/staking.svg',
    header: 'Stake',
    summary: 'Stake your assets and earn rewards',
  },

  {
    href: '/gov',
    lightSVG: '/img/icons/core/governance_2.svg',
    darkSVG: '/img/icons/dark/governance_2.svg',
    header: 'Governance',
    summary: 'Vote on proposals',
  },
];

export default homeCards;
