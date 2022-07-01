import { BsInstagram } from 'react-icons/bs';
import SectionHeader from '../core/SectionHeader';
import jordiIrawanImage from '../../images/jordi-irawan.svg';
import muhammadSyahidImage from '../../images/muhammad-syahid.svg';
import riniAgustinaImage from '../../images/rini-agustina.svg';
import lennyFebrianaImage from '../../images/lenny-febriana.svg';
import rahmatBudiannorImage from '../../images/rahmat-budiannor.svg';
import triBagusSaputraImage from '../../images/tri-bagus-saputra.svg';
import rezaAriqLuthfiandiImage from '../../images/reza-ariq-luthfiandi.svg';

function MemberCard({ name, quote, title, figure, instagram }) {
  return (
    <div className="w-full cursor-pointer rounded-xl border bg-base-100 p-4 transition hover:-translate-y-1 hover:shadow-md lg:w-5/12">
      <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
        <img
          alt={name}
          className="mb-4 h-48 w-48 flex-shrink-0 rounded-full object-cover object-center sm:mb-0"
          src={figure}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font text-lg font-medium text-gray-900">
            {name}
          </h2>
          <h3 className="mb-3 text-gray-500">{title}</h3>
          <p className="mb-4 italic">"{quote}"</p>
          <span className="inline-flex">
            <a className="text-gray-500 hover:text-gray-600" href={instagram}>
              <BsInstagram size={20} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team">
      <div className="container mb-20 pt-16">
        <SectionHeader
          title="Our team"
          desc="these are great people on this team, they each have their own skills."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <MemberCard
            name="Muhammad Syahid"
            title="OWNER"
            quote="If we all did the things we are capable of doing, we would literally astound ourselves."
            figure={muhammadSyahidImage}
            instagram="https://www.instagram.com/asahi_hida/"
          />
          <MemberCard
            name="Rahmat Budiannor"
            title="CEO"
            quote="To sit in the shade on a fine day, and look upon verdure is the most perfect refreshment."
            figure={rahmatBudiannorImage}
            instagram="https://www.instagram.com/rahmat710_/"
          />
          <MemberCard
            name="Reza Ariq Luthfiandi"
            title="CFO"
            quote="We're a sentimental people. We like a few kind words better than millions of dollars given in a humiliating way."
            figure={rezaAriqLuthfiandiImage}
            instagram="https://www.instagram.com/rezariq_/"
          />
          <MemberCard
            name="Tri Bagus Saputra"
            title="COO"
            quote="We laugh a lot. That's for sure. Sure beats the alternative, doesn't it?"
            figure={triBagusSaputraImage}
            instagram="https://www.instagram.com/bagus_sputra14/"
          />
          <MemberCard
            name="Leny Febriana"
            title="CMO"
            quote="Whatever is reasonable is true, and whatever is true is reasonable."
            figure={lennyFebrianaImage}
            instagram="https://www.instagram.com/lnyfbrn_/"
          />
          <MemberCard
            name="Rini Agustina"
            title="Co-CMO"
            quote="No matter how rich you become, how famous or powerful, when you die the size of your funeral will still pretty much depend on the weather."
            figure={riniAgustinaImage}
          />
          <MemberCard
            name="Jordi Irawan"
            title="CTO"
            quote="Achievable goals are the first step to self improvement."
            figure={jordiIrawanImage}
          />
        </div>
      </div>
    </section>
  );
}
