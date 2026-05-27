export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full py-8 px-6 md:px-12 lg:px-20 border-t"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="editorial-label"
          style={{ fontSize: "0.625rem" }}
        >
          © {currentYear} Mariana Páscoa. Todos os direitos reservados.
        </p>

        <p
          className="editorial-label"
          style={{ fontSize: "0.625rem", color: "var(--color-text-muted)" }}
        >
          Strategic Branding & Content
        </p>
      </div>
    </footer>
  );
}
