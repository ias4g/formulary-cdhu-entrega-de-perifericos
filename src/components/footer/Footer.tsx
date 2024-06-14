export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 mt-4 text-muted-foreground">
      <span className="w-20 h-px bg-zinc-400"/>
      <span>
        Feito com 💕
        <a
          target="_blank"
          className="ml-1 hover:underline"
          href="https://github.com/ias4g"
        >
          Ias4g | Izael Silva
        </a>
      </span>
      <span className="w-20 h-px bg-zinc-400"/>
    </footer>
  )
}