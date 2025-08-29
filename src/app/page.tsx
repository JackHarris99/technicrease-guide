import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ProductShowcase from '@/components/ProductShowcase'
import TransformSection from '@/components/TransformSection'
import FinishingSettings from '@/components/FinishingSettings'
import ProvenResults from '@/components/ProvenResults'
import TechnologyAnalysis from '@/components/TechnologyAnalysis'
import TechnicalCapabilities from '@/components/TechnicalCapabilities'
import StrategicDecision from '@/components/StrategicDecision'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <TransformSection />
      <ProductShowcase />
      <FinishingSettings />
      <ProvenResults />
      <TechnologyAnalysis />
      <TechnicalCapabilities />
      <StrategicDecision />
    </div>
  )
}