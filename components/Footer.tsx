const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; 2024 Maxime Boué.</small>
      <p className="text-xs">
        <span className="font-semibold">A propos de ce site ~</span> Construit
        avec React & Next.js (App router & Server Actions), TypeScript,
        Tailwind, Framer Motion, React Email & Resend.{" "}
        <span className="font-medium">Hébergement : Vercel.</span>
      </p>
    </footer>
  );
};

export default Footer;
