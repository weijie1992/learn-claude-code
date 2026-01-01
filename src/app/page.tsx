"use client";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div style={{
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <section style={{
        padding: '3rem',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 1rem 0',
          background: 'linear-gradient(135deg, var(--highlight) 0%, var(--warning) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Shinobi
        </h1>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginBottom: '0',
          color: 'var(--background)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        }}>
          Welcome to Shinobi. The blog for web developers and ninjas.
        </p>
      </section>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '2.5rem',
        borderRadius: '16px',
        border: '3px solid transparent',
        background: 'linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, var(--info) 0%, var(--success) 50%, var(--warning) 100%) border-box',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          margin: 0,
          background: 'linear-gradient(135deg, var(--info) 0%, var(--success) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Explore
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/blog">
            <Button variant="primary" className="text-lg px-8 py-4">
              Visit Blog
            </Button>
          </Link>

          <Link href="/preview">
            <Button variant="secondary" className="text-lg px-8 py-4">
              Preview Components
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
