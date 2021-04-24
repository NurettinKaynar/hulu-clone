import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="EV" Icon={HomeIcon} />
        <HeaderItem title="TRENDLER" Icon={LightningBoltIcon} />
        <HeaderItem title="ONAYLANANLAR" Icon={BadgeCheckIcon} />
        <HeaderItem title="KOLEKSİYONLAR" Icon={CollectionIcon} />
        <HeaderItem title="ARA" Icon={SearchIcon} />
        <HeaderItem title="HESAP" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
