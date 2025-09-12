import "./index.css";
import {
  BrowserIcon,
  EnvelopeIcon,
  InstagramLogoIcon,
  MinusIcon,
  WhatsappLogoIcon,
  XIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

function App() {
  return (
    <>
      <section id="inicio" className="h-svh">
        <div className="relative flex h-full flex-col justify-between md:px-14 lg:mx-auto lg:max-w-7xl">
          <header className="pt-5 pb-9">
            <nav className="mx-auto w-full max-w-3xl">
              <ul className="font-bellota flex justify-between text-2xl">
                <div className="flex gap-10">
                  <li>
                    <a href="#inicio">Início</a>
                  </li>
                  <li>
                    <a href="#sobre">Sobre</a>
                  </li>
                </div>
                <div className="flex gap-10">
                  <li>
                    <a href="#portfolio">Portfólio</a>
                  </li>
                  <li>
                    <a href="#contato">Contato</a>
                  </li>
                </div>
              </ul>
              <hr className="mt-3" />
            </nav>
          </header>
          {/* ---------------------- Hero ---------------------- */}
          <div className="from-wisteria to-jordy-blue relative flex w-full items-center justify-between rounded-4xl bg-linear-90 px-16 py-12 lg:py-20">
            <div>
              <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/misc/butterfly.svg')] bg-auto bg-center bg-no-repeat md:bg-[length:290px_auto]" />
              <div className="relative z-10 my-8 w-fit px-8">
                <p className="font-sacramento text-4xl">Debora Santos</p>
                <img
                  src="/misc/curved-arrow.svg"
                  alt="arrow"
                  width="90"
                  height="90"
                  className="absolute right-5 bottom-0 translate-x-full translate-y-3 -scale-y-100 rotate-[210deg]"
                />
              </div>
              <div className="font-luthier relative z-10 font-bold">
                <p className="text-8xl tracking-[0.015em]">Portfólio</p>
                <div className="absolute right-0 bottom-0 translate-x-2/3 translate-y-5">
                  <p className="text-2xl leading-5">
                    {new Date().getFullYear()}
                  </p>
                  <img
                    src="/misc/curved-lines.webp"
                    alt="curved lines"
                    width={"75px"}
                  />
                </div>
              </div>

              <div className="relative flex h-28 max-w-xs items-center justify-center">
                <div className="absolute inset-0 z-0 bg-[url('/misc/circles.svg')] bg-contain bg-center bg-no-repeat opacity-40" />
                <p className="font-comfortaa relative z-10 text-center text-xl">
                  Artesã, Artista & Designer
                </p>
              </div>
            </div>

            {/* ---------------------- Hero Image ---------------------- */}
            <div className="relative z-10 border border-[#1b1464]">
              <div className="w-full bg-[#d4c4e9]">
                <div className="flex justify-end-safe gap-1.5 border-b border-[#1b1464] py-1.5 pr-1.5">
                  <div className="bg-beige border border-[#1b1464]">
                    <MinusIcon weight="bold" size={12} />
                  </div>
                  <div className="bg-beige border border-[#1b1464]">
                    <BrowserIcon weight="bold" size={12} />
                  </div>
                  <div className="bg-beige border border-[#1b1464]">
                    <XIcon weight="bold" size={12} />
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/beautiful_1.jpg"
                    alt="Debora Santos"
                    width="347px"
                    height="347px"
                    className="h-[347px] w-[347px] object-cover md:h-[270px] md:w-[270px]"
                  />

                  <div className="bg-beige w-3.5 border-l border-[#1b1464]">
                    <div className="my-10 h-1/3 w-full border-t border-b bg-[#d4c4e9]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/misc/cat.webp"
            alt="cat"
            width="80px"
            height="auto"
            className="-mx-5 block"
          />
        </div>
      </section>

      {/* ---------------------- Sobre ---------------------- */}
      <section
        id="sobre"
        className="from-wisteria to-jordy-blue bg-gradient-to-br"
      >
        <div className="bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_2px,transparent_3px),linear-gradient(90deg,rgba(255,255,255,0.1)_3px,transparent_1px)] bg-[length:28px_28px] py-20">
          <div className="mx-auto mb-10 flex max-w-4xl items-center gap-20">
            {/* ---------------------- Debora ---------------------- */}
            <div className="relative">
              <img
                src="/misc/tape.webp"
                alt="fita"
                width={"100rem"}
                height={"auto"}
                className="absolute -top-4 -left-10 translate-x-full -rotate-12"
              />
              <img
                src="/misc/bee.webp"
                alt="abelha"
                width={"50rem"}
                className="absolute bottom-10"
              />
              <img
                src="/beautiful_2.webp"
                alt="debora"
                className="top-0 h-[400px] w-[250px] rounded-[50%] object-cover"
              />
            </div>

            <div className="flex-1">
              {/* ---------------------- Texto ---------------------- */}
              <div className="aspect-video bg-[url('/misc/flower_background.svg')] bg-contain bg-center bg-no-repeat">
                <div className="px-16 py-10">
                  <p className="font-kitten mx-10 mb-3 text-4xl">Olá!</p>
                  <p className="font-comfortaa mb-6 text-justify text-xs font-semibold">
                    Me chamo Debora e tenho 24 anos. Sou uma artista e designer
                    que ama transformar ideias em realidade. Meu trabalho
                    transita entre artesanato, ilustrações, design gráfico e
                    UX/UI, sempre buscando transmitir emoções e contar histórias
                    através da arte.
                  </p>

                  <p className="font-comfortaa text-justify text-xs font-semibold">
                    Antes de entrar no universo criativo, me formei na área de
                    T.I, que me fez conhecer um pouco da área do Design e
                    perceber que eu tinha mais rascunhos dos projetos desenhados
                    do que códigos prontos.
                  </p>
                </div>
              </div>

              {/* ---------------------- Contato ---------------------- */}
              <div className="font-opun-mai mx-auto my-10 flex w-fit max-w-md flex-wrap justify-center gap-5 text-xs uppercase">
                <div className="flex w-max items-center gap-1">
                  <WhatsappLogoIcon size={24} color="#008c71" />
                  <p>(61) 99588-1685</p>
                </div>
                <div className="flex w-max items-center gap-1">
                  <InstagramLogoIcon size={24} color="#e6434f" />
                  <a
                    href="https://instagram.com/oliee.art"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    @oliee.art
                  </a>
                </div>
                <div className="flex w-max items-center gap-1">
                  <YoutubeLogoIcon weight="fill" size={24} color="#fd0000" />
                  <a
                    href="https://www.youtube.com/@pathynx"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    @pathynx
                  </a>
                </div>
                <div className="flex w-max items-center gap-1">
                  <EnvelopeIcon size={24} className="text-neutral-800" />
                  <a href="mailto:deboraolis09@gmail.com">
                    deboraolis09@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------- Formação ---------------------- */}
          <div className="bg-beige mx-auto my-12 flex max-w-3xl justify-between rounded-[44px] px-6 py-6">
            <div>
              <p className="font-bellota mx-5 mb-3 text-2xl font-semibold">
                Formação
              </p>
              <ul className="font-alice space-y-4">
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-[#484ea4]"></div>
                  <p>Design gráfico - Alura (Maio de 2022 a janeiro de 2023)</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-[#6f72b0]"></div>
                  <p>
                    Analise e desenvolvimento de sistemas - Estácio (Setembro de
                    2019 a dezembro de 2021)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-[#9293bf]"></div>
                  <p>
                    Operador de computador - Prepara Cursos (Dezembro de 2015 a
                    novembro de 2016)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full bg-[#b7b9cf]"></div>
                  <p>
                    Francês - CIL Paranoá, DF (Agosto de 2017 a janeiro de 2022)
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <img src="/misc/heart.webp" alt="coração" className="w-16" />
              <img src="/misc/books.png" alt="livros" className="w-16" />
            </div>
          </div>

          {/* ---------------------- Habilidades ---------------------- */}
          <div className="bg-beige mx-auto flex max-w-3xl justify-between rounded-[44px] px-6 py-6">
            <div className="">
              <p className="font-bellota mx-5 mb-3 text-2xl font-semibold">
                Habilidades
              </p>
              <div className="flex items-center-safe gap-14">
                <ul className="font-alice space-y-4">
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#484ea4]"></div>
                    <p>Design gráfico</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#6f72b0]"></div>
                    <p>Design UX/UI</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#9293bf]"></div>
                    <p>Web Design</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#b7b9cf]"></div>
                    <p>Ilustrações Digitais</p>
                  </li>
                </ul>

                <ul className="font-alice space-y-4">
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#484ea4]"></div>
                    <p>Desenho tradicional</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#6f72b0]"></div>
                    <p>Artesanato</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#9293bf]"></div>
                    <p>Pintura</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-[#b7b9cf]"></div>
                    <p>Customização</p>
                  </li>
                </ul>

                <div className="ml-10 flex flex-col gap-3">
                  <div className="flex gap-4">
                    <img
                      src="/misc/photoshop_icon.png"
                      alt="Photoshop"
                      className="block w-10 object-contain"
                    />
                    <img
                      src="/misc/penup_icon.png"
                      alt="PenUp"
                      className="block w-10 object-contain"
                    />
                  </div>
                  <div className="ml-6 flex gap-4">
                    <img
                      src="/misc/figma_icon.png"
                      alt="Figma"
                      className="block w-6 object-contain"
                    />
                    <img
                      src="/misc/canva_icon.png"
                      alt="Canva"
                      className="block w-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <img src="/misc/heart.webp" alt="coração" className="w-16" />
              <img src="/misc/books.png" alt="livros" className="w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Um pouco de tudo ---------------------- */}
      <section className="relative py-10 pb-26">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/misc/butterfly_2.webp')] bg-auto bg-center bg-no-repeat md:bg-[length:200px_auto]" />
        <img
          src="/misc/star.webp"
          alt=""
          className="absolute top-0 left-0 w-16"
        />
        <img
          src="/misc/flowers.webp"
          alt=""
          className="absolute right-0 bottom-0 w-44"
        />
        <h1 className="font-bellota mb-10 block text-center text-3xl font-semibold">
          Um pouco de tudo
        </h1>
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
          <div className="flex-1 space-y-16">
            <a
              href="#artesanato"
              className="font-futura from-wisteria to-jordy-blue block w-full max-w-xs rounded-2xl bg-gradient-to-r py-4 text-center text-2xl"
            >
              Artesanato
            </a>
            <a
              href="#design-grafico"
              className="font-futura from-wisteria to-jordy-blue block w-full max-w-xs rounded-2xl bg-gradient-to-r py-4 text-center text-2xl"
            >
              Design Gráfico
            </a>
            <a
              href="#ilustracoes"
              className="font-futura from-wisteria to-jordy-blue block w-full max-w-xs rounded-2xl bg-gradient-to-r py-4 text-center text-xl"
            >
              Ilustrações Digitais/Tradicionais
            </a>
          </div>

          <div className="flex-1 place-items-end space-y-16">
            <a
              href="#pinturas"
              className="font-futura from-wisteria to-jordy-blue block w-full max-w-xs rounded-2xl bg-gradient-to-r py-4 text-center text-2xl"
            >
              Pinturas
            </a>
            <a
              href="#design-ux-ui"
              className="font-futura from-wisteria to-jordy-blue block w-full max-w-xs rounded-2xl bg-gradient-to-r py-4 text-center text-2xl"
            >
              Design UX/UI
            </a>
            <a
              href="#projetos"
              className="font-futura from-wisteria to-jordy-blue block w-full max-w-xs rounded-2xl bg-gradient-to-r py-4 text-center text-2xl"
            >
              Projetos
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------- Artesanato ---------------------- */}
      <section
        id="artesanato"
        className="from-wisteria to-jordy-blue relative z-10 bg-gradient-to-br"
      >
        <div className="relative overflow-x-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_2px,transparent_3px),linear-gradient(90deg,rgba(255,255,255,0.1)_3px,transparent_1px)] bg-[length:28px_28px] py-20">
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 -left-20 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 left-44 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 right-48 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 -right-20 rotate-180"
          />

          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute bottom-0 -left-20"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute bottom-0 left-44"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute right-48 bottom-0"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute -right-20 bottom-0"
          />

          <h1 className="font-bellota mt-24 mb-10 text-center text-5xl text-white">
            Artesanato
          </h1>

          <div className="mx-auto mb-36 flex w-full max-w-4xl items-center justify-between">
            <div className="relative w-fit py-28">
              <img
                src="/artesanato/artesanato_1.jpg"
                alt=""
                className="absolute top-0 size-36 rounded-2xl object-cover"
              />
              <img
                src="/artesanato/artesanato_2.webp"
                alt=""
                className="relative z-10 ml-20 size-36 rounded-2xl object-cover"
              />
              <img
                src="/artesanato/artesanato_3.webp"
                alt=""
                className="absolute -right-1/2 bottom-0 size-36 rounded-2xl object-cover"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-2">
                <img
                  src="/artesanato/artesanato_4.webp"
                  alt=""
                  className="h-36 w-64 rounded-3xl object-cover"
                />
                <img
                  src="/artesanato/artesanato_5.jpg"
                  alt=""
                  className="h-68 w-64 rounded-3xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="/artesanato/artesanato_6.jpg"
                  alt=""
                  className="h-54 w-32 rounded-3xl object-cover"
                />
                <img
                  src="/artesanato/artesanato_7.webp"
                  alt=""
                  className="h-50 w-32 rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Design Gráfico ---------------------- */}
      <section
        id="design-grafico"
        className="relative z-0 translate-y-2 overflow-hidden pt-8 pb-44"
      >
        <img
          src="/misc/grid_ripped.png"
          alt=""
          className="absolute top-0 left-12 z-10 w-64 scale-150 rotate-[270deg]"
        />
        <img
          src="/misc/insects_ripped.png"
          alt=""
          className="absolute top-0 left-0 z-20 w-44"
        />
        <img
          src="/misc/paper_ripped.webp"
          alt=""
          className="absolute -right-20 -bottom-1/3 w-[500px]"
        />
        <img
          src="/misc/greek_ripped.png"
          alt=""
          className="absolute right-0 bottom-0 w-56"
        />

        <div className="relative mx-auto mb-20 max-w-lg">
          <img
            src="/misc/tape_2.webp"
            alt=""
            className="w-full object-contain"
          />
          <img
            src="/misc/design_grafico.png"
            alt=""
            className="absolute top-0 mt-9 px-12"
          />
        </div>

        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div>
            <img
              src="/design_grafico/my_universe.webp"
              alt=""
              className="w-66"
            />
            <a
              href="https://instagram.com/oliee.art"
              target="_blank"
              rel="noreferrer"
              className="ml-4 flex items-center gap-1 text-sm"
            >
              <InstagramLogoIcon size={24} weight="duotone" />
              oliee.art
            </a>
          </div>

          <div className="relative z-10 grid grid-cols-2">
            <img
              src="/design_grafico/dia_das_maes.webp"
              alt=""
              className="w-44"
            />
            <img
              src="/design_grafico/dia_mulher.webp"
              alt=""
              className="w-44"
            />
            <img
              src="/design_grafico/dia_mulher_2.webp"
              alt=""
              className="w-44"
            />
            <img src="/design_grafico/pascoa.webp" alt="" className="w-44" />
          </div>
        </div>
      </section>

      {/* ---------------------- Design UX/UI ---------------------- */}
      <section
        id="design-ux-ui"
        className="from-wisteria to-jordy-blue relative z-10 bg-gradient-to-br"
      >
        <div className="relative overflow-x-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_2px,transparent_3px),linear-gradient(90deg,rgba(255,255,255,0.1)_3px,transparent_1px)] bg-[length:28px_28px] py-44">
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 -left-20 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 left-44 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 right-48 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 -right-20 rotate-180"
          />

          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute bottom-0 -left-20"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute bottom-0 left-44"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute right-48 bottom-0"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute -right-20 bottom-0"
          />

          <div className="relative mx-auto mb-20 w-fit">
            <h1 className="font-chakra-petch relative z-10 text-center text-4xl font-bold text-[#4931c2]">
              Design UX/UI
            </h1>
            <h1 className="font-chakra-petch absolute top-0 -translate-x-px text-center text-4xl font-bold text-[#00ffff]">
              Design UX/UI
            </h1>
            <h1 className="font-chakra-petch absolute top-0 translate-x-px text-center text-4xl font-bold text-[#ff00ff]">
              Design UX/UI
            </h1>
          </div>

          <div className="mx-auto flex max-w-5xl justify-between gap-10 px-10">
            <div className="relative">
              <img
                src="/misc/curved_arrow_2.webp"
                alt=""
                className="absolute top-20 -left-20 rotate-90 rotate-y-180"
              />
              <img
                src="/misc/curved_arrow_3.webp"
                alt=""
                className="absolute top-28 left-20 rotate-45"
              />
              <img
                src="/design_uxui/uxui_1.webp"
                alt=""
                className="mb-10 ml-5 w-64"
              />
              <div className="flex items-end gap-3">
                <img
                  src="/design_uxui/uxui_3.jpg"
                  alt=""
                  className="w-52 rounded-xl object-cover"
                />
                <img
                  src="/design_uxui/uxui_4.jpg"
                  alt=""
                  className="h-2/3 w-52 rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="font-futura text-center font-medium">
              <p className="text-2xl">Projeto: Medellin</p>
              <p className="text-2xl">Loja de camisetas</p>
              <p className="mt-10 w-max">Páginas com dados dos clientes</p>
            </div>

            <div className="relative">
              <img
                src="/misc/curved_arrow_2.webp"
                alt=""
                className="absolute top-20 right-5 -rotate-[120deg]"
              />
              <img
                src="/misc/curved_arrow_3.webp"
                alt=""
                className="absolute bottom-32 left-0 z-10 w-24 rotate-90 rotate-x-180"
              />
              <img
                src="/design_uxui/uxui_2.webp"
                alt=""
                className="mb-10 w-64"
              />
              <div className="flex -translate-x-10 items-end gap-3">
                <img
                  src="/design_uxui/uxui_5.jpg"
                  alt=""
                  className="h-32 w-52 rounded-xl object-cover"
                />
                <img
                  src="/design_uxui/uxui_6.jpg"
                  alt=""
                  className="w-32 rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Artes Digitais/Tradicionais ---------------------- */}
      <section className="relative">
        <div className="from-beige absolute top-0 z-20 h-96 w-full bg-gradient-to-t via-transparent to-transparent"></div>
        <div className="to-jordy-blue/80 via-jordy-blue absolute z-10 h-96 w-full bg-gradient-to-r from-[#91a4d8]"></div>
        <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/misc/bubbles.webp')] bg-auto bg-bottom bg-no-repeat md:bg-[length:500px_auto]" />

        <div className="relative z-50 py-10 pb-28">
          <div className="relative mx-auto mb-16 w-fit bg-[url('/misc/silver_stars.webp')] bg-contain bg-center bg-no-repeat py-14">
            <img
              src="/misc/blurry_butterfly.webp"
              alt=""
              className="absolute top-1/3 -right-20 w-16 translate-x-full"
            />
            <h1 className="font-lotus-eater text-center text-3xl text-shadow-2xs">
              Artes Digitais
            </h1>
          </div>

          <div className="mx-auto flex max-w-4xl items-center justify-evenly">
            <img
              src="/arte/arte_1.webp"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_2.jpg"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_3.png"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_4.png"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_5.png"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
          </div>

          <div className="mx-auto mt-20 mb-5 flex w-fit flex-col items-center">
            <h1 className="font-dreaming text-4xl">Artes Tradicionais</h1>
            <img src="/misc/stars_hang.svg" alt="" />
          </div>

          <div className="mx-auto flex max-w-4xl items-center justify-evenly">
            <img
              src="/arte/arte_6.jpg"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_7.jpg"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_8.jpg"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_9.jpg"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
            <img
              src="/arte/arte_10.jpg"
              alt=""
              className="aspect-square w-40 rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------- Pinturas ---------------------- */}
      <section
        id="pinturas"
        className="from-wisteria to-jordy-blue relative z-10 bg-gradient-to-br"
      >
        <div className="relative overflow-x-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_2px,transparent_3px),linear-gradient(90deg,rgba(255,255,255,0.1)_3px,transparent_1px)] bg-[length:28px_28px] py-44">
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 -left-20 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 left-44 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 right-48 rotate-180"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute top-0 -right-20 rotate-180"
          />

          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute bottom-0 -left-20"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute bottom-0 left-44"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute right-48 bottom-0"
          />
          <img
            src="/misc/cloud.svg"
            alt=""
            className="absolute -right-20 bottom-0"
          />

          <div className="max-w- mx-auto flex flex-wrap items-center justify-center">
            <div className="relative bg-[url('/misc/cavalete.png')] bg-contain bg-center bg-no-repeat px-20 py-32">
              <p className="font-dreaming relative z-10 -translate-y-16 text-5xl">
                Pinturas
              </p>
              <img
                src="/misc/mancha.png"
                alt=""
                className="absolute top-10 left-16 w-40 object-contain"
              />
            </div>
            <div className="flex flex-col flex-wrap items-center gap-4">
              <div className="flex items-center-safe gap-4">
                <img
                  src="/pintura/pintura_1.jpg"
                  alt=""
                  className="aspect-[9/14] w-40 object-cover"
                />
                <img
                  src="/pintura/pintura_2.jpg"
                  alt=""
                  className="aspect-[9/14] w-40 object-cover"
                />
                <img
                  src="/pintura/pintura_3.jpg"
                  alt=""
                  className="aspect-[9/14] w-40 object-cover"
                />
                <img
                  src="/pintura/pintura_4.jpg"
                  alt=""
                  className="aspect-[9/14] w-40 object-cover"
                />
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/pintura/pintura_5.jpg"
                  alt=""
                  className="aspect-[9/14] h-60 w-40 object-cover"
                />
                <img
                  src="/pintura/pintura_6.jpg"
                  alt=""
                  className="h-60 w-82 object-cover"
                />
                <img
                  src="/pintura/pintura_7.jpg"
                  alt=""
                  className="aspect-[9/14] h-60 w-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Projetos ---------------------- */}
      <section className="relative bg-[url('/misc/art_bg.jpg')] bg-contain bg-center py-20">
        <div className="absolute top-0 z-0 h-full w-full bg-white/40"></div>
        <div className="font-luthier relative z-10 mx-auto w-fit space-y-2 text-[#484fa2]">
          <h1 className="rounded bg-white/30 px-3 text-8xl font-bold">
            Projetos
          </h1>
          <p className="mx-auto w-fit rounded bg-white/30 px-3 text-3xl">
            Em andamento :&#41;
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-10 flex max-w-4xl flex-wrap items-start justify-evenly">
          <a
            href="https://www.youtube.com/@pathynx"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center hover:underline"
          >
            <img src="/misc/yt.jpg" alt="" className="w-56 rounded-xl" />
            <p className="font-futura mt-2 text-2xl font-bold">Youtube</p>
          </a>

          <div className="from-wisteria to-jordy-blue flex h-[325px] w-56 flex-col items-center justify-center rounded-4xl bg-gradient-to-br px-8">
            <div className="flex flex-col items-center">
              <p className="mb-4 text-3xl">Projeto A</p>
              <p className="mb-2 text-center text-2xl">
                história em quadrinhos
              </p>
              <p className="text-xl">EM BREVE</p>
            </div>
          </div>

          <div className="from-wisteria to-jordy-blue flex h-[325px] w-56 flex-col items-center justify-center rounded-4xl bg-gradient-to-br px-8">
            <div className="flex flex-col items-center">
              <p className="mb-4 text-3xl">Projeto B</p>
              <p className="mb-2 text-center text-2xl">
                história em quadrinhos
              </p>
              <p className="text-xl">EM BREVE</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Contato ---------------------- */}
      <section className="from-wisteria to-jordy-blue relative bg-gradient-to-tr py-44">
        <img
          src="/misc/cloud.svg"
          alt=""
          className="absolute top-0 -left-20 rotate-180"
        />
        <img
          src="/misc/cloud.svg"
          alt=""
          className="absolute top-0 left-44 rotate-180"
        />
        <img
          src="/misc/cloud.svg"
          alt=""
          className="absolute top-0 right-48 rotate-180"
        />
        <img
          src="/misc/cloud.svg"
          alt=""
          className="absolute top-0 -right-20 rotate-180"
        />
        <img
          src="/misc/bunny.png"
          alt=""
          className="absolute bottom-0 left-0 w-32"
        />

        <div className="font-bellota mx-auto w-fit bg-[url('/misc/taped_bg.svg')] bg-contain bg-center bg-no-repeat">
          <div className="font-bellota px-24 py-32 text-2xl">
            <p className="font-futura mb-5 text-3xl">
              Entre em contato comigo!
            </p>
            <p>deboraolis09@gmail.com</p>
            <p>(61) 99588-1685</p>
            <p>@oliee.art</p>
            <p className="text-end">Brasília - DF</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
