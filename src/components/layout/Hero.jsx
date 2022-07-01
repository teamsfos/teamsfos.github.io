import heroImg from '../../images/hero.svg';

function HeroCard({ title, desc, icon }) {
  return (
    <div className="w-72 shrink-0 snap-center overflow-hidden rounded-2xl border bg-base-100  shadow-md">
      <div className="card-body h-full text-base-content">
        <h2 className="card-title">
          {title} {icon}
        </h2>
        <p className="line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-accent to-primary/25">
      <div className="container flex flex-col flex-wrap items-center justify-center gap-4 pt-12 lg:flex-row">
        <div className="w-full md:w-3/4 lg:flex-1">
          <figure>
            <img src={heroImg} alt="Hero Image" className="w-full" />
          </figure>
        </div>
        <div className="prose flex-1 prose-h1:mb-3 prose-h1:leading-tight lg:prose-xl">
          <h1 className="mb-4">
            Hello, Welcome to Official website of SFOS Team
          </h1>
          <p className="mt-4">
            A team formed a long time ago that aims to have fun and to learn
            together.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Who us?</button>
            <button className="btn btn-outline btn-primary">learn more</button>
          </div>
        </div>

        <div className="flex w-full snap-x justify-start gap-4 overflow-x-auto py-4  lg:justify-center">
          <HeroCard
            title="Gaming"
            desc="We like playing online games between Mobile Legend, Genshin
                  Impact, Minecraft, and Clash of Clans."
            figure="https://unsplash.com/photos/CuFYW1c97w8/download?force=true&w=640"
          />
          <HeroCard
            title="World"
            desc="We also like to discuss conspiracies and unsolved mysteries of
                  the world."
            figure="https://unsplash.com/photos/SHY-CKpYjrE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8d29ybGR8ZW58MHx8fHwxNjU2NTcwNDU5&force=true&w=640"
          />
          <HeroCard
            title="Anime"
            desc="And what you like the most is talking about anime."
            figure="https://unsplash.com/photos/IxDPZ-AHfoI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU2NTc3NjM0&force=true&w=640"
          />
        </div>
      </div>
    </section>
  );
}
