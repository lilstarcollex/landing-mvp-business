import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import SecuritySection from './components/SecuritySection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import FAQAccordion from './components/FAQAccordion'
import CTA from './components/CTA'
import Footer from './components/Footer'

const features = [
  {
    title: 'Single-tenant by design',
    description:
      'Dedicated control plane per customer. No noisy neighbors, no shared state.',
  },
  {
    title: 'Zero-trust ready',
    description: 'Built for short-lived certs, device posture, and identity-aware access.',
  },
  {
    title: 'IaC-friendly',
    description: 'Version every policy and tunnel. GitOps ready with declarative configs.',
  },
  {
    title: 'Audit logs',
    description: 'Immutable, exportable audit trails with retention controls.',
  },
  {
    title: 'Role-based access',
    description: 'Granular RBAC for admins, operators, and auditors with scoped privileges.',
  },
  {
    title: 'Predictable costs',
    description: 'Self-hosted footprint with no egress or per-GB surprises.',
  },
]

const securityChecklist = [
  'Rotatable keys and certs',
  'Least-privilege roles',
  'Tamper-evident logs',
  'Hardware-backed keys optional',
  'IP allow/deny controls',
  'Isolated admin plane',
]

const steps = [
  {
    title: 'Provision',
    description: 'Deploy the control plane to your cloud or on-prem footprint in minutes.',
  },
  {
    title: 'Configure',
    description: 'Push policies, roles, and routing through code. CI-friendly, drift-safe.',
  },
  {
    title: 'Connect',
    description: 'Enroll devices and services with signed profiles; monitor posture live.',
  },
]

const pricing = [
  {
    name: 'Team',
    price: 'From GBP X/mo',
    description: 'For teams that need secure, auditable VPN access with predictable ops.',
    features: ['Up to 50 seats', 'SSO & SCIM ready', 'Automated backups', 'Email support'],
    cta: 'Deploy Team',
  },
  {
    name: 'Enterprise',
    price: 'From GBP X/mo',
    description: 'For regulated environments needing deeper controls and white-glove rollout.',
    features: [
      'Unlimited seats',
      'Private networking patterns',
      'Dedicated support line',
      'Onboarding + hardening workshop',
    ],
    cta: 'Talk to us',
    highlighted: true,
  },
]

const faqs = [
  {
    question: 'How do I deploy it?',
    answer: 'Use the Helm chart or Terraform module to install into your preferred Kubernetes cluster or VM fleet.',
  },
  {
    question: 'What are the infra requirements?',
    answer: 'A small control plane footprint (2-3 nodes), outbound internet for updates, and access to your identity provider.',
  },
  {
    question: 'Is it compliant-ready?',
    answer: 'Audit trails, RBAC, and config immutability support SOC2 and ISO-aligned processes out of the box.',
  },
  {
    question: 'How are upgrades handled?',
    answer: 'Versioned, reversible upgrades with preflight checks. Roll forward or back without downtime.',
  },
  {
    question: 'What support is included?',
    answer: 'Team includes business-hours support; Enterprise adds 24/7 SLA and a named success engineer.',
  },
  {
    question: 'Can we migrate from our current VPN?',
    answer: 'Yes. Import existing routes and users, stage new tunnels in parallel, and cut over with phased policies.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,250,252,0.05),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(248,250,252,0.05),transparent_28%),radial-gradient(circle_at_40%_70%,rgba(248,250,252,0.04),transparent_25%)] opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-16 md:px-8">
          <Navbar />
          <main className="space-y-24 pb-12 pt-12 md:space-y-28 md:pt-16">
            <Hero trustLine="Designed for teams that run production infrastructure." />
            <FeatureGrid features={features} />
            <SecuritySection checklist={securityChecklist} />
            <Steps steps={steps} />
            <Pricing tiers={pricing} note="Self-hosted. No per-GB surprises." />
            <FAQAccordion faqs={faqs} />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
