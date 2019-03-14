import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PaperWallet from '../../src/components/accounts/PaperWallet';

storiesOf('PaperWallet', module)
  .add('default', () => (<PaperWallet privKey="0xPRIVKEY" address="0xADDRESS" />));