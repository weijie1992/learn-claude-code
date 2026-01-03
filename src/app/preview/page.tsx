"use client";
import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import WeijieModal from "@/components/ui/WeijieModal/WeijieModal";

export default function Preview() {
  const [primaryModalOpen, setPrimaryModalOpen] = useState(false);
  const [secondaryModalOpen, setSecondaryModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);
  const [disabledModalOpen, setDisabledModalOpen] = useState(false);
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
      <section>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Typography & Theme Showcase</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem' }}>
          This page demonstrates our custom theme with beautiful typography pairing. Headings use the elegant Playfair Display serif font, while body text uses the clean and modern Rubik sans-serif font.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Design System Colors</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px' }}>
          Our theme features a purple primary color with carefully chosen complementary colors for success, warning, and danger states. The system automatically adapts between light and dark modes.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Components</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Our button components showcase the theme colors in action with hover effects and focus states.
        </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" onClick={() => console.log('Primary clicked')}>
          Primary Button
        </Button>
        
        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary Button
        </Button>
        
        <Button variant="success" onClick={() => console.log('Success clicked')}>
          Success Button
        </Button>
        
        <Button variant="warning" onClick={() => console.log('Warning clicked')}>
          Warning Button
        </Button>
        
        <Button variant="danger" onClick={() => console.log('Danger clicked')}>
          Danger Button
        </Button>

        <Button variant="black" onClick={() => console.log('Black clicked')}>
          Black Button
        </Button>

        <Button variant="white" onClick={() => console.log('White clicked')}>
          White Button
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled States</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        All button variants maintain consistent styling when disabled, with reduced opacity for clear visual feedback.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        
        <Button variant="success" disabled>
          Success Disabled
        </Button>
        
        <Button variant="warning" disabled>
          Warning Disabled
        </Button>
        
        <Button variant="danger" disabled>
          Danger Disabled
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        Real-world button implementations showing different types and interactive behaviors.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" type="submit">
          Submit Form
        </Button>
        
        <Button variant="secondary" type="reset">
          Reset Form
        </Button>
        
        <Button variant="success" onClick={() => alert('Changes saved!')}>
          Save Changes
        </Button>
        
        <Button variant="warning" onClick={() => confirm('Are you sure you want to proceed?')}>
          Proceed with Caution
        </Button>
        
        <Button variant="danger" onClick={() => confirm('This action cannot be undone. Continue?')}>
          Delete Account
        </Button>
      </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Typography Hierarchy</h2>
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Main Heading (H1)</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Section Heading (H2)</h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Subsection Heading (H3)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is regular paragraph text using Rubik. It's clean, readable, and pairs beautifully with the Playfair Display headings. The contrast between the geometric sans-serif and elegant serif creates visual interest while maintaining excellent readability.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            This is smaller text in muted color, perfect for captions or secondary information.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>WeijieModal Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          A clean and modern modal component with multiple variants, sizes, and features including backdrop click, ESC key support, and disabled states.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modal Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setPrimaryModalOpen(true)}>
            Primary Modal
          </Button>
          <Button variant="secondary" onClick={() => setSecondaryModalOpen(true)}>
            Secondary Modal
          </Button>
          <Button variant="success" onClick={() => setSuccessModalOpen(true)}>
            Success Modal
          </Button>
          <Button variant="warning" onClick={() => setWarningModalOpen(true)}>
            Warning Modal
          </Button>
          <Button variant="danger" onClick={() => setDangerModalOpen(true)}>
            Danger Modal
          </Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modal Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setSmallModalOpen(true)}>
            Small Modal
          </Button>
          <Button variant="primary" onClick={() => setLargeModalOpen(true)}>
            Large Modal
          </Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled State</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => setDisabledModalOpen(true)}>
            Disabled Modal
          </Button>
        </div>

        {/* Modal instances */}
        <WeijieModal
          isOpen={primaryModalOpen}
          onClose={() => setPrimaryModalOpen(false)}
          title="Primary Modal"
          variant="primary"
          footer={
            <>
              <Button variant="secondary" onClick={() => setPrimaryModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setPrimaryModalOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>This is a primary variant modal with a clean, modern design. It features a purple accent border and includes both a title and footer with action buttons.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={secondaryModalOpen}
          onClose={() => setSecondaryModalOpen(false)}
          title="Secondary Modal"
          variant="secondary"
        >
          <p>This is a secondary variant modal. Notice the different border color that matches our theme's secondary color.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
          title="Success!"
          variant="success"
          footer={
            <Button variant="success" onClick={() => setSuccessModalOpen(false)}>
              Great!
            </Button>
          }
        >
          <p>Your action was completed successfully! This modal uses the success variant with a green accent border.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={warningModalOpen}
          onClose={() => setWarningModalOpen(false)}
          title="Warning"
          variant="warning"
          footer={
            <>
              <Button variant="secondary" onClick={() => setWarningModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="warning" onClick={() => setWarningModalOpen(false)}>
                Proceed
              </Button>
            </>
          }
        >
          <p>Please review this warning carefully before proceeding. This modal uses the warning variant with an orange accent border.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={dangerModalOpen}
          onClose={() => setDangerModalOpen(false)}
          title="Danger Zone"
          variant="danger"
          footer={
            <>
              <Button variant="secondary" onClick={() => setDangerModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setDangerModalOpen(false)}>
                Delete
              </Button>
            </>
          }
        >
          <p>This action is destructive and cannot be undone. This modal uses the danger variant with a red accent border to indicate the severity of the action.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={smallModalOpen}
          onClose={() => setSmallModalOpen(false)}
          title="Small Modal"
          size="sm"
        >
          <p>This is a small modal, perfect for quick confirmations or brief messages.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={largeModalOpen}
          onClose={() => setLargeModalOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <p>This is a large modal with more space for content. It's ideal for forms, detailed information, or complex interactions.</p>
          <p style={{ marginTop: '1rem' }}>You can add multiple paragraphs and the modal will scroll if the content exceeds the maximum height.</p>
          <p style={{ marginTop: '1rem' }}>The modal supports backdrop clicks and ESC key to close, making it easy for users to dismiss when needed.</p>
        </WeijieModal>

        <WeijieModal
          isOpen={disabledModalOpen}
          onClose={() => setDisabledModalOpen(false)}
          title="Disabled Modal"
          disabled
        >
          <p>This modal is in a disabled state. Notice that the close button is hidden and clicking the backdrop or pressing ESC won't close it.</p>
          <p style={{ marginTop: '1rem' }}>This is useful for preventing users from dismissing important dialogs or when processing an action.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Button variant="primary" onClick={() => setDisabledModalOpen(false)}>
              Force Close
            </Button>
          </div>
        </WeijieModal>
      </section>
    </div>
  );
}