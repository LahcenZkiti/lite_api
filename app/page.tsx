import BecomeASupplier from '@/components/BecomeASupplier'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Numbers from '@/components/Numbers'
import SwitchApps from '@/components/SwitchApps'
import ThirdParty from '@/components/ThirdParty'
import TrustedBy from '@/components/TrustedBy'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <SwitchApps />
      <ThirdParty />
      <Numbers />
      <BecomeASupplier />
    </>
  )
}
