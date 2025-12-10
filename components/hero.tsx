import Image from "next/image";

const profile = {
  name: "H Canada",
  location: "Cebu, Philippines",

  roles: ["Frontend Developer"],

  experience: {
    internship: "1 year",
    professional: "0",
  },

  stack: {
    frontend: ["TypeScript", "Next.js", "React", "JavaScript", "Tailwind"],
    backend: ["Node.js", "REST API", "ASP.NET Core"],
    database: ["Supabase", "PostgreSQL", "MSSQL"],
  },

  meta: {
    availableForFreelance: true,
  },
};
// mx-auto w-full max-w-[1280px] 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-24 md:mt-28 lg:mt-32 2xl:mt-36 flex flex-col lg:flex-row gap-16 scroll-mt-60
export const Hero = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 md:mt-28 lg:mt-32 2xl:mt-36 flex flex-col md:flex-row gap-16 scroll-mt-60">
      <section className="flex-1 border">
        <div className="flex justify-between items-center border-b space-x-5 py-2 px-4 md:py-4 md:px-8">
          <div className="flex space-x-2 items-center">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-orange-500"></div>
            <div className="size-3 rounded-full bg-green-600"></div>
          </div>
          <div className="text-gray-400">profile.js</div>
        </div>

        <code className="text-pink-600 font-semibold">
          <div className="p-4">
            <div>
              const <span className="text-violet-700">profile</span> ={" "}
              <span className="text-gray-400"> {`{`}</span>
            </div>
            <p className="text-blue-900 dark:text-white pl-2 md:pl-6">
              name:{" "}
              <span className="text-green-700 dark:text-yellow-200 ">
                {`"${profile.name}"`}
                <span className="text-blue-900 dark:text-white">{`,`}</span>
              </span>
            </p>
            <p className="text-blue-900 dark:text-white pl-2 md:pl-6">
              role:{" "}
              <span className="text-green-700 dark:text-yellow-200">
                {`"Frontend Developer"`}
                <span className="text-blue-900 dark:text-white">{`,`}</span>
              </span>
            </p>
            <p className="text-blue-900 dark:text-white pl-2 md:pl-6">
              experience: <span className=""> {`{`}</span>
              {Object.entries(profile.experience).map(([key, value]) => (
                <span key={key} className="pl-4 md:pl-6 block">
                  <span>{`${key}: `}</span>
                  <span className="text-green-700 dark:text-yellow-200">
                    {`"${value}"`}
                  </span>
                  <span>{`,`}</span>
                </span>
              ))}
              <span className=""> {`},`}</span>
            </p>
            <p className="text-blue-900 dark:text-white pl-2 md:pl-6">
              location:{" "}
              <span className="text-green-700 dark:text-yellow-200">
                {`"${profile.location}"`}
              </span>
              <span>{`,`}</span>
            </p>
            <p className="text-blue-900 dark:text-white pl-2 md:pl-6">
              stack:<span> {`{`}</span>
              {Object.entries(profile.stack).map(([key, value]) => (
                <span className="pl-4 md:pl-6 block" key={key}>
                  <span>{`${key}: `}</span> <span>{`[`}</span>
                  <span className="text-green-700 dark:text-yellow-200">
                    {`"${value.join(`", "`)}`}
                  </span>
                  <span className="text-green-700 dark:text-yellow-200">
                    {`"`}
                  </span>
                  <span>{`],`}</span>
                </span>
              ))}
              <span className="block ">{`},`}</span>
            </p>
            <div>
              <span className="text-gray-400"> {`};`}</span>
            </div>
          </div>
        </code>
      </section>
      <section className="flex-1 flex justify-center">
        <Image
          width="450"
          height="450"
          src={"/curtin.jpeg"}
          alt="Profile"
          className="w-full object-cover"
        />
      </section>
    </div>
  );
};
