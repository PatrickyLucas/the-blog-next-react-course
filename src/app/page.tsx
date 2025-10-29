import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-[500px]')} />
    </div>
  );
}
