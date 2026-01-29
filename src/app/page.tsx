import { Counter } from '@/components/counter/Counter';

import type { Metadata } from 'next';

export default function IndexPage() {
  return <Counter />;
}

export const metadata: Metadata = {
  title: 'Redux Toolkit',
};
