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
    summary: 'Upgrade your accounts',
  },
  {
    href: '/get-started',
    lightSVG: '/img/icons/station/wallet.svg',
    darkSVG: '/img/icons/dark/wallet.svg',
    header: 'Create a wallet',
    summary: 'Create and manage a wallet',
  },
  {
    href: 'https://dashboard.station.money/',
    lightSVG: '/img/icons/Terrad.svg',
    darkSVG: '/img/icons/dark/Terrad.svg',
    header: 'Station Dashboard',
    summary:
      'Visit the Station Web App',
  },
  {
    href: '/settings/switch-networks',
    lightSVG: '/img/icons/swap-1.svg',
    darkSVG: '/img/icons/dark/swap-1.svg',
    header: 'Switch networks',
    summary: 'Switch between mainnets and testnets.',
  },
  {
    href: '/using/stake',
    lightSVG: '/img/icons/core/staking.svg',
    darkSVG: '/img/icons/dark/staking.svg',
    header: 'Stake',
    summary: 'Stake your assets and earn rewards',
  },

  {
    href: '/using/gov',
    lightSVG: '/img/icons/core/governance_2.svg',
    darkSVG: '/img/icons/dark/governance_2.svg',
    header: 'Governance',
    summary: 'Vote on proposals',
  },
  {
    href: '/integrate/getting-started',
    lightSVG: '/img/icons/testnet.svg',
    darkSVG: '/img/icons/dark/testnet.svg',
    header: 'Integrate',
    summary: 'Add Station support to your app',
  },
];

export default homeCards;
