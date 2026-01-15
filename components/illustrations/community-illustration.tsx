export function CommunityIllustration() {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8" />
          </linearGradient>
          <filter id="communityGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
  
        {/* Left figure */}
        <g>
          <circle cx="60" cy="35" r="12" fill="url(#communityGradient)" filter="url(#communityGlow)" />
          <path
            d="M 60 50 L 45 75 M 60 50 L 75 75"
            stroke="url(#communityGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#communityGlow)"
          />
          <line x1="45" y1="75" x2="35" y2="105" stroke="url(#communityGradient)" strokeWidth="3" strokeLinecap="round" />
          <line x1="75" y1="75" x2="85" y2="105" stroke="url(#communityGradient)" strokeWidth="3" strokeLinecap="round" />
        </g>
  
        {/* Right figure */}
        <g>
          <circle cx="140" cy="35" r="12" fill="url(#communityGradient)" filter="url(#communityGlow)" />
          <path
            d="M 140 50 L 125 75 M 140 50 L 155 75"
            stroke="url(#communityGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#communityGlow)"
          />
          <line
            x1="125"
            y1="75"
            x2="115"
            y2="105"
            stroke="url(#communityGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="155"
            y1="75"
            x2="165"
            y2="105"
            stroke="url(#communityGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
  
        {/* Connection arc with pulse */}
        <path
          d="M 75 45 Q 100 20 125 45"
          stroke="rgb(168, 85, 247)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
          filter="url(#communityGlow)"
        />
  
        {/* Central connection point */}
        <circle cx="100" cy="90" r="6" fill="url(#communityGradient)" filter="url(#communityGlow)" opacity="0.8" />
  
        {/* Lines from hands to center */}
        <line x1="60" y1="50" x2="100" y2="90" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5" />
        <line x1="140" y1="50" x2="100" y2="90" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5" />
  
        {/* Radiating circles from connection point */}
        <circle cx="100" cy="90" r="12" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="90" r="20" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="1" opacity="0.2" />
  
        <style>{`
          @keyframes pulse-expand {
            0% { r: 20; opacity: 0.4; }
            100% { r: 35; opacity: 0; }
          }
        `}</style>
      </svg>
    )
  }
  