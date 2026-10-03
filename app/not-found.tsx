import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="shell flex min-h-screen flex-col justify-center py-16">
        <p className="eyebrow">Page not found</p>
        <h1 className="section-title max-w-[680px]">This page is not available.</h1>
        <p className="section-copy">
          The link may be out of date, or the page may have moved. Return home to continue.
        </p>
        <Link href="/" className="button button-primary mt-8 w-fit">
          Back to home
        </Link>
      </div>
    </main>
  )
}
