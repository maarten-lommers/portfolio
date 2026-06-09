import { Link } from 'react-router-dom'

function Button({ variant = 'primary', href, target, onClick, children, className = '' }) {
  const base = 'px-5 py-2 rounded font-semibold text-sm transition-all hover:opacity-80 hover:-translate-y-1 cursor-pointer'
  const variants = {
    primary: 'bg-portfolio-accent-dark text-portfolio-cream',
    secundairy: 'bg-portfolio-cream text-portfolio-accent-dark',
  }
  const classes = `flex items-center gap-2 ${base} ${variants[variant] ?? variants.primary} ${className}`

  if (href?.startsWith('/') && !/\.\w+$/.test(href)) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  const Tag = href ? 'a' : 'button'
  return (
    <Tag href={href} target={target} onClick={onClick} className={classes}>
      {children}
    </Tag>
  )
}

export default Button
