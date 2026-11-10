/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { initVasari } from './vasari';

export default function App() {
  useEffect(() => {
    initVasari();
  }, []);

  return null;
}
