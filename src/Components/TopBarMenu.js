import TopBarMenuItem from "./TopBarMenuItem";
export default function TopBarMenu() {
  return (
    <div className="md:col-span-2">
      <ul className="pt-6 md:pt-0">
        <TopBarMenuItem href="#contact" item="Contact" />
        <TopBarMenuItem href="#projects" item="Projects" />
        <TopBarMenuItem href="#about" item="About" />
        <TopBarMenuItem href="/" item="Home" />
      </ul>
    </div>
  );
}
