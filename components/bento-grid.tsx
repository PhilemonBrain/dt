"use client"

import React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TelecomIllustration } from "@/components/illustrations/telecom-illustration"
import { EnergyIllustration } from "@/components/illustrations/energy-illustration"
import { CommunityIllustration } from "@/components/illustrations/community-illustration"
import { FarmsIllustration } from "@/components/illustrations/farm-illustration"

interface PillarCard {
  id: string
  title: string
  subtitle: string
  description: string
  illustration: React.ReactNode
  accentColor: string
  borderColor: string
  glowColor: string
  buttonText?: string
  size: "large" | "medium" | "small"
}

const pillarCards: PillarCard[] = [
  {
    id: "telecom",
    title: "TELECOM",
    subtitle: "Ultra-fast Fiber. Zero friction.",
    description: "Next-generation fiber-to-the-home infrastructure delivering unprecedented speeds and reliability.",
    illustration: <TelecomIllustration />,
    accentColor: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    buttonText: "Explore FTTH",
    size: "large",
  },
  {
    id: "energy",
    title: "ENERGY",
    subtitle: "Harness the Sun. Clean power.",
    description: "Solar energy solutions combining renewable power with intelligent distribution.",
    illustration: <EnergyIllustration />,
    accentColor: "from-amber-400 to-amber-500",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20",
    buttonText: "See Solar",
    size: "medium",
  },
  {
    id: "community",
    title: "COMMUNITY",
    subtitle: "Bridging gaps. Local impact.",
    description: "Connecting communities through shared infrastructure and local empowerment.",
    illustration: <CommunityIllustration />,
    accentColor: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    size: "small",
  },
  {
    id: "farms",
    title: "FARMS",
    subtitle: "Smart agriculture. Sustainable growth.",
    description: "AgriTech solutions combining AI, IoT, and sustainable farming practices.",
    illustration: <FarmsIllustration />,
    accentColor: "from-green-500 to-green-600",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/20",
    buttonText: "View Agritech",
    size: "medium",
  },
]

export default function BentoGrid() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">Our Pillars</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Four interconnected systems powering the future of infrastructure and sustainability
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[320px]">
          {/* Telecom - Large Left */}
          <div className="col-span-12 md:col-span-6 row-span-1 md:row-span-2">
            <PillarCardComponent card={pillarCards[0]} />
          </div>

          {/* Energy - Medium Top Right */}
          <div className="col-span-12 md:col-span-6">
            <PillarCardComponent card={pillarCards[1]} />
          </div>

          {/* Community - Small Middle Right */}
          <div className="col-span-12 md:col-span-6">
            <PillarCardComponent card={pillarCards[2]} />
          </div>

          {/* Farms - Medium Bottom Right */}
          <div className="col-span-12 md:col-span-6">
            <PillarCardComponent card={pillarCards[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarCardComponent({ card }: { card: PillarCard }) {
  return (
    <Card
      className={`
        relative h-full overflow-hidden border backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer
        ${card.borderColor} ${card.glowColor} shadow-2xl
      `}
      style={{
        background: "rgba(15, 15, 15, 0.5)",
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-5 transition-opacity`}
      />

      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col md:flex-row gap-6">
        {/* Illustration - now takes up space on the right side */}
        <div className="hidden md:flex md:w-2/5 items-center justify-center">
          <div className="w-full h-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
            {card.illustration}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-wide">{card.title}</h3>
            <p
              className="text-sm md:text-base font-light mb-3 text-foreground/80"
              style={{
                backgroundImage: `linear-gradient(to right, var(--accent-color), transparent)`,
              }}
            >
              {card.subtitle}
            </p>
            {card.description && (
              <p className="text-sm text-foreground/60 leading-relaxed hidden md:block">{card.description}</p>
            )}
          </div>

          {/* Button */}
          {card.buttonText && (
            <Button
              className={`w-fit mt-4 bg-gradient-to-r ${card.accentColor} text-white border-0 hover:opacity-90 transition-opacity`}
            >
              {card.buttonText}
              <span className="ml-2">→</span>
            </Button>
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
        style={{
          borderImage: `linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent) 1`,
          animation: "pulse 2s infinite",
        }}
      />
    </Card>
  )
}
