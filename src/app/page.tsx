"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealWrapper from "@/components/RevealWrapper";

export default function Home() {
  // Testimonials section review data
  const googleReviews = [
    {
      name: "Christine - 52 ans",
      text: "Grâce à une pratique régulière avec Anne, j'ai retrouvé toute la mobilité de mon dos, un gainage profond et une sensation durable de légèreté au quotidien. Les corrections sont d'une précision remarquable !",
      rating: 5,
    },
    {
      name: "Marc - 46 ans",
      text: "Les cours sur Reformer en petit groupe de 4 sont exceptionnels. Anne prend le temps d'ajuster chaque posture pour que le travail musculaire soit ciblé, intense et parfaitement sécuritaire.",
      rating: 5,
    },
    {
      name: "Hélène - 58 ans",
      text: "La joie de pratiquer en groupe sur tapis avec l'énergie bienveillante d'Anne ! L'approche de Gasquet pour les abdominaux et le dos change tout. C'est devenu mon rendez-vous vital chaque semaine.",
      rating: 5,
    },
  ];


  // Slideshow image index state for Section 4
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const slideshowImages = [
    "/images/anne/portrait.jpg",
    "/images/anne/portrait.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideshowIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const marqueeText = "Alignement — Respiration — Force Profonde — Mobilité — Équilibre — Méthode de Gasquet — Polestar Pilates — Versailles — ";

  // Curated authentic images for the visual gallery (Section 10)
  const instagramImages = [
    { src: "/images/anne/reformer.jpg", alt: "Reformer Pilates Joseph Pilates" },
    { src: "/images/anne/chaircombo.jpg", alt: "Combo Chair et travail postural" },
    { src: "/images/anne/springboard_chair.jpg", alt: "Springboard et Wunda Chair" },
    { src: "/images/anne/allegro_stretch.jpg", alt: "Étirements et travail d'équilibre" },
    { src: "/images/anne/push_through_bar.png", alt: "Push Through Bar et Springboard" },
    { src: "/images/anne/pilates_arc_2.jpg", alt: "Pilates Arc sur Reformer" },
  ];

  return (
    <main className="flex-1 w-full bg-cream relative">
      
      {/* SECTION 1: Hero Cover (Obsidian Dark) */}
      <section className="min-h-screen w-full bg-obsidian relative overflow-hidden flex items-center justify-center">
        {/* Subtle dark gradient overlay for optimal readability & rich shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85 z-10 pointer-events-none" />
        
        {/* Full-width Hero Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/anne/machines.jpg"
            alt="Studio Pilates machines à Versailles, Anne Pilates"
            fill
            className="object-cover opacity-50 transition-transform duration-[4000ms] ease-out scale-102 hover:scale-105"
            sizes="100vw"
            priority
          />
        </div>

        {/* Centered Premium Typography Overlay */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl pointer-events-auto flex flex-col items-center"
          >
            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.35em] text-slate-light uppercase mb-6 block">
              [ PILATES DE PRÉCISION &amp; MÉTHODE DE GASQUET · VERSAILLES ]
            </span>
            
            <h1 className="flex flex-col items-center mb-8 select-none w-full">
              <span className="font-sans font-light text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] text-white/50 uppercase mb-4 block pl-[0.4em]">
                MÉTHODE &amp; POSTURE
              </span>
              <span className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.12em] sm:tracking-[0.16em] text-white leading-none block uppercase whitespace-nowrap pl-[0.12em] sm:pl-[0.16em]">
                ANNE PILATES
              </span>
              <span className="h-[1px] w-16 bg-slate-light/40 mt-8 block" />
            </h1>

            <p className="text-xs sm:text-sm md:text-base font-sans font-light text-white/85 tracking-wide max-w-xl mx-auto leading-[1.8] mb-12">
              Professeur certifiée Polestar Studio, Body Control Pilates Londres &amp; Institut de Gasquet.<br className="hidden sm:inline" />
              Sculptez votre corps avec précision, libérez votre dos et retrouvez votre <em className="font-serif italic text-slate-light font-light not-italic">alignement naturel</em> à Versailles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="#cours"
                className="bg-slate hover:bg-slate-dark text-white border border-slate hover:border-slate-dark text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.25em] uppercase px-7 py-3.5 rounded-full transition-all duration-500 hover:scale-102 hover:shadow-lg text-center"
              >
                DÉCOUVRIR LES COURS
              </Link>
              <Link
                href="#contact"
                className="bg-transparent hover:bg-white text-white hover:text-obsidian border border-white/25 hover:border-white text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.25em] uppercase px-7 py-3.5 rounded-full transition-all duration-500 hover:scale-102 text-center"
              >
                RÉSERVER UNE SÉANCE
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Intro & 3 Services Columns (Warm Sand) */}
      <section id="cours" className="py-28 md:py-36 bg-off-white relative border-b border-slate/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <RevealWrapper>
            <div className="text-center max-w-4xl mx-auto mb-28">
              <span className="text-[10px] font-sans tracking-[0.25em] text-slate uppercase mb-5 block">[ L&apos;EXCELLENCE DU MOUVEMENT ]</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl tracking-wide text-charcoal leading-[1.15]">
                Pour un corps fort, souple et <em className="font-serif italic text-slate">aligné</em>
              </h2>
              <p className="mt-8 text-base md:text-lg font-sans font-light text-charcoal/75 leading-relaxed max-w-2xl mx-auto">
                Diplômée Polestar Studio et Body Control Pilates, Anne vous accueille à Versailles pour une pratique personnalisée, rigoureuse et bienveillante. Au sol sur tapis ou sur machines dédiées, chaque séance est pensée pour rééquilibrer votre posture, gainer votre sangle abdominale sans hyperpression et redonner à votre dos toute sa vitalité.
              </p>
            </div>
          </RevealWrapper>

          {/* Staggered 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-16 pt-4 pb-16">
            
            {/* Card 1 - Pilates au Sol (Matwork) */}
            <RevealWrapper>
              <div className="flex flex-col items-start w-full group">
                <div className="relative w-full aspect-[3425/5135] rounded-[50px] overflow-hidden mb-6 shadow-sm border border-charcoal/5">
                  <Image
                    src="/images/anne/physioball_group.jpg"
                    alt="Cours collectifs Pilates sur tapis à Versailles"
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  {/* Image Label Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex items-end p-8">
                    <h3 className="font-serif italic text-2xl md:text-3xl text-white font-light">Pilates au Sol &amp; Matwork</h3>
                  </div>
                </div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-slate font-medium mb-3">Énergie du groupe &amp; Posture</h4>
                <p className="font-sans font-light text-[14px] text-charcoal/70 leading-relaxed mb-6">
                  Des cours collectifs sur tapis dynamiques et bienveillants avec petit matériel (ballons, cercles, arcs). Un travail en profondeur pour tonifier le centre et pratiquer avec l&apos;émulation du groupe.
                </p>
                <Link
                  href="#planning"
                  className="text-[10px] font-sans font-medium tracking-[0.22em] text-charcoal hover:text-slate uppercase pb-1 border-b border-charcoal/20 hover:border-slate transition-all duration-300"
                >
                  VOIR LES HORAIRES
                </Link>
              </div>
            </RevealWrapper>

            {/* Card 2 - Studio Machines & Reformer (Staggered Downward: mt-10 on desktop) */}
            <div className="md:translate-y-10">
              <RevealWrapper>
                <div className="flex flex-col items-start w-full group">
                  <div className="relative w-full aspect-[1147/2223] rounded-[50px] overflow-hidden mb-6 shadow-sm border border-charcoal/5">
                    <Image
                      src="/images/anne/reformer_tower_chair.jpg"
                      alt="Reformer et appareils de Pilates studio"
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 30vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex items-end p-8">
                      <h3 className="font-serif italic text-2xl md:text-3xl text-white font-light">Machines &amp; Reformer</h3>
                    </div>
                  </div>
                  <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-slate font-medium mb-3">Précision &amp; Résistance assistée</h4>
                  <p className="font-sans font-light text-[14px] text-charcoal/70 leading-relaxed mb-6">
                    Pratiquez sur Reformer, Tower, Wunda Chair et Springboard. En petits groupes de 4 élèves maximum, duo ou solo, les ressorts guident et assistent le mouvement pour une justesse absolue.
                  </p>
                  <Link
                    href="#studio"
                    className="text-[10px] font-sans font-medium tracking-[0.22em] text-charcoal hover:text-slate uppercase pb-1 border-b border-charcoal/20 hover:border-slate transition-all duration-300"
                  >
                    DÉCOUVRIR LE STUDIO
                  </Link>
                </div>
              </RevealWrapper>
            </div>

            {/* Card 3 - Coaching Privé & Adapté (Align top) */}
            <RevealWrapper>
              <div className="flex flex-col items-start w-full group">
                <div className="relative w-full aspect-[2320/3072] rounded-[50px] overflow-hidden mb-6 shadow-sm border border-charcoal/5">
                  <Image
                    src="/images/anne/pilates_arc_1.jpg"
                    alt="Coaching privé Pilates et travail d'équilibre"
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 30vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex items-end p-8">
                    <h3 className="font-serif italic text-2xl md:text-3xl text-white font-light">Coaching Privé &amp; Seniors</h3>
                  </div>
                </div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-slate font-medium mb-3">Sur-mesure &amp; Récupération</h4>
                <p className="font-sans font-light text-[14px] text-charcoal/70 leading-relaxed mb-6">
                  Un accompagnement 100% individualisé pour répondre à vos besoins précis : rééducation et mobilité du dos, méthode de Gasquet, perfectionnement ou séances seniors axées sur l&apos;équilibre.
                </p>
                <Link
                  href="#contact"
                  className="text-[10px] font-sans font-medium tracking-[0.22em] text-charcoal hover:text-slate uppercase pb-1 border-b border-charcoal/20 hover:border-slate transition-all duration-300"
                >
                  PRENDRE RENDEZ-VOUS
                </Link>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      {/* SECTION 3: Large Citation (Obsidian Dark) */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-28 overflow-hidden bg-obsidian">
        {/* Background Image with precise overlay */}
        <Image
          src="/images/anne/machines.jpg"
          alt="Studio Anne Pilates à Versailles"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        
        {/* Soft shadow background quote mark */}
        <span className="absolute top-8 left-16 text-white/[0.03] text-[26rem] font-serif select-none pointer-events-none leading-none">“</span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <RevealWrapper>
            <h2 className="font-serif italic font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide leading-[1.3] max-w-4xl mx-auto">
              « Vous ne travaillez pas sur l&apos;appareil mais avec l&apos;appareil. <br className="hidden md:inline" />
              Il est votre partenaire pour un <span className="text-slate-light font-light not-italic">mouvement plus juste. »</span>
            </h2>
            
            <p className="font-sans text-[11px] tracking-[0.25em] text-slate-light uppercase mt-6">
              — Clara &amp; Joseph Pilates
            </p>
            
            {/* Minimal Horizontal Divider */}
            <div className="w-12 h-[1px] bg-slate-light/30 my-14 mx-auto" />

            {/* Horizontal Footer Tags */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 items-center justify-center text-[10px] font-sans tracking-[0.25em] text-white/60">
              <span className="uppercase">ALIGNEMENT</span>
              <span className="hidden sm:inline text-slate-light/40">•</span>
              <span className="uppercase">MOBILITÉ</span>
              <span className="hidden sm:inline text-slate-light/40">•</span>
              <span className="uppercase">RESPIRATION</span>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* SECTION 4: Founder Anne Burger (Cream) */}
      <section id="approche" className="py-28 md:py-36 bg-cream border-b border-slate/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[repeat(24,minmax(0,1fr))] gap-y-16 lg:gap-x-0 items-center">
            
            {/* Left Column: Premium Fading Slideshow Image (col 5 to 13) */}
            <div className="col-span-1 lg:col-start-5 lg:col-span-9 w-full">
              <RevealWrapper>
                <div className="relative w-full aspect-square rounded-[50px] overflow-hidden shadow-md border border-charcoal/5 bg-off-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slideshowIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slideshowImages[slideshowIndex]}
                        alt="Anne Burger, professeur de Pilates à Versailles"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </RevealWrapper>
            </div>

            {/* Right Column: Story Copy (col 15 to 23) */}
            <div className="col-span-1 lg:col-start-15 lg:col-span-9 flex flex-col items-start justify-center">
              <RevealWrapper>
                <span className="text-[10px] font-sans tracking-[0.25em] text-slate uppercase mb-5 block">[ LA FONDATRICE &amp; PROFESSEURE ]</span>
                <h2 className="font-sans font-light text-4xl md:text-5xl tracking-wide text-charcoal mb-8 leading-[1.15]">
                  Rencontrez <em className="font-serif italic text-slate">Anne Burger</em>
                </h2>
                
                <p className="text-base md:text-lg font-sans font-light text-charcoal/75 leading-relaxed mb-6">
                  Ingénieure de formation, la mécanique du corps a toujours fasciné Anne. Dès l&apos;enfance, sa passion pour le dressage équestre lui a fait comprendre l&apos;importance primordiale de l&apos;alignement, de l&apos;équilibre et du développement harmonieux du corps.
                </p>
                
                <p className="text-base md:text-lg font-sans font-light text-charcoal/75 leading-relaxed mb-10">
                  Suite à un accident, c&apos;est sur les conseils de sa kinésithérapeute qu&apos;elle se tourne vers le Pilates et découvre comment retrouver un dos fort et mobile tout en se libérant des tensions. Formée à Londres chez Body Control Pilates pour le travail au sol (Matwork), certifiée Polestar Studio pour le répertoire machines complet (Reformer, Cadillac, Chaise, Barrel) et diplômée de l&apos;Institut de Gasquet pour le travail des abdominaux protecteurs, elle transmet aujourd&apos;hui sa passion avec bienveillance à Versailles.
                </p>
                
                <Link
                  href="#contact"
                  className="bg-transparent hover:bg-slate text-charcoal hover:text-white border border-slate/30 hover:border-slate text-[10px] font-sans font-medium tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-500 inline-block shadow-xs"
                >
                  CONTACTER ANNE
                </Link>
              </RevealWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Google Reviews & Feedback (Warm Sand) */}
      <section className="py-28 bg-off-white border-b border-slate/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <RevealWrapper>
            <div className="text-center mb-24">
              <span className="text-[10px] font-sans tracking-[0.25em] text-slate uppercase mb-5 block">[ PAROLES D&apos;ÉLÈVES ]</span>
              <h2 className="font-sans font-light text-3xl md:text-4xl tracking-wide text-charcoal mb-5">
                Ce que nos élèves <em className="font-serif italic text-slate">ressentent</em>
              </h2>
              <div className="flex items-center justify-center space-x-2 mt-4 text-[10px] font-sans tracking-[0.2em] text-charcoal/60 uppercase">
                <span>Séances certifiées &amp; bienveillantes</span>
                <span className="text-slate">★★★★★</span>
                <span>à Versailles</span>
              </div>
            </div>
          </RevealWrapper>

          {/* Premium Review Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((review) => (
              <RevealWrapper key={review.name}>
                <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm border border-charcoal/5 flex flex-col justify-between h-full hover:shadow-md hover:border-slate/30 transition-all duration-400">
                  <div>
                    {/* Stars and Google Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex space-x-1">
                        {Array.from({ length: review.rating }).map((_, idx) => (
                          <svg
                            key={idx}
                            className="w-3.5 h-3.5 fill-slate"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Google G logo */}
                      <svg className="w-4 h-4 opacity-75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4E5F70"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#687D94"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#8FA4BC"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#374654"
                        />
                      </svg>
                    </div>
                    
                    <p className="font-sans font-light text-[14px] text-charcoal/80 leading-relaxed mb-8 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <span className="font-sans font-medium text-[10px] tracking-[0.18em] text-slate uppercase block">
                    — {review.name}
                  </span>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 7: Restore your flow / Studio & Lieux (Cream - Overlapping Layout) */}
      <section id="studio" className="py-28 md:py-36 bg-cream border-b border-slate/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[repeat(24,minmax(0,1fr))] gap-y-16 lg:gap-x-0 items-center">
            
            {/* Left Column: Overlapping Offset Images (col 1 to 12) */}
            <div className="col-span-1 lg:col-start-1 lg:col-span-12 relative w-full h-[400px] sm:h-[500px] md:h-[580px]">
              <RevealWrapper>
                {/* Back Image (Larger) */}
                <div className="absolute top-0 left-0 w-[91.6%] h-[80%] rounded-[50px] overflow-hidden shadow-sm border border-charcoal/5">
                  <Image
                    src="/images/anne/reformer_tower_chair.jpg"
                    alt="Studio Reformer et Tower à Versailles"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                </div>
                
                {/* Front Image (Smaller, overlapping bottom-right corner) */}
                <div className="absolute top-[60%] left-[66.6%] w-[33.3%] h-[40%] rounded-[50px] overflow-hidden border-4 border-cream shadow-md z-10">
                  <Image
                    src="/images/anne/springboard_chair.jpg"
                    alt="Wunda Chair et Springboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    loading="lazy"
                  />
                </div>
              </RevealWrapper>
            </div>

            {/* Right Column: Editorial Text (col 15 to 23) */}
            <div className="col-span-1 lg:col-start-15 lg:col-span-9 flex flex-col items-start pr-0">
              <RevealWrapper>
                <span className="text-[10px] font-sans tracking-[0.25em] text-slate uppercase mb-5 block">[ LIEUX &amp; ESPACES DE PRATIQUE ]</span>
                <h2 className="font-sans font-light text-4xl md:text-5xl tracking-wide text-charcoal mb-8 leading-[1.15]">
                  Un cadre privilégié <em className="font-serif italic text-slate">à Versailles</em>
                </h2>
                
                <p className="text-base md:text-lg font-sans font-light text-charcoal/75 leading-relaxed mb-10">
                  Pour vous offrir les meilleures conditions d&apos;apprentissage et de progression, Anne vous accueille dans différents lieux dédiés à Versailles : un studio équipé d&apos;appareils complets au 16 rue Champ Lagarde (cours Reformer à 4, individuels et duos), ainsi que dans des salles calmes et lumineuses au 5bis rue Sainte Adélaïde, 52 rue Saint Charles (Maison St Charles) et rue Henri Simon pour les séances au sol et seniors.
                </p>
                
                <Link
                  href="#planning"
                  className="bg-transparent hover:bg-slate text-charcoal hover:text-white border border-slate/30 hover:border-slate text-[10px] font-sans font-medium tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-500 inline-block shadow-xs"
                >
                  VOIR LES LIEUX &amp; HORAIRES
                </Link>
              </RevealWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: Formules, Planning & Tarifs (Warm Sand) */}
      <section id="planning" className="py-28 md:py-36 bg-off-white border-b border-slate/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <RevealWrapper>
            <div className="text-center mb-20">
              <span className="text-[10px] font-sans tracking-[0.25em] text-slate uppercase mb-5 block">[ FORMULES &amp; TARIFS ]</span>
              <h2 className="font-sans font-light text-3xl md:text-4xl tracking-wide text-charcoal mb-4">
                Des cours adaptés à <em className="font-serif italic text-slate">votre rythme</em>
              </h2>
            </div>
          </RevealWrapper>

          {/* List of 4 Large Column blocks stacked vertically in the center */}
          <div className="max-w-3xl mx-auto flex flex-col space-y-8">
            
            {/* Block 1 */}
            <RevealWrapper>
              <div className="group relative w-full h-[180px] rounded-[30px] overflow-hidden flex items-center p-8 border border-charcoal/5 shadow-sm cursor-pointer">
                <Image
                  src="/images/anne/physioball_group.jpg"
                  alt="Cours collectifs tapis Versailles"
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103 opacity-90"
                  sizes="100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15 group-hover:from-black/55 transition-all duration-300" />
                <div className="relative z-10 text-white flex justify-between w-full items-center">
                  <div>
                    <h3 className="font-sans font-normal text-xl tracking-wider uppercase text-white mb-1">Cours Collectifs Tapis</h3>
                    <p className="text-[10px] font-sans text-slate-soft tracking-widest uppercase">[ À PARTIR DE 14€ / SÉANCE* · MATWORK ]</p>
                  </div>
                  <span className="text-lg text-white/60 group-hover:text-slate-light group-hover:translate-x-2 transition-all duration-300">→</span>
                </div>
              </div>
            </RevealWrapper>

            {/* Block 2 */}
            <RevealWrapper>
              <div className="group relative w-full h-[180px] rounded-[30px] overflow-hidden flex items-center p-8 border border-charcoal/5 shadow-sm cursor-pointer">
                <Image
                  src="/images/anne/reformer.jpg"
                  alt="Cours Reformer petit groupe Versailles"
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103 opacity-90"
                  sizes="100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15 group-hover:from-black/55 transition-all duration-300" />
                <div className="relative z-10 text-white flex justify-between w-full items-center">
                  <div>
                    <h3 className="font-sans font-normal text-xl tracking-wider uppercase text-white mb-1">Cours Collectifs sur Reformer</h3>
                    <p className="text-[10px] font-sans text-slate-soft tracking-widest uppercase">[ À PARTIR DE 35€ / SÉANCE* · 4 PLACES MAX ]</p>
                  </div>
                  <span className="text-lg text-white/60 group-hover:text-slate-light group-hover:translate-x-2 transition-all duration-300">→</span>
                </div>
              </div>
            </RevealWrapper>

            {/* Block 3 */}
            <RevealWrapper>
              <div className="group relative w-full h-[180px] rounded-[30px] overflow-hidden flex items-center p-8 border border-charcoal/5 shadow-sm cursor-pointer">
                <Image
                  src="/images/anne/chaircombo.jpg"
                  alt="Cours individuel machine Versailles"
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103 opacity-90"
                  sizes="100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15 group-hover:from-black/55 transition-all duration-300" />
                <div className="relative z-10 text-white flex justify-between w-full items-center">
                  <div>
                    <h3 className="font-sans font-normal text-xl tracking-wider uppercase text-white mb-1">Cours Individuels Machines</h3>
                    <p className="text-[10px] font-sans text-slate-soft tracking-widest uppercase">[ 50€ / SÉANCE · 100% SUR-MESURE ]</p>
                  </div>
                  <span className="text-lg text-white/60 group-hover:text-slate-light group-hover:translate-x-2 transition-all duration-300">→</span>
                </div>
              </div>
            </RevealWrapper>

            {/* Block 4 */}
            <RevealWrapper>
              <div className="group relative w-full h-[180px] rounded-[30px] overflow-hidden flex items-center p-8 border border-charcoal/5 shadow-sm cursor-pointer">
                <Image
                  src="/images/anne/allegro_stretch.jpg"
                  alt="Cours duo Pilates machines Versailles"
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out scale-100 group-hover:scale-103 opacity-90"
                  sizes="100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15 group-hover:from-black/55 transition-all duration-300" />
                <div className="relative z-10 text-white flex justify-between w-full items-center">
                  <div>
                    <h3 className="font-sans font-normal text-xl tracking-wider uppercase text-white mb-1">Cours Duo Machines</h3>
                    <p className="text-[10px] font-sans text-slate-soft tracking-widest uppercase">[ 30€ / SÉANCE / PERS. · À DEUX ]</p>
                  </div>
                  <span className="text-lg text-white/60 group-hover:text-slate-light group-hover:translate-x-2 transition-all duration-300">→</span>
                </div>
              </div>
            </RevealWrapper>

            {/* Subtext info */}
            <p className="text-center text-xs font-sans text-charcoal/60 tracking-wide pt-2">
              *Tarifs applicables avec un abonnement à l&apos;année. Cours assurés du lundi au vendredi (8h00 - 21h15 selon les créneaux).
            </p>

            {/* General CTA button */}
            <RevealWrapper>
              <div className="text-center pt-6">
                <Link
                  href="#contact"
                  className="bg-slate hover:bg-slate-dark text-white px-10 py-4 tracking-[0.22em] font-medium text-[10px] uppercase rounded-full transition-all duration-500 inline-block shadow-md"
                >
                  RÉSERVER UN COURS
                </Link>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      {/* SECTION 9: Text Marquee (Cream) */}
      <section className="py-14 bg-cream overflow-hidden border-b border-slate/15 select-none">
        <div className="w-full flex">
          <div className="marquee-track flex whitespace-nowrap">
            <span 
              className="font-sans font-light text-4xl md:text-6xl tracking-[0.2em] opacity-35 px-4 uppercase text-slate"
              style={{ WebkitTextStroke: "1px var(--slate)", WebkitTextFillColor: "transparent", color: "transparent" }}
            >
              {marqueeText}
            </span>
            <span 
              className="font-sans font-light text-4xl md:text-6xl tracking-[0.2em] opacity-35 px-4 uppercase text-slate"
              style={{ WebkitTextStroke: "1px var(--slate)", WebkitTextFillColor: "transparent", color: "transparent" }}
            >
              {marqueeText}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 10: Gallery Grid (Cream) */}
      <section className="py-28 bg-cream border-b border-slate/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <RevealWrapper>
            <div className="text-center mb-16">
              <span className="text-[10px] font-sans tracking-[0.25em] text-slate uppercase mb-5 block">[ UNIVERS DU STUDIO ]</span>
              <h2 className="font-sans font-light text-3xl md:text-4xl tracking-wide text-charcoal mb-4">
                L&apos;art du mouvement <em className="font-serif italic text-slate">en images</em>
              </h2>
              <span className="text-[10px] font-sans text-charcoal/60 tracking-[0.2em] uppercase font-medium">
                PILATES À VERSAILLES · APPAREILS JOSEPH PILATES
              </span>
            </div>
          </RevealWrapper>

          {/* 3x2 Authentic Photo Feed Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {instagramImages.map((img, idx) => (
              <RevealWrapper key={idx}>
                <div className="group relative aspect-square rounded-[30px] overflow-hidden border border-charcoal/5 shadow-sm bg-off-white cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 30vw"
                    loading="lazy"
                  />
                  {/* Subtle hover icon overlay */}
                  <div className="absolute inset-0 bg-slate-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11: Footer (Obsidian Dark) */}
      <footer id="contact" className="bg-obsidian text-cream pt-28 pb-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-light/20" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 pb-20 border-b border-white/10">
          
          {/* Col 1 - Navigation Links */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="font-serif text-3xl italic tracking-wide text-white block mb-10 hover:text-slate-light transition-colors">
                Anne Pilates
              </Link>
              <nav className="flex flex-col space-y-4">
                <Link href="#approche" className="text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-slate-light hover-underline-animation pb-0.5 self-start transition-colors duration-300">
                  L&apos;approche
                </Link>
                <Link href="#cours" className="text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-slate-light hover-underline-animation pb-0.5 self-start transition-colors duration-300">
                  Les cours &amp; formats
                </Link>
                <Link href="#studio" className="text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-slate-light hover-underline-animation pb-0.5 self-start transition-colors duration-300">
                  Le studio &amp; machines
                </Link>
                <Link href="#planning" className="text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-slate-light hover-underline-animation pb-0.5 self-start transition-colors duration-300">
                  Tarifs &amp; Horaires
                </Link>
              </nav>
            </div>
          </div>

          {/* Col 2 - Contact / Inscription Form */}
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-sans tracking-[0.25em] text-slate-light uppercase mb-6 block">[ CONTACT &amp; RENSEIGNEMENTS ]</span>
            <h3 className="font-sans font-light text-lg tracking-wider text-white mb-4">
              Réserver ou poser une question
            </h3>
            <p className="text-[13px] font-sans font-light text-white/65 leading-relaxed mb-10 max-w-sm">
              Envoyez un message à Anne pour connaître les créneaux disponibles et organiser votre première séance de Pilates.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col space-y-4 max-w-xs">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="bg-transparent border-b border-white/20 focus:border-slate-light py-2 text-sm outline-none text-white transition-colors placeholder:text-white/30 w-full"
                required
              />
              <a
                href="tel:0615142935"
                className="bg-slate hover:bg-slate-dark text-white border border-slate hover:border-slate-dark text-[10px] font-sans font-medium tracking-[0.2em] px-6 py-3 rounded-full transition-all duration-500 self-start uppercase cursor-pointer text-center shadow-sm"
              >
                Appeler le 06 15 14 29 35
              </a>
            </form>
          </div>

          {/* Col 3 - Access & Contact Details */}
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-sans tracking-[0.25em] text-slate-light uppercase mb-6 block">[ LIEUX &amp; COORDONNÉES ]</span>
            <h3 className="font-sans font-light text-lg tracking-wider text-white mb-4">
              Anne Burger &mdash; Versailles
            </h3>
            <div className="text-[13px] font-sans font-light text-white/65 space-y-4 mb-10">
              <p className="leading-relaxed">
                <strong>Studio Machines :</strong> 16 rue Champ Lagarde, 78000 Versailles<br />
                <strong>Cours Tapis :</strong> 5bis rue Ste Adélaïde &amp; 52 rue St Charles<br />
                <strong>Adresse de contact :</strong> 2 allée des chevaliers, 78000 Versailles
              </p>
              <p>
                Email : <a href="mailto:anneburger@hotmail.fr" className="hover:text-slate-light transition-colors">anneburger@hotmail.fr</a>
              </p>
              <p>
                Tél : <a href="tel:0615142935" className="hover:text-slate-light transition-colors">06 15 14 29 35</a>
              </p>
              <p className="leading-relaxed">
                Horaires : Du lundi au vendredi (8h00 - 21h15 selon les cours)
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-slate-light hover:border-slate-light hover:bg-white/5 transition-all duration-300"
                aria-label="Facebook Pilates à Versailles"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-sans font-light text-white/30 tracking-wider">
          <span>&copy; {new Date().getFullYear()} PILATES AVEC ANNE &mdash; VERSAILLES (78000)</span>
          <span className="mt-4 md:mt-0 uppercase">MÉTHODE PILATES &amp; DE GASQUET</span>
        </div>
      </footer>

    </main>
  );
}
