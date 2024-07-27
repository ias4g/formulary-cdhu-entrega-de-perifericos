export function Footer() {
  return (
    <footer className="flex items-center justify-center  mt-4 text-muted-foreground">
      <span className="flex-1 h-px bg-zinc-400" />
      <div className="flex flex-col px-6 py-2 items-center justify-center border border-zinc-400 rounded-full">
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
        <span className="text-xs">v1.05</span>
      </div>
      <span className="flex-1 h-px bg-zinc-400" />
    </footer>
  )
}