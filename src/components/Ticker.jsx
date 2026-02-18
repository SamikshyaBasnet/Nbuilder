'use client';
import { TICKER_ITEMS } from '@/lib/constants';

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="ticker-diamond">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
