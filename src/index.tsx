import React from 'react';
import { styled } from '@stitches/react';
import { Provider, WalletConnectRPC } from '@psychedelic/plug-inpage-provider';
import { isMobile } from '@walletconnect/browser-utils';

import plugLight from './assets/plugLight.svg';
import plugDark from './assets/plugDark.svg';

const Button = styled('button', {
  border: 'none',
  background:
    'linear-gradient(93.07deg, #FFD719 0.61%, #F754D4 33.98%, #1FD1EC 65.84%, #48FA6B 97.7%)',
  padding: '2px',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'transform 0.3s',

  '&:hover': {
    transform: 'scale(1.03)',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'white',
    padding: '5px 12px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
  },

  '& .dark': {
    background: '#111827',
    color: 'white',
  },

  '& img': {
    marginRight: '9px',
  },

  variants: {
    dark: {
      true: {
        '& > div': {
          background: '#111827',
          color: 'white',
        },
      },
    },
  },
});

export const DefaultButtonText = 'Connect to Plug';

const PlugConnect = ({
  dark = false,
  title = DefaultButtonText,
  whitelist = [],
  timeout = 120000,
  host,
  onConnectCallback,
  de