import {
  MdOutlineGames,
  MdOutlineCoronavirus,
  MdOutlineSchool,
} from 'react-icons/md';
import { IoMedalOutline } from 'react-icons/io5';

import figureSideTop from '../../images/about-figure-side-top.svg';
import figureMobile from '../../images/about-figure-mobile.svg';
import figureSideBottom from '../../images/about-figure-side-bottom.svg';
import SectionHeader from '../core/SectionHeader';

const timelines = [
  {
    icon: <MdOutlineGames />,
    title: 'MLBB SQUAD',
    desc: 'Starting from us, who wanted to make a squad in the MLBB game called ADF, which was capitalized by Muhammad Syahid. after that to facilitate communication so that you don"t always log in to the game, this community was created in a chat application called Whatsapp.',
    key: 1,
  },
  {
    icon: <MdOutlineCoronavirus />,
    title: 'CORONAVIRUS',
    desc: 'The plan is that after the MLBB squad is created, it will be used to participate in various tournaments at our place and at school. however, it turned out that all of that never happened because it was affected by a virus called corona, a very deadly virus at that time which caused us to be separated and rarely communicated.',
    key: 2,
  },
  {
    icon: <MdOutlineSchool />,
    title: 'E-LEARNING',
    desc: 'And there was a name change from ADF to SFOS (School Federation of Science) because it was allocated to support the online learning process. At that time the community was full of people who told stories about love, the future, business, jokes, religion, games, anime and others.',
    key: 3,
  },
  {
    icon: <IoMedalOutline />,
    title: 'GRADUATION',
    desc: 'Then that day also came, namely graduation day where it was the last time we met with friends. and we live our lives.',
    key: 4,
  },
];
function TimelineWrapper({
  children,
  figureSideTop,
  figureSideBottom,
  figureMobile,
}) {
  return (
    <div className="flex flex-col flex-wrap items-center gap-4 lg:flex-row">
      <div className="flex-1">{children}</div>
      <div className="flex w-full flex-auto flex-col justify-around lg:flex-1">
        <img
          src={figureSideTop}
          alt="Timeline Top"
          className="hidden lg:block"
        />
        <img
          src={figureSideBottom}
          alt="Timeline Bottom"
          className="hidden lg:block"
        />
        <img
          src={figureMobile}
          alt="Timeline Mobile"
          className="mx-auto object-cover lg:hidden"
        />
      </div>
    </div>
  );
}

function Timeline({ icon, title, desc }) {
  return (
    <div className="relative flex pb-12">
      <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
        <div className="pointer-events-none h-full w-1 bg-base-200"></div>
      </div>
      <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-content">
        {icon}
      </div>
      <div className="ml-2 flex-grow cursor-pointer rounded-lg p-1 hover:bg-base-200">
        <h2 className="text-xl font-medium tracking-wider text-neutral">
          {title}
        </h2>
        <p className="leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container pt-16">
        <SectionHeader
          title="Why does this team exist?"
          desc="This is the part to tell how this team was formed."
        />
        <div>
          <TimelineWrapper
            figureMobile={figureMobile}
            figureSideTop={figureSideTop}
            figureSideBottom={figureSideBottom}
          >
            {timelines.map((v) => (
              <Timeline {...v} />
            ))}
          </TimelineWrapper>
        </div>
      </div>
    </section>
  );
}
