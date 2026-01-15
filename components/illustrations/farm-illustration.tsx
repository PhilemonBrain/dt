export function FarmsIllustration() {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="farmsGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="rgb(74, 222, 128)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(134, 239, 172)" stopOpacity="0.7" />
          </linearGradient>
          <filter id="farmsGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
  
        {/* Central plant/sprout */}
        <g>
          {/* Main stem */}
          <path
            d="M 100 120 Q 98 100 100 80 Q 102 60 100 40"
            stroke="url(#farmsGradient)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
  
          {/* Left leaf */}
          <ellipse cx="75" cy="90" rx="18" ry="25" fill="url(#farmsGradient)" opacity="0.85" />
          {/* Left leaf vein */}
          <line x1="75" y1="70" x2="75" y2="110" stroke="rgb(34, 197, 94)" strokeWidth="1" opacity="0.5" />
  
          {/* Right leaf */}
          <ellipse cx="125" cy="90" rx="18" ry="25" fill="url(#farmsGradient)" opacity="0.85" />
          {/* Right leaf vein */}
          <line x1="125" y1="70" x2="125" y2="110" stroke="rgb(34, 197, 94)" strokeWidth="1" opacity="0.5" />
  
          {/* Top leaf */}
          <ellipse cx="100" cy="55" rx="12" ry="20" fill="url(#farmsGradient)" opacity="0.9" />
        </g>
  
        {/* Circuit board pattern at base */}
        <g opacity="0.6" stroke="rgb(74, 222, 128)" strokeWidth="1.5">
          {/* Horizontal lines */}
          <line x1="70" y1="125" x2="130" y2="125" />
          <line x1="70" y1="140" x2="130" y2="140" />
  
          {/* Vertical lines */}
          <line x1="80" y1="125" x2="80" y2="140" />
          <line x1="100" y1="125" x2="100" y2="140" />
          <line x1="120" y1="125" x2="120" y2="140" />
  
          {/* Connection dots (IoT sensors) */}
          <circle cx="80" cy="125" r="2" fill="rgb(74, 222, 128)" />
          <circle cx="100" cy="125" r="2" fill="rgb(74, 222, 128)" />
          <circle cx="120" cy="125" r="2" fill="rgb(74, 222, 128)" />
          <circle cx="80" cy="140" r="2" fill="rgb(74, 222, 128)" />
          <circle cx="100" cy="140" r="2" fill="rgb(74, 222, 128)" />
          <circle cx="120" cy="140" r="2" fill="rgb(74, 222, 128)" />
        </g>
  
        {/* Animated pulse nodes on stem */}
        <circle cx="100" cy="85" r="3" fill="rgb(134, 239, 172)" filter="url(#farmsGlow)" opacity="0.7" />
        <circle cx="100" cy="105" r="3" fill="rgb(134, 239, 172)" filter="url(#farmsGlow)" opacity="0.7" />
  
        <style>{`
          @keyframes grow-pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
        `}</style>
      </svg>
    )
  }
  