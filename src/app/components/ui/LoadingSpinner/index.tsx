export type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10'
} as const

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-gray-300 border-t-black ${sizeMap[size]} ${className}`} />
  )
}
