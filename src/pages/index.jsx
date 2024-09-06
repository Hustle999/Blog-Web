import { Blogs } from "@/components/details/Blogs";
import { Footer } from "@/components/Footer";
import { Index } from "@/components/Index";
import { ContactWeb } from "@/components/pages/ContactWeb";
import { Postview } from "@/components/Postview";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/sections/Header";
import { SingleBlog } from "@/components/SingleBlog";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-12 py-12 px-[350px]">
        <div className="text-6 font-extrabold">All Blogs Post</div>
        <div className="grid grid-cols-3 gap-5">
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
        </div>
        <div className="flex justify-center">
          <div className="border-[1px] w-max px-5 py-4 shadow-md rounded-md">
            Load more
          </div>
        </div>
      </div>
      <Postview />

      <Footer />
    </div>
  );
}
