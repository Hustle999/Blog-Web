import { HeaderLogo } from "@/components/HeaderLogo";

export const Header = () => {
  return (
    <div className="flex px-[350px] py-8 justify-between items-center">
      <HeaderLogo />
      <div className="flex gap-10">
        <div>Home</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <input
        placeholder="Search"
        className="p-1 rounded-lg bg-gray-200"
        type="text"
      />
    </div>
  );
};
