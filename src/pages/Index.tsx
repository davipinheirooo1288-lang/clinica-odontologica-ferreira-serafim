import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  HeartPulse,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  X,
} from "lucide-react";

type Service = {
  name: string;
  detail: string;
  Icon: LucideIcon;
};

type Review = {
  name: string;
  text: string;
  highlight: string;
};

const whatsappPhone = "5588994559591";
const createWhatsAppUrl = (service: string) => {
  const message = `Olá, gostaria de agendar uma consulta no Consultório Odontológico Ferreira Serafim para o serviço: ${service}. Pode me informar os horários disponíveis?`;

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
};
const whatsappUrl = createWhatsAppUrl("atendimento inicial");
const instagramUrl = "https://www.instagram.com/cofsobral/";
const facebookUrl = "https://www.facebook.com/cofsobral/?locale=pt_BR";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Consult%C3%B3rio%20Odontol%C3%B3gico%20Ferreira%20Serafim%20Av.%20Monsenhor%20Jos%C3%A9%20Alo%C3%ADsio%20Pinto%201362%20Sobral";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.3V2h-3.2c-3.6 0-4.4 2.7-4.4 4.4v1.8H7v3.9h2.8V22h4.4v-9.9h3.1l.5-3.9h-3.6Z" />
  </svg>
);

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 32 32">
    <path d="M16.03 3.2A12.63 12.63 0 0 0 5.2 22.36L3.6 28.8l6.6-1.54A12.63 12.63 0 1 0 16.03 3.2Zm0 22.9c-2.08 0-4.02-.62-5.64-1.69l-.39-.25-3.9.91.93-3.8-.26-.39a10.27 10.27 0 1 1 9.26 5.22Zm5.8-7.7c-.31-.16-1.86-.92-2.15-1.03-.29-.1-.5-.16-.71.16-.21.31-.81 1.03-1 1.24-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.39 4.76.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.13-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const services: Service[] = [
  {
    name: "Ortodontia",
    detail: "Planejamento para alinhamento, mordida e estética do sorriso.",
    Icon: Smile,
  },
  {
    name: "Implante",
    detail: "Reabilitação oral com precisão, segurança e previsibilidade.",
    Icon: BadgeCheck,
  },
  {
    name: "Endodontia",
    detail: "Tratamento de canal com foco em conforto e preservação dental.",
    Icon: HeartPulse,
  },
  {
    name: "Harmonização facial",
    detail: "Resultados naturais para equilibrar beleza, sorriso e expressão.",
    Icon: Sparkles,
  },
  {
    name: "Clínico geral",
    detail: "Prevenção, limpeza, restaurações e acompanhamento contínuo.",
    Icon: Stethoscope,
  },
  {
    name: "Cirurgia",
    detail: "Procedimentos conduzidos com atenção técnica e acolhimento.",
    Icon: ShieldCheck,
  },
  {
    name: "Periodontia",
    detail: "Cuidado especializado para gengiva, suporte dental e saúde bucal.",
    Icon: Activity,
  },
  {
    name: "Prótese",
    detail: "Soluções restauradoras para função, estética e confiança ao sorrir.",
    Icon: CheckCircle2,
  },
  {
    name: "Ortopedia facial",
    detail: "Acompanhamento do desenvolvimento facial com visão preventiva.",
    Icon: Sparkles,
  },
  {
    name: "Dentista em Sobral",
    detail: "Atendimento odontológico completo no São Lucas Medical Center.",
    Icon: MapPin,
  },
];

const reviews: Review[] = [
  {
    name: "Silmara Liberato Santos",
    text: "Excelente, ótimas profissionais. Atendimento humanizado. Gostamos demais.",
    highlight: "Atendimento humanizado",
  },
  {
    name: "Rian Rocha",
    text: "Ótimo atendimento e excelentes profissionais. Tive um tratamento com transparência e honestidade.",
    highlight: "Transparência",
  },
  {
    name: "Rebeca Barbosa",
    text: "A Dra. Raquel é uma verdadeira especialista em harmonização facial, entregando resultados naturais e incríveis.",
    highlight: "Resultados naturais",
  },
  {
    name: "Rogerio Mendonça",
    text: "Fui cuidado pelas duas dentistas em ortodontia e facetas de porcelana. O resultado foi excelente.",
    highlight: "Resultado excelente",
  },
  {
    name: "Lara Antunes",
    text: "Profissionais competentes, comprometidas, estudiosas e assertivas no tratamento. Nelas eu confio.",
    highlight: "Confiança",
  },
];

const scrollingReviews = [...reviews, ...reviews];

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f3] text-[#17211c]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/84 text-[#071f16] shadow-[0_16px_46px_rgba(23,33,28,0.065)] backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="group flex items-center gap-3">
            <img
              src="/images/cofs-logo.png"
              alt="Logo COFS Consultório Odontológico Ferreira Serafim"
              className="h-14 w-14 rounded-[10px] border border-[#eadfca] bg-white object-contain p-1 shadow-[0_8px_24px_rgba(23,33,28,0.08)]"
              width="80"
              height="80"
            />
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-[0.22em] text-[#745914]">
                COFS
              </span>
              <span className="block text-base font-extrabold text-[#071f16]">
                Ferreira Serafim
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-[15px] font-extrabold text-[#071f16] md:flex">
            <a className="transition hover:text-[#745914]" href="#inicio">
              Início
            </a>
            <a className="transition hover:text-[#745914]" href="#servicos">
              Serviços
            </a>
            <a className="transition hover:text-[#745914]" href="#sobre">
              Sobre nós
            </a>
            <a className="transition hover:text-[#745914]" href="#contato">
              Contato
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={instagramUrl}
              aria-label="Abrir Instagram da COFS"
              className="hidden h-11 w-11 place-items-center rounded-full border border-[#eadfca] bg-[#f8f7f3] text-[#123b2a] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(23,33,28,0.1)] focus:outline-none focus:ring-2 focus:ring-[#d7b46a] min-[420px]:grid"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={facebookUrl}
              aria-label="Abrir Facebook da COFS"
              className="hidden h-11 w-11 place-items-center rounded-full border border-[#eadfca] bg-[#f8f7f3] text-[#123b2a] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(23,33,28,0.1)] focus:outline-none focus:ring-2 focus:ring-[#d7b46a] min-[420px]:grid"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#123b2a] px-5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(18,59,42,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0c2f20] focus:outline-none focus:ring-2 focus:ring-[#d7b46a] focus:ring-offset-2 focus:ring-offset-white"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar
            </button>
          </div>
        </nav>
      </header>

      <section id="inicio" className="relative min-h-[92vh] overflow-hidden bg-[#17211c] pt-20 text-white">
        <img
          src="/images/cofs-donas.jpg"
          alt="Duas dentistas do Consultório Odontológico Ferreira Serafim sorrindo com jalecos da COFS"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
          width="1600"
          height="900"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,30,24,0.94)_0%,rgba(17,30,24,0.82)_43%,rgba(17,30,24,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#f8f7f3_0%,rgba(248,247,243,0)_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-3xl" data-animate>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
              <Star className="h-4 w-4 fill-[#d7b46a] text-[#d7b46a]" />
              5,0 no Google, 72 avaliações
            </div>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Odontologia precisa para sorrisos naturais.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              O Consultório Odontológico Ferreira Serafim une especialidades,
              estética e atendimento humanizado no São Lucas Medical Center, em
              Sobral.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex h-14 self-start items-center justify-center gap-3 rounded-full bg-[#d7b46a] px-8 text-sm font-extrabold uppercase tracking-[0.18em] text-[#17211c] shadow-[0_22px_56px_rgba(215,180,106,0.32)] transition duration-200 hover:-translate-y-1 hover:bg-[#e4ca82] hover:shadow-[0_28px_68px_rgba(215,180,106,0.4)] focus:outline-none focus:ring-2 focus:ring-[#d7b46a] focus:ring-offset-2 focus:ring-offset-[#17211c]"
              >
                Agendar consulta
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#sobre"
                className="inline-flex h-14 self-start items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Sobre nós
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-5 sm:px-8" aria-label="Resumo da clínica">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[8px] border border-[#d9d4c7] bg-white shadow-[0_24px_80px_rgba(23,33,28,0.12)] md:grid-cols-4">
          {[
            ["72", "avaliações públicas"],
            ["5,0", "nota média no Google"],
            ["10", "áreas de atendimento"],
            ["08-20h", "segunda a sexta"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-[#e7e2d5] px-6 py-8 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <strong className="block font-serif text-4xl font-semibold text-[#1d3b31]">
                {value}
              </strong>
              <span className="mt-2 block text-sm uppercase tracking-[0.18em] text-[#6b746f]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="bg-[#14241e] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl" data-animate>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#d7b46a]">
              Serviços
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Um consultório para cada fase do sorriso.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Da prevenção à reabilitação, os tratamentos são organizados para
              que o paciente entenda o caminho e se sinta seguro em cada etapa.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ name, detail, Icon }) => (
              <article
                key={name}
                className="group min-h-[230px] bg-[#14241e] p-6 transition duration-300 hover:bg-[#1b332b]"
                data-animate
              >
                <Icon className="h-7 w-7 text-[#d7b46a]" />
                <h3 className="mt-8 text-xl font-semibold text-white">{name}</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f8f7f3] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-animate>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7f39]">
              Sobre nós
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-tight text-[#17211c] sm:text-5xl">
              Duas trajetórias, um jeito claro de cuidar.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#56615b]">
              A COFS nasceu da presença da Dra. Anna Rachel e da Dra. Tarciana
              Ferreira Serafim: profissionais lembradas pelos pacientes pela
              firmeza técnica, pela transparência e por uma escuta que deixa a
              consulta mais leve.
            </p>
            <div className="mt-8 max-w-[320px] overflow-hidden rounded-[12px] border border-[#e3d8c6] bg-white p-2 shadow-[0_18px_48px_rgba(23,33,28,0.08)]">
              <img
                src="/images/cofs-sobre-equipe.jpeg"
                alt="Profissionais do Consultório Odontológico Ferreira Serafim"
                className="aspect-[4/3] w-full rounded-[8px] object-cover object-center"
                width="640"
                height="480"
                loading="lazy"
                decoding="async"
              />
            </div>
            <a
              href={whatsappUrl}
              className="mt-9 inline-flex items-center gap-3 border-b border-[#9c7f39] pb-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#1d3b31] transition hover:text-[#9c7f39] focus:outline-none focus:ring-2 focus:ring-[#d7b46a]"
            >
              Falar com a equipe
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5" data-animate>
            <div className="rounded-[8px] border border-[#ded8c9] bg-white p-8 shadow-[0_18px_58px_rgba(23,33,28,0.07)]">
              <p className="font-serif text-3xl leading-tight text-[#1d3b31]">
                "A diferença está em explicar o caminho antes de começar."
              </p>
              <p className="mt-6 text-base leading-7 text-[#56615b]">
                O planejamento não aparece só no resultado final. Ele está no
                diagnóstico, na conversa sobre expectativas e no cuidado para que
                o paciente entenda cada etapa do tratamento.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Ortodontia, estética e reabilitação conversando entre si.",
                "Tratamentos conduzidos com clareza, sem pressa e sem ruído.",
                "Harmonização e facetas com aparência natural.",
                "Um consultório em Sobral feito para decisões seguras.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-[#ded8c9] bg-white p-6 shadow-[0_14px_42px_rgba(23,33,28,0.05)]"
                >
                  <CheckCircle2 className="mb-5 h-6 w-6 text-[#1d6b5c]" />
                  <p className="text-base font-semibold leading-7 text-[#25322c]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[580px] overflow-hidden rounded-[8px]" data-animate>
            <img
              src="/images/cofs-consultorio.jpg"
              alt="Sala de atendimento do Consultório Odontológico Ferreira Serafim com cadeira odontológica e iluminação moderna"
              className="absolute inset-0 h-full w-full object-cover"
              width="1280"
              height="960"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,36,30,0.82)_0%,rgba(20,36,30,0.08)_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="max-w-lg font-serif text-3xl leading-tight">
                "O resultado é sempre acima das expectativas. Nelas eu confio."
              </p>
              <span className="mt-5 block text-sm uppercase tracking-[0.18em] text-white/70">
                Avaliação pública de paciente
              </span>
            </div>
          </div>

          <div data-animate>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7f39]">
              Experiência
            </span>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-[#17211c] sm:text-5xl">
              Atendimento claro, humano e criterioso.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#56615b]">
              Pacientes destacam a transparência durante o tratamento, a
              qualidade técnica e a forma acolhedora como a equipe conduz cada
              consulta.
            </p>
            <div className="mt-10 grid gap-5">
              {[
                "Explicação simples sobre diagnóstico, etapas e expectativas.",
                "Ambiente preparado para consultas, manutenção e procedimentos.",
                "Estética dental e harmonização com aparência natural.",
              ].map((item) => (
                <div key={item} className="flex gap-4 border-t border-[#e7e2d5] pt-5">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#1d6b5c]" />
                  <p className="text-base leading-7 text-[#3d4943]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="bg-[#eef3ef] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div data-animate>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#1d6b5c]">
                Depoimentos
              </span>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#17211c] sm:text-5xl">
                Uma reputação construída consulta a consulta.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#56615b]">
                Os relatos aparecem em movimento lento, como uma vitrine do que
                os pacientes mais reconhecem: clareza, carinho e resultado.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-[#d7b46a] text-[#d7b46a]" />
                  ))}
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#50605a]">
                  5,0 de 72 avaliações
                </span>
              </div>
            </div>

            <div
              className="testimonial-window relative overflow-hidden rounded-[8px] border border-[#d4ded7] bg-white shadow-[0_26px_80px_rgba(23,33,28,0.1)]"
              data-animate
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-[linear-gradient(0deg,#ffffff_0%,rgba(255,255,255,0)_100%)]" />
              <div className="testimonial-track">
                {scrollingReviews.map((review, index) => (
                  <article
                    key={`${review.name}-${index}`}
                    className="testimonial-card mx-5 flex min-h-[360px] flex-col justify-center border-b border-[#ece8dc] py-10 sm:mx-10"
                  >
                    <Quote className="h-8 w-8 text-[#d7b46a]" />
                    <p className="mt-7 font-serif text-3xl leading-tight text-[#17211c] sm:text-4xl">
                      {review.text}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <strong className="text-base text-[#17211c]">{review.name}</strong>
                      <span className="rounded-full bg-[#edf5f2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1d6b5c]">
                        {review.highlight}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#f8f7f3] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[8px] border border-[#d9d4c7] bg-white p-8 shadow-[0_18px_58px_rgba(23,33,28,0.07)] sm:p-10" data-animate>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7f39]">
              Localização
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#17211c] sm:text-5xl">
              No São Lucas Medical Center.
            </h2>
            <div className="mt-8 space-y-6 text-[#3f4a44]">
              <p className="flex gap-4 text-lg leading-8">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#1d6b5c]" />
                <span>
                  Av. Monsenhor José Aloísio Pinto, 1362, Gerardo Cristino,
                  Sobral - CE, 62051-225.
                </span>
              </p>
              <p className="flex gap-4 text-lg leading-8">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-[#1d6b5c]" />
                <span>Segunda a sexta, das 08:00 às 20:00. Sábado e domingo fechados.</span>
              </p>
              <p className="flex gap-4 text-lg leading-8">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-[#1d6b5c]" />
                <a className="underline-offset-4 hover:underline" href="tel:+5588994559591">
                  (88) 99455-9591
                </a>
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={mapsUrl}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#17211c] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#24342c] focus:outline-none focus:ring-2 focus:ring-[#17211c]"
              >
                <Navigation className="h-4 w-4" />
                Abrir mapa
              </a>
              <a
                href={instagramUrl}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#cfc7b4] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#17211c] transition duration-200 hover:-translate-y-0.5 hover:bg-[#efe9da] focus:outline-none focus:ring-2 focus:ring-[#17211c]"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="grid content-between gap-6 rounded-[8px] bg-[#14241e] p-8 text-white sm:p-10" data-animate>
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#d7b46a]">
                Agenda
              </span>
              <h2 className="mt-5 max-w-lg font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Converse com quem vai cuidar de você.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Envie uma mensagem pelo WhatsApp, informe o tratamento desejado
                e receba orientação para o melhor horário disponível.
              </p>
            </div>

            <div className="mt-12 grid gap-4">
              {[
                "Escolha o melhor dia útil para consulta.",
                "Compartilhe sua necessidade inicial.",
                "Receba confirmação pelo WhatsApp.",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-bold text-[#d7b46a]">
                    {index + 1}
                  </span>
                  <span className="text-white/80">{step}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={openBooking}
              className="mt-10 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#d7b46a] px-7 text-sm font-bold uppercase tracking-[0.18em] text-[#17211c] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e4ca82] focus:outline-none focus:ring-2 focus:ring-[#d7b46a]"
            >
              <CalendarDays className="h-4 w-4" />
              Agendar consulta
            </button>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={openBooking}
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_20px_54px_rgba(37,211,102,0.34)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(37,211,102,0.44)] focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2"
      >
        <WhatsAppLogo className="h-8 w-8" />
      </button>

      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center px-4 py-5 sm:items-center sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            aria-label="Fechar escolha de serviço"
            className="absolute inset-0 bg-[#0c1812]/65 backdrop-blur-sm"
            onClick={closeBooking}
          />

          <section className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[16px] border border-white/80 bg-[#fbfaf6] shadow-[0_40px_120px_rgba(8,18,13,0.34)]">
            <div className="flex items-start justify-between gap-6 border-b border-[#e9dfcc] px-5 py-5 sm:px-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9c7f39]">
                  Agendamento
                </span>
                <h2
                  id="booking-title"
                  className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#17211c] sm:text-4xl"
                >
                  Qual serviço você procura?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b665f] sm:text-base">
                  Escolha uma área e o WhatsApp já abre com a mensagem pronta
                  para a equipe da COFS.
                </p>
              </div>
              <button
                type="button"
                aria-label="Fechar"
                onClick={closeBooking}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#e1d7c5] bg-white text-[#17211c] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(23,33,28,0.12)] focus:outline-none focus:ring-2 focus:ring-[#d7b46a]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[58vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map(({ name, detail, Icon }) => (
                  <a
                    key={name}
                    href={createWhatsAppUrl(name)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeBooking}
                    className="group flex min-h-[116px] items-start gap-4 rounded-[12px] border border-[#e7decf] bg-white p-4 text-left shadow-[0_12px_34px_rgba(23,33,28,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d7b46a] hover:shadow-[0_18px_44px_rgba(23,33,28,0.1)] focus:outline-none focus:ring-2 focus:ring-[#d7b46a]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#edf5f2] text-[#1d6b5c] transition group-hover:bg-[#123b2a] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-base font-extrabold text-[#17211c]">
                        {name}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#657169]">
                        {detail}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#e9dfcc] bg-white/70 px-5 py-4 text-sm text-[#657169] sm:px-7">
              Atendimento pelo WhatsApp: segunda a sexta, das 08:00 às 20:00.
            </div>
          </section>
        </div>
      )}

      <footer className="bg-[#101913] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl">Ferreira Serafim</p>
            <p className="mt-2 text-sm text-white/60">
              Consultório odontológico em Sobral, Ceará.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <a className="transition hover:text-white" href={whatsappUrl}>
              WhatsApp
            </a>
            <a className="transition hover:text-white" href={instagramUrl}>
              Instagram
            </a>
            <a className="transition hover:text-white" href={facebookUrl}>
              Facebook
            </a>
            <a className="transition hover:text-white" href={mapsUrl}>
              Google Maps
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
