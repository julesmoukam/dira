export default function BrandHeader() {
  return (
    <div className="brand-header" aria-hidden="true">
      <span className="brand-mark">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8.5"
            stroke="var(--dira-gold)"
            strokeWidth="1"
          />
          <line
            x1="10"
            y1="2.5"
            x2="10"
            y2="6"
            stroke="var(--dira-gold)"
            strokeWidth="1"
          />
          <line
            x1="10"
            y1="14"
            x2="10"
            y2="17.5"
            stroke="var(--dira-gold)"
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="1.4" fill="var(--dira-gold)" />
        </svg>
      </span>
      <span className="brand-wordmark">Dira</span>
    </div>
  );
}
