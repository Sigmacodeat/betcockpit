type ErrorMessageProps = {
  title?: string
  message: string
  className?: string
}

export function ErrorMessage({ title = 'Fehler', message, className = '' }: ErrorMessageProps) {
  return (
    <div className={`rounded-md border border-red-200 bg-red-50 p-4 text-red-700 ${className}`}>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm">{message}</div>
    </div>
  )
}
