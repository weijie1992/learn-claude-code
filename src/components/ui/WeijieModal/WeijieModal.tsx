import React, { useEffect } from 'react';

export interface WeijieModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  footer?: React.ReactNode;
  className?: string;
}

const WeijieModal: React.FC<WeijieModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  footer,
  className = ''
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !disabled) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, disabled]);

  if (!isOpen) return null;

  const variantStyles = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    danger: 'border-danger',
    warning: 'border-warning'
  };

  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl'
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !disabled) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className={`bg-surface rounded-lg shadow-2xl w-full ${
          sizeStyles[size]
        } border-t-[6px] ${variantStyles[variant]} transform transition-all ${
          disabled ? 'opacity-60' : ''
        } ${className}`}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2
              id="modal-title"
              className="text-2xl font-semibold text-foreground"
            >
              {title}
            </h2>
            {!disabled && (
              <button
                onClick={onClose}
                className="text-muted hover:text-foreground transition-colors p-1 rounded-md hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="p-6 text-foreground max-h-[60vh] overflow-y-auto">
          {children}
        </div>

        {footer && (
          <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-background rounded-b-lg">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeijieModal;
