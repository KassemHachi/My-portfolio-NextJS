import TopBarLogo from "./TopBarLogo";
import TopBarMenu from "./TopBarMenu";
export default function TopBar() {
  return (
    <div className="bg-gray-800 text-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center px-10 md:px-24 items-center py-4">
        <TopBarLogo />
        <TopBarMenu />
      </div>
    </div>
  );
}
