import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import WeijieModal from './WeijieModal'

describe('WeijieModal', () => {
  afterEach(() => {
    cleanup()
    document.body.style.overflow = 'unset'
  })

  it('renders when isOpen is true', () => {
    render(
      <WeijieModal isOpen={true} onClose={vi.fn()} title="Test Modal">
        <p>Modal content</p>
      </WeijieModal>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(
      <WeijieModal isOpen={false} onClose={vi.fn()} title="Test Modal">
        <p>Modal content</p>
      </WeijieModal>
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const { rerender } = render(
      <WeijieModal isOpen={true} onClose={vi.fn()} variant="danger">
        Content
      </WeijieModal>
    )
    expect(screen.getByRole('dialog').firstChild).toHaveClass('border-danger')

    rerender(
      <WeijieModal isOpen={true} onClose={vi.fn()} variant="success">
        Content
      </WeijieModal>
    )
    expect(screen.getByRole('dialog').firstChild).toHaveClass('border-success')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(
      <WeijieModal isOpen={true} onClose={vi.fn()} size="sm">
        Content
      </WeijieModal>
    )
    expect(screen.getByRole('dialog').firstChild).toHaveClass('max-w-sm')

    rerender(
      <WeijieModal isOpen={true} onClose={vi.fn()} size="lg">
        Content
      </WeijieModal>
    )
    expect(screen.getByRole('dialog').firstChild).toHaveClass('max-w-2xl')
  })

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(
      <WeijieModal isOpen={true} onClose={handleClose} title="Test Modal">
        Content
      </WeijieModal>
    )

    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn()
    render(
      <WeijieModal isOpen={true} onClose={handleClose}>
        Content
      </WeijieModal>
    )

    fireEvent.click(screen.getByRole('dialog'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn()
    render(
      <WeijieModal isOpen={true} onClose={handleClose}>
        Content
      </WeijieModal>
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when disabled', () => {
    const handleClose = vi.fn()
    render(
      <WeijieModal isOpen={true} onClose={handleClose} title="Test Modal" disabled>
        Content
      </WeijieModal>
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('does not show close button when disabled', () => {
    render(
      <WeijieModal isOpen={true} onClose={vi.fn()} title="Test Modal" disabled>
        Content
      </WeijieModal>
    )

    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(
      <WeijieModal
        isOpen={true}
        onClose={vi.fn()}
        footer={<button>Confirm</button>}
      >
        Content
      </WeijieModal>
    )

    expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <WeijieModal isOpen={true} onClose={vi.fn()} className="custom-class">
        Content
      </WeijieModal>
    )

    expect(screen.getByRole('dialog').firstChild).toHaveClass('custom-class')
  })

  it('sets body overflow to hidden when open', () => {
    render(
      <WeijieModal isOpen={true} onClose={vi.fn()}>
        Content
      </WeijieModal>
    )

    expect(document.body.style.overflow).toBe('hidden')
  })
})
