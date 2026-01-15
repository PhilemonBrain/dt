export function EnergyIllustration() {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="1" />
            <stop offset="50%" stopColor="rgb(245, 158, 11)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(217, 119, 6)" stopOpacity="0.6" />
          </radialGradient>
          <filter id="sunGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
  
        {/* Animated sun rays */}
        <g opacity="0.4" stroke="rgb(251, 191, 36)" strokeWidth="2" strokeLinecap="round">
          <line x1="100" y1="10" x2="100" y2="30" />
          <line x1="140" y1="20" x2="155" y2="35" />
          <line x1="160" y1="50" x2="175" y2="50" />
          <line x1="140" y1="80" x2="155" y2="95" />
          <line x1="60" y1="20" x2="45" y2="35" />
          <line x1="40" y1="50" x2="25" y2="50" />
          <line x1="60" y1="80" x2="45" y2="95" />
        </g>
  
        {/* Main sun circle */}
        <circle cx="100" cy="50" r="25" fill="url(#sunGradient)" filter="url(#sunGlow)" />
  
        {/* Solar panel grid beneath sun */}
        <g opacity="0.8">
          {/* Panel 1 */}
          <rect x="60" y="90" width="25" height="35" fill="none" stroke="rgb(245, 158, 11)" strokeWidth="2" rx="2" />
          <line x1="60" y1="105" x2="85" y2="105" stroke="rgb(245, 158, 11)" strokeWidth="1" opacity="0.6" />
          <line x1="60" y1="120" x2="85" y2="120" stroke="rgb(245, 158, 11)" strokeWidth="1" opacity="0.6" />
  
          {/* Panel 2 */}
          <rect x="92" y="90" width="25" height="35" fill="none" stroke="rgb(245, 158, 11)" strokeWidth="2" rx="2" />
          <line x1="92" y1="105" x2="117" y2="105" stroke="rgb(245, 158, 11)" strokeWidth="1" opacity="0.6" />
          <line x1="92" y1="120" x2="117" y2="120" stroke="rgb(245, 158, 11)" strokeWidth="1" opacity="0.6" />
  
          {/* Panel 3 */}
          <rect x="124" y="90" width="25" height="35" fill="none" stroke="rgb(245, 158, 11)" strokeWidth="2" rx="2" />
          <line x1="124" y1="105" x2="149" y2="105" stroke="rgb(245, 158, 11)" strokeWidth="1" opacity="0.6" />
          <line x1="124" y1="120" x2="149" y2="120" stroke="rgb(245, 158, 11)" strokeWidth="1" opacity="0.6" />
        </g>
  
        {/* Energy flow lines */}
        <path d="M 100 75 Q 75 85 65 105" stroke="rgb(251, 191, 36)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M 100 75 Q 125 85 135 105" stroke="rgb(251, 191, 36)" strokeWidth="2" fill="none" opacity="0.6" />
  
        <style>{`
          @keyframes ray-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
        `}</style>
      </svg>
    )
  }
  