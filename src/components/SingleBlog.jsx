import { Title } from "./Title";

export const SingleBlog = () => {
  return (
    <div className="p-4 flex-col items-center gap-4 shadow-xl rounded-2xl">
      <div className="w-[360px] h-[240px]">
        <img
          src="https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col p-2 gap-5">
        <div className="flex flex-col gap-4">
          <Title />
          <div className="text-6 font-bold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </div>
        </div>
        <div className="flex justify-between">
          <div>Ernie Smith</div>
          <div>August 20, 2022</div>
        </div>
      </div>
    </div>
  );
};
