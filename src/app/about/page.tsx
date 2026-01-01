"use client";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

export default function AboutPage() {
  const techStack = [
    { name: "Next.js 15", gradient: "linear-gradient(135deg, var(--info) 0%, var(--primary) 100%)" },
    { name: "React 19", gradient: "linear-gradient(135deg, var(--info) 0%, var(--primary) 100%)" },
    { name: "TypeScript", gradient: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)" },
    { name: "Tailwind v4", gradient: "linear-gradient(135deg, var(--success) 0%, var(--info) 100%)" },
    { name: "Hygraph CMS", gradient: "linear-gradient(135deg, var(--warning) 0%, var(--danger) 100%)" },
    { name: "GraphQL", gradient: "linear-gradient(135deg, var(--warning) 0%, var(--danger) 100%)" },
    { name: "DOMPurify", gradient: "linear-gradient(135deg, var(--danger) 0%, var(--warning) 100%)" },
    { name: "Vitest", gradient: "linear-gradient(135deg, var(--success) 0%, var(--primary) 100%)" },
  ];

  const features = [
    {
      icon: "🚀",
      title: "Modern Tech Stack",
      description: "Next.js 15 with React 19 and Turbopack for lightning-fast development"
    },
    {
      icon: "🌓",
      title: "Dark Mode Support",
      description: "Seamless theme switching with CSS variables and persistent preferences"
    },
    {
      icon: "📊",
      title: "GraphQL CMS",
      description: "Content powered by Hygraph with server-side rendering and revalidation"
    },
    {
      icon: "🛡️",
      title: "Type Safety",
      description: "End-to-end TypeScript for reliable, maintainable code"
    },
    {
      icon: "✅",
      title: "Testing Ready",
      description: "Vitest integration for confident component development"
    },
  ];

  const learningObjectives = [
    "Master Next.js 15 App Router patterns",
    "Implement custom theme systems with CSS variables",
    "Work with GraphQL APIs and CMS integration",
    "Build type-safe React applications with TypeScript",
    "Practice component testing with Vitest",
    "Develop modern web apps with Claude Code assistance"
  ];

  return (
    <div style={{
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      alignItems: 'center',
      minHeight: '100vh',
    }}>

      {/* Section 1: Project Overview */}
      <section style={{
        padding: '3rem',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        maxWidth: '700px',
        width: '100%',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, var(--highlight) 0%, var(--warning) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          About Shinobi
        </h1>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'var(--background)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        }}>
          Shinobi is a modern blog application built as a hands-on learning project with Claude Code.
          It showcases contemporary web development practices using Next.js 15, React 19, and a custom
          theming system designed for developers who value both aesthetics and functionality.
        </p>
      </section>

      {/* Section 2: Tech Stack Showcase */}
      <section style={{
        padding: '2.5rem',
        borderRadius: '16px',
        border: '3px solid transparent',
        background: 'linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, var(--info) 0%, var(--success) 50%, var(--warning) 100%) border-box',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        width: '100%',
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, var(--info) 0%, var(--success) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Tech Stack
        </h2>
        <p style={{
          fontSize: '1rem',
          color: 'var(--muted)',
          marginBottom: '2rem',
        }}>
          Built with cutting-edge technologies and best practices
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
        }}>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '0.9rem',
                color: 'white',
                background: tech.gradient,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Key Features */}
      <section style={{
        padding: '2.5rem',
        borderRadius: '16px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        maxWidth: '700px',
        width: '100%',
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          color: 'var(--foreground)',
        }}>
          Key Features
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: index < features.length - 1 ? '1.5rem' : '0',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>{feature.icon}</span>
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '0.25rem',
                color: 'var(--foreground)',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--muted)',
                margin: 0,
              }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Section 4: Learning Objectives */}
      <section style={{
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid var(--border)',
        background: 'var(--surface)',
        maxWidth: '650px',
        width: '100%',
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          color: 'var(--foreground)',
        }}>
          Learning Objectives
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          {learningObjectives.map((objective, index) => (
            <li
              key={index}
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--foreground)',
                marginBottom: index < learningObjectives.length - 1 ? '0.75rem' : '0',
                paddingLeft: '1.5rem',
                position: 'relative',
              }}
            >
              <span style={{
                position: 'absolute',
                left: '0',
                color: 'var(--primary)',
                fontWeight: '600',
              }}>
                •
              </span>
              {objective}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
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
  );
}
