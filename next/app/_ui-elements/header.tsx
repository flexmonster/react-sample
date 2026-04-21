import Image from "next/image";

export default function Header() {
  return (
    <header className="mainheader fixed-head">
      <nav className="mainnav">
        <a
          href="https://prerelease.flexmonster.com/?r=rm_next_30"
          target="blank">
          <Image
            src="https://prerelease.flexmonster.com/logo.svg"
            alt="Flexmonster logo"
            className="logo"
            width={100}
            height={100}
          />
        </a>
        <ul>
          <li>
            <a
              href="https://prerelease.flexmonster.com/doc/react/intro/?r=rm_next_30"
              target="blank">
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://prerelease.flexmonster.com/api-reference/intro?r=rm_next_30"
              target="blank">
              API reference
            </a>
          </li>
          <li>
            <a
              href="https://prerelease.flexmonster.com/roadmap?r=rm_next_30#current"
              target="blank">
              Roadmap
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
