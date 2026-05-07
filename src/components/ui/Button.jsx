function Button({ variant = 'primary', href, onClick, children, className = '' }) {
  const Tag = href ? 'a' : 'button'
  const base = 'px-5 py-2 rounded font-semibold text-sm transition-all hover:opacity-80 hover:-translate-y-1 cursor-pointer'
  const variants = {
    primary: 'bg-portfolio-accent-dark text-portfolio-cream',
    secundairy:   'bg-portfolio-cream text-portfolio-accent-dark',
  }
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 ${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Button
