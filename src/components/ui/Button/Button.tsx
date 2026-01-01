interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses =
    'px-8 py-4 rounded-xl font-semibold cursor-pointer transition-all duration-200 outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md';

  const variantClasses = {
    primary: 'text-white hover:brightness-110 focus:ring-[#5B9BD5]/50',
    secondary:
      'text-white dark:text-black hover:brightness-110 focus:ring-secondary/50',
    success: 'text-white hover:brightness-110 focus:ring-success/50',
    warning: 'text-white hover:brightness-110 focus:ring-warning/50',
    danger: 'text-white hover:brightness-110 focus:ring-danger/50',
    black: 'text-white hover:brightness-125 focus:ring-black/50',
    white:
      'text-black hover:brightness-95 focus:ring-white/50 border border-gray-200'
  };

  const gradientStyles = {
    primary: {
      background: 'linear-gradient(135deg, #6BA3E0 0%, #2E5C8A 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    },
    secondary: {
      background:
        'linear-gradient(135deg, var(--color-secondary) 0%, color-mix(in srgb, var(--color-secondary) 50%, black) 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    },
    success: {
      background: 'linear-gradient(135deg, #34D399 0%, #047857 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    },
    warning: {
      background: 'linear-gradient(135deg, #FBBF24 0%, #B45309 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    },
    danger: {
      background: 'linear-gradient(135deg, #F87171 0%, #991B1B 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    },
    black: {
      background: 'linear-gradient(135deg, #4B5563 0%, #000000 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    },
    white: {
      background: 'linear-gradient(135deg, #ffffff 0%, #D1D5DB 100%)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
      borderTop: '1px solid rgba(255, 255, 255, 0.5)'
    }
  };

  const buttonClass = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={gradientStyles[variant]}
    >
      {children}
    </button>
  );
}

export default Button;
