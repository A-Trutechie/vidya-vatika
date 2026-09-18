export function LogoIcon({ className, variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  const mainColor = variant === "default" ? "#0A1D33" : "#FFFFFF";
  const leafColor = variant === "default" ? "#6B9071" : "#C1D2B9";

  return (
    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        {/* Pen Nib Left */}
        <path d="M 96 15 L 85 15 L 85 45 L 72 58 L 96 82 L 96 61 A 4 4 0 0 0 96 53 L 96 15 Z" fill={mainColor}/>
        {/* Pen Nib Right */}
        <path d="M 104 15 L 115 15 L 115 45 L 128 58 L 104 82 L 104 61 A 4 4 0 0 1 104 53 L 104 15 Z" fill={mainColor}/>
        
        {/* Leaves Green */}
        <path d="M 93 68 Q 65 30 40 45 Q 65 65 86 78 Z" fill={leafColor} />
        <path d="M 88 81 Q 55 55 30 65 Q 55 80 83 89 Z" fill={leafColor} />
        <path d="M 107 68 Q 135 30 160 45 Q 135 65 114 78 Z" fill={leafColor} />
        <path d="M 112 81 Q 145 55 170 65 Q 145 80 117 89 Z" fill={leafColor} />
        
        {/* Book Left Pages */}
        <path d="M 92 84 Q 60 68 34 72 L 30 78 Q 60 74 92 84 Z" fill={mainColor}/>
        <path d="M 94 91 Q 60 76 28 80 L 24 86 Q 60 82 94 91 Z" fill={mainColor}/>
        <path d="M 96 98 Q 60 84 22 88 L 18 94 Q 60 90 96 98 Z" fill={mainColor}/>
        
        {/* Book Right Pages */}
        <path d="M 108 84 Q 140 68 166 72 L 170 78 Q 140 74 108 84 Z" fill={mainColor}/>
        <path d="M 106 91 Q 140 76 172 80 L 176 86 Q 140 82 106 91 Z" fill={mainColor}/>
        <path d="M 104 98 Q 140 84 178 88 L 182 94 Q 140 90 104 98 Z" fill={mainColor}/>
        
        {/* Book Base (Continuous) */}
        <path d="M 14 96 Q 60 92 92 103 A 10 10 0 0 0 108 103 Q 140 92 186 96 L 190 104 Q 140 100 110 112 A 16 16 0 0 1 90 112 Q 60 100 10 104 Z" fill={mainColor}/>
      </g>
    </svg>
  );
}
