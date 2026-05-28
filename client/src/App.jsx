import React from "react";
import { Routes, Route, useNavigate, Link, useLocation } from "react-router-dom";
import { sendPostPaymentEmails } from "./emailjsService.js";
import bgColor from "../assets/bg-color.png";
import linesBg from "../assets/lines_bg.png";
import heroHand from "../assets/image.png";
import logo from "../assets/logo.png";
import advancedTag from "../assets/Frame 1.png";
import whatsAppBtn from "../assets/links.png";
import servicesBg from "../assets/bgcol.jpg";
import handsImg from "../assets/hands.png";
import handsGif from "../assets/hands.gif";
import cardBg from "../assets/Background+Border+Shadow.png";
import testimonialCard from "../assets/testimonials whatsapp.png";
import testimonial1 from "../assets/testimonials whatsapp-1.png";
import testimonial2 from "../assets/testimonials whatsapp-2.png";
import testimonial3 from "../assets/testimonials whatsapp-3.png";
import testimonial4 from "../assets/testimonials whatsapp-4.png";
import testimonial5 from "../assets/testimonials whatsapp-5.png";
import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png";
import back4 from "../assets/back4.png";
import fbIcon from "../assets/fb.png";
import instaIcon from "../assets/Link.png";
import heroNextBg from "../assets/hero_next_bg (1).png";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouRoute />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refunds" element={<RefundsPage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  const [preselectedPlanId, setPreselectedPlanId] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  const handlePlanSelect = (plan) => {
    setPreselectedPlanId(plan.id);
    requestAnimationFrame(() => {
      document.getElementById("unlock-future")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Grimoire />
        <Pricing onSelectPlan={handlePlanSelect} />
        <CommunityTrust />
        <FAQ />
        <UnlockFuture
          preselectedPlanId={preselectedPlanId}
          onClearPreselected={() => setPreselectedPlanId(null)}
        />
      </main>
      <Footer />
    </>
  );
}

function LegalPageLayout({ title, children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-[#FFFBF5] py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
          <h1 className="font-cinzel text-[28px] font-bold leading-tight text-[#2B2B2B] md:text-[36px] md:leading-[40px]">
            {title}
          </h1>
          <div className="mt-8 font-outfit text-[15px] leading-[26px] text-[#4B5563] md:text-[16px] md:leading-[28px] [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:font-cinzel [&>h2]:text-[20px] [&>h2]:font-bold [&>h2]:text-[#2B2B2B] [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-1">
            {children}
          </div>
          <p className="mt-10">
            <Link to="/" className="text-[#FF6F00] font-semibold hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        We value your trust and are committed to protecting your privacy. When you use our astrology
        services, we may collect personal information such as your name, date of birth, time and place
        of birth, contact details, and other relevant data to provide accurate and personalized
        readings. We also collect data related to your usage of our website or services, including IP
        address and browser information.
      </p>
      <p>
        Your information is used solely for delivering astrology consultations, creating birth charts,
        responding to inquiries, and improving our services. We do not share, sell, or rent your
        personal data to third parties for marketing purposes. Any data shared with service providers
        (like payment gateways or hosting platforms) is strictly limited to what is necessary and is
        handled securely.
      </p>
      <p>
        All payments are processed through trusted and encrypted third-party services. We do not
        store any sensitive payment details on our servers. We implement strong data security
        measures, but we encourage users to take precautions as no system is entirely immune to
        threats.
      </p>
      <p>
        You have the right to request access to your personal data, ask for corrections, or request
        deletion. If you choose to unsubscribe from promotional emails or newsletters, you can do so
        at any time.
      </p>
      <p>
        We may use cookies and similar technologies on our website to enhance user experience. You
        can manage cookie preferences through your browser settings. Our website may also include
        links to external sites — we are not responsible for the privacy practices of those
        websites.
      </p>
      <p>
        Our services are intended for individuals 18 years or older. If we become aware of data
        collected from minors, we will delete it promptly.
      </p>
      <p>
        We reserve the right to update this privacy content at any time. Any changes will be
        reflected on this page. Continued use of our services implies your acceptance of the updated
        terms.
      </p>
    </LegalPageLayout>
  );
}

function TermsPage() {
  return (
    <LegalPageLayout title="Terms &amp; Conditions">
      <p className="font-cinzel text-[20px] font-bold text-[#2B2B2B]">Fortune Vision by Satyam</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Fortune Vision by Satyam. These Terms &amp; Conditions govern all astrology
        consultations and services provided by Satyam Awasthi (&apos;We,&apos; &apos;Us,&apos;
        &apos;Our&apos;). By booking a consultation, you (&apos;Client,&apos; &apos;You&apos;) agree
        to these terms.
      </p>

      <h2>2. Services Offered</h2>
      <ul>
        <li>We provide astrology consultations based on Vedic astrology principles.</li>
        <li>Consultations are conducted via WhatsApp, video calls, or other agreed platforms.</li>
        <li>Astrology is a guiding tool and does not predict events with absolute certainty.</li>
      </ul>

      <h2>3. Payment &amp; Booking</h2>
      <ul>
        <li>Full payment is required before the consultation.</li>
        <li>Payments are non-refundable, except in cases where we are unable to deliver the service.</li>
        <li>Rescheduling is allowed with at least 24 hours&apos; notice.</li>
      </ul>

      <h2>4. Disclaimer &amp; No Guarantee</h2>
      <ul>
        <li>Astrology is a spiritual and interpretative science. We do not guarantee specific results.</li>
        <li>Our advice should not be considered a substitute for medical, legal, or financial guidance.</li>
        <li>Clients are responsible for their own decisions and actions.</li>
      </ul>

      <h2>5. Privacy &amp; Confidentiality</h2>
      <ul>
        <li>All client details and readings remain strictly confidential.</li>
        <li>We do not share any personal information with third parties unless required by law.</li>
      </ul>

      <h2>6. Code of Conduct</h2>
      <ul>
        <li>Clients must engage respectfully. Any abusive behavior will result in termination of services without a refund.</li>
        <li>We reserve the right to refuse service at our discretion.</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <ul>
        <li>We are not responsible for any outcomes resulting from the client&apos;s decisions based on our readings.</li>
        <li>By using our services, clients acknowledge that astrology is meant for guidance only.</li>
      </ul>

      <h2>8. Changes to Terms &amp; Conditions</h2>
      <p>We may update these terms at any time. Clients are encouraged to review them periodically.</p>

      <h2>9. Contact Information</h2>
      <p>Phone/WhatsApp: +91 92781 90266</p>
    </LegalPageLayout>
  );
}

function RefundsPage() {
  return (
    <LegalPageLayout title="Refund &amp; Cancellation">
      <p className="font-cinzel text-[20px] font-bold text-[#2B2B2B]">Fortune Vision by Satyam</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Fortune Vision by Satyam. These terms govern refunds and cancellations for
        astrology consultations and services provided by Satyam Awasthi (&apos;We,&apos; &apos;Us,&apos;
        &apos;Our&apos;). By booking a consultation, you (&apos;Client,&apos; &apos;You&apos;) agree
        to these terms.
      </p>

      <h2>2. Services Offered</h2>
      <ul>
        <li>We provide astrology consultations based on Vedic astrology principles.</li>
        <li>Consultations are conducted via WhatsApp, video calls, or other agreed platforms.</li>
        <li>Astrology is a guiding tool and does not predict events with absolute certainty.</li>
      </ul>

      <h2>3. Payment &amp; Booking</h2>
      <ul>
        <li>Full payment is required before the consultation.</li>
        <li>Payments are non-refundable, except in cases where we are unable to deliver the service.</li>
        <li>Rescheduling is allowed with at least 24 hours&apos; notice.</li>
      </ul>

      <h2>4. Disclaimer &amp; No Guarantee</h2>
      <ul>
        <li>Astrology is a spiritual and interpretative science. We do not guarantee specific results.</li>
        <li>Our advice should not be considered a substitute for medical, legal, or financial guidance.</li>
        <li>Clients are responsible for their own decisions and actions.</li>
      </ul>

      <h2>5. Privacy &amp; Confidentiality</h2>
      <ul>
        <li>All client details and readings remain strictly confidential.</li>
        <li>We do not share any personal information with third parties unless required by law.</li>
      </ul>

      <h2>6. Code of Conduct</h2>
      <ul>
        <li>Clients must engage respectfully. Any abusive behavior will result in termination of services without a refund.</li>
        <li>We reserve the right to refuse service at our discretion.</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <ul>
        <li>We are not responsible for any outcomes resulting from the client&apos;s decisions based on our readings.</li>
        <li>By using our services, clients acknowledge that astrology is meant for guidance only.</li>
      </ul>

      <h2>8. Changes to Terms</h2>
      <p>We may update this policy at any time. Clients are encouraged to review it periodically.</p>

      <h2>9. Contact Information</h2>
      <p>Phone/WhatsApp: +91 92781 90266</p>
    </LegalPageLayout>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/40 backdrop-blur-md shadow-[0_4px_4px_rgba(202,202,202,0.25)]">
      <div className="mx-auto flex h-[89px] max-w-[1727px] items-center justify-between px-4 py-[16px] sm:px-6 sm:py-3 md:px-[70px] md:py-[16px] lg:px-20 xl:px-[70px]">
        <img
          src={logo}
          alt="Astrologer Satyam Awasthi"
          className="h-[82px] w-[145px] object-contain sm:h-[82px] sm:w-[145px] md:h-[82px] md:w-[145px] lg:h-[82px] lg:w-[145px] xl:h-[82px] xl:w-[145px]"
          draggable="false"
        />

        <a
          href="https://wa.me/919278190266"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex"
        >
          <img
            src={whatsAppBtn}
            alt="WhatsApp"
            className="h-[48px] w-auto select-none sm:h-[48px] md:h-[48px] lg:h-[48px] xl:h-[48px]"
            draggable="false"
          />
        </a>
      </div>
    </header>
  );
}

function Reveal({
  as = "div",
  className = "",
  variant = "up",
  delay = 0,
  once = true,
  children
}) {
  const Comp = as;
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already visible and we only animate once, skip observer work.
    if (once && visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, visible]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
      ? "reveal-right"
      : variant === "scale"
      ? "reveal-scale"
      : "";

  return (
    <Comp
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers (use img to avoid unexpected cropping differences) */}
      <img
        src={bgColor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
        draggable="false"
      />
      <img
        src={linesBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center opacity-60"
        draggable="false"
      />

      {/* Top-right tag (desktop) */}
      <img
        src={advancedTag}
        alt="Advanced Analysis"
        className="pointer-events-none absolute right-4 top-8 hidden w-[120px] select-none sm:right-8 sm:top-12 sm:w-[140px] md:right-28 md:top-16 md:block md:w-[155px] lg:right-32 lg:w-[155px] xl:right-28 xl:w-[155px]"
        draggable="false"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-[1320px] grid-cols-1 items-center gap-10 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-10 md:px-10 md:py-16 lg:px-12 lg:py-16 xl:px-8  xl:py-16">
        {/* Image first on mobile, right on desktop */}
        <Reveal
          as="div"
          variant="right"
          delay={120}
          className="order-1 flex items-center justify-center md:order-2 md:justify-end"
        >
          <div className="relative mt-8 md:mt-12 lg:mt-16">
            <img
              src={heroHand}
              alt="Hand illustration"
              className="w-[320px] max-w-[92vw] select-none sm:w-[380px] md:w-[500px] lg:w-[540px] xl:w-[560px]"
              draggable="false"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal as="div" variant="left" delay={0} className="order-2 md:order-1">
          {/* Advanced Vedic Analysis pill (matches Figma look in screenshot) */}
          <div className="inline-flex h-[30px] w-auto items-center gap-[10px] rounded-full border border-[#FF6F00] bg-[#FFF7ED] px-[16px] sm:h-[30px] md:h-[30px] lg:h-[30px] xl:h-[30px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF6F00]" />
            <span className="font-outfit text-[11px] font-bold uppercase leading-[14px] tracking-[0.16em] text-[#FF6F00] sm:text-[11px] md:text-[11px] lg:text-[11px] xl:text-[11px]">
              Advanced Vedic Analysis
            </span>
          </div>

          {/* Heading: reduced size, responsive across viewports */}
          <h1 className="mt-6 max-w-[520px] font-cinzel text-[24px] font-bold leading-[34px] text-[#2B2B2B] sm:text-[28px] sm:leading-[38px] md:max-w-[540px] md:text-[32px] md:leading-[42px] lg:text-[36px] lg:leading-[46px] xl:text-[40px] xl:leading-[50px]">
            <span className="block whitespace-nowrap">Palmistry Insights</span>
            <span className="block whitespace-nowrap text-[#FF6F00]">&amp; Personalized Guidance</span>
          </h1>

          {/* Subheading (Figma: Outfit 700, 18px, line-height 29.25px, color #4B5563) */}
          <p className="mt-6 font-outfit text-[16px] font-bold leading-[26px] text-[#4B5563] sm:text-[17px] sm:leading-[27px] md:w-[527px] md:text-[18px] md:leading-[29.25px] lg:text-[18px] lg:leading-[29.25px] xl:text-[18px] xl:leading-[29.25px]">
            Receive a detailed palm analysis designed to uncover patterns, strengths, and future
            possibilities — with optional name alignment support for deeper clarity.
          </p>

          <p className="mt-4 font-outfit text-[16px] font-bold leading-[26px] text-[#2B2B2B] sm:text-[17px] md:text-[18px]">
            Get Started Today – Plans from ₹750
          </p>

          <ul className="mt-3 flex flex-col gap-1 font-outfit text-[15px] font-semibold text-[#4B5563] sm:text-[16px] md:text-[17px]">
            <li className="flex items-center gap-2">
              <span className="text-[#FF6F00]">✔</span> Detailed Evaluation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FF6F00]">✔</span> 30+ Page Personalized Report
            </li>
          </ul>

          <div className="mt-8 mb-10 md:mb-0">
            <button
              type="button"
              onClick={() => document.getElementById("unlock-future")?.scrollIntoView({ behavior: "smooth" })}
              className="h-[62px] w-full rounded-[12px] bg-[linear-gradient(90deg,#FF6F00_0%,#FFA058_33%,#FF6F00_66%,#FFBD8B_100%)] px-6 font-outfit text-[14px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(254,215,170,1),0_10px_15px_-3px_rgba(254,215,170,1)] hover:opacity-95 sm:px-7 sm:text-[15px] md:w-[300px] md:px-8 md:text-[16px] lg:px-8 xl:px-8 xl:text-[16px]"
            >
              Analyze my hand now
            </button>
          </div>
        </Reveal>
      </div>
      
      {/* Hero Next Background Image - positioned absolutely at bottom */}
      <img
        src={heroNextBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-0 right-0 h-[120px] w-full select-none object-cover sm:-bottom-12 sm:h-[150px] md:-bottom-16 md:h-[180px] lg:-bottom-16 lg:h-[200px] xl:-bottom-16 xl:h-[220px]"
        draggable="false"
      />
    </section>
  );
}

function Services() {
  const cards = [
    {
      title: "Life Line Insights",
      desc: "A detailed look at your energy, health patterns, and life transitions.",
      bullets: [
        "Vitality levels and stamina indicators",
        "Line thickness and continuity analysis",
        "Supporting lines and protective signs",
        "Branches indicating opportunities and changes"
      ]
    },
    {
      title: "Fate Line Interpretation",
      desc: "Decode your career path, purpose, and long-term growth patterns.",
      bullets: [
        "Activation phase and major milestones",
        "Starting and ending points of the fate line",
        "Career shifts and directional branches"
      ]
    },
    {
      title: "Heart Line Understanding",
      desc: "Explore your emotional nature and relationship dynamics.",
      bullets: [
        "Emotional expression and sensitivity",
        "Relationship patterns and attachments",
        "Line depth, curvature, and end placement",
        "Simian line presence (if any)"
      ]
    },
    {
      title: "Mind Line Evaluation",
      desc: "Understand how you think, learn, and make decisions.",
      bullets: [
        "Cognitive strengths and mental approach",
        "Learning style and adaptability",
        "Line length, depth, start, and end patterns",
        "Decision-making and problem-solving tendencies"
      ]
    },
    {
      title: "Complete Mounts Assessment",
      desc: "A holistic review of all seven palm mounts to reveal key personality drivers.",
      bullets: [
        "Jupiter Mount – Leadership potential and ambition",
        "Sun Mount – Recognition, creativity, and success",
        "Mars Mount – Confidence, courage, and inner drive",
        "Saturn Mount – Discipline, responsibility, and wisdom"
      ]
    }
  ];

  return (
    <section className="relative pt-0">
      <img
          src={servicesBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center opacity-5"
          draggable="false"
        />
      {/* Outer container (Figma: bg #FFFFFF 80%, shadow 0 4 12 rgba(201,201,201,0.15)) */}
      <div className="relative mx-auto max-w-[1320px]  ">
        {/* Background image (reduced opacity) */}
        

        <div className="relative px-4 py-12 sm:px-6 md:px-10 md:py-[69px] lg:px-12 xl:px-16">
          {/* Inner container (Figma: px 32, gap 64) */}
          <div className="mx-auto flex flex-col items-center gap-10 md:gap-[64px]">
            <Reveal as="div" variant="up" className="text-center">
              {/* Heading (Cinzel 700, 36/40, #333) */}
              <h2 className="font-cinzel text-[30px] font-bold leading-[34px] text-[#333333] md:text-[36px] md:leading-[40px]">
                Preview of Your Detailed Report
              </h2>
              {/* Subheading (Outfit 400, 16/24, #6B7280) */}
              <p className="mt-3 font-outfit text-[16px] font-normal leading-[24px] text-[#6B7280]">
                Get a clear idea of the insights included in your comprehensive PDF analysis.
              </p>
            </Reveal>

            {/* lg: 6-col grid – row1: 3 cards (span 2 each), row2: 2 cards full width (span 3 each); equal row height */}
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-6 lg:auto-rows-fr lg:gap-x-10 lg:gap-y-8">
              {cards.map((c, idx) => (
                <Reveal
                  key={idx}
                  as="div"
                  variant="scale"
                  delay={idx * 90}
                  className={`flex h-full min-h-0 ${idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
                >
                  <ServiceCard title={c.title} desc={c.desc} bullets={c.bullets} />
                </Reveal>
              ))}
            </div>

            {/* What Your Report Covers + Contact (id=contact for footer link) */}
            <Reveal as="div" variant="up" delay={120} className="w-full">
              <div id="contact" className="w-full rounded-[12px] bg-[#FFFBF5] px-6 py-8 sm:px-8 md:px-12 md:py-10">
                <h3 className="font-cinzel text-center text-[22px] font-bold leading-[28px] text-[#FF6F00] sm:text-[24px] md:text-[26px] md:leading-[32px]">
                  What Your Personalized Palmistry Report Covers
                </h3>
                <p className="mt-3 font-outfit text-center text-[14px] font-normal leading-[22px] text-[#2B2B2B] sm:text-[15px] md:leading-[24px]">
                  A thoughtfully structured report featuring detailed insights across multiple aspects of your
                  life, including subtle palm lines, unique markings, health patterns, prosperity indicators, and
                  customized guidance — all tailored specifically to you
                </p>
                {/* WhatsApp us & Call us – same number as header */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://wa.me/919278190266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-outfit text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  >
                    WhatsApp us
                  </a>
                  <a
                    href="tel:+919278190266"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#333333] px-6 font-outfit text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  >
                    Call us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard(props) {
  return (
    <div className="group flex h-full min-h-0 w-full flex-col">
      {/* Card: same height as others; gradient border on hover */}
      <div className="flex h-full min-h-0 flex-col rounded-[16px] bg-[#FF6F00] p-[1px] transition-all duration-200 sm:bg-transparent group-hover:bg-[linear-gradient(90deg,#FF6F00_0%,#FFA058_33%,#FF6F00_66%,#FFBD8B_100%)]">
        <div className="relative flex min-h-0 w-full flex-1 flex-col items-start gap-3 overflow-hidden rounded-[15px] bg-white p-4 text-left shadow-[0_4px_20px_rgba(255,111,0,0.05)] backdrop-blur-[12px] transition-[box-shadow] duration-200 group-hover:shadow-[0_4px_20px_rgba(255,111,0,0.15)] sm:gap-4 sm:p-5 md:p-6">
          {/* Media block: fixed height so all cards align */}
          <div className="relative h-[100px] w-full shrink-0 overflow-hidden rounded-[12px] sm:h-[110px]">
            <img
              src={handsImg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain object-center"
              draggable="false"
            />
          </div>

          <h3 className="shrink-0 font-outfit text-base font-bold text-[#333333] sm:text-[18px]">
            {props.title}
          </h3>

          <p className="line-clamp-2 font-outfit text-xs leading-[20px] text-[#6B7280] sm:text-[13px] md:text-[14px] md:leading-[21px]">
            {props.desc}
          </p>

          {props.bullets && props.bullets.length > 0 ? (
            <ul className="min-h-0 flex-1 list-none space-y-1 overflow-hidden font-outfit text-xs leading-[18px] text-[#6B7280] sm:text-[13px] md:text-[14px] md:leading-[20px]">
              {props.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#FF6F00]" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Upload Palm Photo",
      desc: "Take a clear photo of your right palm (for men) or left palm (for women) using our built-in camera feature, or upload an existing image.",
      iconBg: "bg-[#FF6F00]",
      textColor: "text-white"
    },
    {
      number: "2",
      title: "Expert Analysis",
      desc: "Our experienced palmistry experts carefully study every line, mount, and marking using advanced analytical techniques.",
      iconBg: "bg-[#FF6F00]",
      textColor: "text-[#FF6F00]",
      iconTextBg: "bg-white"
    },
    {
      number: "3",
      title: "Receive PDF Report",
      desc: "Get your detailed 30+ page PDF report filled with personalized insights within 3–5 working days.",
      iconBg: "bg-[#333333]",
      textColor: "text-white"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFBF5] pt-12 md:py-20">
      {/* Background pattern (same as hero) */}
      <img
        src={bgColor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center opacity-30"
        draggable="false"
      />
      {/* Grid lines overlay */}
      <img
        src={linesBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center opacity-40"
        draggable="false"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 mb-16 md:mb-0">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Reveal as="div" variant="up" className="flex flex-col items-center gap-4 md:gap-6">
            {/* Heading */}
            <h2 className="text-center font-cinzel text-[28px] font-bold leading-[34px] text-[#2B2B2B] md:text-[42px] md:leading-[48px]">
              How Your Palm Reading Works
            </h2>

            {/* Subtitle */}
            <p className="text-center font-outfit text-sm font-normal leading-[22px] text-[#4B5563] md:text-base md:leading-[24px]">
              Three simple steps to unlock your destiny.
            </p>
          </Reveal>

          {/* Three step cards: wider on large screens, equal height, responsive */}
          <div className="mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
            {steps.map((step, idx) => (
              <Reveal key={idx} as="div" variant="scale" delay={idx * 100} className="h-full">
                <StepCard
                  number={step.number}
                  title={step.title}
                  desc={step.desc}
                  iconBg={step.iconBg}
                  textColor={step.textColor}
                  iconTextBg={step.iconTextBg}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, title, desc, iconBg, textColor, iconTextBg }) {
  return (
    <div className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm md:p-8">
      {/* Circular icon */}
      <div
        className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-white ${iconBg} shadow-lg`}
      >
        {iconTextBg ? (
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconTextBg}`}>
            <span className={`font-cinzel text-2xl font-bold ${textColor}`}>
              {number}
            </span>
          </div>
        ) : (
          <span className={`font-cinzel text-3xl font-bold ${textColor}`}>
            {number}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-6 shrink-0 font-outfit text-lg font-bold text-[#2B2B2B] md:text-xl">
        {title}
      </h3>

      {/* Description: flex-1 so card height stays uniform */}
      <p className="mt-3 flex-1 font-outfit text-sm leading-[22px] text-[#4B5563] md:text-[15px] md:leading-[24px]">
        {desc}
      </p>
    </div>
  );
}

function Grimoire() {
  const features = [
    "Relationship & Compatibility Insights",
    "Wealth & Financial Growth Trends",
    "Personalized Guidance & Remedies",
    "Career Progression Timeline ( Ages 25–50 )"
  ];

  return (
    <section className="grimoire-section-bg relative overflow-hidden py-16 md:py-24">
      <div className="relative mx-auto px-4">
        <div className="mx-auto flex max-w-6xl px-0 sm:px-16 flex-col items-center gap-8 md:flex-row md:items-center md:gap-[35px]">
          {/* Left side - Text content (Frame 6: 576px width, vertical, 27px gap) */}
          <Reveal
            as="div"
            variant="left"
            className="order-2 flex w-full flex-col gap-[27px] md:order-1"
          >
            {/* Heading (Figma: Cinzel 700, 36px, line-height 40px, #333333) */}
            <h2 className="font-cinzel text-[28px] font-bold leading-[32px] text-[#333333] md:text-[36px] md:leading-[40px]">
              Your Personal Life Blueprint
            </h2>

            {/* Description (Figma: Outfit 400, 18px, line-height 28px, #4B5563) */}
            <p className="font-outfit text-base font-normal leading-[24px] text-[#4B5563] md:text-[18px] md:leading-[28px]">
              This is more than a reading — it's a deeply personalized life document crafted from
              your unique palm patterns.
            </p>
            <p className="font-outfit text-base font-normal leading-[24px] text-[#4B5563] md:text-[18px] md:leading-[28px]">
              You receive a 30+ page professionally designed PDF, structured like a premium
              magazine profile of your life journey, strengths, and future phases.
            </p>

            {/* What You'll Discover Inside */}
            <h3 className="font-outfit text-base font-bold leading-[24px] text-[#333333] md:text-[18px] md:leading-[28px]">
              What You'll Discover Inside
            </h3>
            {/* Features list (Figma: Outfit 500, 16px, line-height 24px, #333333) */}
            <ul className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-[#FF6F00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-outfit text-[15px] font-medium leading-[22px] text-[#333333] md:text-[16px] md:leading-[24px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Analyze my hand now button – same style as hero */}
            <button
              type="button"
              onClick={() => document.getElementById("unlock-future")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-2 h-[62px] w-full rounded-[12px] bg-[linear-gradient(90deg,#FF6F00_0%,#FFA058_33%,#FF6F00_66%,#FFBD8B_100%)] px-6 font-outfit text-[14px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(254,215,170,1),0_10px_15px_-3px_rgba(254,215,170,1)] hover:opacity-95 sm:px-7 sm:text-[15px] md:w-[300px] md:px-8 md:text-[16px]"
            >
              Analyze my hand now
            </button>
          </Reveal>

          {/* Right side - Card with hands image (Frame 7: 633.59x781.64) */}
          <Reveal
            as="div"
            variant="right"
            delay={120}
            className="order-1 relative flex w-full items-center justify-center md:order-2"
          >
            {/* Card using Background+Border+Shadow.png as background */}
            <div
              className="relative flex h-full py-20 rounded-md w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${cardBg})`,
                transform: "rotate(-2deg)"
              }}
            >
              {/* Hands GIF image (393x537) */}
              <img
                src={handsGif}
                alt="Palmistry analysis"
                className="h-[537px] w-[393px] select-none object-contain"
                draggable="false"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pricing({ onSelectPlan }) {
  const plans = [
    {
      id: "Insight",
      label: "STARTER",
      name: "SILVER",
      subtitle: "Detailed Palm Reading Report",
      price: "₹750",
      paymentLink: "https://rzp.io/rzp/bXhG5rs",
      originalPrice: null,
      saveAmount: null,
      intro: null,
      features: [
        "Complete Palm Analysis",
        "Career & Financial Insights",
        "Love & Marriage Guidance",
        "Health Predictions",
        "1 Powerful Remedy"
      ],
      isFeatured: false
    },
    {
      id: "Destiny",
      label: "FULL ACCESS",
      name: "GOLD",
      subtitle: "Detailed Kundali Reading Report",
      price: "₹1,100",
      paymentLink: "https://rzp.io/rzp/ex8HM5N",
      originalPrice: "₹3,999",
      saveAmount: null,
      intro: null,
      features: [
        "Complete Horoscope Analysis",
        "Career & Business Guidance",
        "Marriage & Relationship Reading",
        "Wealth & Success Prediction",
        "Personalized Remedy"
      ],
      isFeatured: true
    },
    {
      id: "Oracle",
      label: "ADVANCED",
      name: "PLATINUM",
      subtitle: "Palm + Kundali Premium Reading",
      price: "₹2,500",
      paymentLink: "https://rzp.io/rzp/xLvIN6r",
      originalPrice: null,
      saveAmount: null,
      intro: null,
      features: [
        "Full Palm Reading",
        "Detailed Kundali Analysis",
        "Career, Marriage & Finance Guidance",
        "Health & Future Predictions",
        "Personalized Remedies",
        "FREE Personal Consultation Included"
      ],
      isFeatured: false
    }
  ];

  const handleSelectPlan = (plan) => {
    if (typeof onSelectPlan === "function") {
      onSelectPlan(plan);
    } else {
      sessionStorage.setItem("preselectedPlan", plan.id);
      document.getElementById("unlock-future")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1152px] px-4">
        {/* Title (Figma: Cinzel 700, 36px, line-height 40px, #333333, centered) */}
        <h2 className="text-center font-cinzel text-[28px] font-bold leading-[32px] text-[#333333] md:text-[36px] md:leading-[40px]">
          SELECT YOUR PLAN
        </h2>

        {/* Pricing Cards Container (1152px width, 436px height) */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} onSelect={() => handleSelectPlan(plan)} />
          ))}
        </div>

        {/* Bottom Info Section (Figma: Outfit 700, 18px, line-height 28px) */}
        <div className="mt-12 flex flex-col items-center justify-center gap-1 md:flex-row md:gap-1">
          <div className="flex items-center gap-2">
            <span className="font-outfit text-base font-bold leading-[22px] text-[#000000] md:text-[18px] md:leading-[28px]">
              🔒 100% Secure Payment
            </span>
          </div>
          <span className="hidden text-[#4B5563] md:block">•</span>
          <div className="flex items-center gap-2">
            <span className="font-outfit text-base font-bold leading-[22px] text-[#000000] md:text-[18px] md:leading-[28px]">
              📧 PDF Report via Email
            </span>
          </div>
          <span className="hidden text-[#4B5563] md:block">•</span>
          <div className="flex items-center gap-2">
            <span className="font-outfit text-base font-bold leading-[22px] text-[#000000] md:text-[18px] md:leading-[28px]">
              💬 WhatsApp Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, onSelect }) {
  return (
    <div
      className={`relative flex w-full flex-col overflow-hidden rounded-[16px] border bg-white shadow-sm backdrop-blur-[12px] md:w-[362.66px] ${
        plan.isFeatured
          ? "border-[2px] border-[#FF6F00] shadow-[0_25px_50px_-12px_rgba(255,237,213,1)]"
          : "border-[1px] border-[#F3F4F6] shadow-[0_4px_20px_rgba(255,111,0,0.05)]"
      }`}
    >
      {/* Header block – gradient, badge, plan name + subtitle */}
      <div className="relative rounded-t-[14px] bg-[linear-gradient(135deg,#FF6F00_0%,#FF8C42_100%)] px-5 pt-5 pb-4">
        {plan.isFeatured && (
          <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-[#2B2B2B] px-3 py-1">
            <span className="font-outfit text-xs font-semibold text-white">
              POPULAR
            </span>
          </div>
        )}
        <h3 className="font-cinzel text-[22px] font-bold leading-[28px] text-white md:text-[24px] md:leading-[30px]">
          {plan.name}
        </h3>
        <p className="mt-1 font-outfit text-[13px] font-medium text-white/95 md:text-[14px]">
          {plan.subtitle}
        </p>
      </div>

      {/* Body – price, save, intro, features */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-outfit text-[28px] font-bold leading-[32px] text-[#2B2B2B] md:text-[32px] md:leading-[38px]">
            {plan.price}
          </span>
          {plan.originalPrice && (
            <span className="font-outfit text-sm text-[#9CA3AF] line-through">
              {plan.originalPrice}
            </span>
          )}
        </div>
        {plan.saveAmount && (
          <p className="mt-1 font-outfit text-sm font-semibold text-[#059669]">
            Save {plan.saveAmount}
          </p>
        )}
        {plan.intro && (
          <p className="mt-3 font-outfit text-[13px] leading-[20px] text-[#4B5563] md:text-[14px] md:leading-[22px]">
            {plan.intro}
          </p>
        )}
        <ul className="mt-4 flex flex-1 flex-col gap-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6F00]" />
              <span className="font-outfit text-[13px] leading-[20px] text-[#333333] md:text-[14px] md:leading-[22px]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA – scrolls to form */}
        <button
          type="button"
          onClick={onSelect}
          className={`mt-6 h-12 w-full rounded-xl font-outfit text-sm font-semibold transition-colors ${
            plan.isFeatured
              ? "bg-[#FF6F00] text-white hover:bg-[#e65a00]"
              : "bg-[#333333] text-white hover:bg-[#1f2937]"
          }`}
        >
          <span className="block">{plan.name}</span>
          <span className="block text-[11px] font-medium opacity-90">{plan.subtitle}</span>
        </button>
      </div>
    </div>
  );
}

function LockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PdfIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .96 4.534.96 10.089c0 1.87.487 3.697 1.41 5.307L0 24l8.99-2.381a11.722 11.722 0 003.06.419h.001c6.554 0 11.89-5.335 11.89-11.889 0-3.176-1.24-6.165-3.495-8.411" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

// Testimonial images (WhatsApp-style); add more in assets and import + add here
const testimonialImages = [
  testimonialCard,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];

function CommunityTrust() {
  const images = testimonialImages.length > 0 ? testimonialImages : [testimonialCard];
  return (
    <section className="bg-[#FFFBF5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="text-center font-cinzel text-[28px] font-bold leading-[34px] text-[#2B2B2B] md:text-[36px] md:leading-[40px]">
          COMMUNITY TRUST
        </h2>

        {/* Testimonial images grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {images.map((src, idx) => (
            <div key={idx} className="w-full">
              <img
                src={src}
                alt={`Testimonial ${idx + 1}`}
                className="h-auto w-full rounded-lg object-cover shadow-sm"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      q: "Is my personal information safe?",
      a: "Yes. Your palm images and personal details are handled with strict confidentiality. We follow secure data-handling practices to ensure your information remains private and protected at all times."
    },
    {
      q: "How is my palm photo used?",
      a: "Your palm photo is used only for analysis by our palmistry experts. It is never shared, sold, or used for any purpose beyond generating your personalized report."
    },
    {
      q: "Can I access my data or report later?",
      a: "Yes. Once your report is delivered, you can download and securely access your PDF report anytime from your email or shared link."
    },
    {
      q: "How long does the palm reading process take?",
      a: "After you upload your palm image, our experts typically complete the analysis within 3–5 working days, after which your detailed PDF report is delivered."
    },
    {
      q: "What if I have more questions?",
      a: "You can always reach out to our support team via email or WhatsApp. We're happy to assist you before or after your report delivery."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        {/* Title */}
        <h2 className="text-center font-cinzel text-[28px] font-bold leading-[34px] text-[#2B2B2B] md:text-[36px] md:leading-[40px]">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-12 flex flex-col gap-4 max-w-xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#E5E7EB] bg-white transition-colors hover:bg-slate-50"
            >
              <button
                onClick={() => toggleQuestion(idx)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-outfit text-base font-medium text-[#2B2B2B] md:text-lg">
                  {faq.q}
                </span>
                <ChevronIcon
                  className={`h-5 w-5 shrink-0 text-[#4B5563] transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="border-t border-[#E5E7EB] p-4">
                  <p className="font-outfit text-sm leading-[22px] text-[#4B5563] md:text-base md:leading-[24px]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

/* ── Custom Date Picker Modal ── */
function DatePickerModal({ isOpen, onClose, onSelect, selectedDate }) {
  const [viewDate, setViewDate] = React.useState(() => {
    if (selectedDate) return new Date(selectedDate);
    const d = new Date();
    d.setFullYear(d.getFullYear() - 25);
    return d;
  });
  const [pickerMode, setPickerMode] = React.useState("days"); // "days" | "months" | "years"

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const monthNamesShort = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dayNames = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  // Generate calendar days
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendarDays = [];
  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: daysInPrevMonth - i, currentMonth: false });
  }
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, currentMonth: true });
  }
  // Next month leading days
  const remaining = 42 - calendarDays.length;
  for (let i = 1; i <= remaining; i++) {
    calendarDays.push({ day: i, currentMonth: false });
  }

  const isSelectedDay = (day) => {
    if (!selectedDate || !day.currentMonth) return false;
    const sel = new Date(selectedDate);
    return sel.getDate() === day.day && sel.getMonth() === currentMonth && sel.getFullYear() === currentYear;
  };

  const isToday = (day) => {
    if (!day.currentMonth) return false;
    const today = new Date();
    return today.getDate() === day.day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
  };

  const handleDayClick = (day) => {
    if (!day.currentMonth) return;
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day.day).padStart(2, "0")}`;
    onSelect(dateStr);
    onClose();
  };

  const navigateMonth = (dir) => {
    setViewDate(new Date(currentYear, currentMonth + dir, 1));
  };

  const navigateYear = (dir) => {
    setViewDate(new Date(currentYear + dir, currentMonth, 1));
  };

  // Year range for year picker (100 years back, 10 forward)
  const yearStart = currentYear - 60;
  const yearEnd = new Date().getFullYear();
  const years = [];
  for (let y = yearEnd; y >= yearStart; y--) years.push(y);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-4 w-full max-w-[360px] rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "datePickerSlideIn 0.25s ease-out" }}
      >
        {/* Header */}
        <div className="rounded-t-2xl bg-[linear-gradient(135deg,#FF6F00_0%,#FF8C42_100%)] px-5 py-4">
          <p className="font-outfit text-xs font-medium uppercase tracking-wider text-white/80">Select Date of Birth</p>
          <p className="mt-1 font-cinzel text-lg font-bold text-white">
            {selectedDate
              ? new Date(selectedDate + "T00:00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
              : "Choose a date"}
          </p>
        </div>

        <div className="p-4">
          {pickerMode === "days" && (
            <>
              {/* Month/Year navigation */}
              <div className="mb-3 flex items-center justify-between">
                <button type="button" onClick={() => navigateMonth(-1)} className="flex h-8 w-8 items-center justify-center rounded-full text-[#4B5563] transition-colors hover:bg-[#FFF7ED] hover:text-[#FF6F00]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <div className="flex items-center gap-1">
                  <button type="button" onClick={() => setPickerMode("months")} className="rounded-lg px-2 py-1 font-outfit text-sm font-semibold text-[#2B2B2B] transition-colors hover:bg-[#FFF7ED] hover:text-[#FF6F00]">
                    {monthNames[currentMonth]}
                  </button>
                  <button type="button" onClick={() => setPickerMode("years")} className="rounded-lg px-2 py-1 font-outfit text-sm font-semibold text-[#2B2B2B] transition-colors hover:bg-[#FFF7ED] hover:text-[#FF6F00]">
                    {currentYear}
                  </button>
                </div>
                <button type="button" onClick={() => navigateMonth(1)} className="flex h-8 w-8 items-center justify-center rounded-full text-[#4B5563] transition-colors hover:bg-[#FFF7ED] hover:text-[#FF6F00]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>

              {/* Day names */}
              <div className="mb-1 grid grid-cols-7 gap-0">
                {dayNames.map((d) => (
                  <div key={d} className="flex h-8 items-center justify-center font-outfit text-xs font-semibold text-[#9CA3AF]">{d}</div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-0">
                {calendarDays.map((day, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleDayClick(day)}
                    disabled={!day.currentMonth}
                    className={`flex h-9 w-full items-center justify-center rounded-full font-outfit text-sm transition-all ${
                      isSelectedDay(day)
                        ? "bg-[#FF6F00] font-bold text-white shadow-md shadow-[#FF6F00]/30"
                        : isToday(day)
                        ? "font-semibold text-[#FF6F00] ring-1 ring-[#FF6F00]/40"
                        : day.currentMonth
                        ? "text-[#2B2B2B] hover:bg-[#FFF7ED] hover:text-[#FF6F00]"
                        : "text-[#D1D5DB] cursor-default"
                    }`}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </>
          )}

          {pickerMode === "months" && (
            <div className="grid grid-cols-3 gap-2">
              {monthNamesShort.map((m, idx) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => { setViewDate(new Date(currentYear, idx, 1)); setPickerMode("days"); }}
                  className={`rounded-xl px-3 py-3 font-outfit text-sm font-medium transition-all ${
                    idx === currentMonth
                      ? "bg-[#FF6F00] text-white shadow-md shadow-[#FF6F00]/30"
                      : "text-[#2B2B2B] hover:bg-[#FFF7ED] hover:text-[#FF6F00]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}

          {pickerMode === "years" && (
            <div className="max-h-[280px] overflow-y-auto rounded-xl">
              <div className="grid grid-cols-4 gap-1 p-1">
                {years.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => { setViewDate(new Date(y, currentMonth, 1)); setPickerMode("days"); }}
                    className={`rounded-lg px-2 py-2 font-outfit text-sm font-medium transition-all ${
                      y === currentYear
                        ? "bg-[#FF6F00] text-white shadow-md shadow-[#FF6F00]/30"
                        : "text-[#2B2B2B] hover:bg-[#FFF7ED] hover:text-[#FF6F00]"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer buttons */}
          <div className="mt-4 flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 font-outfit text-sm font-semibold text-[#4B5563] transition-colors hover:bg-[#F3F4F6]">
              Cancel
            </button>
            <button type="button" onClick={() => { onSelect(""); onClose(); }} className="rounded-lg px-4 py-2 font-outfit text-sm font-semibold text-[#FF6F00] transition-colors hover:bg-[#FFF7ED]">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Custom Time Picker Modal ── */
function TimePickerModal({ isOpen, onClose, onSelect, selectedTime }) {
  const [hour, setHour] = React.useState(() => {
    if (selectedTime) {
      const parts = selectedTime.split(":");
      let h = parseInt(parts[0], 10);
      if (h === 0) return 12;
      if (h > 12) return h - 12;
      return h;
    }
    return 12;
  });
  const [minute, setMinute] = React.useState(() => {
    if (selectedTime) return parseInt(selectedTime.split(":")[1], 10);
    return 0;
  });
  const [period, setPeriod] = React.useState(() => {
    if (selectedTime) {
      const h = parseInt(selectedTime.split(":")[0], 10);
      return h >= 12 ? "PM" : "AM";
    }
    return "AM";
  });

  const scrollHourRef = React.useRef(null);
  const scrollMinRef = React.useRef(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleConfirm = () => {
    let h24 = hour;
    if (period === "AM" && hour === 12) h24 = 0;
    else if (period === "PM" && hour !== 12) h24 = hour + 12;
    const timeStr = `${String(h24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    onSelect(timeStr);
    onClose();
  };

  // Scroll active items into view on open
  React.useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        scrollHourRef.current?.querySelector(".time-active")?.scrollIntoView({ block: "center", behavior: "instant" });
        scrollMinRef.current?.querySelector(".time-active")?.scrollIntoView({ block: "center", behavior: "instant" });
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDisplay = () => {
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-4 w-full max-w-[340px] rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "datePickerSlideIn 0.25s ease-out" }}
      >
        {/* Header */}
        <div className="rounded-t-2xl bg-[linear-gradient(135deg,#FF6F00_0%,#FF8C42_100%)] px-5 py-4">
          <p className="font-outfit text-xs font-medium uppercase tracking-wider text-white/80">Select Time of Birth</p>
          <p className="mt-1 font-cinzel text-xl font-bold text-white">{formatDisplay()}</p>
        </div>

        {/* Time Selector */}
        <div className="p-4">
          <div className="flex items-stretch gap-2 rounded-xl bg-[#FFFBF5] p-3">
            {/* Hour Column */}
            <div className="flex-1">
              <p className="mb-2 text-center font-outfit text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Hour</p>
              <div ref={scrollHourRef} className="custom-time-scroll max-h-[180px] overflow-y-auto rounded-lg">
                {hours.map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHour(h)}
                    className={`${h === hour ? "time-active" : ""} flex w-full items-center justify-center rounded-lg py-2 font-outfit text-sm font-medium transition-all ${
                      h === hour
                        ? "bg-[#FF6F00] text-white shadow-md shadow-[#FF6F00]/30"
                        : "text-[#2B2B2B] hover:bg-[#FFF7ED] hover:text-[#FF6F00]"
                    }`}
                  >
                    {String(h).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center">
              <span className="font-cinzel text-xl font-bold text-[#FF6F00]">:</span>
            </div>

            {/* Minute Column */}
            <div className="flex-1">
              <p className="mb-2 text-center font-outfit text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">Min</p>
              <div ref={scrollMinRef} className="custom-time-scroll max-h-[180px] overflow-y-auto rounded-lg">
                {minutes.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMinute(m)}
                    className={`${m === minute ? "time-active" : ""} flex w-full items-center justify-center rounded-lg py-2 font-outfit text-sm font-medium transition-all ${
                      m === minute
                        ? "bg-[#FF6F00] text-white shadow-md shadow-[#FF6F00]/30"
                        : "text-[#2B2B2B] hover:bg-[#FFF7ED] hover:text-[#FF6F00]"
                    }`}
                  >
                    {String(m).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>

            {/* AM/PM */}
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="mb-2 text-center font-outfit text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">&nbsp;</p>
              {["AM", "PM"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`rounded-lg px-3 py-2 font-outfit text-sm font-bold transition-all ${
                    period === p
                      ? "bg-[#FF6F00] text-white shadow-md shadow-[#FF6F00]/30"
                      : "text-[#2B2B2B] hover:bg-[#FFF7ED] hover:text-[#FF6F00]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Footer buttons */}
          <div className="mt-4 flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 font-outfit text-sm font-semibold text-[#4B5563] transition-colors hover:bg-[#F3F4F6]">
              Cancel
            </button>
            <button type="button" onClick={handleConfirm} className="rounded-lg bg-[#FF6F00] px-5 py-2 font-outfit text-sm font-bold text-white shadow-md shadow-[#FF6F00]/30 transition-colors hover:bg-[#e65a00]">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnlockFuture({ preselectedPlanId, onClearPreselected }) {
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [addConsultation, setAddConsultation] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("+91 ");
  const [email, setEmail] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [timeOfBirth, setTimeOfBirth] = React.useState("");
  const [placeOfBirth, setPlaceOfBirth] = React.useState("");
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const [uploadedImage, setUploadedImage] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const packages = [
    { id: "Insight", name: "SILVER", price: 750, paymentLink: "https://rzp.io/rzp/bXhG5rs", consultationPaymentLink: "https://rzp.io/rzp/bXhG5rs" },
    { id: "Destiny", name: "GOLD", price: 1100, isBest: true, paymentLink: "https://rzp.io/rzp/ex8HM5N", consultationPaymentLink: "https://rzp.io/rzp/ex8HM5N" },
    { id: "Oracle", name: "PLATINUM", price: 2500, paymentLink: "https://rzp.io/rzp/xLvIN6r", includesConsultation: true }
  ];

  // Reset consultation toggle when switching packages
  const handlePackageSelect = (pkgId) => {
    setSelectedPackage(pkgId);
    const pkg = packages.find((p) => p.id === pkgId);
    if (pkg?.includesConsultation) {
      setAddConsultation(false);
    }
  };

  // Compute total price for display
  const selectedPkg = packages.find((p) => p.id === selectedPackage);
  const showConsultationOption = selectedPkg && !selectedPkg.includesConsultation;
  const totalPrice = selectedPkg
    ? selectedPkg.price + (showConsultationOption && addConsultation ? 1000 : 0)
    : null;

  const formatPrice = (num) => `₹${num.toLocaleString("en-IN")}`;

  // Format date for display
  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  };

  // Format time for display
  const formatTimeDisplay = (timeStr) => {
    if (!timeStr) return "";
    const [hh, mm] = timeStr.split(":");
    let h = parseInt(hh, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${String(h).padStart(2, "0")}:${mm} ${ampm}`;
  };

  // Phone number regex: Indian phone numbers (10 digits after +91)
  const phoneRegex = /^\+91\s?[6-9]\d{9}$/;
  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Always ensure +91 is present
    if (!value.startsWith("+91")) {
      setPhoneNumber("+91 ");
      return;
    }
    // Only allow numbers and spaces after +91
    const cleaned = value.replace(/[^\d\s+]/g, "");
    // Limit to 10 digits after +91
    const digits = cleaned.replace(/\+91\s?/g, "").replace(/\s/g, "");
    if (digits.length <= 10) {
      setPhoneNumber(cleaned);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        alert("Please upload a JPG or PNG image");
        return;
      }
      // Validate file size (2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size must be less than 2MB");
        return;
      }
      
      setUploadedImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date of birth
    if (!dateOfBirth) {
      alert("Please select your date of birth");
      return;
    }

    // Validate phone number
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid Indian phone number");
      return;
    }

    // Validate email if provided
    if (email && !emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate package selection
    if (!selectedPackage) {
      alert("Please select a package");
      return;
    }

    const pkg = packages.find((p) => p.id === selectedPackage);
    const paymentLink = (showConsultationOption && addConsultation)
      ? pkg?.consultationPaymentLink
      : pkg?.paymentLink;
    if (!paymentLink) {
      alert("Invalid package. Please try again.");
      return;
    }

    const form = e.target;
    const formDataObj = {
      fullName: form.fullName.value,
      dateOfBirth: dateOfBirth,
      timeOfBirth: timeOfBirth || "Not provided",
      placeOfBirth: placeOfBirth || "Not provided",
      phoneNumber: phoneNumber,
      email: email || "",
      package: selectedPackage,
      addConsultation: showConsultationOption && addConsultation,
      totalPrice: totalPrice
    };
    sessionStorage.setItem("payment_return_data", JSON.stringify(formDataObj));
    // Save palm image for admin email (sessionStorage ~5MB limit; keep base64 under ~1.2MB)
    if (uploadedImage && uploadedImage.size < 800000) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64 && typeof base64 === "string" && base64.length < 1600000)
          sessionStorage.setItem("payment_return_image", base64);
        setIsLoading(true);
        window.location.href = paymentLink;
      };
      reader.readAsDataURL(uploadedImage);
    } else {
      setIsLoading(true);
      window.location.href = paymentLink;
    }
  };

  // Sync from parent when user clicks a plan in Pricing (same page)
  React.useEffect(() => {
    if (preselectedPlanId && ["Insight", "Destiny", "Oracle"].includes(preselectedPlanId)) {
      setSelectedPackage(preselectedPlanId);
      if (typeof onClearPreselected === "function") onClearPreselected();
    }
  }, [preselectedPlanId, onClearPreselected]);

  // On mount: restore from sessionStorage (e.g. refresh or direct link with hash)
  React.useEffect(() => {
    const stored = sessionStorage.getItem("preselectedPlan");
    if (stored && ["Insight", "Destiny", "Oracle"].includes(stored)) {
      setSelectedPackage(stored);
      sessionStorage.removeItem("preselectedPlan");
    }
  }, []);

  return (
    <>
    <section id="unlock-future" className="relative overflow-hidden bg-[#333333] py-16 md:py-24">
      {/* Background blob images with continuous animation - positioned at edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-auto w-[350px] select-none opacity-50 md:w-[450px] lg:w-[550px]"
        style={{
          transform: "translate(-40%, -40%)"
        }}
      >
        <div
          style={{
            animation: "floatBlob 15s ease-in-out infinite"
          }}
        >
          <img
            src={back1}
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
            draggable="false"
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-0 top-0 h-auto w-[350px] select-none opacity-50 md:w-[450px] lg:w-[550px]"
        style={{
          transform: "translate(40%, -40%)"
        }}
      >
        <div
          style={{
            animation: "floatBlob 18s ease-in-out infinite reverse"
          }}
        >
          <img
            src={back2}
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
            draggable="false"
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-auto w-[350px] select-none opacity-50 md:w-[450px] lg:w-[550px]"
        style={{
          transform: "translate(-40%, 40%)"
        }}
      >
        <div
          style={{
            animation: "floatBlob 16s ease-in-out infinite"
          }}
        >
          <img
            src={back3}
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
            draggable="false"
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-auto w-[350px] select-none opacity-50 md:w-[450px] lg:w-[550px]"
        style={{
          transform: "translate(40%, 40%)"
        }}
      >
        <div
          style={{
            animation: "floatBlob 20s ease-in-out infinite reverse"
          }}
        >
          <img
            src={back4}
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
            draggable="false"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Form Card */}
        {!isSubmitted && (
        <div className="rounded-2xl bg-white p-6 shadow-xl md:p-10">
          {/* Title */}
          <div className="mb-6 text-center">
            <h2 className="font-cinzel text-[28px] font-bold leading-[34px] text-[#2B2B2B] md:text-[36px] md:leading-[40px]">
              UNLOCK YOUR FUTURE
            </h2>
            <p className="mt-2 font-outfit text-sm text-[#4B5563] md:text-base">
              Fill the form to securely receive your report.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="space-y-4">
              {/* Full Name - Full Width */}
              <div>
                <label className="mb-2 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                  FULL NAME <span className="text-[#FF6F00]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Aditi Sharma"
                  className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-outfit text-sm focus:border-[#FF6F00] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/20"
                  required
                />
              </div>

              {/* Date of Birth & Time of Birth - Two Columns */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Date of Birth - Custom Picker */}
                <div>
                  <label className="mb-2 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                    DATE OF BIRTH <span className="text-[#FF6F00]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowDatePicker(true)}
                    className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left font-outfit text-sm transition-colors ${
                      dateOfBirth
                        ? "border-[#FF6F00]/40 bg-[#FFF7ED] text-[#2B2B2B]"
                        : "border-[#E5E7EB] text-[#9CA3AF] hover:border-[#FF6F00]/40"
                    }`}
                  >
                    <span>{dateOfBirth ? formatDateDisplay(dateOfBirth) : "Select your date of birth"}</span>
                    <svg className="h-5 w-5 shrink-0 text-[#FF6F00]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </button>
                </div>

                {/* Time of Birth - Custom Picker */}
                <div>
                  <label className="mb-2 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                    TIME OF BIRTH <span className="font-normal text-[#9CA3AF]">(if known)</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowTimePicker(true)}
                    className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left font-outfit text-sm transition-colors ${
                      timeOfBirth
                        ? "border-[#FF6F00]/40 bg-[#FFF7ED] text-[#2B2B2B]"
                        : "border-[#E5E7EB] text-[#9CA3AF] hover:border-[#FF6F00]/40"
                    }`}
                  >
                    <span>{timeOfBirth ? formatTimeDisplay(timeOfBirth) : "Select time of birth"}</span>
                    <svg className="h-5 w-5 shrink-0 text-[#FF6F00]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Place of Birth - Full Width */}
              <div>
                <label className="mb-2 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                  PLACE OF BIRTH <span className="font-normal text-[#9CA3AF]">(optional)</span>
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={placeOfBirth}
                  onChange={(e) => setPlaceOfBirth(e.target.value)}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-outfit text-sm focus:border-[#FF6F00] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/20"
                />
              </div>

              {/* Phone Number & Email - Two Columns */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                    PHONE NUMBER <span className="text-[#FF6F00]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-outfit text-sm focus:border-[#FF6F00] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/20"
                    required
                    pattern="^\+91\s?[6-9]\d{9}$"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="aditi@email.com"
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 font-outfit text-sm focus:border-[#FF6F00] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/20"
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time Picker Modals */}
            <DatePickerModal
              isOpen={showDatePicker}
              onClose={() => setShowDatePicker(false)}
              onSelect={setDateOfBirth}
              selectedDate={dateOfBirth}
            />
            <TimePickerModal
              isOpen={showTimePicker}
              onClose={() => setShowTimePicker(false)}
              onSelect={setTimeOfBirth}
              selectedTime={timeOfBirth}
            />

            {/* Package Selection */}
            <div>
              <label className="mb-3 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                SELECTED PACKAGE <span className="text-[#FF6F00]">*</span>
              </label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {packages.map((pkg) => {
                  const isDestiny = pkg.id === "Destiny";
                  const isSelected = selectedPackage === pkg.id;
                  
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`relative overflow-hidden rounded-xl border-2 p-4 text-center transition-all ${
                        isSelected
                          ? "border-[#FF6F00] bg-[#FFF8E1] shadow-lg"
                          : isDestiny
                          ? "border-[#FF6F00] bg-white"
                          : "border-[#E5E7EB] bg-white hover:border-[#FF6F00]/50"
                      }`}
                    >
                      {pkg.isBest && (
                        <div className="absolute right-0 top-0 rounded-sm rounded-bl-lg bg-[#FF6F00] px-2 py-1 pl-4 pb-2">
                          <span className="font-outfit text-xs font-bold text-white">
                            BEST
                          </span>
                        </div>
                      )}
                      <div className="font-cinzel text-lg font-bold text-[#2B2B2B]">
                        {pkg.name}
                      </div>
                      <div className="mt-1 font-outfit text-base font-bold text-[#FF6F00]">
                        {formatPrice(pkg.price)}
                      </div>
                      {pkg.includesConsultation && (
                        <div className="mt-1 font-outfit text-xs font-medium text-[#059669]">
                          ✓ FREE Consultation Included
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Consultation Add-on Toggle */}
              {showConsultationOption && (
                <div className="mt-4 rounded-xl border-2 border-dashed border-[#FED7AA] bg-[#FFF7ED] p-4 transition-all">
                  <label className="flex cursor-pointer items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Custom Toggle Switch */}
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={addConsultation}
                          onChange={(e) => setAddConsultation(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`h-6 w-11 rounded-full transition-colors duration-200 ${
                            addConsultation ? "bg-[#FF6F00]" : "bg-[#D1D5DB]"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                              addConsultation ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-outfit text-sm font-semibold text-[#2B2B2B]">
                          Add Personal Consultation
                        </span>
                        <span className="ml-2 font-outfit text-sm font-bold text-[#FF6F00]">
                          +₹1,000
                        </span>
                      </div>
                    </div>
                    {addConsultation && (
                      <div className="flex flex-col items-end">
                        <span className="font-outfit text-xs text-[#6B7280]">Total</span>
                        <span className="font-outfit text-lg font-bold text-[#FF6F00]">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              )}
            </div>

            {/* Upload Right Palm */}
            <div>
              <label className="mb-3 block font-outfit text-sm font-semibold text-[#2B2B2B]">
                UPLOAD RIGHT PALM
              </label>
              {imagePreview ? (
                <div className="relative rounded-xl border-2 border-dashed border-[#FED7AA] bg-[#FFF7ED] p-4">
                  <img
                    src={imagePreview}
                    alt="Palm preview"
                    className="mx-auto h-auto max-h-[300px] w-auto rounded-lg object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setUploadedImage(null);
                      setImagePreview(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                    className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <p className="mt-2 text-center font-outfit text-xs text-[#6B7280]">
                    {uploadedImage?.name}
                  </p>
                </div>
              ) : (
                <div
                  onClick={handleUploadClick}
                  className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#FED7AA] bg-[#FFF7ED] p-8 transition-colors hover:bg-[#FFEDD5]"
                >
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6F00]">
                    <CameraIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-outfit text-sm font-semibold text-[#2B2B2B]">
                    Click to Upload
                  </p>
                  <p className="mt-1 font-outfit text-xs text-[#6B7280]">
                    JPG or PNG (Max 2MB)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleImageChange}
                    className="hidden"
                    id="palm-upload"
                  />
                </div>
              )}
            </div>

            {/* Price Summary */}
            {selectedPackage && (
              <div className="rounded-xl bg-[#F9FAFB] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-outfit text-sm text-[#4B5563]">
                    {selectedPkg?.name} Package
                  </span>
                  <span className="font-outfit text-sm text-[#2B2B2B]">
                    {formatPrice(selectedPkg?.price || 0)}
                  </span>
                </div>
                {showConsultationOption && addConsultation && (
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-outfit text-sm text-[#4B5563]">
                      Personal Consultation
                    </span>
                    <span className="font-outfit text-sm text-[#2B2B2B]">
                      +₹1,000
                    </span>
                  </div>
                )}
                {selectedPkg?.includesConsultation && (
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-outfit text-sm text-[#059669]">
                      Personal Consultation
                    </span>
                    <span className="font-outfit text-sm font-semibold text-[#059669]">
                      FREE
                    </span>
                  </div>
                )}
                <div className="mt-3 border-t border-[#E5E7EB] pt-3 flex items-center justify-between">
                  <span className="font-outfit text-base font-bold text-[#2B2B2B]">
                    Total
                  </span>
                  <span className="font-outfit text-xl font-bold text-[#FF6F00]">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6F00] px-6 py-4 font-outfit text-base font-semibold text-white transition-colors hover:bg-[#e65a00] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Proceed to Secure Payment — {totalPrice ? formatPrice(totalPrice) : ''}
                  <LockIcon className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
        )}
      </div>
      
    </section>
    
    {/* Thank You Page */}
    {isSubmitted && submittedData && (
      <ThankYouPage 
        data={submittedData} 
        onClose={() => {
          setIsSubmitted(false);
          setSubmittedData(null);
        }}
      />
    )}
    </>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function CameraIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx={12} cy={13} r={4} />
    </svg>
  );
}

function ThankYouRoute() {
  const navigate = useNavigate();
  const [data, setData] = React.useState(null);
  const emailsSentRef = React.useRef(false);

  React.useEffect(() => {
    const stored = sessionStorage.getItem("payment_return_data");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
      } catch {
        navigate("/", { replace: true });
      }
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // Send admin + user emails once when we have data (after payment return)
  React.useEffect(() => {
    if (!data || emailsSentRef.current) return;
    emailsSentRef.current = true;
    const imageBase64 = sessionStorage.getItem("payment_return_image") || null;
    sendPostPaymentEmails(data, imageBase64).catch((err) => {
      console.error("Post-payment emails failed:", err);
    });
  }, [data]);

  const handleClose = () => {
    sessionStorage.removeItem("payment_return_data");
    sessionStorage.removeItem("payment_return_image");
    navigate("/", { replace: true });
  };

  if (!data) return null;
  return <ThankYouPage data={data} onClose={handleClose} />;
}

function ThankYouPage({ data, onClose }) {
  const packageNames = {
    Insight: "Silver",
    Destiny: "Gold",
    Oracle: "Platinum"
  };

  const packagePrices = {
    Insight: "₹750",
    Destiny: "₹1,100",
    Oracle: "₹2,500"
  };

  const handleBackdropClick = (e) => {
    // Close only if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-row items-center justify-center gap-x-2 flex-wrap">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF8E1]">
              <svg
                className="h-12 w-12 text-[#FF6F00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-center font-cinzel text-[32px] font-bold leading-[40px] text-[#2B2B2B] md:text-[40px] md:leading-[48px]">
            Thank You ! 
          </h2>
          </div>
          

          {/* Subheading */}
          <p className="mb-8 text-center font-outfit text-base leading-[24px] text-[#4B5563] md:text-lg">
            Your palm reading request has been successfully submitted. We're excited to help you unlock your destiny!
          </p>

          {/* Summary Card */}
          <div className="mb-8 rounded-xl border-2 border-[#FF6F00] bg-[#FFF8E1] p-6 md:p-8">
            <h3 className="mb-4 font-cinzel text-xl font-bold text-[#2B2B2B] md:text-2xl">
              Request Summary
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#FF6F00]/20 pb-3">
                <span className="font-outfit text-sm font-semibold text-[#4B5563] md:text-base">
                  Selected Package:
                </span>
                <span className="font-outfit text-base font-bold text-[#FF6F00] md:text-lg">
                  {packageNames[data.package]} ({packagePrices[data.package]})
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[#FF6F00]/20 pb-3">
                <span className="font-outfit text-sm font-semibold text-[#4B5563] md:text-base">
                  Date of Birth:
                </span>
                <span className="font-outfit text-base text-[#2B2B2B] md:text-lg">
                  {data.dateOfBirth}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-outfit text-sm font-semibold text-[#4B5563] md:text-base">
                  Contact:
                </span>
                <span className="font-outfit text-base text-[#2B2B2B] md:text-lg">
                  {data.phoneNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8 rounded-xl bg-[#FFFBF5] p-6 md:p-8">
            <h3 className="mb-4 font-cinzel text-xl font-bold text-[#2B2B2B] md:text-2xl">
              What Happens Next?
            </h3>
            <ol className="space-y-3 font-outfit text-sm leading-[22px] text-[#4B5563] md:text-base md:leading-[24px]">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6F00] font-outfit text-xs font-bold text-white">
                  1
                </span>
                <span>Our expert astrologer will analyze your palm image and birth details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6F00] font-outfit text-xs font-bold text-white">
                  2
                </span>
                <span>A comprehensive report will be prepared based on your selected package</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6F00] font-outfit text-xs font-bold text-white">
                  3
                </span>
                <span>
                  {data.email
                    ? `You'll receive your personalized report via email (${data.email}) within 24-48 hours`
                    : "You'll receive your personalized report via WhatsApp within 24-48 hours"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6F00] font-outfit text-xs font-bold text-white">
                  4
                </span>
                <span>For any queries, feel free to contact us via WhatsApp</span>
              </li>
            </ol>
          </div>

          
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#333333] py-12 md:py-16">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#1F2937]"></div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1F2937]"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left Section - Branding */}
          <div className="flex flex-col">
            <h3 className="font-cinzel text-[24px] font-bold leading-[32px] text-[#FF6F00] md:text-[32px] md:leading-[40px]">
              ASTROLOGER SATYAM AWASTHI
            </h3>
            <p className="mt-2 font-outfit text-sm leading-[20px] text-[#9CA3AF] md:text-base md:leading-[24px]">
              Designed &amp; developed by{" "}
              <a
                href="http://dbuzzz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6F00] hover:underline"
              >
                Dbuzzz
              </a>
              .
            </p>
          </div>

          {/* Center-Right Section - Links and Social Icons */}
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6">
              <Link
                to="/privacy"
                className="font-outfit text-sm leading-[20px] text-[#9CA3AF] transition-colors hover:text-white md:text-base"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="font-outfit text-sm leading-[20px] text-[#9CA3AF] transition-colors hover:text-white md:text-base"
              >
                Terms
              </Link>
              <Link
                to="/refunds"
                className="font-outfit text-sm leading-[20px] text-[#9CA3AF] transition-colors hover:text-white md:text-base"
              >
                Refunds
              </Link>
              <Link
                to="/#contact"
                className="font-outfit text-sm leading-[20px] text-[#9CA3AF] transition-colors hover:text-white md:text-base"
              >
                Contact us
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/satyamawasthiji?fbclid=IwY2xjawP9CNhleHRuA2FlbQIxMABicmlkETJISFBUVzN4RUNoODZkTGhIc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoekCWA-tlKefcXhX5QSqSyf0xuEqvmHH8fIM5_fwlhUTEXgpCSidsPkaq5u_aem_RSAn0ozne93Uby3S-c1KgA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <img
                  src={instaIcon}
                  alt="Instagram"
                  className="h-full w-full object-contain"
                  draggable="false"
                />
              </a>
              <a
                href="https://www.facebook.com/shashtrisatyam.awasthi?rdid=uPZkUwv6Q5J86tEY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EAoe8Ra4G%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <img
                  src={fbIcon}
                  alt="Facebook"
                  className="h-full w-full object-contain"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 h-[1px] bg-[#4B5563]"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-outfit text-xs leading-[16px] text-[#9CA3AF] md:text-sm md:leading-[20px]">
            ©2025 Astrologer Satyam Awasthi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12 18 19.5 12 19.5 2.25 12 2.25 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}


