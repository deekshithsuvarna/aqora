import Link from "next/link";

const portals = [
  {
    title: "Admin Portal",
    description: "Manage employees, attendance, payroll, leaves, and reports.",
    href: "/admin/login",
  },
  {
    title: "Employee Portal",
    description: "Check attendance, salary, leave status, and profile details.",
    href: "/employee/login",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-[90%] max-w-7xl flex-col items-center justify-center py-16">
        <div className="w-full max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Aqora
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Project Tracker App
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A clean internal platform to manage projects, teams, attendance,
            work updates, and operational tracking from one place.
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {portals.map((portal) => (
            <Link
              key={portal.title}
              href={portal.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex h-full flex-col">
                <h2 className="text-2xl font-semibold">{portal.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {portal.description}
                </p>

                <span className="mt-8 inline-flex items-center text-sm font-medium text-cyan-400">
                  Continue
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}