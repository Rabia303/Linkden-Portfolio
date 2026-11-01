import { CONTACT } from "..";
import { FaEnvelope, FaLinkedin, FaKaggle } from "react-icons/fa";

const LINKS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rabia-imtiaz/" },
  { icon: FaKaggle, label: "Kaggle", href: "https://www.kaggle.com/rabiaaaimtiaz" },
];

const Contact = () => {
  return (
    <div className="py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 px-8 py-12 md:px-14">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-96 -translate-y-1/2 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">Contact</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Let's build something</h2>
            <p className="text-neutral-400">
              Open to AI and full-stack roles, collaborations, and interesting problems. The fastest way to reach me is email.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-4 md:items-end">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-3 font-medium text-white shadow-[0_0_30px_-6px_rgba(168,85,247,0.7)] transition hover:bg-purple-500"
            >
              <FaEnvelope /> Email me
            </a>
            <p className="text-sm text-neutral-500">{CONTACT.email}</p>
            <div className="flex gap-3">
              {LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300 transition hover:border-purple-500 hover:text-white"
                >
                  <Icon className="text-lg" /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Rabia Imtiaz
      </p>
    </div>
  );
};

export default Contact;
