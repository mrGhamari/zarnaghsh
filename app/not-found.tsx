import Link from 'next/link';
import { Seal } from '@/components/seal';

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div>
        <Seal className="mx-auto size-32" />
        <h1 className="mt-6 text-2xl font-bold">صفحه‌ای که دنبالش بودید پیدا نشد</h1>
        <Link href="/" className="foil-bg mt-6 inline-block rounded-full px-6 py-3 font-bold text-ink-950">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
