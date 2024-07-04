import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-slate-950 p-20 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <img className="max-w-80 rounded-full" src="body.jpeg" alt="image" />
        <h1 className="uppercase font-semibold mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          SWOLE<span className="text-blue-400 ">NORMOUS</span>
        </h1>
        <p className="text-sm md:text-base font-light">
          A haven for aspiring colossal units.
        </p>
      </div>
      <div className="h-8"></div>
      <Button
        func={() => {
          window.open(
            "https://www.linkedin.com/in/subhajit-sarkar-dev/",
            "_blank"
          );
        }}
        text={"About the developer"}
      />
    </footer>
  );
}
