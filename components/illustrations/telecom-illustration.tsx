export function TelecomIllustration() {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Animated flowing light pulses through fiber strands */}
        <defs>
          <linearGradient id="fiberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
  
        {/* Background grid suggestion */}
        <g opacity="0.15" stroke="rgb(59, 130, 246)">
          <line x1="40" y1="20" x2="160" y2="20" strokeWidth="0.5" />
          <line x1="40" y1="50" x2="160" y2="50" strokeWidth="0.5" />
          <line x1="40" y1="80" x2="160" y2="80" strokeWidth="0.5" />
          <line x1="40" y1="110" x2="160" y2="110" strokeWidth="0.5" />
          <line x1="40" y1="140" x2="160" y2="140" strokeWidth="0.5" />
        </g>
  
        {/* Diagonal fiber strands */}
        <line
          x1="30"
          y1="160"
          x2="170"
          y2="20"
          stroke="url(#fiberGradient)"
          strokeWidth="3"
          opacity="0.7"
          filter="url(#glow)"
        />
        <line
          x1="50"
          y1="160"
          x2="190"
          y2="20"
          stroke="url(#fiberGradient)"
          strokeWidth="3"
          opacity="0.5"
          filter="url(#glow)"
        />
        <line
          x1="10"
          y1="160"
          x2="150"
          y2="20"
          stroke="url(#fiberGradient)"
          strokeWidth="3"
          opacity="0.6"
          filter="url(#glow)"
        />
  
        {/* Network nodes */}
        <circle cx="100" cy="90" r="5" fill="rgb(59, 130, 246)" filter="url(#glow)" />
        <circle cx="70" cy="110" r="4" fill="rgb(96, 165, 250)" opacity="0.8" filter="url(#glow)" />
        <circle cx="130" cy="70" r="4" fill="rgb(96, 165, 250)" opacity="0.8" filter="url(#glow)" />
        <circle cx="50" cy="50" r="3" fill="rgb(147, 197, 253)" opacity="0.7" />
        <circle cx="150" cy="130" r="3" fill="rgb(147, 197, 253)" opacity="0.7" />
  
        {/* Connecting lines between nodes */}
        <line x1="100" y1="90" x2="70" y2="110" stroke="rgb(96, 165, 250)" strokeWidth="1.5" opacity="0.5" />
        <line x1="100" y1="90" x2="130" y2="70" stroke="rgb(96, 165, 250)" strokeWidth="1.5" opacity="0.5" />
  
        <style>{`
          @keyframes pulse-light {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes flow {
            0% { stroke-dashoffset: 400; }
            100% { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
    )
  }
  